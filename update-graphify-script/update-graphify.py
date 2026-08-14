from __future__ import annotations

import json
import sys
from pathlib import Path

from graphify.analyze import god_nodes, suggest_questions, surprising_connections
from graphify.build import build_from_json
from graphify.cluster import cluster, score_all
from graphify.detect import detect
from graphify.export import to_canvas, to_html, to_json, to_obsidian
from graphify.extract import collect_files, extract
from graphify.report import generate


def write_text(path: Path, text: str) -> None:
    path.write_text(text, encoding="utf-8")


def patch_small_nodes(html_path: Path) -> None:
    text = html_path.read_text(encoding="utf-8")
    text = text.replace("size = 10 + 30 * (deg / max_deg)", "size = 6 + 10 * (deg / max_deg)")
    text = text.replace("value: deg,", "value: Math.min(deg, 6),")
    text = text.replace(
        "nodes: { shape: 'dot', borderWidth: 1.5 }",
        "nodes: { shape: 'dot', borderWidth: 1.2, scaling: { min: 6, max: 16 } }",
    )
    for original, capped in (("40.0", "16.0"), ("30.0", "14.0"), ("20.0", "12.0"), ("10.0", "8.0")):
        text = text.replace(f'"size": {original}', f'"size": {capped}')
    write_text(html_path, text)


def main() -> int:
    root = Path(sys.argv[1] if len(sys.argv) > 1 else ".").resolve()
    if root.name == "documentations":
        print("Skipping documentations repo.")
        return 0

    detection = detect(root)
    code_files: list[Path] = []
    for item in detection.get("files", {}).get("code", []):
        path = Path(item)
        code_files.extend(collect_files(path) if path.is_dir() else [path])

    out = root / "graphify-out"
    out.mkdir(exist_ok=True)

    if not code_files:
        empty = {"nodes": [], "edges": [], "directed": False, "multigraph": False, "graph": {}}
        write_text(out / "graph.json", json.dumps(empty, indent=2))
        write_text(
            out / "GRAPH_REPORT.md",
            f"# Graphify Report: {root.name}\n\n"
            "Graphify is set up for this repo, but no supported code files were found "
            "for deterministic AST extraction.\n\n"
            f"Detected files: {detection.get('total_files', 0)}.\n",
        )
        print(f"{root.name}: no supported code files; wrote graphify-out status report")
        return 0

    extraction = extract(code_files)
    G = build_from_json(extraction)
    communities = cluster(G)
    cohesion = score_all(G, communities)
    labels = {cid: f"Community {cid}" for cid in communities}
    gods = god_nodes(G)
    surprises = surprising_connections(G, communities)
    questions = suggest_questions(G, communities, labels)

    report = generate(
        G,
        communities,
        cohesion,
        labels,
        gods,
        surprises,
        detection,
        {"input": 0, "output": 0},
        str(root),
        suggested_questions=questions,
    )

    write_text(root / ".graphify_detect.json", json.dumps(detection, indent=2))
    write_text(root / ".graphify_extract.json", json.dumps(extraction, indent=2))
    write_text(out / "GRAPH_REPORT.md", report)
    to_json(G, communities, str(out / "graph.json"))
    to_obsidian(G, communities, str(out / "obsidian"), community_labels=labels, cohesion=cohesion)
    to_canvas(G, communities, str(out / "obsidian" / "graph.canvas"), community_labels=labels)
    to_html(G, communities, str(out / "graph.html"), community_labels=labels)
    patch_small_nodes(out / "graph.html")

    print(f"{root.name}: {G.number_of_nodes()} nodes, {G.number_of_edges()} edges")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
