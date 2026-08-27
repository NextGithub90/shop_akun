/* ════════════════════════════════════════════════════════════
   PARE4PLAYER · category.js  v2.0
   Handles: category data, product grid, product detail modal,
   filter sheet, sort, URL params, navbar & drawer
   ════════════════════════════════════════════════════════════ */

/* ─── CATEGORY DEFINITIONS ─── */
const CATEGORIES = [
  {
    id: 'all', label: 'All Categories', count: 84,
    desc: 'Explore all premium gaming products & services at PARE4PLAYER',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>`,
    subcats: []
  },
  {
    id: 'jersey', label: 'Jersey & Apparel', count: 24,
    desc: 'Custom esports jerseys, all-over print hoodies, and premium gaming apparel',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/></svg>`,
    subcats: ['Custom Jersey', 'Hoodie', 'Casual Tee', 'Full Sublimation']
  },
  {
    id: 'accounts', label: 'Game Accounts', count: 18,
    desc: 'Verified gaming accounts · safe transfer · transparent track record',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4m-2-2v4"/><circle cx="17" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="14" r="1" fill="currentColor"/></svg>`,
    subcats: ['Mobile Legends', 'Valorant', 'Free Fire', 'PUBG Mobile', 'Genshin Impact', 'Honkai Star Rail']
  },
  {
    id: 'topup', label: 'Vouchers & Top Up', count: 36,
    desc: 'Instant diamonds, UC, Robux, and VP top-up — 100% official & legal',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9l4-6z"/><path d="M2 9h20M12 21L8 9m4 12l4-12"/></svg>`,
    subcats: ['Mobile Legends', 'Free Fire', 'PUBG Mobile', 'Valorant', 'Genshin Impact', 'Steam Wallet']
  },
  {
    id: 'items', label: 'Gaming Equipment', count: 16,
    desc: 'High-performance headsets, mousepads, controllers, and battle gear',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>`,
    subcats: ['Headset', 'Mousepad', 'Controller', 'Keyboard', 'Mouse', 'Monitor', 'Gaming Chair']
  },
  {
    id: 'boosting', label: 'Boosting Services', count: 15,
    desc: 'Professional rank boosting services · secure & certified players',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 17.5L3 6V3h3l11.5 11.5"/><path d="M13 19l6-6"/><path d="M16 16l4 4"/><path d="M19 21l2-2"/><path d="M14.5 6.5L18 3h3v3l-3.5 3.5"/><path d="M5 19l4-4"/><path d="M3 21l2-2"/></svg>`,
    subcats: ['ML Boost', 'Valorant Boost', 'FF Boost', 'PUBG Boost']
  },
  {
    id: 'coins', label: 'Game Currency', count: 22,
    desc: 'In-game currencies, gold, diamonds, and gift codes for top games',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="7" rx="9" ry="3"/><path d="M3 7v6c0 1.66 4.03 3 9 3s9-1.34 9-3V7"/><path d="M3 13v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/></svg>`,
    subcats: ['ML Diamonds', 'FF Diamonds', 'PUBG UC', 'Robux', 'Steam Wallet']
  },
  {
    id: 'roblox', label: 'Roblox', count: 8,
    desc: 'Official Robux packages, rare avatar items, and collector accounts',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M9 9h6v6H9z" fill="currentColor"/></svg>`,
    subcats: ['Robux', 'Roblox Items', 'Roblox Accounts']
  }
];

