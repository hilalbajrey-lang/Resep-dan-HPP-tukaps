// app.js — Complete HPP Calculator Engine for Tukaps Coffee

const SEED_DATA = {
  bahan: [
    { id: "BHN01", name: "Espresso Cair", cat: "Kopi", unit: "gr", packQty: 1200, buyPrice: 120000, supplier: "Mahogany Roastery" },
    { id: "BHN02", name: "Susu Fresh Milk", cat: "Dairy", unit: "gr", packQty: 1000, buyPrice: 19000, supplier: "knb roastery" },
    { id: "BHN03", name: "Creamer", cat: "Dairy", unit: "gr", packQty: 1000, buyPrice: 31000, supplier: "Distributor Dairy Prima" },
    { id: "BHN04", name: "Gula Aren", cat: "Pemanis", unit: "gr", packQty: 1000, buyPrice: 47000, supplier: "Toko Gula Aren Asli" },
    { id: "BHN05", name: "Air Mineral", cat: "Air", unit: "ml", packQty: 1000, buyPrice: 0, supplier: "Depot Air Isi Ulang" },
    { id: "BHN06", name: "Bubuk Thai Tea", cat: "Bubuk", unit: "gr", packQty: 400, buyPrice: 50000, supplier: "Supplier Bubuk Minuman" },
    { id: "BHN07", name: "Es Batu", cat: "Es", unit: "gr", packQty: 1000, buyPrice: 0, supplier: "Pabrik Es Kristal" },
    { id: "BHN08", name: "Peach Syrup / Juice", cat: "Air", unit: "ml", packQty: 10000, buyPrice: 80000, supplier: "Indomaret" },
    { id: "BHN09", name: "Sirup Caramel", cat: "Sirup", unit: "ml", packQty: 100, buyPrice: 14000, supplier: "Toko Sirup Import" },
    { id: "BHN10", name: "SKM", cat: "Pemanis", unit: "gr", packQty: 365, buyPrice: 12500, supplier: "Indomaret" },
    { id: "BHN11", name: "Susu Evaporasi", cat: "Dairy", unit: "gr", packQty: 500, buyPrice: 16500, supplier: "Indomaret" },
    { id: "BHN12", name: "Espresso Arabika Cair", cat: "Kopi", unit: "ml", packQty: 1000, buyPrice: 150000, supplier: "Mahogany Roastery" },
    { id: "BHN13", name: "Peach Soda", cat: "Air", unit: "ml", packQty: 480, buyPrice: 8900, supplier: "Indomaret" },
    { id: "BHN14", name: "Peach Syrup Botol", cat: "Air", unit: "ml", packQty: 100, buyPrice: 15000, supplier: "Tokopedia" },
    { id: "BHN15", name: "Vanilla Syrup", cat: "Air", unit: "ml", packQty: 460, buyPrice: 25000, supplier: "linda" },
    { id: "BHN16", name: "Butterscotch Syrup", cat: "Air", unit: "ml", packQty: 650, buyPrice: 85000, supplier: "linda" }
  ],
  kemasan: [
    { id: "KMS01", name: "Cup 12oz", cat: "Cup", unit: "pcs", packQty: 100, buyPrice: 85980, supplier: "Distributor Packaging Jaya" },
    { id: "KMS03", name: "Sticker Logo", cat: "Label", unit: "pcs", packQty: 38, buyPrice: 20000, supplier: "shakira" },
    { id: "KMS04", name: "Sedotan Eco", cat: "Sedotan", unit: "pcs", packQty: 100, buyPrice: 9000, supplier: "Toko Alat Minum" },
    { id: "KMS05", name: "Seal Cup", cat: "Seal", unit: "pcs", packQty: 100, buyPrice: 20000, supplier: "Distributor Packaging Jaya" },
    { id: "KMS06", name: "Sticker Botol", cat: "Label", unit: "pcs", packQty: 20, buyPrice: 20000, supplier: "Percetakan Sleeve Kita" },
    { id: "KMS07", name: "Botol 1 Liter", cat: "Cup", unit: "pcs", packQty: 1, buyPrice: 5000, supplier: "Grosir Tisu Bersih" },
    { id: "KMS08", name: "Paper Bag", cat: "Bag", unit: "pcs", packQty: 50, buyPrice: 50000, supplier: "Percetakan Paper Bag" }
  ],
  menu: [
    { id: "M001", name: "Es Kopi Susu Gula Aren Bold", cat: "Kopi Susu", overhead: 0, sellingPrice: 18000, recipe: { BHN01: 35, BHN02: 100, BHN03: 25, BHN04: 10 }, pkg: { KMS01: 1, KMS03: 1 } },
    { id: "M002", name: "Es Kopi Susu Gula Aren Creamy", cat: "Kopi Susu", overhead: 0, sellingPrice: 18000, recipe: { BHN01: 25, BHN02: 100, BHN03: 25, BHN04: 15 }, pkg: { KMS01: 1, KMS03: 1 } },
    { id: "M003", name: "Es Kopi Susu Gula Aren Creamy 250ml", cat: "Kopi Susu", overhead: 0, sellingPrice: 28000, recipe: { BHN01: 40, BHN02: 155, BHN03: 35, BHN04: 25 }, pkg: { KMS03: 1, KMS06: 1 } },
    { id: "M004", name: "Es Kopi Susu Gula Aren BOLD 250ml", cat: "Kopi Susu", overhead: 0, sellingPrice: 28000, recipe: { BHN01: 53, BHN02: 152, BHN03: 25, BHN04: 20 }, pkg: { KMS03: 1, KMS06: 1 } },
    { id: "M005", name: "Es Kopi Susu Gula Aren BOLD 1 Liter", cat: "Kopi Susu", overhead: 0, sellingPrice: 90000, recipe: { BHN01: 210, BHN02: 605, BHN03: 110, BHN04: 90 }, pkg: { KMS03: 1, KMS06: 1, KMS07: 1 } },
    { id: "M006", name: "Es Kopi Susu Gula Aren Creamy 1 Liter", cat: "Kopi Susu", overhead: 0, sellingPrice: 90000, recipe: { BHN01: 180, BHN02: 605, BHN03: 155, BHN04: 90 }, pkg: { KMS03: 1, KMS06: 1, KMS07: 1 } },
    { id: "M007", name: "Americano Cup", cat: "Kopi Hitam", overhead: 0, sellingPrice: 15000, recipe: { BHN01: 36, BHN05: 80 }, pkg: { KMS01: 1, KMS03: 1 } },
    { id: "M008", name: "Americano Lemon Cup", cat: "Kopi Hitam", overhead: 0, sellingPrice: 17000, recipe: { BHN01: 36, BHN04: 5, BHN05: 80 }, pkg: { KMS01: 1, KMS03: 1 } },
    { id: "M009", name: "Americano 250ml", cat: "Kopi Hitam", overhead: 0, sellingPrice: 25000, recipe: { BHN01: 78, BHN04: 10, BHN05: 170 }, pkg: { KMS03: 1 } },
    { id: "M010", name: "Americano 1 Liter", cat: "Kopi Hitam", overhead: 0, sellingPrice: 70000, recipe: { BHN01: 310, BHN04: 20, BHN05: 690 }, pkg: { KMS03: 1, KMS07: 1 } },
    { id: "M011", name: "Americano Lemon 250ml", cat: "Kopi Hitam", overhead: 0, sellingPrice: 28000, recipe: { BHN01: 70, BHN04: 10, BHN05: 155 }, pkg: { KMS01: 1, KMS03: 1 } },
    { id: "M012", name: "Americano Lemon 1 Liter", cat: "Kopi Hitam", overhead: 0, sellingPrice: 80000, recipe: { BHN01: 285, BHN04: 20 }, pkg: { KMS01: 1, KMS03: 1 } },
    { id: "M013", name: "Latte", cat: "Kopi Susu", overhead: 0, sellingPrice: 20000, recipe: { BHN01: 40, BHN02: 125 }, pkg: { KMS01: 1, KMS03: 1 } },
    { id: "M014", name: "Caramel Latte", cat: "Kopi Susu", overhead: 0, sellingPrice: 23000, recipe: { BHN01: 30, BHN02: 100, BHN03: 18, BHN09: 10 }, pkg: { KMS01: 1, KMS03: 1 } },
    { id: "M015", name: "Thai Tea 1 Liter", cat: "Tea", overhead: 0, sellingPrice: 60000, recipe: { BHN03: 30, BHN06: 150 }, pkg: { KMS03: 1, KMS07: 1 } },
    { id: "M016", name: "Thai Tea 250ml", cat: "Tea", overhead: 0, sellingPrice: 25000, recipe: { BHN03: 7.5, BHN06: 35 }, pkg: { KMS01: 1, KMS03: 1 } },
    { id: "M017", name: "Thai Tea Cup", cat: "Tea", overhead: 0, sellingPrice: 15000, recipe: { BHN03: 4.5, BHN06: 21 }, pkg: { KMS01: 1, KMS03: 1 } },
    { id: "M018", name: "Rawrrr Milk", cat: "Lainnya", overhead: 0, sellingPrice: 16000, recipe: { BHN02: 115, BHN03: 30, BHN04: 15 }, pkg: { KMS01: 1, KMS03: 1 } },
    { id: "M019", name: "Peach Punch Americano Plzzz", cat: "Kopi Hitam", overhead: 0, sellingPrice: 20000, recipe: { BHN12: 36, BHN13: 140 }, pkg: { KMS01: 1, KMS03: 1 } },
    { id: "M020", name: "Butterscotch Latte", cat: "Kopi Susu", overhead: 0, sellingPrice: 23000, recipe: { BHN01: 30, BHN02: 100, BHN03: 18, BHN16: 15 }, pkg: { KMS01: 1, KMS03: 1 } },
    { id: "M021", name: "Salted Caramel Latte", cat: "Kopi Susu", overhead: 0, sellingPrice: 23000, recipe: { BHN01: 30, BHN02: 100, BHN03: 18, BHN09: 10 }, pkg: { KMS01: 1, KMS03: 1 } }
  ]
};

