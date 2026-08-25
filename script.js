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

  /* ── LUMINA INTERACTIVE LIQUID VIDEO PORTAL & MERCURY GLOW ── */
  const mercuryButtons = document.querySelectorAll('.btn-mercury');

  let mouseX = 50, mouseY = 50;
  let targetMouseX = 50, targetMouseY = 50;
  let isMoving = false;

  function updateMouseCoordinates() {
    mouseX += (targetMouseX - mouseX) * 0.15;
    mouseY += (targetMouseY - mouseY) * 0.15;

    document.documentElement.style.setProperty('--mouse-x', `${mouseX.toFixed(2)}%`);
    document.documentElement.style.setProperty('--mouse-y', `${mouseY.toFixed(2)}%`);

    if (Math.abs(targetMouseX - mouseX) > 0.05 || Math.abs(targetMouseY - mouseY) > 0.05) {
      requestAnimationFrame(updateMouseCoordinates);
    } else {
      isMoving = false;
    }
  }

  window.addEventListener('mousemove', e => {
    targetMouseX = (e.clientX / window.innerWidth) * 100;
    targetMouseY = (e.clientY / window.innerHeight) * 100;

    mercuryButtons.forEach(btn => {
      const rect = btn.getBoundingClientRect();
      const bx = ((e.clientX - rect.left) / rect.width) * 100;
      const by = ((e.clientY - rect.top) / rect.height) * 100;
      btn.style.setProperty('--mouse-x', `${bx}%`);
      btn.style.setProperty('--mouse-y', `${by}%`);
    });

    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(updateMouseCoordinates);
    }
  }, { passive: true });

  /* ── SEAMLESS ZERO-STUTTER DUAL VIDEO CROSSFADE LOOPER ── */
  const videoA = document.getElementById('hero-video-a');
  const videoB = document.getElementById('hero-video-b');
  const heroSection = document.getElementById('hero');

  if (videoA && videoB) {
    let activeVideo = videoA;
    let inactiveVideo = videoB;
    let crossfadedThisCycle = false;

    // Ensure both videos start playing with muted loop
    const ensurePlay = (video) => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    videoA.addEventListener('canplay', () => ensurePlay(videoA), { once: true });
    videoB.addEventListener('canplay', () => ensurePlay(videoB), { once: true });
    ensurePlay(videoA);
    ensurePlay(videoB);

    // Continuous loop check via requestAnimationFrame for 60fps precision
    function checkCrossfadeLoop() {
      if (activeVideo.duration && !isNaN(activeVideo.duration)) {
        const timeLeft = activeVideo.duration - activeVideo.currentTime;

        // Trigger crossfade 1.0s before the end of the video
        if (timeLeft <= 1.0 && timeLeft > 0.05 && !crossfadedThisCycle) {
          crossfadedThisCycle = true;

          // Align next video to start
          inactiveVideo.currentTime = 0;
          ensurePlay(inactiveVideo);

          // Smoothly crossfade opacity (handled by CSS transition: opacity 1s)
          inactiveVideo.classList.add('is-active');
          activeVideo.classList.remove('is-active');

          // Swap active/inactive references
          const temp = activeVideo;
          activeVideo = inactiveVideo;
          inactiveVideo = temp;

          // Reset crossfade lock after transition is complete
          setTimeout(() => {
            crossfadedThisCycle = false;
          }, 1200);
        }
      }

      requestAnimationFrame(checkCrossfadeLoop);
    }

    requestAnimationFrame(checkCrossfadeLoop);

    // Smart Pause / Resume on Scroll (only when whole hero section leaves viewport)
    if (heroSection && 'IntersectionObserver' in window) {
      const heroVideoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            ensurePlay(videoA);
            ensurePlay(videoB);
          } else {
            videoA.pause();
            videoB.pause();
          }
        });
      }, { threshold: 0.05 });

      heroVideoObserver.observe(heroSection);
    }
  }

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