/* ─── FULL PRODUCT DATA ─── */
const PRODUCTS = {
  jersey: [
    {
      id: 'j1', name: 'Devil Stripe Jersey', cat: 'Jersey · Custom',
      badge: 'HOT', badge2: 'RARE',
      img: 'IMG/81589298_497003194277936_4353456598723592192_n.jpg.jpeg',
      stars: 5, reviews: 48, price: 'Chat WA', verified: false,
      desc: 'Exclusive esports jersey featuring the iconic Devil Stripe design. High-definition full sublimation printing on premium breathable polyester, crafted for competitive teams and gaming enthusiasts.',
      features: [
        'Full sublimation printing — vibrant color retention, zero fade',
        'Premium performance polyester — ultra-lightweight, cool & moisture-wicking',
        'Custom gamertag & squad number customization available',
        'Inclusive sizing from XS up to XXXL',
        'Reinforced double-stitched seams for tournament durability',
        'Ideal for competitive LANs, streaming, and everyday wear'
      ],
      specs: [
        { key: 'Type', val: 'Custom Esports Jersey' },
        { key: 'Material', val: '100% Premium Micro-Polyester' },
        { key: 'Print Technique', val: 'Full Sublimation HD', highlight: true },
        { key: 'Sizes', val: 'XS / S / M / L / XL / XXL / XXXL' },
        { key: 'Customization', val: 'Gamertag, Number & Team Logo', highlight: true },
        { key: 'MOQ', val: '1 piece (Custom Bespoke)' },
        { key: 'Lead Time', val: '7–14 business days' }
      ]
    },
    {
      id: 'j2', name: 'Gold Grid Hoodie', cat: 'Hoodie · Esport',
      badge2: 'COLLECTOR',
      img: 'IMG/81819510_497003264277929_1991857801541976064_n.jpg.jpeg',
      stars: 5, reviews: 32, price: 'Chat WA', verified: false,
      desc: 'Signature gaming pullover hoodie with exclusive Gold Grid cyber-grid graphics. Premium heavyweight fleece provides all-day thermal comfort for intense late-night gaming sessions.',
      features: [
        'Premium heavyweight fleece — warm, soft, and ultra-comfortable',
        'Limited edition Gold Grid cyber geometric detailing',
        'Double-layered drawstring hood with custom metallic aglets',
        'Durable fade-resistant graphic application',
        'Available in Onyx Black & Deep Navy colorways',
        'Designed for esports tournaments, casual streetwear, and streaming'
      ],
      specs: [
        { key: 'Type', val: 'Esports Pullover Hoodie' },
        { key: 'Material', val: 'Premium 320gsm Cotton Fleece' },
        { key: 'Design', val: 'Exclusive Gold Grid Geometric' },
        { key: 'Colors', val: 'Onyx Black / Deep Navy' },
        { key: 'Sizes', val: 'S / M / L / XL / XXL' },
        { key: 'Features', val: 'Adjustable Hood, Front Kangaroo Pocket', highlight: true },
        { key: 'Edition', val: 'COLLECTOR EDITION', highlight: true }
      ]
    },
    {
      id: 'j3', name: 'Geometric Edge Hoodie', cat: 'Hoodie · Fullprint',
      badge2: 'COLLECTOR',
      img: 'IMG/75247421_452163855428537_6577748504087625728_n.jpg.jpeg',
      stars: 5, reviews: 27, price: 'Chat WA', verified: false,
      desc: 'All-over sublimated streetwear hoodie featuring bold geometric edges and aggressive cyber lines. A standout collector piece tailored for gamer aesthetics.',
      features: [
        '360° all-over sublimation print coverage',
        'Comfort-stretch cotton-poly blend fleece',
        'Exclusive limited-run production — not found in mainstream retail',
        'Full size range available from S to XXL',
        'Pre-shrunk fabric to preserve fit over time',
        'Ultra-sharp contrast graphics'
      ],
      specs: [
        { key: 'Type', val: 'Full-Print Pullover Hoodie' },
        { key: 'Material', val: 'Cotton-Poly Blend 280gsm' },
        { key: 'Print Technique', val: 'All-Over HD Sublimation', highlight: true },
        { key: 'Design', val: 'Geometric Edge Exclusive' },
        { key: 'Sizes', val: 'S / M / L / XL / XXL' },
        { key: 'Edition', val: 'COLLECTOR EDITION', highlight: true }
      ]
    },
    {
      id: 'j4', name: 'Tactical Grid Hoodie', cat: 'Hoodie · Black Gold',
      img: 'IMG/75402042_452163845428538_3824576894284595200_n.jpg.jpeg',
      stars: 5, reviews: 19, price: 'Chat WA', verified: false,
      desc: 'Sleek black & metallic gold accented gamer hoodie. Subdued aesthetic with tactical paneling, built for gamers seeking understated elegance.',
      features: [
        'Sleek Black & Gold color scheme',
        'Thermal-insulating heavyweight fleece lining',
        'Refined micro-grid accents and sleeve graphics',
        'Precision tailored export-quality construction',
        'Versatile for indoor tournaments and daily urban wear'
      ],
      specs: [
        { key: 'Type', val: 'Tactical Gaming Hoodie' },
        { key: 'Material', val: 'Heavyweight Fleece 300gsm' },
        { key: 'Theme', val: 'Tactical Black & Gold', highlight: true },
        { key: 'Sizes', val: 'S / M / L / XL / XXL' },
        { key: 'Colorway', val: 'Black & Gold' }
      ]
    },
    {
      id: 'j5', name: 'Veni Vidi Vici Tee', cat: 'Kaos · Casual',
      badge: 'NEW',
      img: 'IMG/472313641_1625647298080181_4609009896057739488_n.jpg.jpeg',
      stars: 5, reviews: 61, price: 'Chat WA', verified: true,
      desc: 'Signature lifestyle gaming tee with the historic mantra "Veni Vidi Vici" — I came, I saw, I conquered. A statement shirt for competitive spirits.',
      features: [
        'Exclusive "Veni Vidi Vici" typography design',
        'Breathable 100% combed ringspun cotton 30s',
        'Tailored modern athletic fit for gaming and outings',
        'Available in crisp White and Midnight Black',
        'Premium DTF print — crack-resistant & wash-proof',
        'Unisex sizing with reinforced collar band'
      ],
      specs: [
        { key: 'Type', val: 'Casual Gaming Tee' },
        { key: 'Material', val: '100% Combed Cotton 30s', highlight: true },
        { key: 'Print Technique', val: 'Premium Direct-to-Film (DTF)' },
        { key: 'Colors', val: 'White / Black' },
        { key: 'Sizes', val: 'S / M / L / XL / XXL' },
        { key: 'Verified', val: '✓ Official PARE4PLAYER Merchandise', highlight: true }
      ]
    },
    {
      id: 'j6', name: 'Pare Classic Dark Tee', cat: 'Kaos · Classic',
      img: 'IMG/88055687_535333090444946_5042498455423942656_n.jpg.jpeg',
      stars: 5, reviews: 44, price: 'Chat WA', verified: false,
      desc: 'The timeless PARE4PLAYER core tee in deep monochrome black. Minimalist silhouette boasting strong brand character, essential for any gamer wardrobe.',
      features: [
        'Timeless dark minimalist brand aesthetic',
        'Silky-soft combed ringspun cotton hand-feel',
        'Embossed tonal PARE4PLAYER chest insignia',
        'Breathable and wrinkle-resistant fabric weave',
        'Pre-washed to prevent shrinkage'
      ],
      specs: [
        { key: 'Type', val: 'Classic Crewneck Tee' },
        { key: 'Material', val: '100% Ring-Spun Combed Cotton' },
        { key: 'Design', val: 'PARE4PLAYER Core Monogram' },
        { key: 'Color', val: 'Pitch Black' },
        { key: 'Sizes', val: 'S / M / L / XL / XXL' }
      ]
    },
    { id: 'j7', name: 'Custom Team Jersey Request', cat: 'Request · Bespoke', isMore: true }
  ],

  accounts: [
    {
      id: 'a1', name: 'ML Mythic+ Full Hero', cat: 'Mobile Legends · Account',
      badge: 'HOT', badge2: 'RARE',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=450&fit=crop&crop=center',
      stars: 5, reviews: 93, price: 'Chat WA', verified: true,
      gameColor: '#1E90FF', gameLabel: 'ML · Mythic+',
      desc: 'High-tier Mobile Legends account ranked Mythic+ featuring an unlocked roster of 100+ heroes and rare skins. Rigorously verified ownership, clean history, ready for secure escrow transfer.',
      features: [
        'Rank Mythic+ with 60%+ winrate',
        '100+ unlocked heroes collection',
        'Legendary & Collector skins included',
        'Clean unlinked credentials / full email rebinding',
        'Clean track record — zero bans or suspensions',
        '100% protected transfer via P4P Escrow Guarantee'
      ],
      specs: [
        { key: 'Game', val: 'Mobile Legends: Bang Bang' },
        { key: 'Rank', val: 'Mythic+', highlight: true },
        { key: 'Heroes', val: '100+ Heroes Unlocked', highlight: true },
        { key: 'Skins', val: 'Legendary & Collector Tiers' },
        { key: 'Binding', val: 'Full Email Changeable' },
        { key: 'Status', val: '✓ Verified Clean History' },
        { key: 'Transfer', val: 'Guaranteed Escrow via P4P', highlight: true }
      ]
    },
    {
      id: 'a2', name: 'Valorant Immortal Skins', cat: 'Valorant · Account',
      badge: 'HOT', badge2: 'RARE',
      img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=450&fit=crop&crop=center',
      stars: 5, reviews: 71, price: 'Chat WA', verified: true,
      gameColor: '#FF4655', gameLabel: 'VAL · Immortal',
      desc: 'Top-tier Valorant account sitting at Immortal rank loaded with elite upgraded weapon skins (Prime, Reaver, Glitchpop). Verified original owner and ready for immediate secure hand-off.',
      features: [
        'Immortal rank tier — high competitive matchmaking rating',
        'Premium skin lineup (Operator, Vandal, Phantom, Melee)',
        'All agents fully unlocked',
        'Asia-Pacific region (APAC)',
        'Email changeable upon escrow completion',
        'Zero penalties or AFK warnings'
      ],
      specs: [
        { key: 'Game', val: 'Valorant' },
        { key: 'Rank', val: 'Immortal', highlight: true },
        { key: 'Region', val: 'Asia Pacific (APAC)' },
        { key: 'Skins', val: 'Premium Upgrade Collection', highlight: true },
        { key: 'Agents', val: 'All Agents Available' },
        { key: 'Status', val: '✓ Verified & Safe' }
      ]
    },
    {
      id: 'a3', name: 'FF Sultan Bundle Legendary', cat: 'Free Fire · Account',
      badge2: 'COLLECTOR',
      img: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&h=450&fit=crop&crop=center',
      stars: 5, reviews: 55, price: 'Chat WA', verified: true,
      gameColor: '#FF6B00', gameLabel: 'FF · Sultan',
      desc: 'Collector-grade Free Fire account equipped with legendary bundle sets, incubator weapons, and high rank status. Fully verified original top-up history.',
      features: [
        'High-value Sultan account with thousands of diamonds balance',
        'Rare original legendary bundles and outfits',
        'Max level premium characters and pets',
        'Heroic+ competitive rank',
        'Safe login credentials transfer',
        '100% legal official top-up record'
      ],
      specs: [
        { key: 'Game', val: 'Free Fire' },
        { key: 'Account Level', val: 'Sultan Collector', highlight: true },
        { key: 'Bundles', val: 'Legendary & Incubator Sets' },
        { key: 'Rank', val: 'Heroic+' },
        { key: 'Diamonds', val: 'Balance Available' },
        { key: 'Status', val: '✓ Verified Original' }
      ]
    },
    {
      id: 'a4', name: 'PUBG Conqueror Full Outfit', cat: 'PUBG Mobile · Account',
      badge2: 'COLLECTOR',
      img: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&h=450&fit=crop&crop=center',
      stars: 5, reviews: 38, price: 'Chat WA', verified: false,
      gameColor: '#F5A623', gameLabel: 'PUBG · Conqueror',
      desc: 'PUBG Mobile account boasting the prestigious Conqueror rank title, upgraded firearms (Glacier M416), rare vehicle wraps, and legendary mythic sets.',
      features: [
        'Conqueror rank title and frame unlocked',
        'Extensive mythic outfit inventory',
        'Upgraded firearms lab skins (M416, AWM)',
        'Exclusive vehicle skins',
        'Secure multi-platform unlinking',
        'Concierge-assisted hand-off'
      ],
      specs: [
        { key: 'Game', val: 'PUBG Mobile' },
        { key: 'Rank', val: 'Conqueror Title', highlight: true },
        { key: 'Outfits', val: 'Mythic Set Collection' },
        { key: 'Weapons', val: 'Upgraded Lab Skins' },
        { key: 'Transfer', val: 'Escrow via P4P Concierge', highlight: true }
      ]
    },
    {
      id: 'a5', name: 'Genshin AR60 5-Star Full', cat: 'Genshin Impact · Account',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=450&fit=crop&crop=center',
      stars: 5, reviews: 42, price: 'Chat WA', verified: true,
      gameColor: '#7B5EA7', gameLabel: 'Genshin · AR60',
      desc: 'End-game Genshin Impact account at Adventure Rank 60 with complete 5-star character roster, signature weapons, and 36-star Spiral Abyss clear history.',
      features: [
        'Adventure Rank 60 (Maximum Cap)',
        'Extensive 5-Star character & signature weapon lineup',
        'All archon quests & exploration completed',
        'Primogem reserve ready for upcoming banners',
        'Spiral Abyss Floor 12 effortlessly cleared',
        'Asia / Global server options'
      ],
      specs: [
        { key: 'Game', val: 'Genshin Impact' },
        { key: 'AR Level', val: 'AR 60 (Max)', highlight: true },
        { key: 'Characters', val: 'Full 5-Star Roster' },
        { key: 'Abyss', val: 'Floor 12 36-Star Cleared', highlight: true },
        { key: 'Server', val: 'Asia / Global' },
        { key: 'Status', val: '✓ Verified Clean' }
      ]
    },
    {
      id: 'a6', name: 'ML Legend Collector Skin', cat: 'Mobile Legends · Account',
      img: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=600&h=450&fit=crop&crop=center',
      stars: 5, reviews: 29, price: 'Chat WA', verified: true,
      gameColor: '#1E90FF', gameLabel: 'ML · Legend',
      desc: 'Mobile Legends account with prestigious Legend skins and time-limited Collector cosmetics. Perfect for collectors wanting an elite account.',
      features: [
        'Legend rank tier with strong MMR',
        'Rare Collector & time-limited event skins',
        'Popular meta heroes unlocked and fully prepared',
        'Clean credentials ready for buyer email',
        'Complete concierge after-sales guarantee'
      ],
      specs: [
        { key: 'Game', val: 'Mobile Legends: Bang Bang' },
        { key: 'Rank', val: 'Legend Tier', highlight: true },
        { key: 'Skins', val: 'Collector & Limited Edition' },
        { key: 'Heroes', val: '60+ Meta Heroes' },
        { key: 'Status', val: '✓ Verified & Safe' }
      ]
    },
    { id: 'a7', name: 'Private Account Request', cat: 'Services · Custom', isMore: true }
  ],

  topup: [
    {
      id: 'v1', name: '86 Diamonds ML', cat: 'Mobile Legends · Diamond',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=450&fit=crop&crop=top',
      stars: 5, reviews: 210, price: 'Rp 20.000', verified: false,
      desc: 'Direct ID top-up for 86 Mobile Legends Diamonds. Automated fast processing without requiring account login. 100% safe and legal from official partners.',
      features: [
        'Instant top-up directly via User ID + Zone ID',
        'No login or password sharing required',
        'Fast delivery — credited within 1–5 minutes',
        '100% legal official distributor source',
        '24/7 support from PARE4PLAYER Concierge',
        'Full transaction receipt provided'
      ],
      specs: [
        { key: 'Game', val: 'Mobile Legends: Bang Bang' },
        { key: 'Quantity', val: '86 Diamonds', highlight: true },
        { key: 'Delivery Method', val: 'In-Game User ID' },
        { key: 'Processing Time', val: 'Instant (< 5 mins)', highlight: true },
        { key: 'Price', val: 'Rp 20.000' },
        { key: 'Legitimacy', val: '100% Official & Safe' }
      ]
    },
    {
      id: 'v2', name: '257 Diamonds ML', cat: 'Mobile Legends · Diamond',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=450&fit=crop&crop=top',
      stars: 5, reviews: 387, price: 'Rp 59.000', verified: false,
      desc: 'Top up 257 Mobile Legends Diamonds. Our best-selling denomination, perfect for unlocking new heroes or skin draws. Fast and secure.',
      features: [
        'Best-selling denomination for events & skins',
        'Direct ID top-up — zero login credentials needed',
        'Sub-5 minute automated fulfillment',
        'Multiple secure payment methods accepted',
        'Satisfaction guarantee or full money back'
      ],
      specs: [
        { key: 'Game', val: 'Mobile Legends: Bang Bang' },
        { key: 'Quantity', val: '257 Diamonds', highlight: true },
        { key: 'Delivery Method', val: 'In-Game User ID' },
        { key: 'Processing Time', val: 'Instant (< 5 mins)', highlight: true },
        { key: 'Price', val: 'Rp 59.000' }
      ]
    },
    {
      id: 'v3', name: '1050 Diamonds ML', cat: 'Mobile Legends · Diamond',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=450&fit=crop&crop=top',
      stars: 5, reviews: 145, price: 'Rp 229.000', verified: false,
      desc: 'Large 1050 Mobile Legends Diamonds bundle — ample for buying Epic tier skins or multiple monthly Starlight passes.',
      features: [
        'Ideal for Epic skins or multiple Starlight passes',
        'Direct User ID credit — no password required',
        'Instant delivery with confirmation receipt',
        'Official distributor guarantee'
      ],
      specs: [
        { key: 'Game', val: 'Mobile Legends: Bang Bang' },
        { key: 'Quantity', val: '1050 Diamonds', highlight: true },
        { key: 'Delivery Method', val: 'In-Game User ID' },
        { key: 'Processing Time', val: 'Instant' },
        { key: 'Price', val: 'Rp 229.000' }
      ]
    },
    {
      id: 'v4', name: '70 Diamonds Free Fire', cat: 'Free Fire · Diamond',
      img: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&h=450&fit=crop&crop=top',
      stars: 5, reviews: 175, price: 'Rp 15.000', verified: false,
      desc: 'Free Fire 70 Diamonds top-up. Great budget pack for in-game event spins or unlocking accessories. Fast automated crediting.',
      features: [
        'Direct player ID top-up',
        'Instant automated processing',
        'Suitable for gacha spins and event tokens',
        '100% legal official source'
      ],
      specs: [
        { key: 'Game', val: 'Free Fire' },
        { key: 'Quantity', val: '70 Diamonds', highlight: true },
        { key: 'Price', val: 'Rp 15.000' },
        { key: 'Processing', val: 'Instant' }
      ]
    },
    {
      id: 'v5', name: '355 Diamonds Free Fire', cat: 'Free Fire · Diamond',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&h=450&fit=crop&crop=top',
      stars: 5, reviews: 298, price: 'Rp 70.000', verified: false,
      desc: '355 Free Fire Diamonds — highly popular package for legendary bundle spins and battle pass upgrades.',
      features: [
        'Top choice for Free Fire event spins',
        'Ample diamonds for battle pass purchase',
        'Credited in under 3 minutes',
        'No password required'
      ],
      specs: [
        { key: 'Game', val: 'Free Fire' },
        { key: 'Quantity', val: '355 Diamonds', highlight: true },
        { key: 'Price', val: 'Rp 70.000' },
        { key: 'Processing', val: 'Instant (< 3 mins)', highlight: true }
      ]
    },
    {
      id: 'v6', name: '660 UC PUBG Mobile', cat: 'PUBG Mobile · UC',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&h=450&fit=crop&crop=top',
      stars: 5, reviews: 120, price: 'Rp 149.000', verified: false,
      desc: '660 Unknown Cash (UC) for PUBG Mobile — precisely enough to unlock the Royale Pass with remaining balance for crates.',
      features: [
        'Sufficient to purchase Royale Pass',
        'Direct player ID top-up',
        'Automated instant delivery',
        'Official authorized UC pin'
      ],
      specs: [
        { key: 'Game', val: 'PUBG Mobile' },
        { key: 'Quantity', val: '660 UC', highlight: true },
        { key: 'Price', val: 'Rp 149.000' },
        { key: 'Processing', val: 'Instant' }
      ]
    },
    {
      id: 'v7', name: 'Valorant 475 VP', cat: 'Valorant · VP',
      img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=450&fit=crop&crop=top',
      stars: 5, reviews: 88, price: 'Rp 89.000', verified: false,
      desc: 'Official Riot Games 475 Valorant Points (VP) redeem code. Redeemable for gun buddies, radianite points, or weapon cosmetics.',
      features: [
        'Official Riot Games VP code',
        'Instant digital redemption pin',
        'Valid on APAC server accounts',
        'Quick concierge delivery via WA'
      ],
      specs: [
        { key: 'Game', val: 'Valorant' },
        { key: 'Quantity', val: '475 VP', highlight: true },
        { key: 'Price', val: 'Rp 89.000' },
        { key: 'Delivery', val: 'Instant Digital Code' }
      ]
    },
    {
      id: 'v8', name: 'Steam Wallet Rp 50.000', cat: 'Steam · Wallet',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=450&fit=crop&crop=top',
      stars: 5, reviews: 64, price: 'Rp 55.000', verified: false,
      desc: 'Steam Wallet code worth IDR 50,000. Use to buy PC games, DLCs, community market skins, and in-game items on Steam.',
      features: [
        'Valid for games, DLCs, and Steam Market items',
        'Instant digital code sent via WhatsApp/Email',
        'Permanent wallet balance addition',
        '100% genuine Steam gift code'
      ],
      specs: [
        { key: 'Platform', val: 'Steam PC' },
        { key: 'Face Value', val: 'Rp 50.000', highlight: true },
        { key: 'Price', val: 'Rp 55.000' },
        { key: 'Delivery', val: 'Digital Code via WA' }
      ]
    }
  ],

  items: [
    {
      id: 'e1', name: 'Gaming Headset Pro X7', cat: 'Equipment · Headset',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=450&fit=crop',
      stars: 5, reviews: 76, price: 'Chat WA', verified: false,
      desc: 'Pro X7 gaming headset engineered with virtual 7.1 surround sound audio, detachable noise-cancelling microphone, and plush memory foam earcups for marathon sessions.',
      features: [
        'Virtual 7.1 channel positional surround sound',
        'Crystal-clear detachable noise-cancelling mic',
        'Breathable memory foam ear cushions',
        'Custom-tuned 50mm neodymium audio drivers',
        'Universal multi-platform compatibility (PC, PS5, Xbox, Switch)',
        'Customizable dynamic RGB earcups'
      ],
      specs: [
        { key: 'Type', val: 'Gaming Headset' },
        { key: 'Driver Unit', val: '50mm Neodymium', highlight: true },
        { key: 'Surround Sound', val: 'Virtual 7.1 Positional', highlight: true },
        { key: 'Microphone', val: 'Detachable Noise-Cancelling' },
        { key: 'Connectivity', val: 'USB / 3.5mm Gold-Plated Jack' },
        { key: 'Compatibility', val: 'PC / PS4/5 / Xbox / Mobile' }
      ]
    },
    {
      id: 'e2', name: 'RGB Mousepad XL', cat: 'Equipment · Mousepad',
      img: 'https://images.unsplash.com/photo-1586349906319-47f6b1b4b2d3?w=600&h=450&fit=crop',
      stars: 5, reviews: 53, price: 'Chat WA', verified: false,
      desc: 'Desk-sized XL gaming mousepad featuring 16.8M color RGB edge illumination, ultra-smooth micro-textured fabric, and a dense non-slip rubber base.',
      features: [
        'Spacious XL dimensions 900x400mm for keyboard and mouse',
        'Dynamic 16.8M color RGB lighting with 12 preset modes',
        'Micro-textured speed-control hybrid surface',
        'Heavy-duty non-slip textured rubber underside',
        'Plush 4mm thickness for wrist support',
        'Waterproof splash-resistant coating'
      ],
      specs: [
        { key: 'Type', val: 'Extended Gaming Mousepad' },
        { key: 'Dimensions', val: '900 x 400 x 4mm (XL)', highlight: true },
        { key: 'Lighting', val: '16.8M Color RGB Edge' },
        { key: 'Effects', val: '12 Lighting Modes' },
        { key: 'Surface', val: 'Micro-Textured Cloth' },
        { key: 'Features', val: 'Non-Slip, Water-Repellent' }
      ]
    },
    {
      id: 'e3', name: 'Pro Controller Wireless', cat: 'Equipment · Controller',
      badge2: 'RARE',
      img: 'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=600&h=450&fit=crop',
      stars: 5, reviews: 41, price: 'Chat WA', verified: false,
      desc: 'Elite wireless gamepad for PC and console gamers. Features Hall-effect anti-drift joysticks, hair-trigger sensitivity locks, and an ergonomic anti-slip grip.',
      features: [
        'Dual wireless mode: 2.4GHz low-latency & Bluetooth 5.0',
        'Adjustable hair-trigger travel distance',
        'Textured ergonomic grip for zero slip',
        '600mAh battery providing 10+ hours continuous play',
        'Broad compatibility across Windows, Android & iOS',
        'Dual-motor rumble feedback for immersive haptics'
      ],
      specs: [
        { key: 'Type', val: 'Wireless Gaming Gamepad' },
        { key: 'Connectivity', val: '2.4GHz Dongle + Bluetooth 5.0', highlight: true },
        { key: 'Battery Life', val: '600mAh (10+ Hours)', highlight: true },
        { key: 'Compatibility', val: 'Windows / Android / iOS / Switch' },
        { key: 'Features', val: 'Haptic Rumble, Hair Trigger Locks' }
      ]
    },
    {
      id: 'e4', name: 'Mechanical Gaming Keyboard', cat: 'Equipment · Keyboard',
      img: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=450&fit=crop',
      stars: 5, reviews: 38, price: 'Chat WA', verified: false,
      desc: 'Tournament-ready mechanical keyboard loaded with linear Red mechanical switches, per-key RGB backlighting, aircraft-grade aluminum top plate, and 100% anti-ghosting.',
      features: [
        'Smooth & rapid linear Red mechanical switches',
        'Per-key customizable 16.8M RGB backlighting',
        '100% Anti-Ghosting with full N-Key Rollover (NKRO)',
        'Anodized aircraft-grade aluminum top frame',
        'Detachable braided Type-C cable',
        'Seamless compatibility with Windows & Mac'
      ],
      specs: [
        { key: 'Type', val: 'Mechanical Gaming Keyboard' },
        { key: 'Switch Type', val: 'Red Linear Switches', highlight: true },
        { key: 'Layout', val: 'Tenkeyless (TKL) / Full Size' },
        { key: 'Lighting', val: 'Per-Key 16.8M RGB' },
        { key: 'Features', val: 'Full N-Key Rollover', highlight: true },
        { key: 'Build', val: 'Aluminum Alloy Top Plate' }
      ]
    },
    {
      id: 'e6', name: 'Pro Gaming Mouse 25K DPI', cat: 'Equipment · Mouse',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=450&fit=crop',
      stars: 5, reviews: 52, price: 'Chat WA', verified: false,
      desc: 'Ultra-lightweight competitive esports mouse equipped with a flagship 25K DPI optical sensor, optical switches, and virgin PTFE glide feet.',
      features: [
        'Flagship 25,000 DPI optical sensor with 650 IPS tracking',
        'Featherlight 61g balanced chassis',
        'Instant 1000Hz polling rate / 1ms response',
        'Optical micro switches rated for 80 million clicks',
        '100% pure virgin PTFE feet for zero friction',
        'Speedflex lightweight flexible paracord cable'
      ],
      specs: [
        { key: 'Type', val: 'Competitive Gaming Mouse' },
        { key: 'Sensor', val: '25,000 DPI Optical', highlight: true },
        { key: 'Weight', val: '61g Ultra-Light' },
        { key: 'Polling Rate', val: '1000Hz / 1ms', highlight: true },
        { key: 'Switches', val: 'Optical (80M Clicks)' },
        { key: 'Cable', val: 'Flexible Paracord' }
      ]
    },
    {
      id: 'e7', name: 'Full Gaming Setup Bundle', cat: 'Equipment · Setup',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=450&fit=crop',
      stars: 5, reviews: 34, price: 'Chat WA', verified: false,
      desc: 'Comprehensive battlestation package tailored for streamers and competitive players, featuring desk, monitor arm, and synchronized RGB gaming gear.',
      features: [
        'Complete battlestation setup bundle',
        'Curated mechanical keyboard, optical mouse, and pad',
        'Heavy-duty articulating monitor gas-spring arm',
        'Integrated ambient reactive RGB lighting bar',
        'Full concierge installation and cable guidance'
      ],
      specs: [
        { key: 'Type', val: 'All-In-One Battlestation Bundle' },
        { key: 'Includes', val: 'Desk Kit + Keyboard + Mouse + Pad', highlight: true },
        { key: 'Lighting', val: 'Synchronized Smart RGB' },
        { key: 'Warranty', val: '1-Year Full Coverage', highlight: true }
      ]
    },
    {
      id: 'e8', name: 'Gaming Monitor 27" 144Hz', cat: 'Equipment · Monitor',
      badge2: 'RARE',
      img: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=600&h=450&fit=crop',
      stars: 5, reviews: 49, price: 'Chat WA', verified: false,
      desc: 'High-refresh 27-inch Fast IPS gaming monitor boasting a 144Hz refresh rate, 1ms response time, and 99% sRGB color gamut for competitive clarity.',
      features: [
        '27-inch Fast IPS panel with wide viewing angles',
        'Fluid 144Hz refresh rate with 1ms GtG response',
        'NVIDIA G-Sync Compatible & AMD FreeSync Premium',
        'HDR10 high dynamic range support',
        'Fully ergonomic stand (height, swivel, pivot, tilt)'
      ],
      specs: [
        { key: 'Screen Size', val: '27-inch Fast IPS' },
        { key: 'Refresh Rate', val: '144Hz', highlight: true },
        { key: 'Response Time', val: '1ms GtG', highlight: true },
        { key: 'Resolution', val: 'FHD 1920 x 1080' },
        { key: 'Video Inputs', val: 'DisplayPort 1.4 + HDMI 2.0' }
      ]
    },
    {
      id: 'e9', name: 'Racing Gaming Chair Pro', cat: 'Equipment · Chair',
      badge2: 'RARE',
      img: 'https://images.unsplash.com/photo-1612198273689-b3efec00bd96?w=600&h=450&fit=crop',
      stars: 5, reviews: 41, price: 'Chat WA', verified: false,
      desc: 'Ergonomic racing-style gaming seat constructed with high-density cold-cure foam, magnetic memory foam lumbar support, and 4D adjustable armrests.',
      features: [
        'High-density cold-cure molded foam cushion',
        '4D multi-directional adjustable armrests',
        '165-degree recline with multi-tilt locking mechanism',
        'Heavy-duty reinforced steel tubular frame',
        'Class-4 hydraulic gas lift verified up to 150kg'
      ],
      specs: [
        { key: 'Type', val: 'Ergonomic Gaming Seat' },
        { key: 'Internal Frame', val: 'Reinforced Steel', highlight: true },
        { key: 'Armrests', val: '4D Multi-Directional' },
        { key: 'Recline Range', val: '90° to 165°' },
        { key: 'Max Weight Capacity', val: '150 kg', highlight: true }
      ]
    },
    { id: 'e5', name: 'Custom Equipment Request', cat: 'Services · Custom', isMore: true }
  ],

  boosting: [
    {
      id: 'b1', name: 'ML Rank Boost Mythic', cat: 'Mobile Legends · Boost',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=450&fit=crop',
      stars: 5, reviews: 118, price: 'Chat WA', verified: true,
      gameColor: '#1E90FF', gameLabel: 'ML · Mythic',
      desc: 'Mobile Legends rank boosting service directly to Mythic rank. Executed by certified pro players maintaining a 70%+ winrate. Rapid, confidential, and guaranteed.',
      features: [
        'Handled by certified Mythic Glory pro boosters',
        'Consistent 70%+ winrate performance',
        'Completed within 3–7 business days',
        'Custom hero selection requested by buyer',
        'Encrypted VPN protection — undetected by game systems',
        '100% completion guarantee or full refund'
      ],
      specs: [
        { key: 'Game', val: 'Mobile Legends: Bang Bang' },
        { key: 'Target Rank', val: 'Mythic Rank', highlight: true },
        { key: 'Duration', val: '3–7 Business Days' },
        { key: 'Booster Tier', val: 'Certified Pro Player', highlight: true },
        { key: 'Security', val: 'Encrypted VPN Protected' },
        { key: 'Guarantee', val: '100% Completion or Refund' }
      ]
    },
    {
      id: 'b2', name: 'Valorant Immortal Boost', cat: 'Valorant · Boost',
      badge2: 'RARE',
      img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=450&fit=crop',
      stars: 5, reviews: 87, price: 'Chat WA', verified: true,
      gameColor: '#FF4655', gameLabel: 'VAL · Immortal',
      desc: 'Valorant competitive rank boosting up to Immortal. Handled by verified Radiant players. Duo Queue and Solo options available with privacy mode.',
      features: [
        'Target ranks: Diamond to Immortal tier',
        'Solo Pilot or Duo Queue party options',
        'Radiant-certified competitive players',
        'Offline client mode enabled during matches',
        'Real-time WhatsApp match progress updates',
        '100% guaranteed target achievement'
      ],
      specs: [
        { key: 'Game', val: 'Valorant' },
        { key: 'Target Rank', val: 'Diamond → Immortal', highlight: true },
        { key: 'Queue Options', val: 'Solo Pilot / Duo Queue' },
        { key: 'Player Rank', val: 'Radiant Certified', highlight: true },
        { key: 'Updates', val: 'Real-time via WhatsApp' },
        { key: 'Guarantee', val: '100% or Full Refund' }
      ]
    },
    {
      id: 'b3', name: 'FF Grand Master Boost', cat: 'Free Fire · Boost',
      img: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&h=450&fit=crop',
      stars: 5, reviews: 64, price: 'Chat WA', verified: true,
      gameColor: '#FF6B00', gameLabel: 'FF · GM',
      desc: 'Free Fire rank boosting service reaching Grand Master tier. Safe, prompt, and completed by seasoned tournament players.',
      features: [
        'Target Grand Master tier',
        'Vetted Free Fire top-tier boosters',
        'Undetectable safe routing',
        'Frequent progress snapshots on WA',
        'Guaranteed rank attainment'
      ],
      specs: [
        { key: 'Game', val: 'Free Fire' },
        { key: 'Target', val: 'Grand Master', highlight: true },
        { key: 'Duration', val: '5–10 Days' },
        { key: 'Guarantee', val: '100% Completion' }
      ]
    },
    {
      id: 'b4', name: 'PUBG Conqueror Push', cat: 'PUBG Mobile · Boost',
      img: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&h=450&fit=crop',
      stars: 5, reviews: 49, price: 'Chat WA', verified: true,
      gameColor: '#F5A623', gameLabel: 'PUBG · Conq',
      desc: 'PUBG Mobile leaderboard push to claim the Conqueror title. Executed by veteran squad players with utmost discretion.',
      features: [
        'Target Conqueror title and frame',
        'Boosters with multi-season Conqueror tenure',
        'Secure VPN protection throughout',
        '100% verified completion or refund'
      ],
      specs: [
        { key: 'Game', val: 'PUBG Mobile' },
        { key: 'Target Rank', val: 'Conqueror Title', highlight: true },
        { key: 'Duration', val: '7–14 Days' },
        { key: 'Guarantee', val: '100% Guaranteed or Refund' }
      ]
    },
    { id: 'b5', name: 'Custom Rank Boost Request', cat: 'Services · Custom', isMore: true }
  ],

  coins: [
    {
      id: 'c1', name: '2195 Diamonds ML', cat: 'Mobile Legends · Diamond',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=450&fit=crop',
      stars: 5, reviews: 203, price: 'Rp 459.000', verified: false,
      desc: 'Bulk 2195 Mobile Legends Diamonds bundle. Generous amount for unlocking Legend or Collector skins during major festival events.',
      features: [
        'High-volume diamond pack for collectors',
        'Direct User ID credit — no password required',
        'Instant delivery within minutes',
        'Official distributor guarantee'
      ],
      specs: [
        { key: 'Game', val: 'Mobile Legends: Bang Bang' },
        { key: 'Quantity', val: '2195 Diamonds', highlight: true },
        { key: 'Price', val: 'Rp 459.000' },
        { key: 'Fulfillment', val: 'Instant' }
      ]
    },
    {
      id: 'c2', name: '2900 Diamonds FF', cat: 'Free Fire · Diamond',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&h=450&fit=crop',
      stars: 5, reviews: 178, price: 'Rp 549.000', verified: false,
      desc: '2900 Free Fire Diamonds — the ultimate Sultan tier package. Ample currency to acquire new incubator bundles and seasonal event rewards.',
      features: [
        'Premier Free Fire diamond bundle',
        'Direct Player ID fulfillment',
        'Rapid credit time',
        'Full guarantee'
      ],
      specs: [
        { key: 'Game', val: 'Free Fire' },
        { key: 'Quantity', val: '2900 Diamonds', highlight: true },
        { key: 'Price', val: 'Rp 549.000' },
        { key: 'Fulfillment', val: 'Instant' }
      ]
    },
    {
      id: 'c3', name: '1800 UC PUBG Mobile', cat: 'PUBG Mobile · UC',
      img: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&h=450&fit=crop',
      stars: 5, reviews: 92, price: 'Rp 369.000', verified: false,
      desc: '1800 PUBG Mobile UC pack — ample for purchasing Royale Pass Plus with plenty to spare for lucky spin draws.',
      features: [
        'Ideal for Royale Pass Plus & mythic spins',
        'Instant credit via Player ID',
        'Rapid delivery',
        'Official authorized partner pin'
      ],
      specs: [
        { key: 'Game', val: 'PUBG Mobile' },
        { key: 'Quantity', val: '1800 UC', highlight: true },
        { key: 'Price', val: 'Rp 369.000' },
        { key: 'Fulfillment', val: 'Instant' }
      ]
    },
    {
      id: 'c4', name: '2000 Robux', cat: 'Roblox · Robux',
      badge2: 'RARE',
      img: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=450&fit=crop',
      stars: 5, reviews: 77, price: 'Rp 350.000', verified: false,
      desc: '2000 Robux for purchasing avatar clothing, accessories, game passes, and developer products in Roblox.',
      features: [
        'Robux for avatars, accessories, and game passes',
        'Secure delivery via PARE4PLAYER Concierge',
        'Zero password sharing required',
        'Full satisfaction guarantee'
      ],
      specs: [
        { key: 'Platform', val: 'Roblox' },
        { key: 'Quantity', val: '2000 Robux', highlight: true },
        { key: 'Price', val: 'Rp 350.000' },
        { key: 'Delivery', val: 'Secure Concierge Delivery' }
      ]
    },
    {
      id: 'c5', name: 'Steam Wallet Rp 200.000', cat: 'Steam · Wallet',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=450&fit=crop',
      stars: 5, reviews: 61, price: 'Rp 215.000', verified: false,
      desc: 'Steam Wallet digital voucher worth IDR 200,000. Perfect for purchasing AAA games, season passes, and Community Market skins.',
      features: [
        'Adds IDR 200,000 to your Steam balance',
        'Instant digital voucher code via WA/email',
        'Permanent wallet credit',
        'Official Steam voucher PIN'
      ],
      specs: [
        { key: 'Platform', val: 'Steam PC' },
        { key: 'Face Value', val: 'Rp 200.000', highlight: true },
        { key: 'Price', val: 'Rp 215.000' },
        { key: 'Delivery', val: 'Digital Code via WhatsApp' }
      ]
    }
  ],

  roblox: [
    {
      id: 'r1', name: '800 Robux', cat: 'Roblox · Robux',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=450&fit=crop',
      stars: 5, reviews: 134, price: 'Rp 155.000', verified: false,
      desc: '800 Robux — the most popular package for buying avatar apparel, animations, and game passes on Roblox.',
      features: [
        'Official Robux code from authorized channels',
        'Fast crediting via PARE4PLAYER Concierge',
        'Valid for avatar accessories and game passes',
        'Full guarantee'
      ],
      specs: [
        { key: 'Platform', val: 'Roblox' },
        { key: 'Quantity', val: '800 Robux', highlight: true },
        { key: 'Price', val: 'Rp 155.000' },
        { key: 'Method', val: 'Via P4P Concierge' }
      ]
    },
    {
      id: 'r2', name: '2000 Robux', cat: 'Roblox · Robux',
      badge2: 'RARE',
      img: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=450&fit=crop',
      stars: 5, reviews: 98, price: 'Rp 350.000', verified: false,
      desc: '2000 Robux pack for avid Roblox players and collectors. Sufficient for exclusive game passes and avatar items.',
      features: [
        'Comprehensive bundle for Roblox fans',
        'Safe fulfillment via concierge',
        'Official digital voucher',
        'Full guarantee'
      ],
      specs: [
        { key: 'Platform', val: 'Roblox' },
        { key: 'Quantity', val: '2000 Robux', highlight: true },
        { key: 'Price', val: 'Rp 350.000' },
        { key: 'Method', val: 'Via P4P Concierge' }
      ]
    },
    {
      id: 'r3', name: 'Premium Roblox Account', cat: 'Roblox · Account',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=450&fit=crop',
      stars: 5, reviews: 55, price: 'Chat WA', verified: true,
      desc: 'Verified premium Roblox account loaded with rare limited items and existing Robux balance. Clean track record and full email ownership transfer.',
      features: [
        'Loaded with premium limited avatar items',
        'Robux balance included',
        'Clean history — zero suspensions',
        'Direct email re-binding provided',
        'Verified by PARE4PLAYER team'
      ],
      specs: [
        { key: 'Platform', val: 'Roblox' },
        { key: 'Account Type', val: 'Premium Collector Account', highlight: true },
        { key: 'Inventory', val: 'Rare Limiteds' },
        { key: 'Status', val: '✓ Verified Clean' }
      ]
    },
    {
      id: 'r4', name: 'Rare Roblox Item', cat: 'Roblox · Item',
      badge2: 'COLLECTOR',
      img: 'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=600&h=450&fit=crop',
      stars: 5, reviews: 43, price: 'Chat WA', verified: false,
      desc: 'Ultra-rare Roblox collectible item no longer obtainable on public storefronts. Curated for serious avatar collectors.',
      features: [
        'Rare collectible — discontinued limited run',
        'Unavailable in public marketplace',
        'Tailored for serious avatar collectors',
        'Safe delivery via concierge trade'
      ],
      specs: [
        { key: 'Platform', val: 'Roblox' },
        { key: 'Item Class', val: 'Discontinued Rare Collectible', highlight: true },
        { key: 'Status', val: 'COLLECTOR EDITION' },
        { key: 'Transfer', val: 'Via P4P Concierge Trade' }
      ]
    },
    { id: 'r5', name: 'Custom Roblox Request', cat: 'Services · Custom', isMore: true }
  ]
};

