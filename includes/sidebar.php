<?php
// $logoHref — set before including this file. Default: 'index.php'
if (!isset($logoHref)) $logoHref = 'index.php';
// $sidebarMode — 'category' or 'product' or default (generic nav)
if (!isset($sidebarMode)) $sidebarMode = 'generic';
?>
  <!-- ===== MOBILE SIDEBAR DRAWER ===== -->
  <div class="sidebar-backdrop" id="sidebar-backdrop"></div>
  <aside class="sidebar-drawer" id="sidebar-drawer" aria-hidden="true">
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
      <div class="sb-status">
        <span class="sb-status-dot"></span>
        <span class="sb-status-text"><strong>Concierge Active</strong> · 09:00–22:00 WIB</span>
      </div>

      <?php if ($sidebarMode === 'category'): ?>
      <!-- Category page: nav is dynamically injected by category.js -->
      <div class="sb-section-title">CATEGORIES</div>
      <nav class="sb-nav" id="mobile-cat-nav"></nav>

      <?php elseif ($sidebarMode === 'product'): ?>
      <!-- Product detail page: static nav links -->
      <div class="sb-section-title">NAVIGATION</div>
      <nav class="sb-nav">
        <a href="category.php" class="sb-link">
          <div class="sb-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg></div>
          <span class="sb-text">All Categories</span>
        </a>
        <a href="category.php?cat=jersey" class="sb-link">
          <div class="sb-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/></svg></div>
          <span class="sb-text">Jersey &amp; Apparel</span>
        </a>
        <a href="category.php?cat=accounts" class="sb-link">
          <div class="sb-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4m-2-2v4"/></svg></div>
          <span class="sb-text">Game Accounts</span>
        </a>
        <a href="category.php?cat=topup" class="sb-link">
          <div class="sb-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9l4-6z"/></svg></div>
          <span class="sb-text">Vouchers &amp; Top Up</span>
        </a>
      </nav>
      <?php endif; ?>
    </div>
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
      <div class="sb-brand-tag"><span>ACCESS THE RARE · FOR THE PLAYERS</span></div>
    </div>
  </aside>
