/* PARE4PLAYER · script.js · v4 */
document.addEventListener('DOMContentLoaded', () => {

  /* ── NAVBAR SCROLL ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  /* ── HAMBURGER / PROFESSIONAL MOBILE SIDEBAR DRAWER ── */
  const hamburger      = document.getElementById('hamburger');
  const sidebarDrawer  = document.getElementById('sidebar-drawer');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');
  const sidebarClose   = document.getElementById('sb-close');
  const sbSearchInput  = document.getElementById('sb-search-input');

  function openSidebar() {
    if (!sidebarDrawer) return;
    sidebarDrawer.classList.add('open');
    sidebarDrawer.setAttribute('aria-hidden', 'false');
    if (sidebarBackdrop) sidebarBackdrop.classList.add('active');
    if (hamburger) {
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
    }
    document.body.classList.add('no-scroll');
  }

  function closeSidebar() {
    if (!sidebarDrawer) return;
    sidebarDrawer.classList.remove('open');
    sidebarDrawer.setAttribute('aria-hidden', 'true');
    if (sidebarBackdrop) sidebarBackdrop.classList.remove('active');
    if (hamburger) {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('no-scroll');
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if (sidebarDrawer && sidebarDrawer.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (sidebarClose) {
    sidebarClose.addEventListener('click', closeSidebar);
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', closeSidebar);
  }

  // Close sidebar on ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  });

  // Sidebar search input forwarding to main search or category scroll
  if (sbSearchInput) {
    sbSearchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const query = sbSearchInput.value.trim().toLowerCase();
        if (!query) return;
        closeSidebar();
        if (query.includes('jersey') || query.includes('baju') || query.includes('hoodie')) {
          document.querySelector('#jersey')?.scrollIntoView({ behavior: 'smooth' });
        } else if (query.includes('akun') || query.includes('account') || query.includes('ml') || query.includes('val')) {
          document.querySelector('#account')?.scrollIntoView({ behavior: 'smooth' });
        } else if (query.includes('voucher') || query.includes('diamond') || query.includes('uc') || query.includes('topup')) {
          document.querySelector('#voucher')?.scrollIntoView({ behavior: 'smooth' });
        } else if (query.includes('gear') || query.includes('headset') || query.includes('mouse') || query.includes('keyboard')) {
          document.querySelector('#equipment')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  /* ── SEARCH BAR OVERLAY ── */
  const searchBtn   = document.getElementById('nav-search-btn');
  const searchBar   = document.getElementById('search-bar');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');
  if (searchBtn && searchBar) {
    searchBtn.addEventListener('click', () => {
      searchBar.classList.toggle('open');
      if (searchBar.classList.contains('open') && searchInput) searchInput.focus();
    });
    if (searchClose) searchClose.addEventListener('click', () => searchBar.classList.remove('open'));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') searchBar.classList.remove('open');
    });
  }

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const id = this.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      closeSidebar();
      const offset = (navbar ? navbar.offsetHeight : 70) + 12;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    });
  });

  /* ── HERO BANNER CAROUSEL (U7BUY 3D COVERFLOW) ── */
  const heroCards = Array.from(document.querySelectorAll('.hero-card'));
  const heroDots  = Array.from(document.querySelectorAll('.hdot'));
  const prevBtn   = document.getElementById('hero-prev');
  const nextBtn   = document.getElementById('hero-next');
  const heroTrack = document.getElementById('carousel-track');
  const heroSection = document.querySelector('.hero-carousel-section');
  let cur = 0, timer = null;

  function updateCoverflow(idx) {
    if (heroCards.length === 0) return;
    const total = heroCards.length;
    cur = (idx + total) % total;
    const prevIdx = (cur - 1 + total) % total;
    const nextIdx = (cur + 1) % total;

    heroCards.forEach((card, i) => {
      card.classList.remove('is-active', 'is-prev', 'is-next', 'is-hidden');
      if (i === cur) {
        card.classList.add('is-active');
      } else if (i === prevIdx) {
        card.classList.add('is-prev');
      } else if (i === nextIdx) {
        card.classList.add('is-next');
      } else {
        card.classList.add('is-hidden');
      }
    });

    heroDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === cur);
    });
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => updateCoverflow(cur + 1), 4500);
  }

  // Prev / Next button clicks
  if (prevBtn) prevBtn.addEventListener('click', () => { updateCoverflow(cur - 1); startTimer(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { updateCoverflow(cur + 1); startTimer(); });

  // Pagination dots clicks
  heroDots.forEach((d, i) => d.addEventListener('click', () => { updateCoverflow(i); startTimer(); }));

  // Clicking side cards shifts them to center
  heroCards.forEach((card, i) => {
    card.addEventListener('click', (e) => {
      if (card.classList.contains('is-prev')) {
        e.preventDefault();
        updateCoverflow(cur - 1);
        startTimer();
      } else if (card.classList.contains('is-next')) {
        e.preventDefault();
        updateCoverflow(cur + 1);
        startTimer();
      }
    });
  });

  // Pause on hover
  if (heroSection) {
    heroSection.addEventListener('mouseenter', () => clearInterval(timer));
    heroSection.addEventListener('mouseleave', () => startTimer());
  }

  // Touch Swipe on Hero
  if (heroTrack || heroSection) {
    const touchEl = heroTrack || heroSection;
    let tx = 0, ty = 0;
    touchEl.addEventListener('touchstart', e => {
      tx = e.touches[0].clientX;
      ty = e.touches[0].clientY;
      clearInterval(timer);
    }, { passive: true });

    touchEl.addEventListener('touchend', e => {
      const dx = tx - e.changedTouches[0].clientX;
      const dy = ty - e.changedTouches[0].clientY;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        updateCoverflow(dx > 0 ? cur + 1 : cur - 1);
      }
      startTimer();
    }, { passive: true });
  }

  // Initialize Coverflow Carousel
  updateCoverflow(0);
  startTimer();

  /* ── HORIZONTAL SCROLL ARROWS (Product Rows) ── */
  document.querySelectorAll('.ss-arr').forEach(btn => {
    btn.addEventListener('click', () => {
      const rowId = btn.dataset.scroll;
      const dir   = +btn.dataset.dir;
      const row   = document.getElementById(rowId);
      if (row) row.scrollBy({ left: dir * 240, behavior: 'smooth' });
    });
  });

  /* ── VOUCHER GAME TABS ── */
  const gtabs  = document.querySelectorAll('.gtab');
  const panels = document.querySelectorAll('.vpanel');
  gtabs.forEach(tab => {
    tab.addEventListener('click', () => {
      gtabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      panels.forEach(p => {
        p.classList.toggle('active', p.id === `vp-${tab.dataset.panel}`);
      });
    });
  });

  /* ── TRUST COUNT-UP STATS ── */
  let counted = false;
  const countEls = document.querySelectorAll('.ts-n[data-to]');
  function runCount() {
    if (counted) return;
    counted = true;
    countEls.forEach(el => {
      const to  = +el.dataset.to;
      const dur = 1400;
      const t0  = performance.now();
      const upd = now => {
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * to);
        if (p < 1) requestAnimationFrame(upd);
        else el.textContent = to;
      };
      requestAnimationFrame(upd);
    });
  }
  const trustEl = document.getElementById('trust');
  if (trustEl) {
    new IntersectionObserver(e => {
      if (e[0].isIntersecting) runCount();
    }, { threshold: 0.3 }).observe(trustEl);
  }

  /* ── FLOATING WA BUTTON ── */
  const fwa = document.getElementById('fwa');
  if (fwa) {
    window.addEventListener('scroll', () => {
      fwa.classList.toggle('visible', window.scrollY > 280);
    }, { passive: true });
  }

  /* ── IMAGE ERROR HANDLING ── */
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      this.style.opacity = '0.2';
    });
  });

});