let currentCategory = "All";

// Formatting Helper
function fmtRp(val) {
  return 'Rp ' + Math.round(val || 0).toLocaleString('id-ID');
}

// Map Unit Prices
function getBahanUnitPriceMap() {
  const map = {};
  SEED_DATA.bahan.forEach(b => {
    map[b.id] = b.packQty > 0 ? b.buyPrice / b.packQty : 0;
  });
  return map;
}

function getKemasanUnitPriceMap() {
  const map = {};
  SEED_DATA.kemasan.forEach(k => {
    map[k.id] = k.packQty > 0 ? k.buyPrice / k.packQty : 0;
  });
  return map;
}

// Calculate All Menus
function getCalculatedMenus() {
  const bahanMap = getBahanUnitPriceMap();
  const kemasanMap = getKemasanUnitPriceMap();

  return SEED_DATA.menu.map(m => {
    let bahanCost = 0;
    if (m.recipe) {
      Object.entries(m.recipe).forEach(([bId, qty]) => {
        bahanCost += (bahanMap[bId] || 0) * qty;
      });
    }

    let kemasanCost = 0;
    if (m.pkg) {
      Object.entries(m.pkg).forEach(([kId, qty]) => {
        kemasanCost += (kemasanMap[kId] || 0) * qty;
      });
    }

    const totalModal = bahanCost + kemasanCost + (m.overhead || 0);
    const laba = m.sellingPrice - totalModal;
    const marginPct = m.sellingPrice > 0 ? (laba / m.sellingPrice) * 100 : 0;

    return {
      ...m,
      bahanCost: Math.round(bahanCost),
      kemasanCost: Math.round(kemasanCost),
      totalModal: Math.round(totalModal),
      laba: Math.round(laba),
      marginPct: Math.round(marginPct * 10) / 10
    };
  });
}

