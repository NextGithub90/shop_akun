/* ════════════════════════════════════════════════════════════
   PARE4PLAYER · product-detail.js
   Reads ?id= from URL, finds product in PRODUCTS data from
   category.js, and renders the full detail page.
   ════════════════════════════════════════════════════════════ */

/* ─── HELPERS (scoped to avoid re-declaration conflict with category.js) ─── */
const _WA = '628558171708';
const _waOrder = (name) =>
  `https://wa.me/${_WA}?text=Hello%20PARE4PLAYER%2C%20I%20am%20interested%20in%20*${encodeURIComponent(name)}*.%20Can%20you%20share%20price%20and%20availability%3F`;

/* ─── FIND PRODUCT FROM SHARED DATA ─── */
function findProductById(pid) {
  // PRODUCTS is defined in category.js (loaded before this script)
  for (const [catKey, arr] of Object.entries(PRODUCTS)) {
    if (catKey === 'all') continue;
    const p = arr.find(x => x.id === pid);
    if (p) return { product: p, catKey };
  }
  // Also check 'all' pool
  const inAll = (PRODUCTS.all || []).find(x => x.id === pid);
  if (inAll) return { product: inAll, catKey: 'all' };
  return null;
}

function getCategoryLabel(catKey) {
  const cat = CATEGORIES.find(c => c.id === catKey);
  return cat ? cat.label : 'Category';
}

function getRelatedProducts(currentId, catKey, limit = 4) {
  const pool = catKey !== 'all' ? (PRODUCTS[catKey] || []) : PRODUCTS.all || [];
  return pool
    .filter(p => p.id !== currentId && !p.isMore)
    .slice(0, limit);
}

