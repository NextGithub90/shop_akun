<?php
$logoHref = 'index.php';
$searchPlaceholder = 'Search products...';
$sidebarMode = 'product';
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Product Details — PARE4PLAYER | Access The Rare</title>
  <meta name="description" content="Premium gaming product details at PARE4PLAYER. Custom jerseys, verified game accounts, vouchers, equipment, boosting, and currency." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="product-detail.css" />
</head>

<body>

<?php include 'includes/navbar.php'; ?>

<?php include 'includes/sidebar.php'; ?>

  <!-- Loading skeleton (shown while JS loads data) -->
  <div id="pd-loading" class="pd-loading-screen">
    <div class="pd-loading-inner">
      <div class="pd-skel-img"></div>
      <div class="pd-skel-info">
        <div class="pd-skel-line pd-skel-sm"></div>
        <div class="pd-skel-line pd-skel-lg"></div>
        <div class="pd-skel-line pd-skel-md"></div>
        <div class="pd-skel-line pd-skel-sm"></div>
      </div>
    </div>
  </div>

  <!-- ===== MAIN PRODUCT DETAIL ===== -->
  <main id="pd-main" class="pd-main" style="display:none">

    <!-- HERO BANNER -->
    <div class="pd-hero" id="pd-hero">
      <div class="pd-hero-bg" id="pd-hero-bg"></div>
      <div class="pd-hero-overlay"></div>
      <div class="pd-hero-content">
        <!-- Breadcrumb -->
        <nav class="pd-breadcrumb" id="pd-breadcrumb">
          <a href="index.php">Home</a>
          <span class="pd-bread-sep">›</span>
          <a href="category.php" id="pd-bread-cat">Category</a>
          <span class="pd-bread-sep">›</span>
          <span id="pd-bread-name">Loading...</span>
        </nav>
      </div>
    </div>

    <!-- DETAIL LAYOUT -->
    <div class="pd-layout">

      <!-- LEFT: Product Image -->
      <div class="pd-col-img">
        <div class="pd-img-card">
          <div class="pd-img-wrap">
            <img id="pd-img" src="" alt="" />
            <div class="pd-img-badges" id="pd-img-badges"></div>
          </div>
          <!-- Trust badges below image -->
          <div class="pd-trust-grid">
            <div class="pd-trust-item">
              <div class="pd-trust-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <div>
                <div class="pd-trust-label">100% Secure</div>
                <div class="pd-trust-sub">Transaction safety guaranteed</div>
              </div>
            </div>
            <div class="pd-trust-item">
              <div class="pd-trust-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <div>
                <div class="pd-trust-label">Fast Processing</div>
                <div class="pd-trust-sub">Response within minutes</div>
              </div>
            </div>
            <div class="pd-trust-item">
              <div class="pd-trust-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
              </div>
              <div>
                <div class="pd-trust-label">Trusted Choice</div>
                <div class="pd-trust-sub">Thousands of satisfied players</div>
              </div>
            </div>
            <div class="pd-trust-item">
              <div class="pd-trust-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <div class="pd-trust-label">Full Guarantee</div>
                <div class="pd-trust-sub">Money back if unfulfilled</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Share & Copy -->
        <div class="pd-share-row">
          <button class="pd-share-btn" id="pd-copy-link" onclick="copyPageLink()">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
            </svg>
            Copy Link
          </button>
          <a href="https://api.whatsapp.com/send?text=" id="pd-wa-share" target="_blank" class="pd-share-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.549 4.12 1.514 5.856L0 24l6.335-1.498C8.048 23.463 9.978 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.614-.476-5.148-1.317l-.369-.219-3.761.89.921-3.67-.24-.381C2.44 15.636 2 13.875 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
            </svg>
            Share WA
          </a>
        </div>
      </div>

      <!-- RIGHT: Product Info -->
      <div class="pd-col-info">

        <!-- Category + badges row -->
        <div class="pd-top-row">
          <span class="pd-cat-pill" id="pd-cat-pill"></span>
          <div class="pd-badges-inline" id="pd-badges-inline"></div>
        </div>

        <!-- Product name -->
        <h1 class="pd-name" id="pd-name">Loading...</h1>

        <!-- Rating + verified -->
        <div class="pd-rating-row" id="pd-rating-row"></div>

        <!-- Price block -->
        <div class="pd-price-card" id="pd-price-card"></div>

        <!-- Description -->
        <div class="pd-section">
          <div class="pd-section-heading">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            Product Description
          </div>
          <p class="pd-desc" id="pd-desc"></p>
        </div>

        <!-- Key features -->
        <div class="pd-section" id="pd-features-section">
          <div class="pd-section-heading">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 11 12 14 22 4"/>
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
            </svg>
            Product Highlights
          </div>
          <ul class="pd-features-list" id="pd-features-list"></ul>
        </div>

        <!-- Specs table -->
        <div class="pd-section" id="pd-specs-section">
          <div class="pd-section-heading">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"/>
              <line x1="8" y1="12" x2="21" y2="12"/>
              <line x1="8" y1="18" x2="21" y2="18"/>
              <line x1="3" y1="6" x2="3.01" y2="6"/>
              <line x1="3" y1="12" x2="3.01" y2="12"/>
              <line x1="3" y1="18" x2="3.01" y2="18"/>
            </svg>
            Detailed Specifications
          </div>
          <div class="pd-specs-table" id="pd-specs-table"></div>
        </div>

        <!-- Order steps -->
        <div class="pd-section">
          <div class="pd-section-heading">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            How to Order
          </div>
          <div class="pd-steps">
            <div class="pd-step">
              <div class="pd-step-num">1</div>
              <div class="pd-step-info">
                <div class="pd-step-title">Click Order Button</div>
                <div class="pd-step-desc">Tap "Order via WhatsApp" below to open a direct chat.</div>
              </div>
            </div>
            <div class="pd-step-connector"></div>
            <div class="pd-step">
              <div class="pd-step-num">2</div>
              <div class="pd-step-info">
                <div class="pd-step-title">Discuss with Concierge</div>
                <div class="pd-step-desc">Our team will assist with specifications, sizing, or escrow.</div>
              </div>
            </div>
            <div class="pd-step-connector"></div>
            <div class="pd-step">
              <div class="pd-step-num">3</div>
              <div class="pd-step-info">
                <div class="pd-step-title">Complete Payment</div>
                <div class="pd-step-desc">Pay securely per confirmation with our verified concierge.</div>
              </div>
            </div>
            <div class="pd-step-connector"></div>
            <div class="pd-step">
              <div class="pd-step-num">4</div>
              <div class="pd-step-info">
                <div class="pd-step-title">Fulfillment &amp; Hand-Off</div>
                <div class="pd-step-desc">Product dispatched or credentials transferred immediately.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA buttons -->
        <div class="pd-cta-group">
          <a href="#" id="pd-order-btn" target="_blank" class="pd-btn-order">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.549 4.12 1.514 5.856L0 24l6.335-1.498C8.048 23.463 9.978 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.614-.476-5.148-1.317l-.369-.219-3.761.89.921-3.67-.24-.381C2.44 15.636 2 13.875 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
            </svg>
            Order via WhatsApp
          </a>
          <a href="category.php" class="pd-btn-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Browse All Products
          </a>
        </div>

        <!-- Guarantee note -->
        <div class="pd-guarantee-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Transactions fully guaranteed by PARE4PLAYER Concierge — your trust is our highest priority.
        </div>

      </div><!-- /pd-col-info -->
    </div><!-- /pd-layout -->

    <!-- RELATED PRODUCTS -->
    <section class="pd-related" id="pd-related-section">
      <div class="pd-related-inner">
        <div class="pd-related-header">
          <h2 class="pd-related-title">Recommended Products</h2>
          <a href="category.php" class="pd-related-see-all">View All →</a>
        </div>
        <div class="pd-related-grid" id="pd-related-grid"></div>
      </div>
    </section>

    <!-- FOOTER CTA -->
    <section class="pd-footer-cta">
      <div class="pd-footer-cta-inner">
        <div class="pd-fca-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
        </div>
        <div>
          <h3>Didn't find what you're looking for?</h3>
          <p>Our concierge team is ready to help source rare items tailored to your needs</p>
        </div>
        <a href="https://wa.me/628558171708?text=Hello%20PARE4PLAYER%2C%20I%20would%20like%20to%20submit%20a%20private%20request." target="_blank" class="pd-fca-btn">
          Private Request →
        </a>
      </div>
    </section>

  </main>

  <!-- Not found state -->
  <div id="pd-notfound" class="pd-notfound" style="display:none">
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
    <h2>Product Not Found</h2>
    <p>The product you are looking for is unavailable or has already been claimed.</p>
    <a href="category.php" class="pd-notfound-btn">← Back to Categories</a>
  </div>

  <!-- Floating WA -->
  <a href="https://wa.me/628558171708?text=Hello%20Pare4Player%2C%20I%20would%20like%20to%20order." class="float-wa" target="_blank" aria-label="Chat WhatsApp">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.549 4.12 1.514 5.856L0 24l6.335-1.498C8.048 23.463 9.978 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.614-.476-5.148-1.317l-.369-.219-3.761.89.921-3.67-.24-.381C2.44 15.636 2 13.875 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
    </svg>
  </a>

  <!-- Toast -->
  <div class="pd-toast" id="pd-toast">✓ Link copied!</div>

  <script src="category.js"></script>
  <script src="product-detail.js"></script>
</body>

</html>
