<?php
$logoHref = 'index.php';
$searchPlaceholder = 'Search jerseys, game accounts, vouchers...';
$sidebarMode = 'category';
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Categories — PARE4PLAYER | Access The Rare</title>
  <meta name="description"
    content="Explore all gaming product categories at PARE4PLAYER: Esports Jerseys, Game Accounts, Vouchers, Equipment, Boosting, Currency &amp; Roblox." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="category.css" />
</head>

<body>

<?php include 'includes/navbar.php'; ?>

<?php include 'includes/sidebar.php'; ?>

  <!-- ===== PAGE HERO / BREADCRUMB ===== -->
  <section class="cat-page-hero">
    <div class="cat-page-hero-inner">
      <div class="breadcrumb">
        <a href="index.php">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          Home
        </a>
        <span class="bread-sep">&gt;</span>
        <span class="bread-current" id="bread-current">All Categories</span>
      </div>
      <div class="cat-hero-content">
        <div class="cat-hero-icon" id="cat-hero-icon"></div>
        <div>
          <h1 class="cat-hero-title" id="cat-hero-title">All Categories</h1>
          <p class="cat-hero-desc" id="cat-hero-desc">Explore all premium gaming products and services from PARE4PLAYER</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== MAIN LAYOUT: SIDEBAR + PRODUCT GRID ===== -->
  <main class="cat-layout">

    <!-- LEFT SIDEBAR -->
    <aside class="cat-sidebar" id="cat-sidebar">
      <div class="cs-header">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
        <span>Categories</span>
      </div>
      <nav class="cs-nav" id="cs-nav"></nav>

      <div class="cs-filter-block" id="cs-filter-block"></div>

      <div class="cs-wa-block">
        <p class="cs-wa-label">Need help choosing?</p>
        <a href="https://wa.me/628558171708?text=Hello%20Pare4Player%2C%20I%20need%20assistance." target="_blank"
          class="cs-wa-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.549 4.12 1.514 5.856L0 24l6.335-1.498C8.048 23.463 9.978 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.614-.476-5.148-1.317l-.369-.219-3.761.89.921-3.67-.24-.381C2.44 15.636 2 13.875 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
          </svg>
          Chat Concierge
        </a>
      </div>
    </aside>

    <!-- RIGHT CONTENT AREA -->
    <section class="cat-content" id="cat-content">
      <button class="mobile-filter-btn" id="mobile-filter-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="11" y1="18" x2="13" y2="18" />
        </svg>
        Filter Categories
        <span class="mfb-badge" id="mfb-badge"></span>
      </button>

      <div class="ct-toolbar">
        <div class="ct-filter-tags" id="ct-filter-tags"></div>
        <div class="ct-sort">
          <label>Sort by:</label>
          <select id="sort-select">
            <option value="default">Most Popular</option>
            <option value="newest">Newest</option>
            <option value="hot">Hot Items</option>
            <option value="rare">Rare Only</option>
          </select>
        </div>
      </div>

      <div class="cat-grid" id="cat-grid"></div>

      <div class="cat-empty" id="cat-empty" style="display:none">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 15s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
        <h3>No products found</h3>
        <p>Try selecting another category or contact our concierge team</p>
        <a href="https://wa.me/628558171708" target="_blank" class="cat-empty-btn">Chat WA -&gt;</a>
      </div>

      <div class="cat-cta-banner">
        <div class="ccb-content">
          <div class="ccb-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <div>
            <h3>Didn't find what you're looking for?</h3>
            <p>Our concierge team is ready to help source rare products tailored to your needs</p>
          </div>
        </div>
        <a href="https://wa.me/628558171708?text=Hello%20Pare4Player%2C%20I%20would%20like%20to%20request%20a%20product."
          target="_blank" class="ccb-btn">Private Request -&gt;</a>
      </div>
    </section>
  </main>

  <!-- MOBILE FILTER SHEET -->
  <div class="filter-sheet-backdrop" id="filter-sheet-backdrop"></div>
  <div class="filter-sheet" id="filter-sheet">
    <div class="fs-header">
      <span>Filter Categories</span>
      <button class="fs-close" id="fs-close">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
          stroke-linecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
    <nav class="fs-nav" id="fs-nav"></nav>
    <div class="fs-footer">
      <button class="fs-apply-btn" id="fs-apply-btn">Apply Filter</button>
    </div>
  </div>

  <!-- FLOATING WA BUTTON -->
  <a href="https://wa.me/628558171708?text=Hello%20Pare4Player%2C%20I%20would%20like%20to%20order."
    class="float-wa" target="_blank" aria-label="Chat WhatsApp">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.549 4.12 1.514 5.856L0 24l6.335-1.498C8.048 23.463 9.978 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.614-.476-5.148-1.317l-.369-.219-3.761.89.921-3.67-.24-.381C2.44 15.636 2 13.875 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
    </svg>
  </a>

  <!-- PRODUCT DETAIL MODAL DIALOG (for direct modal fallback) -->
  <div class="pdm-backdrop" id="pdm-backdrop"></div>
  <div class="pdm" id="pdm" role="dialog" aria-modal="true" aria-labelledby="pdm-title">

    <!-- Close Button -->
    <button class="pdm-close" id="pdm-close" aria-label="Close product details">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
        stroke-linecap="round">
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>

    <!-- Scrollable inner -->
    <div class="pdm-inner">

      <!-- LEFT: Image Panel -->
      <div class="pdm-left">
        <div class="pdm-img-wrap" id="pdm-img-wrap">
          <img src="" alt="" id="pdm-img" />
          <div class="pdm-img-badges" id="pdm-img-badges"></div>
          <div class="pdm-img-overlay"></div>
        </div>

        <div class="pdm-trust-row">
          <div class="pdm-trust-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span>100% Secure</span>
          </div>
          <div class="pdm-trust-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span>Fast Process</span>
          </div>
          <div class="pdm-trust-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            <span>Trusted Choice</span>
          </div>
        </div>
      </div>

      <!-- RIGHT: Info Panel -->
      <div class="pdm-right">

        <!-- Breadcrumb inside modal -->
        <div class="pdm-cat-label" id="pdm-cat-label"></div>

        <!-- Title -->
        <h2 class="pdm-title" id="pdm-title"></h2>

        <!-- Rating Row -->
        <div class="pdm-rating-row" id="pdm-rating-row"></div>

        <!-- Price / Status -->
        <div class="pdm-price-block" id="pdm-price-block"></div>

        <!-- Divider -->
        <hr class="pdm-divider" />

        <!-- Features / Highlights -->
        <div class="pdm-section" id="pdm-features-section">
          <h4 class="pdm-section-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 11 12 14 22 4" />
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
            Product Highlights
          </h4>
          <ul class="pdm-features" id="pdm-features"></ul>
        </div>

        <!-- Specs Table -->
        <div class="pdm-section" id="pdm-specs-section">
          <h4 class="pdm-section-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
            Specifications
          </h4>
          <div class="pdm-specs-table" id="pdm-specs-table"></div>
        </div>

        <!-- Description -->
        <div class="pdm-section">
          <h4 class="pdm-section-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            Description
          </h4>
          <p class="pdm-desc" id="pdm-desc"></p>
        </div>

        <!-- Process Steps -->
        <div class="pdm-section">
          <h4 class="pdm-section-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            How to Order
          </h4>
          <div class="pdm-steps">
            <div class="pdm-step">
              <span class="pdm-step-num">1</span>
              <span>Click the "Order via WhatsApp" button below</span>
            </div>
            <div class="pdm-step">
              <span class="pdm-step-num">2</span>
              <span>Discuss specifications with our concierge team</span>
            </div>
            <div class="pdm-step">
              <span class="pdm-step-num">3</span>
              <span>Complete payment per verified order confirmation</span>
            </div>
            <div class="pdm-step">
              <span class="pdm-step-num">4</span>
              <span>Product dispatched or access granted immediately</span>
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="pdm-cta-group">
          <a href="#" id="pdm-wa-btn" target="_blank" class="pdm-btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.549 4.12 1.514 5.856L0 24l6.335-1.498C8.048 23.463 9.978 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.614-.476-5.148-1.317l-.369-.219-3.761.89.921-3.67-.24-.381C2.44 15.636 2 13.875 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
            </svg>
            Order via WhatsApp
          </a>
          <button class="pdm-btn-secondary" id="pdm-copy-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>
            Copy Product Info
          </button>
        </div>

        <!-- Guarantee note -->
        <div class="pdm-guarantee">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>Safe transactions with full guarantee from PARE4PLAYER Concierge</span>
        </div>

      </div><!-- /pdm-right -->
    </div><!-- /pdm-inner -->
  </div><!-- /pdm -->

  <!-- Toast notification -->
  <div class="pdm-toast" id="pdm-toast">Copied to clipboard!</div>

  <script src="category.js"></script>
  <script src="script.js"></script>
</body>

</html>
