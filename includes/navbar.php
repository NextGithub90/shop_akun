<?php
// $logoHref — set before including this file. Default: 'index.php'
if (!isset($logoHref)) $logoHref = 'index.php';
// $searchPlaceholder — optional custom placeholder text
if (!isset($searchPlaceholder)) $searchPlaceholder = 'Search esports jerseys, game accounts, vouchers, equipment...';
?>
  <!-- ===== NAVBAR ===== -->
  <header class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="<?php echo $logoHref; ?>" class="logo">
        <img src="IMG/Pare4Player_Wordmark_Transparent_3000px (1).png" alt="Pare4Player" height="34" />
      </a>
      <nav class="nav-menu" id="nav-menu">
        <a href="index.php#jersey">Jersey</a>
        <a href="index.php#account">Game Accounts</a>
        <a href="index.php#voucher">Vouchers</a>
        <a href="index.php#equipment">Equipment</a>
        <a href="index.php#proses">How It Works</a>
      </nav>
      <div class="nav-right">
        <button class="nav-search-btn" id="nav-search-btn" aria-label="Search">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.8" />
            <path d="M14 14L18 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
          </svg>
        </button>

        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <!-- Search overlay -->
    <div class="search-bar" id="search-bar">
      <div class="search-inner">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <circle cx="9" cy="9" r="6" stroke="#64748B" stroke-width="1.8" />
          <path d="M14 14L18 18" stroke="#64748B" stroke-width="1.8" stroke-linecap="round" />
        </svg>
        <input type="text" placeholder="<?php echo htmlspecialchars($searchPlaceholder); ?>" id="search-input"
          autocomplete="off" />
        <button class="search-close" id="search-close">×</button>
      </div>
    </div>
  </header>