/* ─── RENDER FULL PRODUCT DETAIL ─── */
function renderProductDetail(p, catKey) {
  /* ---------- META ---------- */
  document.title = `${p.name} — PARE4PLAYER | Access The Rare`;

  /* ---------- HERO BG ---------- */
  const heroBg = document.getElementById('pd-hero-bg');
  if (heroBg) heroBg.style.backgroundImage = `url('${p.img}')`;

  /* ---------- BREADCRUMB ---------- */
  const breadCat = document.getElementById('pd-bread-cat');
  const breadName = document.getElementById('pd-bread-name');
  if (breadCat) {
    breadCat.textContent = getCategoryLabel(catKey);
    breadCat.href = `category.html?cat=${catKey}`;
  }
  if (breadName) breadName.textContent = p.name;

  /* ---------- IMAGE ---------- */
  const img = document.getElementById('pd-img');
  if (img) { img.src = p.img; img.alt = p.name; }

  /* ---------- BADGES ON IMAGE ---------- */
  const badgesEl = document.getElementById('pd-img-badges');
  if (badgesEl) {
    let html = '';
    if (p.badge === 'HOT') html += `<span class="pd-badge pd-badge-hot">🔥 HOT</span>`;
    if (p.badge === 'NEW') html += `<span class="pd-badge pd-badge-new">✦ NEW</span>`;
    if (p.badge2 === 'RARE') html += `<span class="pd-badge pd-badge-rare">💎 RARE</span>`;
    if (p.badge2 === 'COLLECTOR') html += `<span class="pd-badge pd-badge-rare">✦ COLLECTOR</span>`;
    if (p.verified) html += `<span class="pd-badge pd-badge-verified">✓ VERIFIED</span>`;
    badgesEl.innerHTML = html;
  }

  /* ---------- SHARE BUTTONS ---------- */
  const waShare = document.getElementById('pd-wa-share');
  if (waShare) {
    const shareText = `Hello! Check out this product on PARE4PLAYER: *${p.name}* — ${window.location.href}`;
    waShare.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  }

  /* ---------- TOP ROW: CAT PILL + INLINE BADGES ---------- */
  const catPill = document.getElementById('pd-cat-pill');
  if (catPill) catPill.textContent = p.cat;

  const badgesInline = document.getElementById('pd-badges-inline');
  if (badgesInline) {
    let inlineBadges = '';
    if (p.badge === 'HOT')
      inlineBadges += `<span class="pd-inline-badge" style="background:linear-gradient(135deg,#FF5A36,#E04520);color:#FFF;">🔥 HOT</span>`;
    if (p.badge === 'NEW')
      inlineBadges += `<span class="pd-inline-badge" style="background:rgba(70,92,255,0.9);color:#FFF;">✦ NEW</span>`;
    if (p.badge2 === 'RARE')
      inlineBadges += `<span class="pd-inline-badge" style="background:rgba(10,8,20,0.9);border:1px solid rgba(255,215,0,0.5);color:#F5C842;">💎 RARE</span>`;
    if (p.badge2 === 'COLLECTOR')
      inlineBadges += `<span class="pd-inline-badge" style="background:rgba(10,8,20,0.9);border:1px solid rgba(255,215,0,0.5);color:#F5C842;">✦ COLLECTOR</span>`;
    badgesInline.innerHTML = inlineBadges;
  }

  /* ---------- NAME ---------- */
  const nameEl = document.getElementById('pd-name');
  if (nameEl) nameEl.textContent = p.name;

  /* ---------- RATING ROW ---------- */
  const ratingEl = document.getElementById('pd-rating-row');
  if (ratingEl) {
    let html = `<span class="pd-stars">${starsHTML(p.stars)}</span>
      <span class="pd-review-count">${p.reviews} reviews</span>`;
    if (p.verified) {
      html += `<span class="pd-verified-tag">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Verified by P4P
      </span>`;
    }
    if (p.gameLabel && p.gameColor) {
      html += `<span class="pd-game-tag" style="background:${p.gameColor}22;color:${p.gameColor};border:1px solid ${p.gameColor}44;">${p.gameLabel}</span>`;
    }
    ratingEl.innerHTML = html;
  }

  /* ---------- PRICE CARD ---------- */
  const priceEl = document.getElementById('pd-price-card');
  if (priceEl) {
    if (p.price === 'Chat WA') {
      priceEl.innerHTML = `
        <div>
          <div class="pd-price-label">Price</div>
          <div class="pd-price-contact">Contact Concierge for Best Price</div>
        </div>
        <div class="pd-price-note">Price varies based on<br>specifications & availability</div>`;
    } else {
      priceEl.innerHTML = `
        <div>
          <div class="pd-price-label">Starting Price</div>
          <div class="pd-price-value">${p.price}</div>
        </div>
        <div class="pd-price-note">Confirm final pricing<br>via WhatsApp Concierge</div>`;
    }
  }

  /* ---------- DESCRIPTION ---------- */
  const descEl = document.getElementById('pd-desc');
  if (descEl) descEl.textContent = p.desc || 'Contact our concierge for full details on this product.';

  /* ---------- FEATURES ---------- */
  const featSection = document.getElementById('pd-features-section');
  const featList = document.getElementById('pd-features-list');
  if (featList && p.features && p.features.length) {
    featList.innerHTML = p.features.map(f => `
      <li>
        <span class="pd-feat-check">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        ${f}
      </li>`).join('');
    if (featSection) featSection.style.display = '';
  } else {
    if (featSection) featSection.style.display = 'none';
  }

  /* ---------- SPECS ---------- */
  const specsSection = document.getElementById('pd-specs-section');
  const specsTable = document.getElementById('pd-specs-table');
  if (specsTable && p.specs && p.specs.length) {
    specsTable.innerHTML = p.specs.map(s => `
      <div class="pd-spec-row">
        <div class="pd-spec-key">${s.key}</div>
        <div class="pd-spec-val ${s.highlight ? 'highlight' : ''}">${s.val}</div>
      </div>`).join('');
    if (specsSection) specsSection.style.display = '';
  } else {
    if (specsSection) specsSection.style.display = 'none';
  }

  /* ---------- ORDER BUTTON ---------- */
  const orderBtn = document.getElementById('pd-order-btn');
  if (orderBtn) orderBtn.href = _waOrder(p.name);

  /* ---------- RELATED PRODUCTS ---------- */
  const relatedGrid = document.getElementById('pd-related-grid');
  if (relatedGrid) {
    const related = getRelatedProducts(p.id, catKey, 4);
    if (related.length > 0) {
      relatedGrid.innerHTML = related.map(r => `
        <a href="product-detail.html?id=${r.id}" class="pd-rel-card">
          <img class="pd-rel-img" src="${r.img}" alt="${r.name}" loading="lazy" onerror="this.style.display='none'" />
          <div class="pd-rel-body">
            <div class="pd-rel-cat">${r.cat}</div>
            <div class="pd-rel-name">${r.name}</div>
            <div class="pd-rel-price ${r.price === 'Chat WA' ? 'contact' : ''}">
              ${r.price === 'Chat WA' ? 'Price on Request' : r.price}
            </div>
          </div>
        </a>`).join('');
      document.getElementById('pd-related-section').style.display = '';
    } else {
      document.getElementById('pd-related-section').style.display = 'none';
    }
  }
}

