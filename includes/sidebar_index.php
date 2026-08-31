<?php
// $logoHref — set before including this file. Default: 'index.php'
if (!isset($logoHref)) $logoHref = 'index.php';
?>
  <!-- ===== PROFESSIONAL MOBILE SIDEBAR DRAWER ===== -->
  <div class="sidebar-backdrop" id="sidebar-backdrop"></div>
  <aside class="sidebar-drawer" id="sidebar-drawer" aria-hidden="true">
    <!-- Sidebar Header -->
    <div class="sb-header">
      <a href="<?php echo $logoHref; ?>" class="sb-logo">
        <img src="IMG/Pare4Player_Wordmark_Transparent_3000px (1).png" alt="Pare4Player" height="28" />
      </a>
      <button class="sb-close" id="sb-close" aria-label="Close Menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div class="sb-body">
      <!-- Active Status Badge -->
      <div class="sb-status">
        <span class="sb-status-dot"></span>
        <span class="sb-status-text"><strong>Concierge Active</strong> · 09:00–22:00 WIB</span>
      </div>

      <!-- Quick Search Input inside Sidebar -->
      <form class="sb-search-form" id="sb-search-form" onsubmit="event.preventDefault();">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <circle cx="9" cy="9" r="6" stroke="#94A3B8" stroke-width="1.8" />
          <path d="M14 14L18 18" stroke="#94A3B8" stroke-width="1.8" stroke-linecap="round" />
        </svg>
        <input type="text" placeholder="Search jerseys, accounts, vouchers..." id="sb-search-input"
          autocomplete="off" />
      </form>

      <!-- Nav Section 1: Main Products -->
      <div class="sb-section-title">PRODUCT CATALOG</div>
      <nav class="sb-nav">
        <a href="index.php#jersey" class="sb-link">
          <div class="sb-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
            </svg>
          </div>
          <span class="sb-text">Jersey &amp; Apparel</span>
        </a>
        <a href="index.php#account" class="sb-link">
          <div class="sb-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="4" />
              <path d="M6 12h4m-2-2v4" />
              <circle cx="17" cy="10" r="1" fill="currentColor" />
              <circle cx="15" cy="14" r="1" fill="currentColor" />
            </svg>
          </div>
          <span class="sb-text">Game Accounts</span>
        </a>
        <a href="index.php#voucher" class="sb-link">
          <div class="sb-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
              <path d="M2 9h20M12 21L8 9m4 12l4-12" />
            </svg>
          </div>
          <span class="sb-text">Vouchers &amp; Top Up</span>
        </a>
        <a href="index.php#equipment" class="sb-link">
          <div class="sb-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 18v-6a9 9 0 0118 0v6" />
              <path
                d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
            </svg>
          </div>
          <span class="sb-text">Gaming Equipment</span>
        </a>
      </nav>

      <!-- Nav Section 2: Services & Info -->
      <div class="sb-section-title">SERVICES &amp; GUARANTEE</div>
      <nav class="sb-nav">
        <a href="index.php#proses" class="sb-link">
          <div class="sb-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <span class="sb-text">How It Works (Rare Access)</span>
        </a>
        <a href="index.php#trust" class="sb-link">
          <div class="sb-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <span class="sb-text">Security &amp; Guarantee</span>
        </a>
        <a href="https://wa.me/628558171708?text=Hello%20Pare4Player%2C%20I%20want%20to%20make%20a%20custom%20request."
          target="_blank" class="sb-link">
          <div class="sb-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <span class="sb-text">Private Request / Custom</span>
        </a>
      </nav>
    </div>

    <!-- Sidebar Footer / CTA -->
    <div class="sb-footer">
      <a href="https://wa.me/628558171708?text=Hello%20Pare4Player%2C%20I%20would%20like%20to%20order." target="_blank"
        class="sb-btn-wa">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
          <path
            d="M12 0C5.373 0 0 5.373 0 12c0 2.124.549 4.12 1.514 5.856L0 24l6.335-1.498C8.048 23.463 9.978 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.614-.476-5.148-1.317l-.369-.219-3.761.89.921-3.67-.24-.381C2.44 15.636 2 13.875 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
        </svg>
        <span>Chat WhatsApp Concierge</span>
      </a>

      <div class="sb-brand-tag">
        <span>ACCESS THE RARE · FOR THE PLAYERS</span>
      </div>
    </div>
  </aside>
