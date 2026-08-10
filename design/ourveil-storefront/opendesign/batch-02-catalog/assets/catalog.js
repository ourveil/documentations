(() => {
  const screen = document.body.dataset.screen || 'shop';
  const device = document.body.dataset.device || 'desktop';
  const isMobile = device === 'mobile';
  const asset = '../batch-01-homepage/assets/';
  const products = [
    {id:'chiffon-cream',name:'طرحة شيفون بريميوم',material:'شيفون · كريمي ناعم',price:'EGP 680',image:'new-arrivals-cream-mocha.png',position:'pos-left',badge:'جديد',colors:['silk','cream']},
    {id:'modal-mocha',name:'طرحة مودال ناعمة',material:'مودال · موكا',price:'EGP 590',image:'new-arrivals-cream-mocha.png',position:'pos-right',colors:['taupe','brown']},
    {id:'cotton-stone',name:'طرحة قطن يومية',material:'قطن · رمادي حجري',price:'EGP 520',image:'new-arrivals-stone-satin.png',position:'pos-left',colors:['stone','cream']},
    {id:'satin-espresso',name:'طرحة ساتان هادئة',material:'ساتان · إسبريسو',price:'EGP 720',image:'new-arrivals-stone-satin.png',position:'pos-right',badge:'غير متوفر',badgeStyle:'quiet',stock:'غير متوفر حاليًا',colors:['espresso']},
    {id:'bonnet-cotton',name:'بونيه داخلي قطن',material:'قطن · كريمي',price:'EGP 290',image:'category-triptych.png',position:'pos-mid',colors:['cream','taupe']},
    {id:'pins-elegant',name:'دبابيس حجاب أنيقة',material:'طقم إكسسوارات · ذهبي هادئ',price:'EGP 180',image:'category-triptych.png',position:'pos-right',colors:['silk','brown']},
    {id:'chiffon-beige',name:'طرحة شيفون بيج حريري',material:'شيفون · بيج',price:'EGP 680',image:'category-triptych.png',position:'pos-left',colors:['silk','taupe']},
    {id:'modal-warm',name:'طرحة مودال بلون دافئ',material:'مودال · بني هادئ',price:'EGP 610',image:'homepage-hero-editorial.png',position:'pos-right',colors:['taupe','espresso']},
    {id:'chiffon-stone',name:'طرحة شيفون رمادي حجري',material:'شيفون · رمادي حجري',price:'EGP 660',image:'new-arrivals-stone-satin.png',position:'pos-left',colors:['stone','cream']},
    {id:'chiffon-mocha',name:'طرحة شيفون موكا',material:'شيفون · موكا',price:'EGP 680',image:'new-arrivals-cream-mocha.png',position:'pos-right',colors:['taupe','brown']},
    {id:'chiffon-black',name:'طرحة شيفون أسود دافئ',material:'شيفون · أسود دافئ',price:'EGP 700',image:'new-arrivals-stone-satin.png',position:'pos-right',colors:['espresso']},
    {id:'chiffon-offwhite',name:'طرحة شيفون أوف وايت',material:'شيفون · أوف وايت',price:'EGP 680',image:'category-triptych.png',position:'pos-left',colors:['cream','silk']}
  ];

  const configs = {
    shop:{title:'كل المنتجات',description:'اكتشفي تشكيلات OURVEIL من الطرح والبونيهات والإكسسوارات.',count:24,crumbs:['الرئيسية','كل المنتجات']},
    category:{title:'الطرح',description:'خامات وألوان هادئة اختيرت لتنسجم مع تفاصيل إطلالتك اليومية.',count:18,crumbs:['الرئيسية','كل المنتجات','الطرح'],category:true},
    search:{title:'نتائج البحث عن',term:'شيفون',description:'نتائج مرتبطة بالخامة والاسم ضمن مجموعة OURVEIL.',count:8,crumbs:['الرئيسية','البحث']},
    empty:{title:'نتائج البحث عن',term:'شيفون رمادي',description:'جرّبي تعديل البحث أو تخفيف الاختيارات المحددة.',count:0,crumbs:['الرئيسية','البحث']},
    loading:{title:'كل المنتجات',description:'اكتشفي تشكيلات OURVEIL من الطرح والبونيهات والإكسسوارات.',count:null,crumbs:['الرئيسية','كل المنتجات']},
    error:{title:'كل المنتجات',description:'اكتشفي تشكيلات OURVEIL من الطرح والبونيهات والإكسسوارات.',count:null,crumbs:['الرئيسية','كل المنتجات']}
  };

  const stateKey = screen.includes('no-results') ? 'empty' : screen.includes('loading') ? 'loading' : screen.includes('error') ? 'error' : screen.includes('category') ? 'category' : screen.includes('search') ? 'search' : 'shop';
  const config = configs[stateKey];
  const initialParams = new URLSearchParams(location.search);
  const filterParamNames = ['category','material','color','size','availability'];
  const urlFilters = filterParamNames.flatMap(name=>initialParams.getAll(name).map(value=>`${name}:${value}`));
  const activeDefaults = urlFilters.length ? urlFilters : stateKey === 'shop' ? ['material:chiffon','color:beige','availability:in-stock'] : stateKey === 'search' ? ['material:chiffon'] : stateKey === 'empty' ? ['material:chiffon','color:stone'] : [];
  const searchTerm = initialParams.get('q') || config.term || '';
  const currentPage = Math.max(1,Math.min(2,Number(initialParams.get('page'))||1));

  const logo = '../assets/ourveil-navbar-light-ui.png';
  const logoDark = '../assets/ourveil-navbar-dark-ui.png';
  const icon = (name, cls='icon') => `<i data-lucide="${name}" class="${cls}" aria-hidden="true"></i>`;
  const labels = {
    'category:scarves':'الطرح','category:bonnets':'البونيهات الداخلية','category:accessories':'الإكسسوارات',
    'material:chiffon':'شيفون','material:modal':'مودال','material:cotton':'قطن','material:satin':'ساتان',
    'color:beige':'بيج','color:cream':'كريمي','color:mocha':'موكا','color:stone':'رمادي حجري','color:black':'أسود دافئ',
    'size:180':'180 × 70','size:200':'200 × 75','availability:in-stock':'متوفر','availability:out':'غير متوفر'
  };
  const tones = {silk:'var(--brand-silk)',cream:'var(--brand-cream)',taupe:'var(--brand-taupe)',brown:'var(--brand-brown)',espresso:'var(--brand-espresso)',stone:'color-mix(in oklch,var(--brand-silk) 55%,var(--brand-espresso))'};

  function header(){
    if(isMobile){
      return `<div class="announcement" data-od-id="announcement-bar-mobile">الشحن متاح للمناطق المحددة داخل مصر</div>
      <header class="site-header" data-od-id="store-header-mobile"><div class="header-row">
        <div class="mobile-header-side"><button class="btn btn-ghost icon-btn" data-open="nav" aria-label="فتح قائمة التنقل" aria-expanded="false" aria-controls="nav-drawer">${icon('menu','icon icon-lg')}</button></div>
        <a href="../batch-01-homepage/homepage-mobile.html" aria-label="OURVEIL الرئيسية"><img class="brand-logo" src="${logo}" alt="OURVEIL"></a>
        <div class="mobile-header-side"><button class="btn btn-ghost icon-btn" data-open="search" aria-label="البحث" aria-expanded="false" aria-controls="search-overlay">${icon('search')}</button><button class="btn btn-ghost icon-btn" data-action="bag" aria-label="حقيبة التسوق">${icon('shopping-bag')}<span class="bag-count">1</span></button></div>
      </div></header>`;
    }
    const shopCurrent = ['shop','loading','error'].includes(stateKey) ? ' aria-current="page"' : '';
    const categoryCurrent = stateKey === 'category' ? ' aria-current="page"' : '';
    return `<div class="announcement" data-od-id="announcement-bar-desktop">الشحن متاح للمناطق المحددة داخل مصر</div>
    <header class="site-header" data-od-id="store-header-desktop"><div class="container header-row">
      <nav class="header-nav" aria-label="التنقل الرئيسي"><a href="shop-all-desktop.html"${shopCurrent}>كل المنتجات</a><a href="category-desktop.html"${categoryCurrent}>الطرح</a><a href="#">الخامات</a><a href="../batch-01-homepage/homepage-desktop.html#story">عن OURVEIL</a></nav>
      <a href="../batch-01-homepage/homepage-desktop.html" aria-label="OURVEIL الرئيسية"><img class="brand-logo" src="${logo}" alt="OURVEIL"></a>
      <div class="header-tools"><button class="btn btn-ghost icon-btn" data-open="search" aria-label="البحث" aria-expanded="false" aria-controls="search-overlay">${icon('search')}</button><button class="btn btn-ghost" aria-label="تغيير اللغة"><span dir="ltr">EN</span></button><button class="btn btn-ghost icon-btn" aria-label="الحساب">${icon('user-round')}</button><button class="btn btn-ghost icon-btn" aria-label="المفضلة">${icon('heart')}</button><button class="btn btn-ghost icon-btn" data-action="bag" aria-label="حقيبة التسوق">${icon('shopping-bag')}<span class="bag-count">1</span></button></div>
    </div></header>`;
  }

  function footer(){
    if(isMobile){
      return `<footer class="footer" data-od-id="store-footer-mobile"><div class="footer-brand"><img class="footer-logo" src="${logoDark}" alt="OURVEIL"><p>تفاصيل هادئة لإطلالة تعيش معك كل يوم.</p></div>
      <details><summary>التسوق</summary><nav aria-label="التسوق"><a href="shop-all-mobile.html">كل المنتجات</a><a href="category-mobile.html">الطرح</a><a href="#">الخامات</a></nav></details>
      <details><summary>المساعدة</summary><nav aria-label="المساعدة"><a href="#">الشحن</a><a href="#">الاستبدال والاسترجاع</a><a href="#">تتبع الطلب</a><a href="#">التواصل</a></nav></details>
      <details><summary>عن OURVEIL</summary><nav aria-label="عن OURVEIL"><a href="#">قصتنا</a><a href="#">الخصوصية</a><a href="#">الشروط</a></nav></details>
      <div class="footer-bottom"><span dir="ltr">© 2026 OURVEIL</span><span>جميع الحقوق محفوظة</span></div></footer>`;
    }
    return `<footer class="footer" data-od-id="store-footer-desktop"><div class="container"><div class="footer-grid"><div class="footer-brand"><img class="footer-logo" src="${logoDark}" alt="OURVEIL"><p>أناقة محتشمة، بحضورك أنتِ.</p></div><nav aria-label="التسوق"><strong>التسوق</strong><a href="shop-all-desktop.html">كل المنتجات</a><a href="category-desktop.html">الطرح</a><a href="#">الإكسسوارات</a></nav><nav aria-label="المساعدة"><strong>المساعدة</strong><a href="#">الشحن</a><a href="#">الاستبدال والاسترجاع</a><a href="#">تتبع الطلب</a></nav><nav aria-label="عن OURVEIL"><strong>عن OURVEIL</strong><a href="#">قصتنا</a><a href="#">التواصل</a><a href="#">الخصوصية</a></nav><nav aria-label="الحساب"><strong>الحساب</strong><a href="#">تسجيل الدخول</a><a href="#">المفضلة</a><a href="#">الشروط</a></nav></div><div class="footer-bottom"><span dir="ltr">© 2026 OURVEIL</span><span dir="ltr">Cairo, Egypt · Arabic / English</span></div></div></footer>`;
  }

  function breadcrumbs(){
    return `<nav class="breadcrumbs" aria-label="مسار الصفحة" data-od-id="breadcrumbs-${device}">${config.crumbs.map((c,i)=>`${i?icon('chevron-left'):''}${i===config.crumbs.length-1?`<strong>${c}</strong>`:`<a href="#">${c}</a>`}`).join('')}</nav>`;
  }

  function pageHead(){
    const safeTerm = searchTerm.replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
    const heading = searchTerm ? `${config.title} <span class="search-term">«${safeTerm}»</span>` : config.title;
    const categoryBlock = config.category ? `<div class="category-intro" data-od-id="category-intro-${device}"><div class="category-copy"><h2>تصفحي حسب الخامة</h2><p>شيفون، مودال، قطن وساتان بدرجات هادئة تسهّل الاختيار والتنسيق.</p></div><img src="${asset}category-triptych.png" alt="إطلالة بطرحة شيفون كريمية"></div>` : '';
    return `<section class="catalog-head" data-od-id="shop-header-${stateKey}-${device}"><div class="container">${breadcrumbs()}<div class="page-heading"><div class="${config.term?'search-heading':''}"><h1>${heading}</h1><p>${config.description}</p></div></div>${categoryBlock}</div></section>`;
  }

  function toolbar(){
    const count = config.count === null ? 'جارٍ التحديث…' : `<strong>${config.count}</strong> منتجًا`;
    return `<div class="catalog-toolbar" data-od-id="catalog-toolbar-${device}"><div class="toolbar-group"><button class="btn btn-outline mobile-filter-trigger" data-open="filters" aria-expanded="false" aria-controls="filter-drawer">${icon('sliders-horizontal')} الفلاتر <span data-filter-count>0</span></button><p class="result-count" role="status" aria-live="polite" data-result-count>${count}</p></div><label class="toolbar-group"><span class="sort-label">الترتيب</span><select class="sort-control" aria-label="ترتيب المنتجات" data-sort><option value="newest">الأحدث</option><option value="best-selling">الأكثر مبيعًا</option><option value="price-asc">السعر: من الأقل إلى الأعلى</option><option value="price-desc">السعر: من الأعلى إلى الأقل</option></select></label></div>`;
  }

  const options = {
    category:[['scarves','الطرح','18'],['bonnets','البونيهات الداخلية','4'],['accessories','الإكسسوارات','2']],
    material:[['chiffon','شيفون','8'],['modal','مودال','6'],['cotton','قطن','5'],['satin','ساتان','3']],
    color:[['beige','بيج','7'],['cream','كريمي','6'],['mocha','موكا','5'],['stone','رمادي حجري','4'],['black','أسود دافئ','2']],
    size:[['180','180 × 70','12'],['200','200 × 75','8']],
    availability:[['in-stock','متوفر','21'],['out','غير متوفر','3']]
  };
  const colorTone = {beige:'var(--brand-silk)',cream:'var(--brand-cream)',mocha:'var(--brand-taupe)',stone:'color-mix(in oklch,var(--brand-silk) 55%,var(--brand-espresso))',black:'var(--brand-espresso)'};

  function choices(group){
    return options[group].map(([value,label])=>{const key=`${group}:${value}`;const checked=activeDefaults.includes(key)?' checked':'';const tone=group==='color'?`<span class="filter-color" style="--tone:${colorTone[value]}"></span>`:'';const dir=group==='size'?' dir="ltr"':'';return `<label class="choice">${tone}<input type="checkbox" name="${group}" value="${value}" data-label="${label}"${checked}><span class="choice-text"><span${dir}>${label}</span></span></label>`}).join('');
  }

  function filterGroups(location){
    const idSuffix = `${location}-${device}`;
    const categoryGroup = stateKey === 'category' ? '' : `<details class="filter-group" open><summary>التصنيف</summary><div class="filter-options" data-od-id="filter-category-${idSuffix}">${choices('category')}</div></details>`;
    return `${categoryGroup}
    <details class="filter-group" open><summary>الخامة</summary><div class="filter-options" data-od-id="filter-material-${idSuffix}">${choices('material')}</div></details>
    <details class="filter-group"${stateKey==='category'?' open':''}><summary>اللون</summary><div class="filter-options" data-od-id="filter-color-${idSuffix}">${choices('color')}</div></details>
    <details class="filter-group"><summary>المقاس</summary><div class="filter-options" data-od-id="filter-size-${idSuffix}">${choices('size')}</div></details>
    <details class="filter-group"><summary>السعر</summary><div class="filter-options"><div class="price-fields"><label><span class="sr-only">أقل سعر</span><input class="price-field" inputmode="numeric" placeholder="EGP 0"></label><label><span class="sr-only">أعلى سعر</span><input class="price-field" inputmode="numeric" placeholder="EGP 900"></label></div></div></details>
    <details class="filter-group"><summary>التوفر</summary><div class="filter-options" data-od-id="filter-availability-${idSuffix}">${choices('availability')}</div></details>`;
  }

  function sidebar(){
    return `<aside class="filter-sidebar" aria-label="تصفية المنتجات" data-od-id="filter-sidebar-desktop"><div class="filter-title"><strong>التصفية</strong><small><span data-filter-count>0</span> مختارة</small></div>${filterGroups('sidebar')}</aside>`;
  }

  function activeFilters(){
    if(!activeDefaults.length) return `<div class="active-filters" data-active-filters hidden></div>`;
    return `<div class="active-filters" data-active-filters data-od-id="active-filter-list-${device}"><span class="active-label">الاختيارات الحالية</span>${activeDefaults.map(key=>`<button class="filter-chip" data-remove-filter="${key}">${labels[key]} ${icon('x','icon')}</button>`).join('')}<button class="clear-filters" data-clear-filters>مسح الكل</button></div>`;
  }

  function productCard(p,index){
    const badge=p.badge?`<span class="product-badge ${p.badgeStyle||''}">${p.badge}</span>`:'';
    const colorName=c=>c==='cream'?'كريمي':c==='taupe'?'موكا':c==='espresso'?'إسبريسو':c==='stone'?'رمادي حجري':c==='brown'?'بني':'بيج حريري';
    const swatches=p.colors.map(c=>`<span class="swatch-mini" style="--tone:${tones[c]}" aria-hidden="true"></span>`).join('');
    const colorSummary=p.colors.map(colorName).join('، ');
    return `<article class="product-card" data-od-id="product-card-${p.id}-${device}"><div class="product-media"><a href="#" class="product-link" aria-label="عرض ${p.name}"><img class="${p.position}" src="${asset}${p.image}" alt="${p.name}"></a><button class="btn icon-btn wishlist" aria-label="إضافة ${p.name} للمفضلة" aria-pressed="false">${icon('heart')}</button>${badge}</div><div class="product-meta"><div class="product-row"><div><a href="#" class="product-link"><h3>${p.name}</h3></a><p class="product-material">${p.material}</p></div><div class="product-swatches"><span class="sr-only">الألوان المتاحة: ${colorSummary}</span>${swatches}<span class="swatch-more" aria-hidden="true">${p.colors.length}</span></div></div><bdi class="product-price" dir="ltr">${p.price}</bdi>${p.stock?`<p class="stock-text">${p.stock}</p>`:''}</div></article>`;
  }

  function pagination(){
    const next=currentPage<2?`<a class="page-btn" href="?page=2" data-page="${currentPage+1}" aria-label="الصفحة التالية">${icon('chevron-left')}</a>`:`<span class="page-btn" aria-label="الصفحة التالية" aria-disabled="true">${icon('chevron-left')}</span>`;
    const previous=currentPage>1?`<a class="page-btn" href="?page=1" data-page="${currentPage-1}" aria-label="الصفحة السابقة">${icon('chevron-right')}</a>`:`<span class="page-btn" aria-label="الصفحة السابقة" aria-disabled="true">${icon('chevron-right')}</span>`;
    return `<nav class="pagination-wrap" aria-label="صفحات المنتجات" data-od-id="catalog-pagination-${device}"><p class="pagination-note">صفحة <span dir="ltr">${currentPage}</span> من <span dir="ltr">2</span></p><div class="pagination">${next}<a class="page-btn" href="?page=1" data-page="1"${currentPage===1?' aria-current="page"':''}>1</a><a class="page-btn" href="?page=2" data-page="2"${currentPage===2?' aria-current="page"':''}>2</a>${previous}</div></nav>`;
  }

  function catalog(){
    const visible = stateKey==='category' ? products.filter(p=>!['bonnet-cotton','pins-elegant'].includes(p.id)) : stateKey==='search' ? products.filter(p=>p.material.includes('شيفون')||p.name.includes('شيفون')) : products;
    const pageProducts=currentPage===2?[...visible].reverse():visible;
    return `<section data-od-id="catalog-results-${stateKey}-${device}"><div class="container">${toolbar()}<div class="catalog-layout">${sidebar()}<div>${activeFilters()}<div class="product-grid" data-product-grid>${pageProducts.map(productCard).join('')}</div>${pagination()}</div></div></div></section>`;
  }

  function skeletons(){
    return Array.from({length:isMobile?6:9},(_,i)=>`<article class="skeleton-card" aria-hidden="true" data-od-id="catalog-skeleton-${i+1}-${device}"><div class="skeleton-media"></div><div class="skeleton-line"></div><div class="skeleton-line short"></div></article>`).join('');
  }

  function stateView(){
    if(stateKey==='loading') return `<section class="state-shell" data-od-id="catalog-loading-${device}"><div class="container">${toolbar()}<div class="state-layout">${sidebar()}<div class="skeleton-grid" role="status" aria-live="polite" aria-label="جارٍ تحميل المنتجات">${skeletons()}</div></div></div></section>`;
    const empty = stateKey==='empty';
    const title = empty?'لم نجد نتائج مطابقة':'تعذر تحميل المنتجات';
    const copy = empty?'لا توجد منتجات مطابقة لهذه الاختيارات. يمكنك تعديل البحث أو إزالة بعض الفلاتر.':'حدثت مشكلة أثناء تحميل الكتالوج. يمكنك المحاولة مرة أخرى مع بقاء التنقل متاحًا.';
    const symbol = empty?'search-x':'triangle-alert';
    const actions = empty?`<a class="btn btn-primary" href="shop-all-${device}.html">العودة إلى كل المنتجات</a><button class="btn btn-outline" data-open="search">تعديل البحث</button><button class="btn btn-ghost" data-clear-filters>مسح الفلاتر</button>`:`<button class="btn btn-primary" data-retry>إعادة المحاولة</button><a class="btn btn-outline" href="../batch-01-homepage/homepage-${device}.html">العودة إلى الرئيسية</a>`;
    return `<section class="state-shell" data-od-id="catalog-${stateKey}-${device}"><div class="container">${toolbar()}${empty?activeFilters():''}<div class="state-content"><div>${icon(symbol,'icon icon-lg')}<h2>${title}</h2><p>${copy}</p><div class="state-actions">${actions}</div></div></div></div></section>`;
  }

  function filterDrawer(){
    return `<div class="backdrop" data-backdrop aria-hidden="true"></div><aside class="drawer filter-drawer" id="filter-drawer" role="dialog" aria-modal="true" aria-labelledby="filter-title" aria-hidden="true" data-od-id="filter-drawer-mobile"><div class="drawer-head"><div><h2 id="filter-title">التصفية</h2><small><span data-drawer-count>0</span> مختارة</small></div><button class="btn btn-ghost icon-btn" data-close aria-label="إغلاق الفلاتر">${icon('x','icon icon-lg')}</button></div><div class="drawer-scroll">${filterGroups('drawer')}</div><div class="drawer-actions"><button class="btn btn-ghost" data-clear-filters>إعادة ضبط</button><button class="btn btn-primary" data-apply-filters>عرض <span data-apply-count>24</span> منتجًا</button></div></aside>`;
  }

  function auxiliaryLayers(){
    return `${filterDrawer()}<aside class="drawer nav-drawer" id="nav-drawer" role="dialog" aria-modal="true" aria-label="قائمة التنقل" aria-hidden="true"><div class="drawer-head"><img class="brand-logo" src="${logo}" alt="OURVEIL"><button class="btn btn-ghost icon-btn" data-close aria-label="إغلاق القائمة">${icon('x')}</button></div><nav><a href="shop-all-mobile.html">كل المنتجات ${icon('arrow-left')}</a><a href="category-mobile.html">الطرح ${icon('arrow-left')}</a><a href="#">الخامات ${icon('arrow-left')}</a><a href="#">عن OURVEIL ${icon('arrow-left')}</a></nav></aside><section class="search-overlay" id="search-overlay" role="dialog" aria-modal="true" aria-labelledby="search-title" aria-hidden="true" data-od-id="search-overlay-${device}"><div class="search-panel"><div class="search-panel-head"><h2 id="search-title">عمّ تبحثين؟</h2><button class="btn btn-ghost icon-btn" data-close aria-label="إغلاق البحث">${icon('x')}</button></div><form data-search-form><label class="sr-only" for="global-search">البحث في المنتجات</label><input class="search-input" id="global-search" type="search" placeholder="طرحة، خامة، لون…"><button class="btn btn-primary" type="submit" style="margin-block-start:16px">عرض النتائج</button></form></div></section><div class="toast" role="status" aria-live="polite" data-toast>تم تحديث الاختيارات</div>`;
  }

  const root = document.getElementById('app');
  root.innerHTML = `<div id="page-shell">${header()}<main>${pageHead()}${['loading','empty','error'].includes(stateKey)?stateView():catalog()}</main>${footer()}</div>${auxiliaryLayers()}`;

  const q=(s,c=document)=>c.querySelector(s), qa=(s,c=document)=>[...c.querySelectorAll(s)];
  let activeLayer=null,lastTrigger=null,toastTimer=null;
  const pageShell=q('#page-shell');
  function showToast(message){const t=q('[data-toast]');t.textContent=message;t.classList.add('open');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('open'),2200)}
  function setBackgroundInert(on){pageShell.inert=on}
  function openLayer(type,trigger){lastTrigger=trigger||q(`[data-open="${type}"]`);activeLayer=type==='filters'?q('#filter-drawer'):type==='nav'?q('#nav-drawer'):q('#search-overlay');activeLayer.classList.add('open');activeLayer.setAttribute('aria-hidden','false');if(type!=='search')q('[data-backdrop]').classList.add('open');lastTrigger?.setAttribute('aria-expanded','true');document.body.classList.add('lock');setBackgroundInert(true);setTimeout(()=>q('input,button,a,summary',activeLayer)?.focus(),20)}
  function closeLayer(){if(!activeLayer)return;activeLayer.classList.remove('open');activeLayer.setAttribute('aria-hidden','true');q('[data-backdrop]').classList.remove('open');lastTrigger?.setAttribute('aria-expanded','false');document.body.classList.remove('lock');setBackgroundInert(false);const restore=lastTrigger;activeLayer=null;restore?.focus()}
  qa('[data-open]').forEach(btn=>btn.addEventListener('click',()=>openLayer(btn.dataset.open,btn)));
  qa('[data-close]').forEach(btn=>btn.addEventListener('click',closeLayer));
  q('[data-backdrop]').addEventListener('click',closeLayer);
  q('#search-overlay').addEventListener('click',e=>{if(e.target===q('#search-overlay'))closeLayer()});
  addEventListener('keydown',e=>{if(e.key==='Escape')closeLayer();if(e.key==='Tab'&&activeLayer){const focusable=qa('button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),summary',activeLayer).filter(el=>el.offsetParent!==null);if(!focusable.length)return;if(e.shiftKey&&document.activeElement===focusable[0]){e.preventDefault();focusable.at(-1).focus()}else if(!e.shiftKey&&document.activeElement===focusable.at(-1)){e.preventDefault();focusable[0].focus()}}});

  function selectedInputs(){return qa('.filter-options input[type=checkbox]').filter(i=>i.checked)}
  function selectedUnique(){const seen=new Map();selectedInputs().forEach(i=>seen.set(`${i.name}:${i.value}`,i));return [...seen.values()]}
  function syncFilterCopies(source){qa(`input[name="${source.name}"][value="${source.value}"]`).forEach(i=>i.checked=source.checked)}
  function countForFilters(){if(stateKey==='empty')return 0;const base=stateKey==='category'?18:stateKey==='search'?12:36;return Math.max(0,base-selectedUnique().length*4)}
  function syncPagination(params){qa('[data-page]').forEach(link=>{const target=new URLSearchParams(params);target.set('page',link.dataset.page);link.href=`?${target.toString()}`})}
  function updateUrl(){const params=new URLSearchParams();if(['search','empty'].includes(stateKey)&&searchTerm)params.set('q',searchTerm);if(stateKey==='category')params.set('category','scarves');selectedUnique().forEach(i=>params.append(i.name,i.value));const sort=q('[data-sort]')?.value;if(sort&&sort!=='newest')params.set('sort',sort);if(currentPage>1)params.set('page',String(currentPage));history.replaceState({},'',`${location.pathname}${params.size?'?'+params.toString():''}`);syncPagination(params)}
  function renderActive(){const selected=selectedUnique(),container=q('[data-active-filters]');if(container){container.hidden=!selected.length;container.innerHTML=selected.length?`<span class="active-label">الاختيارات الحالية</span>${selected.map(i=>`<button class="filter-chip" data-remove-filter="${i.name}:${i.value}">${i.dataset.label} ${icon('x')}</button>`).join('')}<button class="clear-filters" data-clear-filters>مسح الكل</button>`:'';if(window.lucide)lucide.createIcons({attrs:{'stroke-width':1.75}});bindFilterActions(container)}const count=countForFilters();qa('[data-filter-count],[data-drawer-count]').forEach(el=>el.textContent=selected.length);qa('[data-apply-count]').forEach(el=>el.textContent=count);if(config.count!==null&&q('[data-result-count]'))q('[data-result-count]').innerHTML=`<strong>${count}</strong> منتجًا`;updateUrl()}
  function clearFilters(){qa('.filter-options input[type=checkbox]').forEach(i=>i.checked=false);if(stateKey==='empty'){location.href=`shop-all-${device}.html`;return}renderActive();showToast('تم مسح الاختيارات')}
  function bindFilterActions(scope=document){qa('[data-clear-filters]',scope).forEach(btn=>btn.addEventListener('click',clearFilters));qa('[data-remove-filter]',scope).forEach(btn=>btn.addEventListener('click',()=>{const [name,value]=btn.dataset.removeFilter.split(':');qa(`input[name="${name}"][value="${value}"]`).forEach(i=>i.checked=false);renderActive();showToast('تمت إزالة الفلتر')}))}
  if(urlFilters.length){qa('.filter-options input[type=checkbox]').forEach(input=>input.checked=activeDefaults.includes(`${input.name}:${input.value}`))}
  const initialSort=initialParams.get('sort');if(initialSort&&q('[data-sort]'))q('[data-sort]').value=initialSort;
  qa('.filter-options input[type=checkbox]').forEach(input=>input.addEventListener('change',()=>{syncFilterCopies(input);renderActive()}));
  bindFilterActions();
  q('[data-apply-filters]')?.addEventListener('click',()=>{showToast('تم تحديث المنتجات');closeLayer()});
  q('[data-sort]')?.addEventListener('change',()=>{updateUrl();showToast('تم تغيير ترتيب المنتجات')});
  qa('.wishlist').forEach(btn=>btn.addEventListener('click',()=>{const active=btn.classList.toggle('active');btn.setAttribute('aria-pressed',String(active));btn.setAttribute('aria-label',active?'إزالة المنتج من المفضلة':'إضافة المنتج للمفضلة');showToast(active?'تمت الإضافة إلى المفضلة':'تمت الإزالة من المفضلة')}));
  qa('.product-link').forEach(link=>link.addEventListener('click',e=>e.preventDefault()));
  qa('[data-action=bag]').forEach(btn=>btn.addEventListener('click',()=>showToast('عنصر واحد في الحقيبة')));
  q('[data-search-form]')?.addEventListener('submit',e=>{e.preventDefault();const value=q('#global-search').value.trim();if(!value){q('#global-search').focus();return}closeLayer();setTimeout(()=>location.href=`search-${device}.html?q=${encodeURIComponent(value)}`,120)});
  q('[data-retry]')?.addEventListener('click',()=>{showToast('جارٍ إعادة المحاولة');setTimeout(()=>location.href=`shop-all-${device}.html`,500)});
  renderActive();
  addEventListener('popstate',()=>location.reload());
  if(window.lucide)lucide.createIcons({attrs:{'stroke-width':1.75}});
  if(screen==='mobile-filter-open')setTimeout(()=>openLayer('filters',q('[data-open=filters]')),80);
})();