// Switch Tabs
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(el => {
    el.classList.remove('bg-amber-500', 'text-slate-950', 'font-bold', 'shadow');
    el.classList.add('text-slate-400');
  });

  document.getElementById(`tab-${tabId}`).classList.remove('hidden');
  const activeBtn = document.getElementById(`nav-${tabId}`);
  activeBtn.classList.add('bg-amber-500', 'text-slate-950', 'font-bold', 'shadow');
  activeBtn.classList.remove('text-slate-400');
}

// Render Dashboard
function renderDashboard() {
  const menus = getCalculatedMenus();
  const search = (document.getElementById('search-input')?.value || '').toLowerCase();

  // Categories
  const categories = ["All", ...new Set(SEED_DATA.menu.map(m => m.cat))];
  const catContainer = document.getElementById('category-filters');
  if (catContainer) {
    catContainer.innerHTML = categories.map(cat => `
      <button onclick="setCategory('${cat}')" class="px-3 py-1 rounded-xl text-xs font-semibold transition whitespace-nowrap ${
        currentCategory === cat ? 'bg-slate-800 text-amber-400 border border-amber-500/30' : 'text-slate-400 hover:text-white'
      }">
        ${cat}
      </button>
    `).join('');
  }

  // Filtered List
  const filtered = menus.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(search) || m.id.toLowerCase().includes(search);
    const matchCat = currentCategory === "All" || m.cat === currentCategory;
    return matchSearch && matchCat;
  });

  // Render Table Rows
  const tbody = document.getElementById('dashboard-table-body');
  if (tbody) {
    tbody.innerHTML = filtered.map(m => {
      const marginBadgeClass = m.marginPct >= 60
        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
        : m.marginPct >= 40
        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
        : 'bg-rose-500/10 text-rose-400 border-rose-500/20';

      return `
        <tr class="hover:bg-slate-800/40 transition">
          <td class="py-3 px-4 font-sans">
            <div class="font-bold text-white">${m.name}</div>
            <div class="text-[10px] text-slate-500 font-mono">${m.id}</div>
          </td>
          <td class="py-3 px-4 font-sans">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
              ${m.cat}
            </span>
          </td>
          <td class="py-3 px-4 text-right text-slate-300">${fmtRp(m.bahanCost)}</td>
          <td class="py-3 px-4 text-right text-slate-300">${fmtRp(m.kemasanCost)}</td>
          <td class="py-3 px-4 text-right font-bold text-amber-400 bg-amber-500/5">${fmtRp(m.totalModal)}</td>
          <td class="py-3 px-4 text-right text-white font-semibold">${fmtRp(m.sellingPrice)}</td>
          <td class="py-3 px-4 text-right text-emerald-400 font-bold">${fmtRp(m.laba)}</td>
          <td class="py-3 px-4 text-center font-sans">
            <span class="inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${marginBadgeClass}">
              ${m.marginPct}%
            </span>
          </td>
        </tr>
      `;
    }).join('');
  }

  // Stats Update
  document.getElementById('menu-counter-badge').innerText = `${filtered.length} Items`;
  if (menus.length > 0) {
    const sumHpp = menus.reduce((a, c) => a + c.totalModal, 0);
    const sumPrice = menus.reduce((a, c) => a + c.sellingPrice, 0);
    const sumMarginPct = menus.reduce((a, c) => a + c.marginPct, 0);
    const maxMenu = [...menus].sort((a, b) => b.totalModal - a.totalModal)[0];

    document.getElementById('stat-total-menu').innerText = `${menus.length} Menu`;
    document.getElementById('stat-avg-hpp').innerText = fmtRp(sumHpp / menus.length);
    document.getElementById('stat-avg-price').innerText = fmtRp(sumPrice / menus.length);
    document.getElementById('stat-avg-margin').innerText = `Profit Margin: ~${Math.round(sumMarginPct / menus.length)}%`;
    document.getElementById('stat-max-hpp').innerText = fmtRp(maxMenu.totalModal);
    document.getElementById('stat-max-menu-name').innerText = maxMenu.name;
  }
}

