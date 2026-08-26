/* ════════════════════════════════════════════════════════════
   PARE4PLAYER · category.js  v2.0
   Handles: category data, product grid, product detail modal,
   filter sheet, sort, URL params, navbar & drawer
   ════════════════════════════════════════════════════════════ */

/* ─── CATEGORY DEFINITIONS ─── */
const CATEGORIES = [
  {
    id: 'all', label: 'Semua Kategori', count: 80,
    desc: 'Semua produk gaming premium PARE4PLAYER',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>`,
    subcats: []
  },
  {
    id: 'jersey', label: 'Jersey & Apparel', count: 24,
    desc: 'Jersey esport custom, hoodie fullprint, kaos gaming premium',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/></svg>`,
    subcats: ['Jersey Custom', 'Hoodie', 'Kaos Casual', 'Full Sublimasi']
  },
  {
    id: 'accounts', label: 'Akun Game', count: 18,
    desc: 'Akun game terverifikasi · safe transfer · rekam jejak jelas',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4m-2-2v4"/><circle cx="17" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="14" r="1" fill="currentColor"/></svg>`,
    subcats: ['Mobile Legends', 'Valorant', 'Free Fire', 'PUBG Mobile', 'Genshin Impact', 'Honkai Star Rail']
  },
  {
    id: 'topup', label: 'Voucher & Top Up', count: 36,
    desc: 'Top up diamond, UC, Robux, VP instan — 100% legal',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9l4-6z"/><path d="M2 9h20M12 21L8 9m4 12l4-12"/></svg>`,
    subcats: ['Mobile Legends', 'Free Fire', 'PUBG Mobile', 'Valorant', 'Genshin Impact', 'Steam Wallet']
  },
  {
    id: 'items', label: 'Gaming Equipment', count: 12,
    desc: 'Headset, mousepad, controller gaming premium',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>`,
    subcats: ['Headset', 'Mousepad', 'Controller', 'Keyboard']
  },
  {
    id: 'boosting', label: 'Boosting', count: 15,
    desc: 'Jasa boost rank profesional · aman & terpercaya',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 17.5L3 6V3h3l11.5 11.5"/><path d="M13 19l6-6"/><path d="M16 16l4 4"/><path d="M19 21l2-2"/><path d="M14.5 6.5L18 3h3v3l-3.5 3.5"/><path d="M5 19l4-4"/><path d="M3 21l2-2"/></svg>`,
    subcats: ['ML Boost', 'Valorant Boost', 'FF Boost', 'PUBG Boost']
  },
  {
    id: 'coins', label: 'Game Currency', count: 22,
    desc: 'Diamond, UC, gold, currency in-game semua game populer',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="7" rx="9" ry="3"/><path d="M3 7v6c0 1.66 4.03 3 9 3s9-1.34 9-3V7"/><path d="M3 13v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/></svg>`,
    subcats: ['ML Diamonds', 'FF Diamonds', 'PUBG UC', 'Robux', 'Steam Wallet']
  },
  {
    id: 'roblox', label: 'Roblox', count: 8,
    desc: 'Robux, item Roblox, akun Roblox premium',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M9 9h6v6H9z" fill="currentColor"/></svg>`,
    subcats: ['Robux', 'Item Roblox', 'Akun Roblox']
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
      desc: 'Jersey esport eksklusif dengan desain Devil Stripe yang ikonik. Full sublimasi berkualitas tinggi, bahan polyester premium, cocok untuk tim esport maupun gaming enthusiast.',
      features: [
        'Full sublimasi printing — warna tahan lama, tidak mudah pudar',
        'Bahan polyester premium — ringan, adem, dan menyerap keringat',
        'Custom nama & nomor punggung tersedia',
        'Tersedia ukuran XS hingga XXXL',
        'Jahitan double-stitch kuat dan rapi',
        'Cocok untuk gaming session maupun turnamen'
      ],
      specs: [
        { key: 'Tipe', val: 'Jersey Esport Custom' },
        { key: 'Material', val: 'Polyester Premium 100%' },
        { key: 'Teknik Print', val: 'Full Sublimasi', highlight: true },
        { key: 'Ukuran', val: 'XS / S / M / L / XL / XXL / XXXL' },
        { key: 'Custom', val: 'Nama, Nomor, Logo Tim', highlight: true },
        { key: 'MOQ', val: '1 pcs (Custom Order)' },
        { key: 'Estimasi', val: '7–14 hari kerja' }
      ]
    },
    {
      id: 'j2', name: 'Gold Grid Hoodie', cat: 'Hoodie · Esport',
      badge2: 'COLLECTOR',
      img: 'IMG/81819510_497003264277929_1991857801541976064_n.jpg.jpeg',
      stars: 5, reviews: 32, price: 'Chat WA', verified: false,
      desc: 'Hoodie gaming premium dengan motif Gold Grid yang eksklusif. Desain elegan, cocok dipakai casual atau saat streaming. Material fleece tebal menjaga kehangatan.',
      features: [
        'Material fleece premium — hangat dan nyaman',
        'Motif Gold Grid eksklusif, desain limited',
        'Kap hoodie adjustable dengan tali katun',
        'Kualitas sablon/sublimasi tahan lama',
        'Tersedia pilihan warna hitam & navy',
        'Cocok untuk gaming, streaming, atau casual'
      ],
      specs: [
        { key: 'Tipe', val: 'Hoodie Esport' },
        { key: 'Material', val: 'Fleece Premium 320gsm' },
        { key: 'Desain', val: 'Gold Grid Exclusive' },
        { key: 'Warna', val: 'Hitam / Navy' },
        { key: 'Ukuran', val: 'S / M / L / XL / XXL' },
        { key: 'Fitur', val: 'Kap Adjustable, Pocket Depan', highlight: true },
        { key: 'Status', val: 'COLLECTOR EDITION', highlight: true }
      ]
    },
    {
      id: 'j3', name: 'Geometric Edge Hoodie', cat: 'Hoodie · Fullprint',
      badge2: 'COLLECTOR',
      img: 'IMG/75247421_452163855428537_6577748504087625728_n.jpg.jpeg',
      stars: 5, reviews: 27, price: 'Chat WA', verified: false,
      desc: 'Hoodie full print dengan motif geometric tegas dan modern. Tampil beda dengan desain yang tidak pasaran. Ideal untuk kolektor apparel gaming premium.',
      features: [
        'Full print all-over — motif geometric 360°',
        'Material cotton-poly blend yang nyaman',
        'Desain eksklusif — tidak dijual di pasaran umum',
        'Tersedia ukuran lengkap S–XXL',
        'Cocok untuk koleksi atau daily wear',
        'Warna tajam dan tahan lama'
      ],
      specs: [
        { key: 'Tipe', val: 'Hoodie Fullprint' },
        { key: 'Material', val: 'Cotton-Poly Blend 280gsm' },
        { key: 'Teknik Print', val: 'All-Over Sublimation', highlight: true },
        { key: 'Desain', val: 'Geometric Edge Exclusive' },
        { key: 'Ukuran', val: 'S / M / L / XL / XXL' },
        { key: 'Status', val: 'COLLECTOR EDITION', highlight: true }
      ]
    },
    {
      id: 'j4', name: 'Tactical Grid Hoodie', cat: 'Hoodie · Black Gold',
      img: 'IMG/75402042_452163845428538_3824576894284595200_n.jpg.jpeg',
      stars: 5, reviews: 19, price: 'Chat WA', verified: false,
      desc: 'Hoodie dengan tema Black Gold yang memancarkan aura premium. Cocok untuk gamer yang ingin tampil elegan dan profesional.',
      features: [
        'Tema warna Black & Gold yang premium',
        'Material fleece tebal anti-dingin',
        'Detail grid pattern yang halus dan elegan',
        'Jahitan presisi kualitas export',
        'Cocok untuk indoor & outdoor gaming event'
      ],
      specs: [
        { key: 'Tipe', val: 'Hoodie Gaming' },
        { key: 'Material', val: 'Fleece Premium 300gsm' },
        { key: 'Tema', val: 'Black & Gold', highlight: true },
        { key: 'Ukuran', val: 'S / M / L / XL / XXL' },
        { key: 'Warna', val: 'Hitam & Gold' }
      ]
    },
    {
      id: 'j5', name: 'Veni Vidi Vici Tee', cat: 'Kaos · Casual',
      badge: 'NEW',
      img: 'IMG/472313641_1625647298080181_4609009896057739488_n.jpg.jpeg',
      stars: 5, reviews: 61, price: 'Chat WA', verified: true,
      desc: 'Kaos gaming casual dengan tagline ikonik "Veni Vidi Vici" — datang, lihat, taklukkan. Filosofi para gamer sejati dalam satu kaos berkelas.',
      features: [
        'Desain eksklusif bertema "Veni Vidi Vici"',
        'Material cotton combed 30s yang adem',
        'Cocok untuk casual gaming atau hangout',
        'Tersedia pilihan warna hitam & putih',
        'Sablon DTF premium — tidak retak & tidak pudar',
        'Unisex sizing — nyaman untuk pria & wanita'
      ],
      specs: [
        { key: 'Tipe', val: 'Kaos Casual Gaming' },
        { key: 'Material', val: 'Cotton Combed 30s', highlight: true },
        { key: 'Teknik Print', val: 'DTF Premium' },
        { key: 'Warna', val: 'Hitam / Putih' },
        { key: 'Ukuran', val: 'S / M / L / XL / XXL' },
        { key: 'Verified', val: '✓ Produk Asli PARE4PLAYER', highlight: true }
      ]
    },
    {
      id: 'j6', name: 'Pare Classic Dark Tee', cat: 'Kaos · Classic',
      img: 'IMG/88055687_535333090444946_5042498455423942656_n.jpg.jpeg',
      stars: 5, reviews: 44, price: 'Chat WA', verified: false,
      desc: 'Kaos klasik PARE4PLAYER dengan estetika dark yang timeless. Desain sederhana namun berkarakter kuat. Pilihan tepat untuk daily wear gamer.',
      features: [
        'Desain minimalis dark classic PARE4PLAYER',
        'Material cotton premium yang lembut di kulit',
        'Sablon timbul eksklusif berlogo P4P',
        'Cocok untuk casual, gaming event, & content creation',
        'Tidak mudah kusut dan tahan lama'
      ],
      specs: [
        { key: 'Tipe', val: 'Kaos Classic' },
        { key: 'Material', val: 'Cotton Ring-Spun Premium' },
        { key: 'Desain', val: 'PARE4PLAYER Classic Dark' },
        { key: 'Warna', val: 'Hitam' },
        { key: 'Ukuran', val: 'S / M / L / XL / XXL' }
      ]
    },
    { id: 'j7', name: 'Custom Order Jersey', cat: 'Request · Bespoke', isMore: true }
  ],

  accounts: [
    {
      id: 'a1', name: 'ML Mythic+ Full Hero', cat: 'Mobile Legends · Akun',
      badge: 'HOT', badge2: 'RARE',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=450&fit=crop&crop=center',
      stars: 5, reviews: 93, price: 'Chat WA', verified: true,
      gameColor: '#1E90FF', gameLabel: 'ML · Mythic+',
      desc: 'Akun Mobile Legends rank Mythic+ dengan koleksi hero dan skin lengkap. Sudah diverifikasi kepemilikan dan rekam jejaknya bersih. Siap transfer aman.',
      features: [
        'Rank Mythic+ dengan winrate di atas 60%',
        'Koleksi 100+ hero terlengkap',
        'Skin legendary & collector tersedia',
        'Email binding bisa diganti',
        'Rekam jejak bersih — tidak pernah banned',
        'Garansi transfer aman dengan escrow P4P'
      ],
      specs: [
        { key: 'Game', val: 'Mobile Legends: Bang Bang' },
        { key: 'Rank', val: 'Mythic+', highlight: true },
        { key: 'Hero', val: '100+ Hero Unlocked', highlight: true },
        { key: 'Skin', val: 'Legendary & Collector' },
        { key: 'Binding', val: 'Email dapat diganti' },
        { key: 'Status', val: '✓ Verified & Clean' },
        { key: 'Transfer', val: 'Escrow aman via P4P', highlight: true }
      ]
    },
    {
      id: 'a2', name: 'Valorant Immortal Skins', cat: 'Valorant · Akun',
      badge: 'HOT', badge2: 'RARE',
      img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=450&fit=crop&crop=center',
      stars: 5, reviews: 71, price: 'Chat WA', verified: true,
      gameColor: '#FF4655', gameLabel: 'VAL · Immortal',
      desc: 'Akun Valorant rank Immortal dengan koleksi skin premium. Sudah full verified, siap transfer. Cocok untuk player yang ingin tampil keren di ranked.',
      features: [
        'Rank Immortal — level kompetitif tertinggi',
        'Skin premium koleksi lengkap (Operator, Vandal, Phantom)',
        'Bisa akses semua agent tanpa limit',
        'Account region Asia Pacific',
        'Email dapat diganti setelah transfer',
        'Rekam jejak bersih dari ban'
      ],
      specs: [
        { key: 'Game', val: 'Valorant' },
        { key: 'Rank', val: 'Immortal', highlight: true },
        { key: 'Region', val: 'Asia Pacific' },
        { key: 'Skins', val: 'Premium Collection', highlight: true },
        { key: 'Agent', val: 'All Agents Available' },
        { key: 'Status', val: '✓ Verified & Clean' }
      ]
    },
    {
      id: 'a3', name: 'FF Sultan Bundle Legendary', cat: 'Free Fire · Akun',
      badge2: 'COLLECTOR',
      img: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&h=450&fit=crop&crop=center',
      stars: 5, reviews: 55, price: 'Chat WA', verified: true,
      gameColor: '#FF6B00', gameLabel: 'FF · Sultan',
      desc: 'Akun Free Fire sultan dengan bundle legendary lengkap. Tingkat kepercayaan tinggi — semua bundle original dari top up resmi. Rekam jejak bersih.',
      features: [
        'Sultan account — diamond ribuan tersedia',
        'Bundle legendary lengkap & original',
        'Karakter & pet premium unlocked',
        'Rank Heroic ke atas',
        'Safe email transfer tersedia',
        'Semua item original, bukan hack/mod'
      ],
      specs: [
        { key: 'Game', val: 'Free Fire' },
        { key: 'Level', val: 'Sultan Account', highlight: true },
        { key: 'Bundle', val: 'Legendary Collection' },
        { key: 'Rank', val: 'Heroic+' },
        { key: 'Diamonds', val: 'Ribuan (tergantung stok)' },
        { key: 'Status', val: '✓ Verified Original' }
      ]
    },
    {
      id: 'a4', name: 'PUBG Conqueror Full Outfit', cat: 'PUBG Mobile · Akun',
      badge2: 'COLLECTOR',
      img: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&h=450&fit=crop&crop=center',
      stars: 5, reviews: 38, price: 'Chat WA', verified: false,
      gameColor: '#F5A623', gameLabel: 'PUBG · Conqueror',
      desc: 'Akun PUBG Mobile dengan rank Conqueror dan full outfit eksklusif. Koleksi skin senjata, kendaraan, dan outfit terlengkap. Cocok untuk kolektor.',
      features: [
        'Rank Conqueror — puncak kompetitif PUBG Mobile',
        'Full outfit exclusive collection',
        'Skin senjata premium (M416, AWM, dll)',
        'Vehicle skin koleksi langka',
        'Safe transfer via escrow P4P',
        'Region bebas pilih'
      ],
      specs: [
        { key: 'Game', val: 'PUBG Mobile' },
        { key: 'Rank', val: 'Conqueror', highlight: true },
        { key: 'Outfit', val: 'Full Exclusive Collection' },
        { key: 'Senjata', val: 'Premium Skin Collection' },
        { key: 'Region', val: 'Bisa disesuaikan' },
        { key: 'Transfer', val: 'Escrow aman via P4P', highlight: true }
      ]
    },
    {
      id: 'a5', name: 'Genshin AR60 5-Star Full', cat: 'Genshin Impact · Akun',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=450&fit=crop&crop=center',
      stars: 5, reviews: 42, price: 'Chat WA', verified: true,
      gameColor: '#7B5EA7', gameLabel: 'Genshin · AR60',
      desc: 'Akun Genshin Impact Adventure Rank 60 dengan roster karakter 5-star lengkap. Semua konten story dan domain sudah clear. Siap untuk end-game.',
      features: [
        'Adventure Rank 60 — maksimal AR',
        'Karakter 5-star koleksi lengkap',
        'Semua story quest & domain cleared',
        'Primogem & wish tersedia',
        'Abyss floor 12 cleared',
        'Account server Asia atau Global'
      ],
      specs: [
        { key: 'Game', val: 'Genshin Impact' },
        { key: 'AR', val: 'AR 60 (Max)', highlight: true },
        { key: 'Karakter', val: '5-Star Full Collection' },
        { key: 'Abyss', val: 'Floor 12 Cleared', highlight: true },
        { key: 'Server', val: 'Asia / Global' },
        { key: 'Status', val: '✓ Verified' }
      ]
    },
    {
      id: 'a6', name: 'ML Legend Collector Skin', cat: 'Mobile Legends · Akun',
      img: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=600&h=450&fit=crop&crop=center',
      stars: 5, reviews: 29, price: 'Chat WA', verified: true,
      gameColor: '#1E90FF', gameLabel: 'ML · Legend',
      desc: 'Akun Mobile Legends rank Legend dengan koleksi skin collector langka. Pilihan ideal untuk kolektor skin ML yang ingin tampil eksklusif.',
      features: [
        'Rank Legend — tier kompetitif tinggi',
        'Koleksi skin collector & special edition',
        'Hero populer sudah unlocked',
        'Email transfer tersedia',
        'Rekam jejak bersih',
        'Support P4P concierge after-sales'
      ],
      specs: [
        { key: 'Game', val: 'Mobile Legends: Bang Bang' },
        { key: 'Rank', val: 'Legend', highlight: true },
        { key: 'Skin', val: 'Collector & Special Edition' },
        { key: 'Hero', val: '60+ Hero Unlocked' },
        { key: 'Status', val: '✓ Verified' }
      ]
    },
    { id: 'a7', name: 'Private Request Akun', cat: 'Layanan · Custom', isMore: true }
  ],

  topup: [
    {
      id: 'v1', name: '86 Diamonds ML', cat: 'Mobile Legends · Diamond',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=450&fit=crop&crop=top',
      stars: 5, reviews: 210, price: 'Rp 20.000', verified: false,
      desc: 'Top up 86 Diamond Mobile Legends via ID langsung. Proses otomatis cepat tanpa perlu login akun. Aman dan 100% legal dari distributor resmi.',
      features: [
        'Top up langsung via ID in-game',
        'Tidak perlu login atau berikan password',
        'Proses instan — diamond masuk dalam menit',
        '100% legal dari distributor resmi',
        'Support 24/7 dari tim concierge P4P',
        'Riwayat transaksi dapat dikonfirmasi'
      ],
      specs: [
        { key: 'Game', val: 'Mobile Legends: Bang Bang' },
        { key: 'Jumlah', val: '86 Diamonds', highlight: true },
        { key: 'Metode', val: 'Via ID In-Game' },
        { key: 'Proses', val: 'Instan (< 5 menit)', highlight: true },
        { key: 'Harga', val: 'Rp 20.000' },
        { key: 'Legal', val: '100% Resmi & Aman' }
      ]
    },
    {
      id: 'v2', name: '257 Diamonds ML', cat: 'Mobile Legends · Diamond',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=450&fit=crop&crop=top',
      stars: 5, reviews: 387, price: 'Rp 59.000', verified: false,
      desc: 'Top up 257 Diamond Mobile Legends. Paket terlaris karena cukup untuk beli hero populer atau 1 item skin. Proses cepat dan aman.',
      features: [
        'Jumlah diamond ideal untuk beli hero/skin',
        'Top up langsung via ID — no login needed',
        'Proses instan kurang dari 5 menit',
        'Tersedia berbagai metode pembayaran',
        'Garansi diamond masuk atau uang kembali',
        'Terlaris bulan ini — 387 pembeli'
      ],
      specs: [
        { key: 'Game', val: 'Mobile Legends: Bang Bang' },
        { key: 'Jumlah', val: '257 Diamonds', highlight: true },
        { key: 'Metode', val: 'Via ID In-Game' },
        { key: 'Proses', val: 'Instan (< 5 menit)', highlight: true },
        { key: 'Harga', val: 'Rp 59.000' }
      ]
    },
    {
      id: 'v3', name: '1050 Diamonds ML', cat: 'Mobile Legends · Diamond',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=450&fit=crop&crop=top',
      stars: 5, reviews: 145, price: 'Rp 229.000', verified: false,
      desc: 'Paket 1050 Diamond ML — cukup untuk membeli skin Epic atau Starlight. Harga kompetitif dan proses aman.',
      features: [
        'Cukup untuk beli 1 skin Epic atau Starlight',
        'Via ID langsung, no login',
        'Proses instan',
        'Garansi penuh'
      ],
      specs: [
        { key: 'Game', val: 'Mobile Legends: Bang Bang' },
        { key: 'Jumlah', val: '1050 Diamonds', highlight: true },
        { key: 'Metode', val: 'Via ID In-Game' },
        { key: 'Proses', val: 'Instan' },
        { key: 'Harga', val: 'Rp 229.000' }
      ]
    },
    {
      id: 'v4', name: '70 Diamonds Free Fire', cat: 'Free Fire · Diamond',
      img: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&h=450&fit=crop&crop=top',
      stars: 5, reviews: 175, price: 'Rp 15.000', verified: false,
      desc: 'Top up 70 Diamond Free Fire via ID. Paket hemat untuk beli item atau gacha. Proses otomatis dan aman.',
      features: [
        'Top up via ID FF langsung',
        'Proses instan, no login',
        'Cocok untuk gacha spin atau beli item',
        'Legal 100% dari distributor resmi'
      ],
      specs: [
        { key: 'Game', val: 'Free Fire' },
        { key: 'Jumlah', val: '70 Diamonds', highlight: true },
        { key: 'Harga', val: 'Rp 15.000' },
        { key: 'Proses', val: 'Instan' }
      ]
    },
    {
      id: 'v5', name: '355 Diamonds Free Fire', cat: 'Free Fire · Diamond',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&h=450&fit=crop&crop=top',
      stars: 5, reviews: 298, price: 'Rp 70.000', verified: false,
      desc: 'Paket 355 Diamond Free Fire — terlaris! Cukup untuk spin bundle atau beli item event. Harga terjangkau dan proses super cepat.',
      features: [
        'Paket terlaris FF bulan ini',
        'Cukup untuk 1 spin bundle/event',
        'Proses kurang dari 3 menit',
        'Via ID, no login required'
      ],
      specs: [
        { key: 'Game', val: 'Free Fire' },
        { key: 'Jumlah', val: '355 Diamonds', highlight: true },
        { key: 'Harga', val: 'Rp 70.000' },
        { key: 'Proses', val: 'Instan (< 3 menit)', highlight: true }
      ]
    },
    {
      id: 'v6', name: '660 UC PUBG Mobile', cat: 'PUBG Mobile · UC',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&h=450&fit=crop&crop=top',
      stars: 5, reviews: 120, price: 'Rp 149.000', verified: false,
      desc: '660 Unknown Cash PUBG Mobile — cukup untuk beli Royale Pass atau item premium. Proses aman, cepat, dan legal.',
      features: [
        'Cukup untuk beli Royale Pass',
        'Via ID PUBG Mobile langsung',
        'Proses instan',
        'Legal resmi'
      ],
      specs: [
        { key: 'Game', val: 'PUBG Mobile' },
        { key: 'Jumlah', val: '660 UC', highlight: true },
        { key: 'Harga', val: 'Rp 149.000' },
        { key: 'Proses', val: 'Instan' }
      ]
    },
    {
      id: 'v7', name: 'Valorant 475 VP', cat: 'Valorant · VP',
      img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=450&fit=crop&crop=top',
      stars: 5, reviews: 88, price: 'Rp 89.000', verified: false,
      desc: '475 Valorant Points — cukup untuk beli 1 gun buddy atau weapon skin. Proses aman melalui concierge P4P.',
      features: [
        'Valorant Points resmi',
        'Cukup untuk 1 gun buddy atau item',
        'Proses aman via concierge',
        'Support berbagai metode bayar'
      ],
      specs: [
        { key: 'Game', val: 'Valorant' },
        { key: 'Jumlah', val: '475 VP', highlight: true },
        { key: 'Harga', val: 'Rp 89.000' },
        { key: 'Proses', val: 'Manual via Concierge' }
      ]
    },
    {
      id: 'v8', name: 'Steam Wallet Rp 50.000', cat: 'Steam · Wallet',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=450&fit=crop&crop=top',
      stars: 5, reviews: 64, price: 'Rp 55.000', verified: false,
      desc: 'Steam Wallet Rp 50.000 — bisa digunakan untuk beli game, DLC, atau item di Steam marketplace. Kode dikirim cepat.',
      features: [
        'Bisa untuk beli game, DLC, item market',
        'Kode dikirim via WA/email',
        'Proses cepat',
        'Berlaku permanen di akun Steam'
      ],
      specs: [
        { key: 'Platform', val: 'Steam' },
        { key: 'Nilai', val: 'Rp 50.000', highlight: true },
        { key: 'Harga', val: 'Rp 55.000' },
        { key: 'Pengiriman', val: 'Kode via WA/Email' }
      ]
    }
  ],

  items: [
    {
      id: 'e1', name: 'Gaming Headset Pro X7', cat: 'Equipment · Headset',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=450&fit=crop',
      stars: 5, reviews: 76, price: 'Chat WA', verified: false,
      desc: 'Headset gaming Pro X7 dengan suara surround 7.1 virtual. Mikrofon noise-cancelling, earcup memory foam, cocok untuk gaming marathon.',
      features: [
        'Suara surround virtual 7.1 channel',
        'Mikrofon noise-cancelling yang jernih',
        'Earcup memory foam — nyaman berjam-jam',
        'Driver 50mm untuk bass yang dalam',
        'Kompatibel PC, PS4/5, Xbox, mobile',
        'Desain RGB LED yang keren'
      ],
      specs: [
        { key: 'Tipe', val: 'Gaming Headset' },
        { key: 'Driver', val: '50mm', highlight: true },
        { key: 'Surround', val: 'Virtual 7.1', highlight: true },
        { key: 'Mikrofon', val: 'Noise-Cancelling Detachable' },
        { key: 'Koneksi', val: 'USB / 3.5mm Jack' },
        { key: 'Kompatibel', val: 'PC / PS4/5 / Xbox / Mobile' }
      ]
    },
    {
      id: 'e2', name: 'RGB Mousepad XL', cat: 'Equipment · Mousepad',
      img: 'https://images.unsplash.com/photo-1586349906319-47f6b1b4b2d3?w=600&h=450&fit=crop',
      stars: 5, reviews: 53, price: 'Chat WA', verified: false,
      desc: 'Mousepad XL dengan lampu RGB 16 juta warna. Permukaan kain halus untuk tracking presisi tinggi. Anti-slip base karet.',
      features: [
        'Ukuran XL 900x400mm — cukup untuk keyboard + mouse',
        'RGB LED 16 juta warna dengan 12 mode efek',
        'Permukaan kain micro-textured untuk presisi',
        'Base karet anti-slip anti-geser',
        'Tebal 4mm — nyaman untuk pergelangan',
        'Waterproof surface'
      ],
      specs: [
        { key: 'Tipe', val: 'Gaming Mousepad' },
        { key: 'Ukuran', val: '900 x 400 x 4mm (XL)', highlight: true },
        { key: 'Lampu', val: 'RGB 16 Juta Warna' },
        { key: 'Efek', val: '12 Mode RGB' },
        { key: 'Surface', val: 'Micro-Textured Cloth' },
        { key: 'Fitur', val: 'Anti-Slip, Waterproof' }
      ]
    },
    {
      id: 'e3', name: 'Pro Controller Wireless', cat: 'Equipment · Controller',
      badge2: 'RARE',
      img: 'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=600&h=450&fit=crop',
      stars: 5, reviews: 41, price: 'Chat WA', verified: false,
      desc: 'Controller wireless premium untuk PC/console. Grip ergonomis, trigger sensitivity adjustable, dan baterai tahan lama untuk sesi gaming panjang.',
      features: [
        'Koneksi wireless 2.4GHz + Bluetooth',
        'Trigger sensitivity adjustable',
        'Grip ergonomis anti-licin',
        'Baterai 600mAh — tahan 10+ jam',
        'Kompatibel Windows/Android/iOS',
        'Vibration feedback untuk immersive gaming'
      ],
      specs: [
        { key: 'Tipe', val: 'Wireless Gaming Controller' },
        { key: 'Koneksi', val: '2.4GHz + Bluetooth 5.0', highlight: true },
        { key: 'Baterai', val: '600mAh (10+ jam)', highlight: true },
        { key: 'Kompatibel', val: 'Windows / Android / iOS' },
        { key: 'Fitur', val: 'Vibration, Adj. Trigger' }
      ]
    },
    {
      id: 'e4', name: 'Mechanical Gaming Keyboard', cat: 'Equipment · Keyboard',
      img: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=450&fit=crop',
      stars: 5, reviews: 38, price: 'Chat WA', verified: false,
      desc: 'Keyboard gaming mechanical dengan switch Red yang smooth. RGB per-key, anti-ghosting 100%, cocok untuk gaming FPS, MOBA, atau MMO.',
      features: [
        'Switch mechanical Red — smooth & fast actuation',
        'RGB per-key backlight 16 juta warna',
        'Anti-ghosting 100% — semua key responsif',
        'Build quality aluminium frame',
        'USB passthrough untuk aksesoris',
        'Windows/Mac kompatibel'
      ],
      specs: [
        { key: 'Tipe', val: 'Mechanical Gaming Keyboard' },
        { key: 'Switch', val: 'Red (Linear)', highlight: true },
        { key: 'Layout', val: 'Full-Size 104 Key' },
        { key: 'RGB', val: 'Per-Key 16M Warna' },
        { key: 'Fitur', val: 'Anti-Ghosting 100%', highlight: true },
        { key: 'Frame', val: 'Aluminium Body' }
      ]
    },
    { id: 'e5', name: 'Request Equipment', cat: 'Layanan · Custom', isMore: true }
  ],

  boosting: [
    {
      id: 'b1', name: 'ML Rank Boost Mythic', cat: 'Mobile Legends · Boost',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=450&fit=crop',
      stars: 5, reviews: 118, price: 'Chat WA', verified: true,
      gameColor: '#1E90FF', gameLabel: 'ML · Mythic',
      desc: 'Jasa boost rank Mobile Legends hingga Mythic. Dikerjakan oleh booster berpengalaman dengan winrate tinggi. Aman, cepat, dan dijamin.',
      features: [
        'Booster rank Mythic berpengalaman',
        'Winrate booster di atas 70%',
        'Dikerjakan dalam 3-7 hari',
        'Pilihan hero sesuai kebutuhan',
        'VPN aman — tidak terdeteksi sistem ML',
        'Garansi 100% selesai atau uang kembali'
      ],
      specs: [
        { key: 'Game', val: 'Mobile Legends: Bang Bang' },
        { key: 'Target', val: 'Mythic Rank', highlight: true },
        { key: 'Durasi', val: '3–7 Hari Kerja' },
        { key: 'Booster', val: 'Pro Player Certified', highlight: true },
        { key: 'Keamanan', val: 'VPN Protected' },
        { key: 'Garansi', val: '100% Selesai atau Refund' }
      ]
    },
    {
      id: 'b2', name: 'Valorant Immortal Boost', cat: 'Valorant · Boost',
      badge2: 'RARE',
      img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=450&fit=crop',
      stars: 5, reviews: 87, price: 'Chat WA', verified: true,
      gameColor: '#FF4655', gameLabel: 'VAL · Immortal',
      desc: 'Boost rank Valorant hingga Immortal. Dikerjakan oleh player pro certified. Pilihan Duo Queue atau Solo tersedia. Privacy terjaga.',
      features: [
        'Target rank: Diamond 1 hingga Immortal',
        'Pilihan Solo Boost atau Duo Queue',
        'Player pro certified dengan Radiant experience',
        'Offline mode selama boost berlangsung',
        'Update progress real-time via WA',
        'Garansi selesai 100%'
      ],
      specs: [
        { key: 'Game', val: 'Valorant' },
        { key: 'Target', val: 'Diamond → Immortal', highlight: true },
        { key: 'Metode', val: 'Solo / Duo Queue' },
        { key: 'Player', val: 'Radiant Certified', highlight: true },
        { key: 'Update', val: 'Real-time via WhatsApp' },
        { key: 'Garansi', val: '100% atau Refund' }
      ]
    },
    {
      id: 'b3', name: 'FF Grand Master Boost', cat: 'Free Fire · Boost',
      img: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&h=450&fit=crop',
      stars: 5, reviews: 64, price: 'Chat WA', verified: true,
      gameColor: '#FF6B00', gameLabel: 'FF · GM',
      desc: 'Jasa push rank Free Fire hingga Grand Master. Aman, cepat, dan dikerjakan booster berpengalaman.',
      features: [
        'Target Grand Master rank',
        'Booster berpengalaman FF',
        'Proses aman, tidak detectable',
        'Update progress via WA',
        'Garansi selesai'
      ],
      specs: [
        { key: 'Game', val: 'Free Fire' },
        { key: 'Target', val: 'Grand Master', highlight: true },
        { key: 'Durasi', val: '5–10 Hari' },
        { key: 'Garansi', val: '100% Selesai' }
      ]
    },
    {
      id: 'b4', name: 'PUBG Conqueror Push', cat: 'PUBG Mobile · Boost',
      img: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&h=450&fit=crop',
      stars: 5, reviews: 49, price: 'Chat WA', verified: true,
      gameColor: '#F5A623', gameLabel: 'PUBG · Conq',
      desc: 'Push rank PUBG Mobile hingga Conqueror. Dikerjakan player berpengalaman dengan privacy terjaga.',
      features: [
        'Target rank Conqueror PUBG Mobile',
        'Booster dengan Conqueror experience',
        'VPN aman selama boost',
        'Garansi selesai atau uang kembali'
      ],
      specs: [
        { key: 'Game', val: 'PUBG Mobile' },
        { key: 'Target', val: 'Conqueror', highlight: true },
        { key: 'Durasi', val: '7–14 Hari' },
        { key: 'Garansi', val: '100% atau Refund' }
      ]
    },
    { id: 'b5', name: 'Custom Rank Request', cat: 'Layanan · Custom', isMore: true }
  ],

  coins: [
    {
      id: 'c1', name: '2195 Diamonds ML', cat: 'Mobile Legends · Diamond',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=450&fit=crop',
      stars: 5, reviews: 203, price: 'Rp 459.000', verified: false,
      desc: 'Paket besar 2195 Diamond Mobile Legends. Cukup untuk membeli 2 skin Legendary atau melengkapi koleksi skin tier tinggi.',
      features: [
        'Jumlah diamond besar untuk kolektor',
        'Via ID langsung — no login',
        'Proses instan',
        'Garansi diamond masuk'
      ],
      specs: [
        { key: 'Game', val: 'Mobile Legends: Bang Bang' },
        { key: 'Jumlah', val: '2195 Diamonds', highlight: true },
        { key: 'Harga', val: 'Rp 459.000' },
        { key: 'Proses', val: 'Instan' }
      ]
    },
    {
      id: 'c2', name: '2900 Diamonds FF', cat: 'Free Fire · Diamond',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&h=450&fit=crop',
      stars: 5, reviews: 178, price: 'Rp 549.000', verified: false,
      desc: '2900 Diamond Free Fire — paket sultan. Cukup untuk borong bundle terbaru dan item event premium.',
      features: [
        'Paket sultan FF terbesar',
        'Via ID FF langsung',
        'Proses instan',
        'Garansi penuh'
      ],
      specs: [
        { key: 'Game', val: 'Free Fire' },
        { key: 'Jumlah', val: '2900 Diamonds', highlight: true },
        { key: 'Harga', val: 'Rp 549.000' },
        { key: 'Proses', val: 'Instan' }
      ]
    },
    {
      id: 'c3', name: '1800 UC PUBG Mobile', cat: 'PUBG Mobile · UC',
      img: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&h=450&fit=crop',
      stars: 5, reviews: 92, price: 'Rp 369.000', verified: false,
      desc: '1800 UC PUBG Mobile — cukup untuk 2x Royale Pass Plus dan masih ada sisa untuk beli item.',
      features: [
        'Cukup untuk 2 Royale Pass Plus',
        'Via ID PUBG langsung',
        'Proses instan',
        'Legal resmi'
      ],
      specs: [
        { key: 'Game', val: 'PUBG Mobile' },
        { key: 'Jumlah', val: '1800 UC', highlight: true },
        { key: 'Harga', val: 'Rp 369.000' },
        { key: 'Proses', val: 'Instan' }
      ]
    },
    {
      id: 'c4', name: '2000 Robux', cat: 'Roblox · Robux',
      badge2: 'RARE',
      img: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=450&fit=crop',
      stars: 5, reviews: 77, price: 'Rp 350.000', verified: false,
      desc: '2000 Robux untuk item, avatar, dan game pass di Roblox. Dikirim aman via concierge P4P.',
      features: [
        'Robux untuk avatar, item, game pass',
        'Proses aman via concierge',
        'Tidak perlu share password',
        'Garansi penuh'
      ],
      specs: [
        { key: 'Platform', val: 'Roblox' },
        { key: 'Jumlah', val: '2000 Robux', highlight: true },
        { key: 'Harga', val: 'Rp 350.000' },
        { key: 'Metode', val: 'Via Concierge Aman' }
      ]
    },
    {
      id: 'c5', name: 'Steam Wallet Rp 200.000', cat: 'Steam · Wallet',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=450&fit=crop',
      stars: 5, reviews: 61, price: 'Rp 215.000', verified: false,
      desc: 'Steam Wallet Rp 200.000 — bisa untuk beli game AAA, DLC, item marketplace. Kode dikirim cepat via WA.',
      features: [
        'Nilai Rp 200.000 di Steam',
        'Kode dikirim via WA/email',
        'Berlaku selamanya',
        'Untuk game, DLC, atau market item'
      ],
      specs: [
        { key: 'Platform', val: 'Steam' },
        { key: 'Nilai', val: 'Rp 200.000', highlight: true },
        { key: 'Harga', val: 'Rp 215.000' },
        { key: 'Pengiriman', val: 'Kode digital via WA' }
      ]
    }
  ],

  roblox: [
    {
      id: 'r1', name: '800 Robux', cat: 'Roblox · Robux',
      badge: 'HOT',
      img: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=450&fit=crop',
      stars: 5, reviews: 134, price: 'Rp 155.000', verified: false,
      desc: '800 Robux — paket paling populer untuk beli avatar item, game pass, atau aksesoris di Roblox. Aman dan cepat.',
      features: [
        'Robux resmi dari distributor Roblox',
        'Proses cepat via concierge P4P',
        'Bisa untuk avatar, item, atau game pass',
        'Garansi penuh'
      ],
      specs: [
        { key: 'Platform', val: 'Roblox' },
        { key: 'Jumlah', val: '800 Robux', highlight: true },
        { key: 'Harga', val: 'Rp 155.000' },
        { key: 'Proses', val: 'Via Concierge P4P' }
      ]
    },
    {
      id: 'r2', name: '2000 Robux', cat: 'Roblox · Robux',
      badge2: 'RARE',
      img: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=450&fit=crop',
      stars: 5, reviews: 98, price: 'Rp 350.000', verified: false,
      desc: '2000 Robux — paket lengkap untuk kolektor Roblox. Cukup untuk beli berbagai item eksklusif.',
      features: [
        'Paket lengkap untuk kolektor',
        'Proses aman via concierge',
        'Robux resmi',
        'Garansi penuh'
      ],
      specs: [
        { key: 'Platform', val: 'Roblox' },
        { key: 'Jumlah', val: '2000 Robux', highlight: true },
        { key: 'Harga', val: 'Rp 350.000' },
        { key: 'Proses', val: 'Via Concierge P4P' }
      ]
    },
    {
      id: 'r3', name: 'Akun Roblox Premium', cat: 'Roblox · Akun',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=450&fit=crop',
      stars: 5, reviews: 55, price: 'Chat WA', verified: true,
      desc: 'Akun Roblox premium dengan item dan Robux tersedia. Rekam jejak bersih, sudah diverifikasi kepemilikan.',
      features: [
        'Akun dengan item premium',
        'Robux tersedia (tergantung stok)',
        'Rekam jejak bersih',
        'Email transfer tersedia',
        'Verified oleh tim P4P'
      ],
      specs: [
        { key: 'Platform', val: 'Roblox' },
        { key: 'Tipe', val: 'Premium Account', highlight: true },
        { key: 'Item', val: 'Koleksi Premium' },
        { key: 'Status', val: '✓ Verified' }
      ]
    },
    {
      id: 'r4', name: 'Item Roblox Rare', cat: 'Roblox · Item',
      badge2: 'COLLECTOR',
      img: 'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=600&h=450&fit=crop',
      stars: 5, reviews: 43, price: 'Chat WA', verified: false,
      desc: 'Item Roblox langka yang sudah tidak tersedia di marketplace umum. Koleksi terbatas untuk kolektor sejati.',
      features: [
        'Item langka — limited edition',
        'Tidak tersedia di marketplace umum',
        'Cocok untuk kolektor Roblox',
        'Transfer aman via concierge'
      ],
      specs: [
        { key: 'Platform', val: 'Roblox' },
        { key: 'Tipe', val: 'Rare Collector Item', highlight: true },
        { key: 'Status', val: 'COLLECTOR EDITION' },
        { key: 'Transfer', val: 'Via Concierge P4P' }
      ]
    },
    { id: 'r5', name: 'Custom Roblox Request', cat: 'Layanan · Custom', isMore: true }
  ]
};

