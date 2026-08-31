/* PARE4PLAYER · script.js · v4 */
document.addEventListener('DOMContentLoaded', () => {

  /* ── NAVBAR SCROLL ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  /* ── HAMBURGER / PROFESSIONAL MOBILE SIDEBAR DRAWER ── */
  const hamburger = document.getElementById('hamburger');
  const sidebarDrawer = document.getElementById('sidebar-drawer');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');
  const sidebarClose = document.getElementById('sb-close');
  const sbSearchInput = document.getElementById('sb-search-input');

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
        if (query.includes('jersey') || query.includes('hoodie') || query.includes('shirt') || query.includes('tee') || query.includes('baju')) {
          document.querySelector('#jersey')?.scrollIntoView({ behavior: 'smooth' });
        } else if (query.includes('account') || query.includes('akun') || query.includes('ml') || query.includes('val') || query.includes('pubg') || query.includes('ff') || query.includes('genshin')) {
          document.querySelector('#account')?.scrollIntoView({ behavior: 'smooth' });
        } else if (query.includes('voucher') || query.includes('diamond') || query.includes('uc') || query.includes('topup') || query.includes('vp')) {
          document.querySelector('#voucher')?.scrollIntoView({ behavior: 'smooth' });
        } else if (query.includes('gear') || query.includes('headset') || query.includes('mouse') || query.includes('keyboard') || query.includes('chair') || query.includes('monitor') || query.includes('equipment')) {
          document.querySelector('#equipment')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = 'category.html?cat=all';
        }
      }
    });
  }

  /* ── SEARCH BAR OVERLAY ── */
  const searchBtn = document.getElementById('nav-search-btn');
  const searchBar = document.getElementById('search-bar');
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
    if (searchInput) {
      searchInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const query = searchInput.value.trim().toLowerCase();
          if (!query) return;
          searchBar.classList.remove('open');
          if (query.includes('jersey') || query.includes('hoodie') || query.includes('shirt') || query.includes('tee') || query.includes('baju')) {
            document.querySelector('#jersey')?.scrollIntoView({ behavior: 'smooth' });
          } else if (query.includes('account') || query.includes('akun') || query.includes('ml') || query.includes('val') || query.includes('pubg') || query.includes('ff') || query.includes('genshin')) {
            document.querySelector('#account')?.scrollIntoView({ behavior: 'smooth' });
          } else if (query.includes('voucher') || query.includes('diamond') || query.includes('uc') || query.includes('topup') || query.includes('vp')) {
            document.querySelector('#voucher')?.scrollIntoView({ behavior: 'smooth' });
          } else if (query.includes('gear') || query.includes('headset') || query.includes('mouse') || query.includes('keyboard') || query.includes('chair') || query.includes('monitor') || query.includes('equipment')) {
            document.querySelector('#equipment')?.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = 'category.html?cat=all';
          }
        }
      });
    }
  }

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
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


  /* ── SCROLL-LOCKED IMAGE-SEQUENCE HERO (APPLE-GRADE ULTRA-SMOOTH CANVAS SCRUBBING) ── */
  const metroCanvas = document.getElementById('metro-canvas');
  const metroHero = document.getElementById('hero');
  const metroTitle = document.getElementById('metro-title');
  const metroTagline = document.getElementById('metro-tagline');
  const metroHint = document.getElementById('metro-hint');
  const metroProgressBar = document.getElementById('metro-progress-bar');

  if (metroCanvas && metroHero) {
    const FRAME_COUNT = 300;
    const scrubDistance = 2800;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const ctx = metroCanvas.getContext('2d', { alpha: false, desynchronized: true });
    if (ctx) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'medium';
    }

    const images = new Array(FRAME_COUNT + 1);
    const loadedStatus = new Uint8Array(FRAME_COUNT + 1); // 1 = loaded & decoded
    const loadingStatus = new Uint8Array(FRAME_COUNT + 1); // 1 = currently fetching

    const getFrameSrc = (index) => `frames/frame_${String(index).padStart(4, '0')}.jpg`;

    let targetProgress = 0;
    let currentProgress = 0;
    let hasStartedScrolling = false;
    let touchStartY = 0;
    let rafId = 0;
    let lastRenderedFrame = -1;
    let canvasW = 0;
    let canvasH = 0;

    function clamp(v, min, max) {
      return Math.min(max, Math.max(min, v));
    }

    // High-performance asynchronous image loader & off-thread decoder
    function loadAndDecodeFrame(idx, priority = false) {
      if (idx < 1 || idx > FRAME_COUNT) return Promise.resolve(null);
      if (loadedStatus[idx]) return Promise.resolve(images[idx]);
      if (loadingStatus[idx] && !priority) return Promise.resolve(null);

      loadingStatus[idx] = 1;
      const img = new Image();
      img.src = getFrameSrc(idx);

      if (typeof img.decode === 'function') {
        return img.decode().then(() => {
          images[idx] = img;
          loadedStatus[idx] = 1;
          loadingStatus[idx] = 0;
          return img;
        }).catch(() => {
          return new Promise(resolve => {
            img.onload = () => {
              images[idx] = img;
              loadedStatus[idx] = 1;
              loadingStatus[idx] = 0;
              resolve(img);
            };
            img.onerror = () => {
              loadingStatus[idx] = 0;
              resolve(null);
            };
          });
        });
      } else {
        return new Promise(resolve => {
          img.onload = () => {
            images[idx] = img;
            loadedStatus[idx] = 1;
            loadingStatus[idx] = 0;
            resolve(img);
          };
          img.onerror = () => {
            loadingStatus[idx] = 0;
            resolve(null);
          };
        });
      }
    }

    function resizeCanvas() {
      if (!metroCanvas || !ctx) return;
      // Cap DPR to 1.5 to maximize framerate and eliminate GPU fill-rate throttling
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const newW = Math.round(window.innerWidth * dpr);
      const newH = Math.round(window.innerHeight * dpr);

      if (canvasW !== newW || canvasH !== newH) {
        canvasW = metroCanvas.width = newW;
        canvasH = metroCanvas.height = newH;
        lastRenderedFrame = -1; // force redraw
      }
      drawFrame(getCurrentTargetFrame());
    }

    function getNearestLoadedFrame(idx) {
      if (loadedStatus[idx] && images[idx]) return images[idx];
      // Fast localized search for closest available frame
      for (let d = 1; d <= 25; d++) {
        const p = idx - d;
        if (p >= 1 && loadedStatus[p] && images[p]) return images[p];
        const n = idx + d;
        if (n <= FRAME_COUNT && loadedStatus[n] && images[n]) return images[n];
      }
      return images[lastRenderedFrame] || images[1] || null;
    }

    function drawFrame(idx) {
      if (!ctx || !metroCanvas) return;
      const img = getNearestLoadedFrame(idx);
      if (!img || !img.complete || img.naturalWidth === 0) return;

      if (idx === lastRenderedFrame) return; // Skip identical draw
      lastRenderedFrame = idx;

      const cw = metroCanvas.width;
      const ch = metroCanvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      // Cover scaling math
      const scale = Math.max(cw / iw, ch / ih);
      const nw = iw * scale;
      const nh = ih * scale;
      const nx = (cw - nw) * 0.5;
      const ny = (ch - nh) * 0.5;

      ctx.drawImage(img, nx, ny, nw, nh);
    }

    function getCurrentTargetFrame() {
      return Math.min(FRAME_COUNT, Math.max(1, Math.round(currentProgress * (FRAME_COUNT - 1)) + 1));
    }

    // Request priority loading around current user position
    function boostNeighborhood(idx) {
      for (let offset = -8; offset <= 8; offset++) {
        const target = idx + offset;
        if (target >= 1 && target <= FRAME_COUNT && !loadedStatus[target]) {
          loadAndDecodeFrame(target, true);
        }
      }
    }

    // 1. Load frame 1 immediately and show hero
    loadAndDecodeFrame(1, true).then(() => {
      resizeCanvas();
      drawFrame(1);
      metroCanvas.classList.add('ready');
      if (reduceMotion) {
        targetProgress = 0.92;
      }
      startStratifiedPreload();
    });

    // 2. Multi-tier stratified preloader for instant zero-stutter scrubbing
    async function startStratifiedPreload() {
      // Tier 1: Keyframe stride (every 8 frames) -> guarantees instant smooth scrub across whole video
      const tier1 = [];
      for (let i = 1; i <= FRAME_COUNT; i += 8) {
        if (!loadedStatus[i]) tier1.push(i);
      }
      await runBatch(tier1, 6);

      // Tier 2: Sub-stride (every 4 frames)
      const tier2 = [];
      for (let i = 1; i <= FRAME_COUNT; i += 4) {
        if (!loadedStatus[i]) tier2.push(i);
      }
      await runBatch(tier2, 6);

      // Tier 3: All remaining frames in background
      const tier3 = [];
      for (let i = 1; i <= FRAME_COUNT; i++) {
        if (!loadedStatus[i]) tier3.push(i);
      }
      runBatch(tier3, 4);
    }

    function runBatch(indices, concurrency) {
      let idx = 0;
      return new Promise(resolve => {
        let active = 0;
        let completed = 0;
        if (indices.length === 0) return resolve();

        function next() {
          while (active < concurrency && idx < indices.length) {
            const frameIdx = indices[idx++];
            active++;
            loadAndDecodeFrame(frameIdx).then(() => {
              active--;
              completed++;
              if (completed >= indices.length) {
                resolve();
              } else {
                next();
              }
            });
          }
        }
        next();
      });
    }

    window.addEventListener('resize', resizeCanvas, { passive: true });

    function addDelta(deltaY) {
      const next = clamp(targetProgress + deltaY / scrubDistance, 0, 1);
      targetProgress = next;
      if (targetProgress > 0.001) hasStartedScrolling = true;

      // Boost neighborhood frames for upcoming scrub target
      const expectedFrame = Math.min(FRAME_COUNT, Math.max(1, Math.round(next * (FRAME_COUNT - 1)) + 1));
      boostNeighborhood(expectedFrame);
    }

    function isHeroInFocus() {
      if (!metroHero) return false;
      const rect = metroHero.getBoundingClientRect();
      return rect.top >= -50 && window.scrollY < 60;
    }

    const onWheel = (e) => {
      const heroActive = isHeroInFocus();
      let delta = e.deltaY;

      // Normalize wheel delta across devices
      if (e.deltaMode === 1) delta *= 35; // DOM_DELTA_LINE
      else if (e.deltaMode === 2) delta *= 500; // DOM_DELTA_PAGE
      delta = clamp(delta, -120, 120);

      if (heroActive) {
        if (delta > 0) {
          // Scrolling down
          if (targetProgress < 0.995) {
            addDelta(delta);
            e.preventDefault();
            if (window.scrollY > 0) window.scrollTo({ top: 0 });
          }
        } else if (delta < 0) {
          // Scrolling up while in hero
          if (targetProgress > 0.005) {
            addDelta(delta);
            e.preventDefault();
            if (window.scrollY > 0) window.scrollTo({ top: 0 });
          }
        }
      } else if (window.scrollY < 120 && delta < 0 && targetProgress >= 0.99) {
        if (window.scrollY <= 20) {
          addDelta(delta);
          e.preventDefault();
          window.scrollTo({ top: 0 });
        }
      }
    };

    const onTouchStart = (e) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (e) => {
      const y = e.touches[0]?.clientY ?? touchStartY;
      const deltaY = (touchStartY - y) * 1.8;
      touchStartY = y;

      const heroActive = isHeroInFocus();
      if (heroActive) {
        if (deltaY > 0 && targetProgress < 0.995) {
          addDelta(deltaY);
          if (e.cancelable) e.preventDefault();
          if (window.scrollY > 0) window.scrollTo({ top: 0 });
        } else if (deltaY < 0 && targetProgress > 0.005) {
          addDelta(deltaY);
          if (e.cancelable) e.preventDefault();
          if (window.scrollY > 0) window.scrollTo({ top: 0 });
        }
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    // Smooth rAF render loop
    let prevProgress = -1;
    function frame() {
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.0001) {
        currentProgress += diff * 0.22;
      } else {
        currentProgress = targetProgress;
      }

      const targetIndex = getCurrentTargetFrame();
      drawFrame(targetIndex);

      if (Math.abs(currentProgress - prevProgress) > 0.0005) {
        prevProgress = currentProgress;

        if (metroTitle) {
          const t = 1 - clamp(currentProgress / 0.35, 0, 1);
          metroTitle.style.opacity = t.toFixed(3);
          metroTitle.style.transform = `translate3d(0, ${((1 - t) * -24).toFixed(1)}px, 0) scale3d(${(0.96 + t * 0.04).toFixed(3)}, ${(0.96 + t * 0.04).toFixed(3)}, 1)`;
        }

        if (metroHint) {
          metroHint.style.opacity = hasStartedScrolling ? '0' : '1';
        }

        if (metroTagline) {
          const t = clamp((currentProgress - 0.82) / 0.18, 0, 1);
          metroTagline.style.opacity = t.toFixed(3);
          metroTagline.style.transform = `translate3d(0, ${((1 - t) * 20).toFixed(1)}px, 0) scale3d(${(0.97 + t * 0.03).toFixed(3)}, ${(0.97 + t * 0.03).toFixed(3)}, 1)`;
        }

        if (metroProgressBar) {
          metroProgressBar.style.transform = `scaleX(${currentProgress.toFixed(4)})`;
        }
      }

      rafId = requestAnimationFrame(frame);
    }

    if (!reduceMotion) {
      rafId = requestAnimationFrame(frame);
    }
  }

  /* ── HORIZONTAL SCROLL ARROWS (Product Rows) ── */
  document.querySelectorAll('.ss-arr').forEach(btn => {
    btn.addEventListener('click', () => {
      const rowId = btn.dataset.scroll;
      const dir = +btn.dataset.dir;
      const row = document.getElementById(rowId);
      if (row) row.scrollBy({ left: dir * 240, behavior: 'smooth' });
    });
  });

  /* ── VOUCHER GAME TABS ── */
  const gtabs = document.querySelectorAll('.gtab');
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
      const to = +el.dataset.to;
      const dur = 1400;
      const t0 = performance.now();
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
    img.addEventListener('error', function () {
      this.style.opacity = '0.2';
    });
  });

});