function setCategory(cat) {
  currentCategory = cat;
  renderDashboard();
}

// Render Master Tables
function renderMasterTables() {
  const bahanBody = document.getElementById('bahan-table-body');
  if (bahanBody) {
    bahanBody.innerHTML = SEED_DATA.bahan.map(b => {
      const unitPrice = b.packQty > 0 ? b.buyPrice / b.packQty : 0;
      return `
        <tr class="hover:bg-slate-800/30">
          <td class="py-2.5 px-4 font-semibold text-slate-400">${b.id}</td>
          <td class="py-2.5 px-4 font-sans font-medium text-white">${b.name}</td>
          <td class="py-2.5 px-4 font-sans">
            <span class="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px]">${b.cat}</span>
          </td>
          <td class="py-2.5 px-4 font-sans text-slate-400">${b.unit}</td>
          <td class="py-2.5 px-4 text-right text-slate-200">${b.packQty.toLocaleString('id-ID')}</td>
          <td class="py-2.5 px-4 text-right text-slate-200">${fmtRp(b.buyPrice)}</td>
          <td class="py-2.5 px-4 text-right font-bold text-amber-400 bg-amber-500/5">${fmtRp(unitPrice)}</td>
          <td class="py-2.5 px-4 font-sans text-slate-400 truncate max-w-[150px]">${b.supplier}</td>
        </tr>
      `;
    }).join('');
  }

  const kemasanBody = document.getElementById('kemasan-table-body');
  if (kemasanBody) {
    kemasanBody.innerHTML = SEED_DATA.kemasan.map(k => {
      const unitPrice = k.packQty > 0 ? k.buyPrice / k.packQty : 0;
      return `
        <tr class="hover:bg-slate-800/30">
          <td class="py-2.5 px-4 font-semibold text-slate-400">${k.id}</td>
          <td class="py-2.5 px-4 font-sans font-medium text-white">${k.name}</td>
          <td class="py-2.5 px-4 font-sans">
            <span class="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px]">${k.cat}</span>
          </td>
          <td class="py-2.5 px-4 font-sans text-slate-400">${k.unit}</td>
          <td class="py-2.5 px-4 text-right text-slate-200">${k.packQty.toLocaleString('id-ID')}</td>
          <td class="py-2.5 px-4 text-right text-slate-200">${fmtRp(k.buyPrice)}</td>
          <td class="py-2.5 px-4 text-right font-bold text-amber-400 bg-amber-500/5">${fmtRp(unitPrice)}</td>
          <td class="py-2.5 px-4 font-sans text-slate-400 truncate max-w-[150px]">${k.supplier}</td>
        </tr>
      `;
    }).join('');
  }
}

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
  renderMasterTables();
  if (window.lucide) {
    lucide.createIcons();
  }
});