/* Build combined "all" pool */
PRODUCTS.all = Object.entries(PRODUCTS)
  .filter(([k]) => k !== 'all')
  .flatMap(([, arr]) => arr)
  .filter(p => !p.isMore)
  .slice(0, 24);

/* ─── STATE ─── */
let activeCat = 'all';
let activeSort = 'default';

/* ─── HELPERS ─── */
const getParam = (key) => new URLSearchParams(window.location.search).get(key) || 'all';
const starsHTML = (n) => '★'.repeat(n) + '☆'.repeat(5 - n);
const waLink = (name) =>
  `https://wa.me/6281234567890?text=Halo%20PARE4PLAYER%2C%20saya%20tertarik%20dengan%20produk%20*${encodeURIComponent(name)}*.%20Bisa%20tolong%20info%20lebih%20lanjut%3F`;

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
  block.innerHTML = `<div class="cs-filter-title">Sub-Kategori</div>
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
    ? `<span class="ct-tag">${cat.label}<span class="tag-x" onclick="switchCategory('all')">x</span></span>` : '';
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
    ? `<span class="cat-card-price price-contact">Request Harga</span>`
    : `<span class="cat-card-price">${p.price}</span>`;

  return `
    <a href="product-detail.html?id=${p.id}" class="cat-card" style="animation-delay:${delay}ms"
      aria-label="Lihat detail ${p.name}">
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
          <span class="cat-card-btn">Detail →</span>
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
    products = products.filter(p => p.badge2 === 'RARE' || p.badge2 === 'COLLECTOR' || p.badge2 === 'RARE');
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