/* Build combined "all" pool */
PRODUCTS.all = Object.entries(PRODUCTS)
  .filter(([k]) => k !== 'all')
  .flatMap(([, arr]) => arr)
  .filter(p => !p.isMore)
  .slice(0, 30);

/* ─── STATE ─── */
let activeCat = 'all';
let activeSort = 'default';

/* ─── HELPERS ─── */
const getParam = (key) => new URLSearchParams(window.location.search).get(key) || 'all';
const starsHTML = (n) => '★'.repeat(n) + '☆'.repeat(5 - n);
const waLink = (name) =>
  `https://wa.me/628558171708?text=Hello%20PARE4PLAYER%2C%20I%20am%20interested%20in%20*${encodeURIComponent(name)}*.%20Could%20you%20please%20share%20more%20details%20and%20pricing%3F`;

/* ─── RENDER SIDEBAR ─── */
function renderSidebar() {
  const nav = document.getElementById('cs-nav');
  if (!nav) return;
  nav.innerHTML = CATEGORIES.map(cat => `
    <a href="?cat=${cat.id}" class="cs-link ${activeCat === cat.id ? 'active' : ''}" data-cat="${cat.id}">
      <div class="cs-link-icon">${cat.icon}</div>
      <span class="cs-link-label">${cat.label}</span>
      <span class="cs-link-count">${cat.count}</span>
    </a>
  `).join('');
  nav.querySelectorAll('.cs-link').forEach(link => {
    link.addEventListener('click', e => { e.preventDefault(); switchCategory(link.dataset.cat); });
  });
}

