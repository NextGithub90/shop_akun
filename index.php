<?php
$logoHref = '#';
$searchPlaceholder = 'Search esports jerseys, game accounts, vouchers, equipment...';
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PARE4PLAYER — Jersey · Game Accounts · Vouchers · Equipment | Access The Rare</title>
  <meta name="description"
    content="Trusted gaming concierge. Custom esports jerseys, verified game accounts, diamond vouchers & top-ups, and premium gaming equipment." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>

<body>

<?php include 'includes/navbar.php'; ?>

<?php include 'includes/sidebar_index.php'; ?>

  <main>

    <!-- ===== SCROLL-LOCKED IMAGE-SEQUENCE HERO (APPLE-GRADE CANVAS SCRUBBING) ===== -->
    <section id="hero" class="metro-hero-section">
      <canvas id="metro-canvas" class="metro-canvas"></canvas>

      <div class="metro-gradient-overlay"></div>

      <div class="metro-title-wrap" id="metro-title">
        <span class="metro-title-text">THE CITY OPENS</span>
      </div>

      <div class="metro-tagline-wrap" id="metro-tagline">
        <span class="metro-tagline-text">Welcome to the Capital of Elite Gaming</span>
      </div>

      <div class="metro-hint-wrap" id="metro-hint">
        <span>SCROLL</span>
        <svg class="metro-hint-icon" width="14" height="18" viewBox="0 0 14 18">
          <path d="M7 1 L7 17 M2 12 L7 17 L12 12" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>

      <!-- Thin progress line — fills as the video advances -->
      <div class="metro-progress-track">
        <div class="metro-progress-bar" id="metro-progress-bar"></div>
      </div>

      <!-- Signature -->
      <span class="metro-signature">
        by <a href="https://www.guglielmogiannattasio.it" target="_blank" rel="noopener noreferrer">guglielmogiannattasio.exe</a>
      </span>
    </section>

    <!-- ===== CATEGORY NAVIGATION (Quick Access to Dedicated Pages) ===== -->
    <section class="cat-icons">
      <div class="ci-row">
        <a href="category.php?cat=jersey" class="ci-item">
          <div class="ci-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
            </svg>
          </div>
          <span class="ci-label">Jersey</span>
        </a>
        <a href="category.php?cat=accounts" class="ci-item">
          <div class="ci-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="4" />
              <path d="M6 12h4m-2-2v4" />
              <circle cx="17" cy="10" r="1" fill="currentColor" />
              <circle cx="15" cy="14" r="1" fill="currentColor" />
            </svg>
          </div>
          <span class="ci-label">Game Accounts</span>
        </a>
        <a href="category.php?cat=topup" class="ci-item">
          <div class="ci-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
              <path d="M2 9h20M12 21L8 9m4 12l4-12" />
            </svg>
          </div>
          <span class="ci-label">Vouchers</span>
        </a>
        <a href="category.php?cat=items" class="ci-item">
          <div class="ci-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 18v-6a9 9 0 0118 0v6" />
              <path
                d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
            </svg>
          </div>
          <span class="ci-label">Equipment</span>
        </a>
        <a href="category.php?cat=boosting" class="ci-item">
          <div class="ci-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.5 17.5L3 6V3h3l11.5 11.5" />
              <path d="M13 19l6-6" />
              <path d="M16 16l4 4" />
              <path d="M19 21l2-2" />
              <path d="M14.5 6.5L18 3h3v3l-3.5 3.5" />
              <path d="M5 19l4-4" />
              <path d="M3 21l2-2" />
            </svg>
          </div>
          <span class="ci-label">Boosting</span>
        </a>
        <a href="category.php?cat=coins" class="ci-item">
          <div class="ci-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <ellipse cx="12" cy="7" rx="9" ry="3" />
              <path d="M3 7v6c0 1.66 4.03 3 9 3s9-1.34 9-3V7" />
              <path d="M3 13v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
            </svg>
          </div>
          <span class="ci-label">Currency</span>
        </a>
        <a href="category.php?cat=roblox" class="ci-item">
          <div class="ci-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <path d="M9 9h6v6H9z" fill="currentColor" />
            </svg>
          </div>
          <span class="ci-label">Roblox</span>
        </a>
        <a href="category.php?cat=all" class="ci-item ci-item-all">
          <div class="ci-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
            </svg>
          </div>
          <span class="ci-label">All Categories</span>
        </a>
      </div>
    </section>

    <!-- ===== JERSEY SECTION ===== -->
    <section class="store-sec" id="jersey">
      <div class="ss-head">
        <div>
          <h2 class="ss-title">Esports Jersey &amp; Apparel</h2>
          <p class="ss-sub">Exclusive gaming apparel collection · Custom gamertag &amp; full sublimation</p>
        </div>
        <div class="ss-nav">
          <button class="ss-arr" data-scroll="jersey-row" data-dir="-1">‹</button>
          <button class="ss-arr" data-scroll="jersey-row" data-dir="1">›</button>
          <a href="category.php?cat=jersey" class="ss-all">View All →</a>
        </div>
      </div>

      <div class="prow" id="jersey-row">
        <!-- Product Cards linking to product-detail.php -->
        <a href="product-detail.php?id=j1" class="pcard">
          <div class="pcard-img">
            <img src="IMG/81589298_497003194277936_4353456598723592192_n.jpg.jpeg" alt="Devil Stripe Jersey" />
            <span class="badge-hot">🔥 HOT</span>
            <span class="badge-rare">RARE</span>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Jersey · Custom</p>
            <h3 class="pc-name">Devil Stripe Jersey</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span>(48)</span></div>
          </div>
        </a>
        <a href="product-detail.php?id=j2" class="pcard">
          <div class="pcard-img">
            <img src="IMG/81819510_497003264277929_1991857801541976064_n.jpg.jpeg" alt="Gold Grid Hoodie" />
            <span class="badge-rare">COLLECTOR</span>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Hoodie · Esport</p>
            <h3 class="pc-name">Gold Grid Hoodie</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span>(32)</span></div>
          </div>
        </a>
        <a href="product-detail.php?id=j3" class="pcard">
          <div class="pcard-img">
            <img src="IMG/75247421_452163855428537_6577748504087625728_n.jpg.jpeg" alt="Geometric Edge Hoodie" />
            <span class="badge-rare">COLLECTOR</span>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Hoodie · Fullprint</p>
            <h3 class="pc-name">Geometric Edge Hoodie</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span>(27)</span></div>
          </div>
        </a>
        <a href="product-detail.php?id=j4" class="pcard">
          <div class="pcard-img">
            <img src="IMG/75402042_452163845428538_3824576894284595200_n.jpg.jpeg" alt="Tactical Grid Hoodie" />
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Hoodie · Black Gold</p>
            <h3 class="pc-name">Tactical Grid Hoodie</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span>(19)</span></div>
          </div>
        </a>
        <a href="product-detail.php?id=j5" class="pcard">
          <div class="pcard-img">
            <img src="IMG/472313641_1625647298080181_4609009896057739488_n.jpg.jpeg" alt="Veni Vidi Vici Tee" />
            <span class="badge-verified">✓ VERIFIED</span>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Tee · Casual</p>
            <h3 class="pc-name">Veni Vidi Vici Tee</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span>(61)</span></div>
          </div>
        </a>
        <a href="product-detail.php?id=j6" class="pcard">
          <div class="pcard-img">
            <img src="IMG/88055687_535333090444946_5042498455423942656_n.jpg.jpeg" alt="Pare Media Classic Tee" />
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Tee · Classic</p>
            <h3 class="pc-name">Pare Classic Dark Tee</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span>(44)</span></div>
          </div>
        </a>
        <a href="https://wa.me/628558171708?text=Hello%20PARE4PLAYER%2C%20I%20am%20interested%20in%20a%20Custom%20Order%20Jersey."
          target="_blank" class="pcard pcard-more">
          <div class="pcard-img pcard-more-img">
            <div class="more-inner">
              <span class="more-plus">+</span>
              <span class="more-text">Custom<br />Order</span>
            </div>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Bespoke Design</p>
            <h3 class="pc-name">Team Custom</h3>
            <div class="pc-stars" style="color:#FF5A36">Request → Chat WA</div>
          </div>
        </a>
      </div>
    </section>

    <!-- ===== ACCOUNT SERVICE CARDS ===== -->
    <section class="store-sec alt-sec" id="account">
      <div class="ss-head">
        <div>
          <h2 class="ss-title">Verified Game Accounts</h2>
          <p class="ss-sub">Strict curation · Safe transfer · Verified track record</p>
        </div>
        <a href="https://wa.me/628558171708?text=Hello%20PARE4PLAYER%2C%20I%20would%20like%20to%20submit%20a%20private%20account%20request."
          target="_blank" class="ss-all">Private Request →</a>
      </div>

      <!-- Service feature cards (U7BUY Style) -->
      <div class="svc-row">
        <div class="svc-card">
          <img src="https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=80&h=80&fit=crop" alt=""
            class="svc-icon-img" />
          <div>
            <h4>Sourcing &amp; Curation</h4>
            <p>We source accounts matching your exact requirements</p>
          </div>
          <a href="category.php?cat=accounts" class="svc-arrow">→</a>
        </div>
        <div class="svc-card">
          <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=80&h=80&fit=crop" alt=""
            class="svc-icon-img" />
          <div>
            <h4>Full Verification</h4>
            <p>Ownership check, clean history, and status audit</p>
          </div>
          <a href="category.php?cat=accounts" class="svc-arrow">→</a>
        </div>
        <div class="svc-card">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop" alt=""
            class="svc-icon-img" />
          <div>
            <h4>Safe Transfer</h4>
            <p>Protected escrow with transparent communication</p>
          </div>
          <a href="category.php?cat=accounts" class="svc-arrow">→</a>
        </div>
        <div class="svc-card">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop" alt=""
            class="svc-icon-img" />
          <div>
            <h4>Sell on P4P</h4>
            <p>Have a rare account? Sell safely through our network</p>
          </div>
          <a href="https://wa.me/628558171708?text=Hello%20PARE4PLAYER%2C%20I%20want%20to%20sell%20my%20game%20account."
            target="_blank" class="svc-arrow">→</a>
        </div>
      </div>

      <!-- Account game cards horizontal -->
      <div class="ss-sub-head">
        <h3 class="ss-sub-title">Available Account Stock</h3>
        <div class="ss-nav">
          <button class="ss-arr" data-scroll="acc-row" data-dir="-1">‹</button>
          <button class="ss-arr" data-scroll="acc-row" data-dir="1">›</button>
        </div>
      </div>

      <div class="prow" id="acc-row">
        <a href="product-detail.php?id=a1" class="pcard">
          <div class="pcard-img">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=220&fit=crop&crop=center"
              alt="Mobile Legends" />
            <span class="badge-hot">🔥 HOT</span>
            <span class="badge-rare">RARE</span>
            <div class="pcard-game-label" style="--gc:#1E90FF">ML · Mythic+</div>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Mobile Legends · Account</p>
            <h3 class="pc-name">ML Mythic+ Full Hero</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span class="pc-verify">✓ Verified</span></div>
          </div>
        </a>
        <a href="product-detail.php?id=a2" class="pcard">
          <div class="pcard-img">
            <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=300&h=220&fit=crop&crop=center"
              alt="Valorant" />
            <span class="badge-hot">🔥 HOT</span>
            <span class="badge-rare">RARE</span>
            <div class="pcard-game-label" style="--gc:#FF4655">VAL · Immortal</div>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Valorant · Account</p>
            <h3 class="pc-name">Valorant Immortal Skin</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span class="pc-verify">✓ Verified</span></div>
          </div>
        </a>
        <a href="product-detail.php?id=a3" class="pcard">
          <div class="pcard-img">
            <img src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=300&h=220&fit=crop&crop=center"
              alt="Free Fire" />
            <span class="badge-rare">COLLECTOR</span>
            <div class="pcard-game-label" style="--gc:#FF6B00">FF · Sultan</div>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Free Fire · Account</p>
            <h3 class="pc-name">FF Sultan Bundle Legendary</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span class="pc-verify">✓ Verified</span></div>
          </div>
        </a>
        <a href="product-detail.php?id=a4" class="pcard">
          <div class="pcard-img">
            <img src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=300&h=220&fit=crop&crop=center"
              alt="PUBG Mobile" />
            <span class="badge-rare">COLLECTOR</span>
            <div class="pcard-game-label" style="--gc:#F5A623">PUBG · Conqueror</div>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">PUBG Mobile · Account</p>
            <h3 class="pc-name">PUBG Conqueror Full Outfit</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span class="pc-verify">✓ Secured</span></div>
          </div>
        </a>
        <a href="product-detail.php?id=a6" class="pcard">
          <div class="pcard-img">
            <img src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=300&h=220&fit=crop&crop=center"
              alt="Gaming" />
            <div class="pcard-game-label" style="--gc:#1E90FF">ML · Legend</div>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Mobile Legends · Account</p>
            <h3 class="pc-name">ML Legend Collector Skin</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span class="pc-verify">✓ Verified</span></div>
          </div>
        </a>
        <a href="product-detail.php?id=a5" class="pcard">
          <div class="pcard-img">
            <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=220&fit=crop&crop=center"
              alt="Genshin" />
            <div class="pcard-game-label" style="--gc:#7B5EA7">Genshin · AR60</div>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Genshin Impact · Account</p>
            <h3 class="pc-name">Genshin AR60 5-Star Full</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span class="pc-verify">✓ Verified</span></div>
          </div>
        </a>
        <a href="https://wa.me/628558171708?text=Hello%20PARE4PLAYER%2C%20I%20would%20like%20to%20request%20a%20specific%20game%20account."
          target="_blank" class="pcard pcard-more">
          <div class="pcard-img pcard-more-img">
            <div class="more-inner">
              <span class="more-plus">🔍</span>
              <span class="more-text">Private<br />Request</span>
            </div>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Services · Custom</p>
            <h3 class="pc-name">Not in the list?</h3>
            <div class="pc-stars" style="color:#FF5A36">Submit Request →</div>
          </div>
        </a>
      </div>
    </section>

    <!-- ===== VOUCHER SECTION ===== -->
    <section class="store-sec" id="voucher">
      <div class="ss-head">
        <div>
          <h2 class="ss-title">Vouchers &amp; Instant Top Up</h2>
          <p class="ss-sub">Automated processing · 100% legal · Competitive pricing</p>
        </div>
      </div>

      <!-- Game selector -->
      <div class="game-tabs" id="game-tabs">
        <button class="gtab active" data-panel="ml"><span class="gtab-dot" style="background:#1A56DB"></span>Mobile
          Legends</button>
        <button class="gtab" data-panel="ff"><span class="gtab-dot" style="background:#DC4E0A"></span>Free Fire</button>
        <button class="gtab" data-panel="pubg"><span class="gtab-dot" style="background:#B8860B"></span>PUBG
          Mobile</button>
        <button class="gtab" data-panel="val"><span class="gtab-dot" style="background:#FF4655"></span>Valorant</button>
        <button class="gtab" data-panel="genshin"><span class="gtab-dot" style="background:#7B5EA7"></span>Genshin
          Impact</button>
      </div>

      <!-- Voucher panels -->
      <div id="vp-ml" class="vpanel active">
        <div class="vgrid">
          <a href="product-detail.php?id=v1" class="vcard" style="--vc:#1A56DB">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=120&fit=crop&crop=top"
                alt="ML" />
              <div class="vcard-overlay">
                <div class="vamt">86</div>
                <div class="vunit">💎 Diamonds</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">Mobile Legends</span>
              <div class="vprice-row"><span class="vprice">Rp 20.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="product-detail.php?id=v2" class="vcard" style="--vc:#1A56DB">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=120&fit=crop&crop=top"
                alt="ML" />
              <div class="vcard-overlay">
                <div class="vamt">172</div>
                <div class="vunit">💎 Diamonds</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">Mobile Legends</span>
              <div class="vprice-row"><span class="vprice">Rp 40.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="product-detail.php?id=v2" class="vcard hot-card" style="--vc:#1A56DB">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=120&fit=crop&crop=top"
                alt="ML" />
              <div class="vcard-overlay">
                <div class="vamt">257</div>
                <div class="vunit">💎 Diamonds</div>
              </div><span class="v-hot">🔥 BEST SELLER</span>
            </div>
            <div class="vcard-bot"><span class="vgame">Mobile Legends</span>
              <div class="vprice-row"><span class="vprice">Rp 59.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="product-detail.php?id=v3" class="vcard" style="--vc:#1A56DB">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=120&fit=crop&crop=top"
                alt="ML" />
              <div class="vcard-overlay">
                <div class="vamt">514</div>
                <div class="vunit">💎 Diamonds</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">Mobile Legends</span>
              <div class="vprice-row"><span class="vprice">Rp 115.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="product-detail.php?id=v3" class="vcard" style="--vc:#1A56DB">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=120&fit=crop&crop=top"
                alt="ML" />
              <div class="vcard-overlay">
                <div class="vamt">1050</div>
                <div class="vunit">💎 Diamonds</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">Mobile Legends</span>
              <div class="vprice-row"><span class="vprice">Rp 229.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="product-detail.php?id=c1" class="vcard" style="--vc:#1A56DB">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=120&fit=crop&crop=top"
                alt="ML" />
              <div class="vcard-overlay">
                <div class="vamt">2195</div>
                <div class="vunit">💎 Diamonds</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">Mobile Legends</span>
              <div class="vprice-row"><span class="vprice">Rp 459.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
        </div>
      </div>
      <div id="vp-ff" class="vpanel">
        <div class="vgrid">
          <a href="product-detail.php?id=v4" class="vcard" style="--vc:#DC4E0A">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=300&h=120&fit=crop&crop=top"
                alt="FF" />
              <div class="vcard-overlay">
                <div class="vamt">70</div>
                <div class="vunit">💠 Diamonds</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">Free Fire</span>
              <div class="vprice-row"><span class="vprice">Rp 15.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="product-detail.php?id=v4" class="vcard" style="--vc:#DC4E0A">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=300&h=120&fit=crop&crop=top"
                alt="FF" />
              <div class="vcard-overlay">
                <div class="vamt">140</div>
                <div class="vunit">💠 Diamonds</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">Free Fire</span>
              <div class="vprice-row"><span class="vprice">Rp 29.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="product-detail.php?id=v5" class="vcard hot-card" style="--vc:#DC4E0A">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=300&h=120&fit=crop&crop=top"
                alt="FF" />
              <div class="vcard-overlay">
                <div class="vamt">355</div>
                <div class="vunit">💠 Diamonds</div>
              </div><span class="v-hot">🔥 BEST SELLER</span>
            </div>
            <div class="vcard-bot"><span class="vgame">Free Fire</span>
              <div class="vprice-row"><span class="vprice">Rp 70.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="product-detail.php?id=v5" class="vcard" style="--vc:#DC4E0A">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=300&h=120&fit=crop&crop=top"
                alt="FF" />
              <div class="vcard-overlay">
                <div class="vamt">720</div>
                <div class="vunit">💠 Diamonds</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">Free Fire</span>
              <div class="vprice-row"><span class="vprice">Rp 139.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="product-detail.php?id=c2" class="vcard" style="--vc:#DC4E0A">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=300&h=120&fit=crop&crop=top"
                alt="FF" />
              <div class="vcard-overlay">
                <div class="vamt">1450</div>
                <div class="vunit">💠 Diamonds</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">Free Fire</span>
              <div class="vprice-row"><span class="vprice">Rp 275.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="product-detail.php?id=c2" class="vcard" style="--vc:#DC4E0A">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=300&h=120&fit=crop&crop=top"
                alt="FF" />
              <div class="vcard-overlay">
                <div class="vamt">2900</div>
                <div class="vunit">💠 Diamonds</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">Free Fire</span>
              <div class="vprice-row"><span class="vprice">Rp 549.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
        </div>
      </div>
      <div id="vp-pubg" class="vpanel">
        <div class="vgrid">
          <a href="product-detail.php?id=v6" class="vcard" style="--vc:#B8860B">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=300&h=120&fit=crop&crop=top"
                alt="PUBG" />
              <div class="vcard-overlay">
                <div class="vamt">60</div>
                <div class="vunit">🪙 UC</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">PUBG Mobile</span>
              <div class="vprice-row"><span class="vprice">Rp 15.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="product-detail.php?id=v6" class="vcard" style="--vc:#B8860B">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=300&h=120&fit=crop&crop=top"
                alt="PUBG" />
              <div class="vcard-overlay">
                <div class="vamt">325</div>
                <div class="vunit">🪙 UC</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">PUBG Mobile</span>
              <div class="vprice-row"><span class="vprice">Rp 75.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="product-detail.php?id=v6" class="vcard hot-card" style="--vc:#B8860B">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=300&h=120&fit=crop&crop=top"
                alt="PUBG" />
              <div class="vcard-overlay">
                <div class="vamt">660</div>
                <div class="vunit">🪙 UC</div>
              </div><span class="v-hot">🔥 BEST SELLER</span>
            </div>
            <div class="vcard-bot"><span class="vgame">PUBG Mobile</span>
              <div class="vprice-row"><span class="vprice">Rp 149.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="product-detail.php?id=c3" class="vcard" style="--vc:#B8860B">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=300&h=120&fit=crop&crop=top"
                alt="PUBG" />
              <div class="vcard-overlay">
                <div class="vamt">1800</div>
                <div class="vunit">🪙 UC</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">PUBG Mobile</span>
              <div class="vprice-row"><span class="vprice">Rp 385.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
        </div>
      </div>
      <div id="vp-val" class="vpanel">
        <div class="vgrid">
          <a href="product-detail.php?id=v7" class="vcard" style="--vc:#FF4655">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=300&h=120&fit=crop&crop=top"
                alt="Valorant" />
              <div class="vcard-overlay">
                <div class="vamt">475</div>
                <div class="vunit">🔴 VP</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">Valorant</span>
              <div class="vprice-row"><span class="vprice">Rp 55.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="product-detail.php?id=v7" class="vcard" style="--vc:#FF4655">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=300&h=120&fit=crop&crop=top"
                alt="Valorant" />
              <div class="vcard-overlay">
                <div class="vamt">1000</div>
                <div class="vunit">🔴 VP</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">Valorant</span>
              <div class="vprice-row"><span class="vprice">Rp 110.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="product-detail.php?id=v7" class="vcard hot-card" style="--vc:#FF4655">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=300&h=120&fit=crop&crop=top"
                alt="Valorant" />
              <div class="vcard-overlay">
                <div class="vamt">2050</div>
                <div class="vunit">🔴 VP</div>
              </div><span class="v-hot">🔥 BEST SELLER</span>
            </div>
            <div class="vcard-bot"><span class="vgame">Valorant</span>
              <div class="vprice-row"><span class="vprice">Rp 219.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="product-detail.php?id=v7" class="vcard" style="--vc:#FF4655">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=300&h=120&fit=crop&crop=top"
                alt="Valorant" />
              <div class="vcard-overlay">
                <div class="vamt">3650</div>
                <div class="vunit">🔴 VP</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">Valorant</span>
              <div class="vprice-row"><span class="vprice">Rp 379.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
        </div>
      </div>
      <div id="vp-genshin" class="vpanel">
        <div class="vgrid">
          <a href="category.php?cat=topup" class="vcard" style="--vc:#7B5EA7">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=120&fit=crop&crop=top"
                alt="Genshin" />
              <div class="vcard-overlay">
                <div class="vamt">60</div>
                <div class="vunit">✨ Genesis</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">Genshin Impact</span>
              <div class="vprice-row"><span class="vprice">Rp 20.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="category.php?cat=topup" class="vcard" style="--vc:#7B5EA7">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=120&fit=crop&crop=top"
                alt="Genshin" />
              <div class="vcard-overlay">
                <div class="vamt">300</div>
                <div class="vunit">✨ Genesis</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">Genshin Impact</span>
              <div class="vprice-row"><span class="vprice">Rp 95.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="category.php?cat=topup" class="vcard hot-card" style="--vc:#7B5EA7">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=120&fit=crop&crop=top"
                alt="Genshin" />
              <div class="vcard-overlay">
                <div class="vamt">980</div>
                <div class="vunit">✨ Genesis</div>
              </div><span class="v-hot">🔥 BEST SELLER</span>
            </div>
            <div class="vcard-bot"><span class="vgame">Genshin Impact</span>
              <div class="vprice-row"><span class="vprice">Rp 285.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
          <a href="category.php?cat=topup" class="vcard" style="--vc:#7B5EA7">
            <div class="vcard-top"><img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=120&fit=crop&crop=top"
                alt="Genshin" />
              <div class="vcard-overlay">
                <div class="vamt">1980</div>
                <div class="vunit">✨ Genesis</div>
              </div>
            </div>
            <div class="vcard-bot"><span class="vgame">Genshin Impact</span>
              <div class="vprice-row"><span class="vprice">Rp 549.000</span><span class="vbuy">Buy</span></div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- ===== EQUIPMENT SECTION ===== -->
    <section class="store-sec alt-sec" id="equipment">
      <div class="ss-head">
        <div>
          <h2 class="ss-title">Gaming Equipment &amp; Gear</h2>
          <p class="ss-sub">High performance · Limited stock · Official warranty</p>
        </div>
        <div class="ss-nav">
          <button class="ss-arr" data-scroll="eq-row" data-dir="-1">‹</button>
          <button class="ss-arr" data-scroll="eq-row" data-dir="1">›</button>
          <a href="category.php?cat=items" class="ss-all">Inquiry →</a>
        </div>
      </div>
      <div class="prow" id="eq-row">
        <a href="product-detail.php?id=e1" class="pcard">
          <div class="pcard-img">
            <img src="https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=220&fit=crop&crop=center"
              alt="Gaming Headset" />
            <span class="badge-verified">PREMIUM</span>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Audio · Gaming</p>
            <h3 class="pc-name">Gaming Headset 7.1 Surround</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span>Noise Cancelling</span></div>
          </div>
        </a>
        <a href="product-detail.php?id=e4" class="pcard">
          <div class="pcard-img">
            <img src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=300&h=220&fit=crop&crop=center"
              alt="Mechanical Keyboard" />
            <span class="badge-verified">PREMIUM</span>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Keyboard · Mechanical</p>
            <h3 class="pc-name">Mechanical Keyboard TKL</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span>N-Key Rollover</span></div>
          </div>
        </a>
        <a href="product-detail.php?id=e6" class="pcard">
          <div class="pcard-img">
            <img src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=220&fit=crop&crop=center"
              alt="Gaming Mouse" />
            <span class="badge-verified">PREMIUM</span>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Mouse · Performance</p>
            <h3 class="pc-name">Pro Gaming Mouse 25K DPI</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span>Ergonomic</span></div>
          </div>
        </a>
        <a href="product-detail.php?id=e7" class="pcard">
          <div class="pcard-img">
            <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=300&h=220&fit=crop&crop=center"
              alt="Gaming Setup" />
            <span class="badge-hot">🔥 FEATURED</span>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Setup · Full Gaming</p>
            <h3 class="pc-name">Full Gaming Setup Bundle</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span>Complete Kit</span></div>
          </div>
        </a>
        <a href="product-detail.php?id=e8" class="pcard">
          <div class="pcard-img">
            <img src="https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=300&h=220&fit=crop&crop=center"
              alt="Gaming Monitor" />
            <span class="badge-rare">LIMITED</span>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Monitor · 144Hz</p>
            <h3 class="pc-name">Gaming Monitor 27" 144Hz</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span>IPS Panel</span></div>
          </div>
        </a>
        <a href="product-detail.php?id=e9" class="pcard">
          <div class="pcard-img">
            <img src="https://images.unsplash.com/photo-1612198273689-b3efec00bd96?w=300&h=220&fit=crop&crop=center"
              alt="Gaming Chair" />
            <span class="badge-rare">LIMITED</span>
          </div>
          <div class="pcard-info">
            <p class="pc-cat">Chair · Ergonomic</p>
            <h3 class="pc-name">Racing Gaming Chair Pro</h3>
            <div class="pc-stars">⭐⭐⭐⭐⭐ <span>Lumbar Support</span></div>
          </div>
        </a>
      </div>
    </section>

    <!-- ===== TRUST STATS ===== -->
    <section class="trust-sec" id="trust">
      <blockquote class="ts-quote">"The right item. The right player. No uncertainty in between."</blockquote>
    </section>

  </main>

<?php include 'includes/footer.php'; ?>

<?php include 'includes/fwa_button.php'; ?>

  <script src="script.js"></script>
</body>

</html>