/* ─── PRODUCT DETAIL MODAL ─── */
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
    <span class="pdm-review-count">${p.reviews} ulasan</span>`;
  if (p.verified) {
    ratingHTML += `<span class="pdm-verified-badge">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      Terverifikasi
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
        <div class="pdm-price-label">Harga</div>
        <div class="pdm-price-contact">Hubungi Concierge untuk harga</div>
      </div>
      <span class="pdm-price-note">Harga bervariasi sesuai spesifikasi</span>`;
  } else {
    priceEl.innerHTML = `
      <div>
        <div class="pdm-price-label">Harga</div>
        <div class="pdm-price-value">${p.price}</div>
      </div>
      <span class="pdm-price-note">Konfirmasi harga via WA</span>`;
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
  document.getElementById('pdm-desc').textContent = p.desc || 'Hubungi concierge untuk informasi detail produk ini.';

  // WA button
  document.getElementById('pdm-wa-btn').href = waLink(p.name);

  // Copy button
  const copyBtn = document.getElementById('pdm-copy-btn');
  copyBtn.onclick = () => {
    const text = `*${p.name}*\nKategori: ${p.cat}\nHarga: ${p.price}\nInfo lebih lanjut: https://wa.me/6281234567890`;
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.classList.add('copied');
      copyBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Tersalin!`;
      showToast('Info produk disalin ke clipboard!');
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Salin Info Produk`;
      }, 2000);
    }).catch(() => showToast('Gunakan tombol WA untuk order'));
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