function renderSubcatFilter(catId) {
  const block = document.getElementById('cs-filter-block');
  if (!block) return;
  const cat = CATEGORIES.find(c => c.id === catId);
  if (!cat || !cat.subcats.length) { block.innerHTML = ''; return; }
  block.innerHTML = `<div class="cs-filter-title">Subcategories</div>
    ${cat.subcats.map(s => `<a href="#" class="cs-sub-link" data-sub="${s}">${s}</a>`).join('')}`;
  block.querySelectorAll('.cs-sub-link').forEach(l => {
    l.addEventListener('click', e => {
      e.preventDefault();
      block.querySelectorAll('.cs-sub-link').forEach(x => x.classList.remove('active-sub'));
      l.classList.add('active-sub');
    });
  });
}

/* ─── RENDER FILTER SHEET ─── */
function renderFilterSheet() {
  const fsNav = document.getElementById('fs-nav');
  const mobileNav = document.getElementById('mobile-cat-nav');
  if (!fsNav) return;
  const html = CATEGORIES.map(cat => `
    <a href="?cat=${cat.id}" class="fs-link ${activeCat === cat.id ? 'active' : ''}" data-cat="${cat.id}">
      <div class="fs-link-icon">${cat.icon}</div>
      <span class="fs-link-label">${cat.label}</span>
      <span class="fs-link-count">${cat.count}</span>
    </a>
  `).join('');
  fsNav.innerHTML = html;
  if (mobileNav) {
    mobileNav.innerHTML = CATEGORIES.map(cat => `
      <a href="?cat=${cat.id}" class="sb-link" data-cat="${cat.id}">
        <div class="sb-icon">${cat.icon}</div>
        <span class="sb-text">${cat.label}</span>
      </a>`).join('');
  }
  fsNav.querySelectorAll('.fs-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      fsNav.querySelectorAll('.fs-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

/* ─── TOOLBAR TAGS ─── */
function renderToolbarTags(catId) {
  const el = document.getElementById('ct-filter-tags');
  if (!el) return;
  const cat = CATEGORIES.find(c => c.id === catId);
  el.innerHTML = catId !== 'all'
    ? `<span class="ct-tag">${cat.label}<span class="tag-x" onclick="switchCategory('all')">×</span></span>` : '';
}

/* ─── RENDER HERO ─── */
function renderHero(catId) {
  const cat = CATEGORIES.find(c => c.id === catId);
  if (!cat) return;
  const t = document.getElementById('cat-hero-title');
  const d = document.getElementById('cat-hero-desc');
  const ic = document.getElementById('cat-hero-icon');
  const bc = document.getElementById('bread-current');
  if (t) t.textContent = cat.label;
  if (d) d.textContent = cat.desc;
  if (ic) ic.innerHTML = cat.icon.replace('width="18" height="18"', 'width="24" height="24"');
  if (bc) bc.textContent = cat.label;
  document.title = `${cat.label} — PARE4PLAYER | Access The Rare`;
}

/* ─── BUILD PRODUCT CARD ─── */
function buildCard(p, idx) {
  const delay = Math.min(idx * 45, 500);
  const stripeStyle = p.gameColor ? `style="background:${p.gameColor}"` : '';
  const stripe = p.gameColor ? `<div class="cat-card-stripe" ${stripeStyle}></div>` : '';
  const badgeHot = p.badge === 'HOT'
    ? `<span class="cat-badge cat-badge-hot">🔥 HOT</span>`
    : (p.badge === 'NEW' ? `<span class="cat-badge cat-badge-new">✦ NEW</span>` : '');
  const badgeRare = p.badge2
    ? `<span class="cat-badge cat-badge-rare">${p.badge2 === 'RARE' ? '💎' : '✦'} ${p.badge2}</span>` : '';
  const verifyBadge = p.verified ? `<span class="cat-card-verify">✓ Verified</span>` : '';
  const priceHTML = p.price === 'Chat WA'
    ? `<span class="cat-card-price price-contact">Price on Request</span>`
    : `<span class="cat-card-price">${p.price}</span>`;

  return `
    <a href="product-detail.html?id=${p.id}" class="cat-card" style="animation-delay:${delay}ms"
      aria-label="View details for ${p.name}">
      <div class="cat-card-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'" />
        ${badgeHot}${badgeRare}${stripe}
      </div>
      <div class="cat-card-info">
        <p class="cat-card-cat">${p.cat}</p>
        <h3 class="cat-card-name">${p.name}</h3>
        <div class="cat-card-meta">
          <span class="cat-card-stars">${starsHTML(p.stars)}</span>
          <span class="cat-card-reviews">(${p.reviews})</span>
          ${verifyBadge}
        </div>
        <div class="cat-card-cta">
          ${priceHTML}
          <span class="cat-card-btn">Details →</span>
        </div>
      </div>
    </a>`;
}

function buildMoreCard(p) {
  return `
    <a href="${waLink(p.name)}" target="_blank" class="cat-card cat-card-more">
      <div class="cat-card-more-icon">+</div>
      <p class="cat-card-more-text">${p.name}</p>
      <span class="cat-card-more-sub">Chat WA →</span>
    </a>`;
}

/* ─── RENDER GRID ─── */
function renderGrid(catId, sort) {
  const grid = document.getElementById('cat-grid');
  const empty = document.getElementById('cat-empty');
  if (!grid) return;

  let products = [...(PRODUCTS[catId] || PRODUCTS.all)];
  if (sort === 'hot') {
    const hot = products.filter(p => p.badge === 'HOT');
    const rest = products.filter(p => p.badge !== 'HOT');
    products = [...hot, ...rest];
  } else if (sort === 'rare') {
    products = products.filter(p => p.badge2 === 'RARE' || p.badge2 === 'COLLECTOR');
  } else if (sort === 'newest') {
    products = [...products].reverse();
  }

  const items = products.filter(p => !p.isMore);
  const more = products.filter(p => p.isMore);

  if (!items.length && !more.length) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'flex';
    return;
  }
  if (empty) empty.style.display = 'none';

  grid.innerHTML = [
    ...items.map((p, i) => buildCard(p, i)),
    ...more.map(p => buildMoreCard(p))
  ].join('');
}

/* ─── SWITCH CATEGORY ─── */
function switchCategory(catId) {
  activeCat = catId;
  history.pushState({}, '', `?cat=${catId}`);
  renderHero(catId);
  renderSidebar();
  renderSubcatFilter(catId);
  renderFilterSheet();
  renderToolbarTags(catId);
  renderGrid(catId, activeSort);
  closeFilterSheet();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ─── FILTER SHEET ─── */
function openFilterSheet() {
  document.getElementById('filter-sheet').classList.add('open');
  document.getElementById('filter-sheet-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeFilterSheet() {
  document.getElementById('filter-sheet').classList.remove('open');
  document.getElementById('filter-sheet-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── PRODUCT DETAIL MODAL (Fallback / Direct Modal View) ─── */
function findProduct(pid) {
  for (const arr of Object.values(PRODUCTS)) {
    const p = arr.find(x => x.id === pid);
    if (p) return p;
  }
  return null;
}

function openProductModal(pid) {
  const p = findProduct(pid);
  if (!p || p.isMore) return;

  // Image
  const img = document.getElementById('pdm-img');
  img.src = p.img;
  img.alt = p.name;

  // Badges on image
  const badgesEl = document.getElementById('pdm-img-badges');
  let badgesHTML = '';
  if (p.badge === 'HOT') badgesHTML += `<span class="pdm-img-badge pdm-badge-hot">🔥 HOT</span>`;
  if (p.badge === 'NEW') badgesHTML += `<span class="pdm-img-badge pdm-badge-new">✦ NEW</span>`;
  if (p.badge2 === 'RARE') badgesHTML += `<span class="pdm-img-badge pdm-badge-rare">💎 RARE</span>`;
  if (p.badge2 === 'COLLECTOR') badgesHTML += `<span class="pdm-img-badge pdm-badge-rare">✦ COLLECTOR</span>`;
  if (p.verified) badgesHTML += `<span class="pdm-img-badge pdm-badge-verified">✓ VERIFIED</span>`;
  badgesEl.innerHTML = badgesHTML;

  // Category label
  document.getElementById('pdm-cat-label').textContent = p.cat;

  // Title
  document.getElementById('pdm-title').textContent = p.name;

  // Rating
  const ratingEl = document.getElementById('pdm-rating-row');
  let ratingHTML = `<span class="pdm-stars">${starsHTML(p.stars)}</span>
    <span class="pdm-review-count">${p.reviews} reviews</span>`;
  if (p.verified) {
    ratingHTML += `<span class="pdm-verified-badge">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      Verified
    </span>`;
  }
  if (p.gameLabel && p.gameColor) {
    ratingHTML += `<span class="pdm-game-tag" style="background:${p.gameColor}20;color:${p.gameColor};border:1px solid ${p.gameColor}50">${p.gameLabel}</span>`;
  }
  ratingEl.innerHTML = ratingHTML;

  // Price block
  const priceEl = document.getElementById('pdm-price-block');
  if (p.price === 'Chat WA') {
    priceEl.innerHTML = `
      <div>
        <div class="pdm-price-label">Price</div>
        <div class="pdm-price-contact">Contact Concierge for Best Price</div>
      </div>
      <span class="pdm-price-note">Price varies based on specifications</span>`;
  } else {
    priceEl.innerHTML = `
      <div>
        <div class="pdm-price-label">Price</div>
        <div class="pdm-price-value">${p.price}</div>
      </div>
      <span class="pdm-price-note">Confirm order via WhatsApp</span>`;
  }

  // Features
  const featEl = document.getElementById('pdm-features');
  if (p.features && p.features.length) {
    featEl.innerHTML = p.features.map(f => `<li>${f}</li>`).join('');
    document.getElementById('pdm-features-section').style.display = '';
  } else {
    document.getElementById('pdm-features-section').style.display = 'none';
  }

  // Specs
  const specsEl = document.getElementById('pdm-specs-table');
  if (p.specs && p.specs.length) {
    specsEl.innerHTML = p.specs.map(s => `
      <div class="pdm-spec-row">
        <div class="pdm-spec-key">${s.key}</div>
        <div class="pdm-spec-val ${s.highlight ? 'highlight' : ''}">${s.val}</div>
      </div>`).join('');
    document.getElementById('pdm-specs-section').style.display = '';
  } else {
    document.getElementById('pdm-specs-section').style.display = 'none';
  }

  // Description
  document.getElementById('pdm-desc').textContent = p.desc || 'Contact our concierge for full details on this product.';

  // WA button
  document.getElementById('pdm-wa-btn').href = waLink(p.name);

  // Copy button
  const copyBtn = document.getElementById('pdm-copy-btn');
  copyBtn.onclick = () => {
    const text = `*${p.name}*\nCategory: ${p.cat}\nPrice: ${p.price}\nMore info: https://wa.me/628558171708`;
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.classList.add('copied');
      copyBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
      showToast('Product info copied to clipboard!');
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy Product Info`;
      }, 2000);
    }).catch(() => showToast('Use WhatsApp button to order'));
  };

  // Open modal
  document.getElementById('pdm-backdrop').classList.add('open');
  document.getElementById('pdm').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('pdm').scrollTop = 0;
  const pdmRight = document.querySelector('.pdm-right');
  if (pdmRight) pdmRight.scrollTop = 0;
}

function closeProductModal() {
  document.getElementById('pdm-backdrop').classList.remove('open');
  document.getElementById('pdm').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── TOAST ─── */
function showToast(msg) {
  const t = document.getElementById('pdm-toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

/* ─── INIT (only runs on category.html) ─── */
document.addEventListener('DOMContentLoaded', () => {
  // Guard: only run category page logic if we're on category.html
  if (!document.getElementById('cat-grid')) return;

  activeCat = getParam('cat');
  if (!CATEGORIES.find(c => c.id === activeCat)) activeCat = 'all';

  renderHero(activeCat);
  renderSidebar();
  renderSubcatFilter(activeCat);
  renderFilterSheet();
  renderToolbarTags(activeCat);
  renderGrid(activeCat, activeSort);

  /* Sort */
  const sortSel = document.getElementById('sort-select');
  if (sortSel) sortSel.addEventListener('change', () => {
    activeSort = sortSel.value;
    renderGrid(activeCat, activeSort);
  });

  /* Filter sheet */
  const mfb = document.getElementById('mobile-filter-btn');
  if (mfb) mfb.addEventListener('click', openFilterSheet);
  document.getElementById('fs-close')?.addEventListener('click', closeFilterSheet);
  document.getElementById('filter-sheet-backdrop')?.addEventListener('click', closeFilterSheet);
  document.getElementById('fs-apply-btn')?.addEventListener('click', () => {
    const active = document.querySelector('.fs-link.active');
    if (active) switchCategory(active.dataset.cat);
    else closeFilterSheet();
  });

  /* Navbar scroll */
  const navbar = document.getElementById('navbar');
  if (navbar) window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  /* Hamburger drawer */
  const hamburger = document.getElementById('hamburger');
  const sidebarDrawer = document.getElementById('sidebar-drawer');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');
  const sbClose = document.getElementById('sb-close');

  function openDrawer() {
    hamburger?.classList.add('open');
    sidebarDrawer?.classList.add('open');
    sidebarDrawer?.setAttribute('aria-hidden', 'false');
    sidebarBackdrop?.classList.add('active');
    document.body.classList.add('no-scroll');
  }
  function closeDrawer() {
    hamburger?.classList.remove('open');
    sidebarDrawer?.classList.remove('open');
    sidebarDrawer?.setAttribute('aria-hidden', 'true');
    sidebarBackdrop?.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
  hamburger?.addEventListener('click', openDrawer);
  sbClose?.addEventListener('click', closeDrawer);
  sidebarBackdrop?.addEventListener('click', closeDrawer);

  /* Search */
  const navSearchBtn = document.getElementById('nav-search-btn');
  const searchBar = document.getElementById('search-bar');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');
  navSearchBtn?.addEventListener('click', () => {
    searchBar.classList.toggle('open');
    if (searchBar.classList.contains('open') && searchInput) searchInput.focus();
  });
  searchClose?.addEventListener('click', () => searchBar.classList.remove('open'));
});