/* ─── COPY LINK ─── */
function copyPageLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showPdToast('✓ Product link copied!');
    const btn = document.getElementById('pd-copy-link');
    if (btn) {
      btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
      setTimeout(() => {
        btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg> Copy Link`;
      }, 2000);
    }
  }).catch(() => showPdToast('Unable to copy — please copy manually'));
}

function showPdToast(msg) {
  const t = document.getElementById('pd-toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

/* ─── NAVBAR INTERACTIONS ─── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
  }

  const hamburger = document.getElementById('hamburger');
  const sidebarDrawer = document.getElementById('sidebar-drawer');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');
  const sbClose = document.getElementById('sb-close');

  const openDrawer = () => {
    hamburger?.classList.add('open');
    sidebarDrawer?.classList.add('open');
    sidebarDrawer?.setAttribute('aria-hidden', 'false');
    sidebarBackdrop?.classList.add('active');
    document.body.classList.add('no-scroll');
  };
  const closeDrawer = () => {
    hamburger?.classList.remove('open');
    sidebarDrawer?.classList.remove('open');
    sidebarDrawer?.setAttribute('aria-hidden', 'true');
    sidebarBackdrop?.classList.remove('active');
    document.body.classList.remove('no-scroll');
  };

  hamburger?.addEventListener('click', openDrawer);
  sbClose?.addEventListener('click', closeDrawer);
  sidebarBackdrop?.addEventListener('click', closeDrawer);

  const navSearchBtn = document.getElementById('nav-search-btn');
  const searchBar = document.getElementById('search-bar');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');
  navSearchBtn?.addEventListener('click', () => {
    searchBar.classList.toggle('open');
    if (searchBar.classList.contains('open') && searchInput) searchInput.focus();
  });
  searchClose?.addEventListener('click', () => searchBar?.classList.remove('open'));
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();

  const params = new URLSearchParams(window.location.search);
  const pid = params.get('id');

  const loadingEl = document.getElementById('pd-loading');
  const mainEl = document.getElementById('pd-main');
  const notFoundEl = document.getElementById('pd-notfound');

  if (!pid) {
    // No ID — redirect to category page
    window.location.href = 'category.html';
    return;
  }

  const result = findProductById(pid);

  if (!result || result.product.isMore) {
    if (loadingEl) loadingEl.style.display = 'none';
    if (notFoundEl) notFoundEl.style.display = 'flex';
    return;
  }

  // Render the product
  renderProductDetail(result.product, result.catKey);

  // Show main, hide loading
  if (loadingEl) loadingEl.style.display = 'none';
  if (mainEl) mainEl.style.display = 'block';

  // Scroll to top
  window.scrollTo(0, 0);
});
