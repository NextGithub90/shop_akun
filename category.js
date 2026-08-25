/* ════════════════════════════════════════════════════════════
   PARE4PLAYER · Dedicated Category Marketplace Hub (U7BUY Style)
   category.js · Dynamic Filter & Catalog Engine
   ════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // Catalog Database by Category
  const CATALOG = {
    accounts: {
      title: 'Accounts',
      count: '131 Game & Produk',
      breadcrumb: 'Accounts',
      items: [
        {
          name: 'GTA 5 Online Accounts',
          cat: 'Grand Theft Auto V · PC / Console',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.9',
          reviews: '35K+ reviews',
          img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Fortnite Accounts',
          cat: 'Battle Royale · OG Skins & V-Bucks',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.9',
          reviews: '29K+ reviews',
          img: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Blox Fruits Accounts',
          cat: 'Roblox · Max LVL & Kitsune',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.9',
          reviews: '25K+ reviews',
          img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Valorant Accounts',
          cat: 'Riot Games · Radiant & Kuronami',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.9',
          reviews: '18K+ reviews',
          img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: "Rainbow Six Siege Accounts",
          cat: 'Ubisoft · Glacier & Champion',
          badge: 'verified',
          badgeText: '✓ VERIFIED',
          rating: '4.9',
          reviews: '15K+ reviews',
          img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=480&h=330&fit=crop&crop=center',
          filter: 'verified'
        },
        {
          name: 'Adopt Me (Roblox)',
          cat: 'Roblox · Shadow & Bat Dragon',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.9',
          reviews: '21K+ reviews',
          img: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Mobile Legends Sultan',
          cat: 'Moonton · All Collector & Mythic',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.9',
          reviews: '42K+ reviews',
          img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Free Fire Old Sultan',
          cat: 'Garena · Season 1 & Megalodon',
          badge: 'rare',
          badgeText: '⭐ RARE',
          rating: '4.9',
          reviews: '31K+ reviews',
          img: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=480&h=330&fit=crop&crop=center',
          filter: 'rare'
        },
        {
          name: 'PUBG Mobile Conqueror',
          cat: 'Krafton · M416 Glacier Max',
          badge: 'rare',
          badgeText: '⭐ RARE',
          rating: '4.9',
          reviews: '19K+ reviews',
          img: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=480&h=330&fit=crop&crop=center',
          filter: 'rare'
        },
        {
          name: 'Genshin Impact AR60',
          cat: 'HoYoverse · C6 5-Star & R5 Signature',
          badge: 'verified',
          badgeText: '✓ VERIFIED',
          rating: '4.9',
          reviews: '24K+ reviews',
          img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=480&h=330&fit=crop&crop=center',
          filter: 'verified'
        },
        {
          name: 'Rocket League Accounts',
          cat: 'Psyonix · Alpha Boost & Supersonic',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.8',
          reviews: '12K+ reviews',
          img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Forza Horizon 6 Accounts',
          cat: 'Playground · All Rare Cars Unlocked',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.9',
          reviews: '14K+ reviews',
          img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        }
      ]
    },

    topup: {
      title: 'Top Up & Voucher',
      count: '75 Layanan Top Up',
      breadcrumb: 'Top Up',
      items: [
        {
          name: 'Mobile Legends 86 - 706 Diamonds',
          cat: 'Moonton · Proses 1-3 Detik via ID',
          badge: 'hot',
          badgeText: '🔥 INSTANT',
          rating: '4.9',
          reviews: '85K+ topup',
          img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Free Fire 720 - 2180 Diamonds',
          cat: 'Garena · 100% Legal & Cepat',
          badge: 'hot',
          badgeText: '🔥 INSTANT',
          rating: '4.9',
          reviews: '64K+ topup',
          img: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Valorant Points 1125 - 5400 VP',
          cat: 'Riot Games · Kode Redeem Resmi',
          badge: 'verified',
          badgeText: '✓ VERIFIED',
          rating: '4.9',
          reviews: '41K+ topup',
          img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=480&h=330&fit=crop&crop=center',
          filter: 'verified'
        },
        {
          name: 'PUBG Mobile 660 - 1800 Unknown Cash',
          cat: 'Krafton · Auto Delivery',
          badge: 'hot',
          badgeText: '🔥 INSTANT',
          rating: '4.9',
          reviews: '33K+ topup',
          img: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Genshin Genesis Crystals 6480',
          cat: 'HoYoverse · Blessing of Welkin Moon',
          badge: 'verified',
          badgeText: '✓ VERIFIED',
          rating: '4.9',
          reviews: '28K+ topup',
          img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=480&h=330&fit=crop&crop=center',
          filter: 'verified'
        },
        {
          name: 'Roblox Robux Digital Voucher',
          cat: 'Roblox Corp · Gift Card Resmi',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.9',
          reviews: '52K+ topup',
          img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Honor of Kings Tokens Instan',
          cat: 'Level Infinite · ID Server Indo',
          badge: 'verified',
          badgeText: '✓ VERIFIED',
          rating: '4.9',
          reviews: '16K+ topup',
          img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=480&h=330&fit=crop&crop=center',
          filter: 'verified'
        },
        {
          name: 'Steam Wallet IDR Digital Code',
          cat: 'Valve · Langsung Masuk Saldo',
          badge: 'rare',
          badgeText: '⭐ RARE',
          rating: '5.0',
          reviews: '70K+ topup',
          img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=480&h=330&fit=crop&crop=center',
          filter: 'rare'
        }
      ]
    },

    jersey: {
      title: 'Jersey & Apparel Esport',
      count: '48 Desain & Custom',
      breadcrumb: 'Jersey Esport',
      items: [
        {
          name: 'Devil Stripe Jersey Custom',
          cat: 'Jersey · Dryfit Microfiber Sublimasi',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.9',
          reviews: '48 Custom Made',
          img: 'IMG/81589298_497003194277936_4353456598723592192_n.jpg.jpeg',
          filter: 'hot'
        },
        {
          name: 'Gold Grid Esport Hoodie',
          cat: 'Hoodie · Premium Cotton Fleece',
          badge: 'rare',
          badgeText: '⭐ COLLECTOR',
          rating: '4.9',
          reviews: '32 Orders',
          img: 'IMG/81819510_497003264277929_1991857801541976064_n.jpg.jpeg',
          filter: 'rare'
        },
        {
          name: 'Geometric Edge Fullprint Hoodie',
          cat: 'Hoodie · High Contrast Esport',
          badge: 'rare',
          badgeText: '⭐ COLLECTOR',
          rating: '4.9',
          reviews: '27 Orders',
          img: 'IMG/75247421_452163855428537_6577748504087625728_n.jpg.jpeg',
          filter: 'rare'
        },
        {
          name: 'Tactical Grid Black Gold Hoodie',
          cat: 'Outerwear · Storm Proof Zip',
          badge: 'verified',
          badgeText: '✓ VERIFIED',
          rating: '4.8',
          reviews: '19 Orders',
          img: 'IMG/75402042_452163845428538_3824576894284595200_n.jpg.jpeg',
          filter: 'verified'
        },
        {
          name: 'Veni Vidi Vici Casual Tee',
          cat: 'Apparel · Heavy Cotton 24s',
          badge: 'verified',
          badgeText: '✓ VERIFIED',
          rating: '4.9',
          reviews: '61 Orders',
          img: 'IMG/472313641_1625647298080181_4609009896057739488_n.jpg.jpeg',
          filter: 'verified'
        },
        {
          name: 'Pare Classic Dark Edition Tee',
          cat: 'Casual · Silk Screen Ink',
          badge: 'verified',
          badgeText: '✓ VERIFIED',
          rating: '4.9',
          reviews: '44 Orders',
          img: 'IMG/88055687_535333090444946_5042498455423942656_n.jpg.jpeg',
          filter: 'verified'
        }
      ]
    },

    items: {
      title: 'Gaming Equipment & Gear',
      count: '128 Gear Profesional',
      breadcrumb: 'Equipment',
      items: [
        {
          name: 'Racing Gaming Chair Pro',
          cat: 'Ergonomic · 4D Armrest & Lumbar',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.9',
          reviews: '450+ sold',
          img: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'HyperX Cloud Alpha Wireless',
          cat: 'Headset · 300 Jam Battery Life',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.9',
          reviews: '890+ sold',
          img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Logitech G Pro X Superlight 2',
          cat: 'Mouse · Hero 2 32K Sensor',
          badge: 'verified',
          badgeText: '✓ VERIFIED',
          rating: '5.0',
          reviews: '1.2K+ sold',
          img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=480&h=330&fit=crop&crop=center',
          filter: 'verified'
        },
        {
          name: 'Custom Mechanical Keyboard 75%',
          cat: 'Keyboard · Gateron Oil King Switches',
          badge: 'rare',
          badgeText: '⭐ RARE',
          rating: '4.9',
          reviews: '310+ sold',
          img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=480&h=330&fit=crop&crop=center',
          filter: 'rare'
        },
        {
          name: 'Extended Speed Gaming Mousepad XXL',
          cat: 'Surface · Cordura Fabric Waterproof',
          badge: 'verified',
          badgeText: '✓ VERIFIED',
          rating: '4.8',
          reviews: '670+ sold',
          img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=480&h=330&fit=crop&crop=center',
          filter: 'verified'
        }
      ]
    },

    coins: {
      title: 'Coins & Currency',
      count: '50 Mata Uang Game',
      breadcrumb: 'Currency',
      items: [
        {
          name: 'GTA 5 Cash Drop 500M Direct',
          cat: 'GTA V · Safe Transfer Anti-Ban',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.9',
          reviews: '8.4K+ orders',
          img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Blox Fruits 50M Beli + Bones',
          cat: 'Roblox · Instant Delivery',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.9',
          reviews: '12K+ orders',
          img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'EA Sports FC 25 Ultimate Coins',
          cat: 'EA Sports · Comfort Trade Escrow',
          badge: 'verified',
          badgeText: '✓ VERIFIED',
          rating: '4.8',
          reviews: '6.2K+ orders',
          img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=480&h=330&fit=crop&crop=center',
          filter: 'verified'
        },
        {
          name: 'Roblox Robux Clean Tax Covered',
          cat: 'Roblox · Legal Group Funds',
          badge: 'rare',
          badgeText: '⭐ RARE',
          rating: '5.0',
          reviews: '15K+ orders',
          img: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?w=480&h=330&fit=crop&crop=center',
          filter: 'rare'
        }
      ]
    },

    boosting: {
      title: 'Boosting & Joki Rank',
      count: '57 Layanan Joki',
      breadcrumb: 'Boosting',
      items: [
        {
          name: 'MLBB Joki Mythic Immortal',
          cat: 'Mobile Legends · 99% Winrate Pro',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '5.0',
          reviews: '3.4K+ joki',
          img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Valorant Radiant & Immortal Boost',
          cat: 'Riot Games · Top 500 Player Solo',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '5.0',
          reviews: '2.1K+ joki',
          img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Free Fire Grandmaster Push',
          cat: 'Garena · Safe KD & Winrate',
          badge: 'verified',
          badgeText: '✓ VERIFIED',
          rating: '4.9',
          reviews: '1.8K+ joki',
          img: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=480&h=330&fit=crop&crop=center',
          filter: 'verified'
        },
        {
          name: 'Blox Fruits Level Max 2550 + Mastery',
          cat: 'Roblox · 100% Manual No Script',
          badge: 'rare',
          badgeText: '⭐ RARE',
          rating: '4.9',
          reviews: '4.5K+ joki',
          img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=480&h=330&fit=crop&crop=center',
          filter: 'rare'
        }
      ]
    },

    subscription: {
      title: 'Subscription & Digital Access',
      count: '17 Layanan Premium',
      breadcrumb: 'Subscription',
      items: [
        {
          name: 'Discord Nitro Boost 1 Tahun',
          cat: 'Discord · Full Garansi 12 Bulan',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.9',
          reviews: '4.1K+ buyer',
          img: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Spotify Premium Family 1 Tahun',
          cat: 'Spotify · Akun Pribadi No Crash',
          badge: 'verified',
          badgeText: '✓ VERIFIED',
          rating: '4.9',
          reviews: '6.8K+ buyer',
          img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=480&h=330&fit=crop&crop=center',
          filter: 'verified'
        },
        {
          name: 'YouTube Premium 1 Tahun Full',
          cat: 'Google · Anti Buffering & Bebas Iklan',
          badge: 'verified',
          badgeText: '✓ VERIFIED',
          rating: '4.9',
          reviews: '9.2K+ buyer',
          img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=480&h=330&fit=crop&crop=center',
          filter: 'verified'
        },
        {
          name: 'Netflix 4K UHD Private Profile',
          cat: 'Streaming · Garansi Aktif Penuh',
          badge: 'rare',
          badgeText: '⭐ RARE',
          rating: '4.9',
          reviews: '3.7K+ buyer',
          img: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=480&h=330&fit=crop&crop=center',
          filter: 'rare'
        }
      ]
    },

    roblox: {
      title: 'Roblox Games & Exclusive Items',
      count: '83 Game & Item Rare',
      breadcrumb: 'Roblox Games',
      items: [
        {
          name: 'Blox Fruits Kitsune & Dragon Fruit',
          cat: 'Blox Fruits · Permanent Physical Fruit',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.9',
          reviews: '18K+ trade',
          img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Adopt Me Shadow Dragon FR',
          cat: 'Adopt Me · Full Grown Legendary',
          badge: 'hot',
          badgeText: '🔥 HOT',
          rating: '4.9',
          reviews: '14K+ trade',
          img: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?w=480&h=330&fit=crop&crop=center',
          filter: 'hot'
        },
        {
          name: 'Pet Simulator 99 Huge Pets Pack',
          cat: 'PS99 · Exclusive Titanic & Huge',
          badge: 'rare',
          badgeText: '⭐ RARE',
          rating: '4.9',
          reviews: '9.8K+ trade',
          img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=480&h=330&fit=crop&crop=center',
          filter: 'rare'
        },
        {
          name: 'Toilet Tower Defense Godly Units',
          cat: 'TTD · Upgraded Titan Clockman',
          badge: 'verified',
          badgeText: '✓ VERIFIED',
          rating: '4.8',
          reviews: '7.1K+ trade',
          img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=480&h=330&fit=crop&crop=center',
          filter: 'verified'
        }
      ]
    }
  };

  // DOM Elements
  const catButtons = document.querySelectorAll('.u7-cat-item');
  const cardsGrid = document.getElementById('u7-cards-grid');
  const activeHeading = document.getElementById('u7-active-heading');
  const activeCount = document.getElementById('u7-active-count');
  const breadcrumbCurrent = document.getElementById('u7-bc-current');
  const filterButtons = document.querySelectorAll('.u7-filter-btn');
  const searchInput = document.getElementById('u7-filter-search');

  let currentCategory = 'accounts';
  let currentFilter = 'all';
  let currentSearch = '';

  // Parse URL Query Params (?cat=...)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  if (catParam && CATALOG[catParam]) {
    currentCategory = catParam;
  }

  // Render Category Cards
  function renderCards() {
    if (!cardsGrid) return;
    const catData = CATALOG[currentCategory] || CATALOG.accounts;

    // Update Headings
    if (activeHeading) activeHeading.textContent = catData.title;
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = catData.breadcrumb;

    // Filter Items
    let filtered = catData.items.filter(item => {
      // Sub-filter tag
      const matchFilter = (currentFilter === 'all') || (item.filter === currentFilter) || (currentFilter === 'hot' && item.badge === 'hot');
      // Search term
      const matchSearch = !currentSearch ||
        item.name.toLowerCase().includes(currentSearch) ||
        item.cat.toLowerCase().includes(currentSearch);

      return matchFilter && matchSearch;
    });

    if (activeCount) activeCount.textContent = `${filtered.length} Game & Produk`;

    // Render Grid HTML
    if (filtered.length === 0) {
      cardsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #8892A4;">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
          <h3 style="font-family:'Sora',sans-serif; color:#F2F3F5; font-size:1.1rem; margin-bottom:6px;">Tidak ada produk yang cocok</h3>
          <p style="font-size:0.85rem;">Coba cari dengan kata kunci lain atau pilih filter "Semua".</p>
        </div>
      `;
      return;
    }

    cardsGrid.innerHTML = filtered.map(item => {
      const waMessage = encodeURIComponent(`Halo Pare4Player, saya tertarik untuk order item: ${item.name} (${item.cat}). Mohon info ketersediaan stok & harga.`);
      const waUrl = `https://wa.me/6281234567890?text=${waMessage}`;

      return `
        <a href="${waUrl}" target="_blank" class="u7-card">
          <div class="u7-card-img">
            <img src="${item.img}" alt="${item.name}" loading="lazy" />
            <span class="u7-card-badge ${item.badge}">${item.badgeText}</span>
          </div>
          <div class="u7-card-body">
            <div>
              <p class="u7-card-cat">${item.cat}</p>
              <h3 class="u7-card-title">${item.name}</h3>
            </div>
            <div class="u7-card-meta">
              <span class="u7-card-rating">⭐ ${item.rating}</span>
              <span class="u7-card-reviews">${item.reviews}</span>
            </div>
          </div>
        </a>
      `;
    }).join('');
  }

  // Set Active Category UI
  function selectCategory(catKey) {
    if (!CATALOG[catKey]) return;
    currentCategory = catKey;
    currentFilter = 'all';
    if (searchInput) searchInput.value = '';
    currentSearch = '';

    // Update active class on sidebar buttons
    catButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.cat === catKey);
    });

    // Reset filter buttons
    filterButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === 'all');
    });

    // Update URL without reload
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('cat', catKey);
    window.history.replaceState({}, '', newUrl);

    renderCards();
  }

  // Event Listeners for Category Buttons
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectCategory(btn.dataset.cat);
    });
  });

  // Event Listeners for Filter Chips
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderCards();
    });
  });

  // Event Listener for Category Search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      renderCards();
    });
  }

  // Initial State Activation
  selectCategory(currentCategory);

});
