// app.js — Kalkulasi HPP Real-time & Presisi Excel RESEP DAN HPP TUKAPS.xlsx

const LOCAL_STORAGE_KEY = 'tukaps_hpp_ios_v4';
const TARGET_PIN = "1234";
let currentPinInput = "";

// PASSCODE LOGIC
function pressPin(num) {
  if (currentPinInput.length < 4) {
    currentPinInput += num;
    updatePinDots();
  }
  if (currentPinInput.length === 4) {
    setTimeout(verifyPin, 150);
  }
}

function clearPin() {
  currentPinInput = "";
  updatePinDots();
}

function updatePinDots() {
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById(`dot-${i}`);
    if (dot) {
      if (i < currentPinInput.length) dot.classList.add('filled');
      else dot.classList.remove('filled');
    }
  }
}

function verifyPin() {
  if (currentPinInput === TARGET_PIN) {
    document.getElementById('pin-screen').classList.add('hidden');
    currentPinInput = "";
    updatePinDots();
  } else {
    const card = document.getElementById('pin-card');
    card.classList.add('shake');
    setTimeout(() => { card.classList.remove('shake'); }, 400);
    currentPinInput = "";
    updatePinDots();
  }
}

function lockApp() {
  document.getElementById('pin-screen').classList.remove('hidden');
}

// DATASET 100% SAMA DENGAN EXCEL
const SEED_DATA = {
  "bahan": [
    { "id": "BHN01", "name": "Espresso Cair", "cat": "Kopi", "unit": "gr", "packQty": 1200, "buyPrice": 120000, "supplier": "Mahogany Roastery" },
    { "id": "BHN02", "name": "Susu Fresh Milk", "cat": "Dairy", "unit": "gr", "packQty": 1000, "buyPrice": 19000, "supplier": "knb roastery" },
    { "id": "BHN03", "name": "Creamer", "cat": "Dairy", "unit": "gr", "packQty": 1000, "buyPrice": 31000, "supplier": "Distributor Dairy Prima" },
    { "id": "BHN04", "name": "Gula Aren", "cat": "Pemanis", "unit": "gr", "packQty": 1000, "buyPrice": 47000, "supplier": "Toko Gula Aren Asli" },
    { "id": "BHN05", "name": "Air Mineral", "cat": "Air", "unit": "ml", "packQty": 0, "buyPrice": 0, "supplier": "Depot Air Isi Ulang" },
    { "id": "BHN06", "name": "Bubuk Thai Tea", "cat": "Bubuk", "unit": "gr", "packQty": 400, "buyPrice": 50000, "supplier": "Supplier Bubuk Minuman" },
    { "id": "BHN07", "name": "Es Batu", "cat": "Es", "unit": "gr", "packQty": 1000, "buyPrice": 0, "supplier": "Pabrik Es Kristal" },
    { "id": "BHN08", "name": "Peach", "cat": "Air", "unit": "ml", "packQty": 10000, "buyPrice": 80000, "supplier": "Indomaret" },
    { "id": "BHN09", "name": "Sirup Caramel", "cat": "Sirup", "unit": "ml", "packQty": 100, "buyPrice": 14000, "supplier": "Toko Sirup Import" },
    { "id": "BHN10", "name": "SKM", "cat": "Pemanis", "unit": "gr", "packQty": 365, "buyPrice": 12500, "supplier": "Indomaret" },
    { "id": "BHN11", "name": "Susu Evaporasi", "cat": "Dairy", "unit": "gr", "packQty": 500, "buyPrice": 16500, "supplier": "Indomaret" },
    { "id": "BHN12", "name": "Espresso arabika cair", "cat": "Kopi", "unit": "ml", "packQty": 1000, "buyPrice": 150000, "supplier": "Mahogany Roastery" },
    { "id": "BHN13", "name": "Peach Soda", "cat": "Air", "unit": "ml", "packQty": 480, "buyPrice": 8900, "supplier": "Indomaret" },
    { "id": "BHN14", "name": "Peach Syrup", "cat": "Air", "unit": "ml", "packQty": 100, "buyPrice": 15000, "supplier": "tokopedia" },
    { "id": "BHN15", "name": "Vanilla Syrup", "cat": "Air", "unit": "ml", "packQty": 460, "buyPrice": 25000, "supplier": "linda" },
    { "id": "BHN16", "name": "Butterscotch Syrup", "cat": "Air", "unit": "ml", "packQty": 650, "buyPrice": 85000, "supplier": "linda" }
  ],
  "kemasan": [
    { "id": "KMS01", "name": "Cup 12oz", "cat": "Cup", "unit": "pcs", "packQty": 100, "buyPrice": 85980, "supplier": "Distributor Packaging Jaya" },
    { "id": "KMS03", "name": "Sticker", "cat": "Label", "unit": "pcs", "packQty": 38, "buyPrice": 20000, "supplier": "shakira" },
    { "id": "KMS04", "name": "Sedotan", "cat": "Sedotan", "unit": "pcs", "packQty": 100, "buyPrice": 9000, "supplier": "Toko Alat Minum" },
    { "id": "KMS05", "name": "Seal Cup", "cat": "Seal", "unit": "pcs", "packQty": 100, "buyPrice": 20000, "supplier": "Distributor Packaging Jaya" },
    { "id": "KMS06", "name": "Sticker Botol", "cat": "Label", "unit": "pcs", "packQty": 20, "buyPrice": 20000, "supplier": "Percetakan Sleeve Kita" },
    { "id": "KMS07", "name": "Botol 1 liter", "cat": "Cup", "unit": "pcs", "packQty": 1, "buyPrice": 5000, "supplier": "Grosir Tisu Bersih" },
    { "id": "KMS08", "name": "Paper Bag", "cat": "Bag", "unit": "pcs", "packQty": 50, "buyPrice": 50000, "supplier": "Percetakan Paper Bag" }
  ],
  "menu": [
    { "id": "M001", "name": "Es Kopi Susu Gula Aren Bold", "cat": "Kopi Susu", "overhead": 0, "sellingPrice": 18000, "recipe": { "BHN01": 35, "BHN02": 100, "BHN03": 25, "BHN04": 10 }, "pkg": { "KMS01": 1, "KMS03": 1 } },
    { "id": "M002", "name": "Es Kopi Susu Gula Aren Creamy", "cat": "Kopi Susu", "overhead": 0, "sellingPrice": 18000, "recipe": { "BHN01": 25, "BHN02": 100, "BHN03": 25, "BHN04": 15 }, "pkg": { "KMS01": 1, "KMS03": 1 } },
    { "id": "M003", "name": "Es Kopi Susu Gula Aren Creamy 250ml", "cat": "Kopi Susu", "overhead": 0, "sellingPrice": 28000, "recipe": { "BHN01": 40, "BHN02": 155, "BHN03": 35, "BHN04": 25 }, "pkg": { "KMS03": 1, "KMS06": 1 } },
    { "id": "M004", "name": "Es Kopi Susu Gula Aren BOLD 250ml", "cat": "Kopi Susu", "overhead": 0, "sellingPrice": 28000, "recipe": { "BHN01": 53, "BHN02": 152, "BHN03": 25, "BHN04": 20 }, "pkg": { "KMS03": 1, "KMS06": 1 } },
    { "id": "M005", "name": "Es Kopi Susu Gula Aren BOLD 1 Liter", "cat": "Kopi Susu", "overhead": 0, "sellingPrice": 90000, "recipe": { "BHN01": 210, "BHN02": 605, "BHN03": 110, "BHN04": 90 }, "pkg": { "KMS03": 1, "KMS06": 1, "KMS07": 1 } },
    { "id": "M006", "name": "Es Kopi Susu Gula Aren Creamy 1 Liter", "cat": "Kopi Susu", "overhead": 0, "sellingPrice": 90000, "recipe": { "BHN01": 180, "BHN02": 605, "BHN03": 155, "BHN04": 90 }, "pkg": { "KMS03": 1, "KMS06": 1, "KMS07": 1 } },
    { "id": "M007", "name": "Americano Cup", "cat": "Kopi Hitam", "overhead": 0, "sellingPrice": 15000, "recipe": { "BHN01": 36, "BHN05": 80 }, "pkg": { "KMS01": 1, "KMS03": 1 } },
    { "id": "M008", "name": "Americano Lemon Cup", "cat": "Kopi Hitam", "overhead": 0, "sellingPrice": 17000, "recipe": { "BHN01": 36, "BHN04": 5, "BHN05": 80 }, "pkg": { "KMS01": 1, "KMS03": 1 } },
    { "id": "M009", "name": "Americano 250ml", "cat": "Kopi Hitam", "overhead": 0, "sellingPrice": 25000, "recipe": { "BHN01": 78, "BHN04": 10, "BHN05": 170, "BHN07": 150 }, "pkg": { "KMS03": 1 } },
    { "id": "M010", "name": "Americano 1 liter", "cat": "Kopi Hitam", "overhead": 0, "sellingPrice": 70000, "recipe": { "BHN01": 310, "BHN04": 20, "BHN05": 690, "BHN07": 250 }, "pkg": { "KMS03": 1, "KMS07": 1 } },
    { "id": "M011", "name": "Americano Lemon 250ml", "cat": "Kopi Hitam", "overhead": 0, "sellingPrice": 28000, "recipe": { "BHN01": 70, "BHN04": 10, "BHN05": 155, "BHN07": 150 }, "pkg": { "KMS01": 1, "KMS03": 1 } },
    { "id": "M012", "name": "Americano Lemon 1 liter", "cat": "Kopi Hitam", "overhead": 0, "sellingPrice": 80000, "recipe": { "BHN01": 285, "BHN04": 20, "BHN05": 635, "BHN07": 150 }, "pkg": { "KMS01": 1, "KMS03": 1 } },
    { "id": "M013", "name": "Latte", "cat": "Kopi Susu", "overhead": 0, "sellingPrice": 30000, "recipe": { "BHN01": 40, "BHN02": 125, "BHN07": 150 }, "pkg": { "KMS01": 1, "KMS03": 1 } },
    { "id": "M014", "name": "Caramel latte", "cat": "Kopi Susu", "overhead": 0, "sellingPrice": 23000, "recipe": { "BHN01": 30, "BHN02": 100, "BHN03": 18, "BHN09": 15 }, "pkg": { "KMS01": 1, "KMS03": 1 } },
    { "id": "M015", "name": "Thai Tea 1 Liter", "cat": "Tea", "overhead": 0, "sellingPrice": 60000, "recipe": { "BHN03": 30, "BHN06": 50, "BHN10": 170, "BHN11": 200 }, "pkg": { "KMS03": 1, "KMS07": 1 } },
    { "id": "M016", "name": "Thai Tea 250ml", "cat": "Tea", "overhead": 0, "sellingPrice": 25000, "recipe": { "BHN03": 7.5, "BHN06": 12.5, "BHN10": 42.5, "BHN11": 50 }, "pkg": { "KMS01": 1, "KMS03": 1 } },
    { "id": "M017", "name": "Thai Tea Cup", "cat": "Tea", "overhead": 0, "sellingPrice": 15000, "recipe": { "BHN03": 4.5, "BHN06": 9, "BHN10": 28, "BHN11": 33 }, "pkg": { "KMS01": 1, "KMS03": 1 } },
    { "id": "M018", "name": "Rawrrr Milk", "cat": "Lainnya", "overhead": 0, "sellingPrice": 16000, "recipe": { "BHN02": 115, "BHN03": 30, "BHN04": 15 }, "pkg": { "KMS01": 1, "KMS03": 1 } },
    { "id": "M019", "name": "Peach Punch Americano Plzzz", "cat": "Kopi Hitam", "overhead": 0, "sellingPrice": 20000, "recipe": { "BHN12": 36, "BHN14": 5, "BHN13": 100 }, "pkg": { "KMS01": 1, "KMS03": 1 } },
    { "id": "M020", "name": "Butterscotch Latte", "cat": "Kopi Susu", "overhead": 0, "sellingPrice": 23000, "recipe": { "BHN01": 30, "BHN02": 100, "BHN03": 18, "BHN16": 15 }, "pkg": { "KMS01": 1, "KMS03": 1 } },
    { "id": "M021", "name": "Salted Caramel Latte", "cat": "Kopi Susu", "overhead": 0, "sellingPrice": 23000, "recipe": { "BHN01": 30, "BHN02": 100, "BHN03": 18, "BHN09": 15 }, "pkg": { "KMS01": 1, "KMS03": 1 } },
    { "id": "M022", "name": "Latte 250ml", "cat": "Kopi Susu", "overhead": 0, "sellingPrice": 0, "recipe": { "BHN01": 40, "BHN02": 200 }, "pkg": { "KMS03": 1 } },
    { "id": "M023", "name": "Peach Punch Americano 350ml", "cat": "Kopi Hitam", "overhead": 0, "sellingPrice": 45000, "recipe": { "BHN12": 86, "BHN14": 12, "BHN13": 240 }, "pkg": {} },
    { "id": "M024", "name": "Vanilla Latte", "cat": "Kopi Susu", "overhead": 0, "sellingPrice": 23000, "recipe": { "BHN01": 30, "BHN02": 100, "BHN03": 18, "BHN15": 15 }, "pkg": { "KMS01": 1, "KMS03": 1 } },
    { "id": "M025", "name": "Spanish Latte", "cat": "Kopi Susu", "overhead": 0, "sellingPrice": 18000, "recipe": { "BHN01": 30, "BHN02": 100, "BHN03": 18, "BHN10": 10 }, "pkg": { "KMS01": 1, "KMS03": 1 } }
  ]
};

let store = loadStore();
let selectedCatFilter = "All";

function loadStore() {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  saveStore(SEED_DATA);
  return SEED_DATA;
}

function saveStore(data) {
  store = data || store;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store));
}

function resetDataExcel() {
  if (confirm("Reset seluruh data ke nilai awal dari file Excel?")) {
    saveStore(SEED_DATA);
    renderDashboard();
    renderMasterTables();
  }
}

function fmtRp(val) {
  return 'Rp ' + Math.round(val || 0).toLocaleString('id-ID');
}

// REALTIME HPP CALCULATOR ENGINE
function getBahanMap() {
  const map = {};
  store.bahan.forEach(b => { map[b.id] = b.packQty > 0 ? b.buyPrice / b.packQty : 0; });
  return map;
}

function getKemasanMap() {
  const map = {};
  store.kemasan.forEach(k => { map[k.id] = k.packQty > 0 ? k.buyPrice / k.packQty : 0; });
  return map;
}

function getCalculatedMenus() {
  const bMap = getBahanMap();
  const kMap = getKemasanMap();

  return store.menu.map(m => {
    let bahanCost = 0;
    if (m.recipe) {
      Object.entries(m.recipe).forEach(([bId, qty]) => { bahanCost += (bMap[bId] || 0) * Number(qty); });
    }

    let kemasanCost = 0;
    if (m.pkg) {
      Object.entries(m.pkg).forEach(([kId, qty]) => { kemasanCost += (kMap[kId] || 0) * Number(qty); });
    }

    const overhead = Number(m.overhead || 0);
    const totalModal = bahanCost + kemasanCost + overhead;
    const laba = Number(m.sellingPrice || 0) - totalModal;
    const marginPct = m.sellingPrice > 0 ? (laba / m.sellingPrice) * 100 : 0;

    return {
      ...m,
      bahanCost: Math.round(bahanCost),
      kemasanCost: Math.round(kemasanCost),
      overhead,
      totalModal: Math.round(totalModal),
      laba: Math.round(laba),
      marginPct: Math.round(marginPct * 10) / 10
    };
  });
}

function switchTab(tabName) {
  document.querySelectorAll('.view-tab').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.ios-segmented-btn').forEach(btn => btn.classList.remove('active', 'text-slate-600'));

  document.getElementById(`view-${tabName}`).classList.remove('hidden');

  const navDesktop = document.getElementById(`tab-nav-${tabName}`);
  const navMobile = document.getElementById(`m-tab-nav-${tabName}`);
  if (navDesktop) navDesktop.classList.add('active');
  if (navMobile) navMobile.classList.add('active');
}

function renderDashboard() {
  const menus = getCalculatedMenus();
  const search = (document.getElementById('search-menu')?.value || '').toLowerCase();

  const cats = ["All", ...new Set(store.menu.map(m => m.cat))];
  const pillContainer = document.getElementById('cat-filter-pills');
  if (pillContainer) {
    pillContainer.innerHTML = cats.map(cat => `
      <button onclick="setCategoryFilter('${cat}')" class="px-3.5 py-1.5 rounded-full text-xs font-semibold transition whitespace-nowrap ${
        selectedCatFilter === cat ? 'bg-tukaps-500 text-white shadow-md shadow-tukaps-500/20' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
      }">${cat}</button>
    `).join('');
  }

  const filtered = menus.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(search) || m.id.toLowerCase().includes(search);
    const matchCat = selectedCatFilter === "All" || m.cat === selectedCatFilter;
    return matchSearch && matchCat;
  });

  const tbody = document.getElementById('dashboard-table-body');
  if (tbody) {
    tbody.innerHTML = filtered.map(m => {
      const marginBadge = m.marginPct >= 60 ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : m.marginPct >= 40 ? 'bg-tukaps-50 text-tukaps-500 border-tukaps-200' : 'bg-rose-50 text-rose-600 border-rose-200';

      return `
        <tr class="hover:bg-slate-50/80 transition">
          <td class="py-3.5 px-6 font-sans">
            <div class="font-bold text-slate-900">${m.name}</div>
            <div class="text-[10px] text-slate-400 font-mono">${m.id}</div>
          </td>
          <td class="py-3.5 px-4 font-sans"><span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600">${m.cat}</span></td>
          <td class="py-3.5 px-4 text-right text-slate-600">${fmtRp(m.bahanCost)}</td>
          <td class="py-3.5 px-4 text-right text-slate-600">${fmtRp(m.kemasanCost)}</td>
          <td class="py-3.5 px-4 text-right text-slate-600">${fmtRp(m.overhead)}</td>
          <td class="py-3.5 px-4 text-right font-bold text-tukaps-500 bg-tukaps-50/30">${fmtRp(m.totalModal)}</td>
          <td class="py-3.5 px-4 text-right font-semibold text-slate-900">${fmtRp(m.sellingPrice)}</td>
          <td class="py-3.5 px-4 text-right font-bold text-emerald-600">${fmtRp(m.laba)}</td>
          <td class="py-3.5 px-4 text-center font-sans"><span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${marginBadge}">${m.marginPct}%</span></td>
          <td class="py-3.5 px-6 text-center font-sans">
            <div class="flex items-center justify-center space-x-1.5">
              <button onclick="editMenuModal('${m.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-tukaps-500 hover:bg-tukaps-50"><i data-lucide="edit-3" class="w-4 h-4"></i></button>
              <button onclick="deleteMenu('${m.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  document.getElementById('badge-menu-count').innerText = `${filtered.length} Menu`;
  if (menus.length > 0) {
    const sumHpp = menus.reduce((a, c) => a + c.totalModal, 0);
    const sumPrice = menus.reduce((a, c) => a + c.sellingPrice, 0);
    const sumMargin = menus.reduce((a, c) => a + c.marginPct, 0);
    const maxMenu = [...menus].sort((a, b) => b.totalModal - a.totalModal)[0];

    document.getElementById('stat-total-menu').innerText = `${menus.length} Menu`;
    document.getElementById('stat-avg-hpp').innerText = fmtRp(sumHpp / menus.length);
    document.getElementById('stat-avg-price').innerText = fmtRp(sumPrice / menus.length);
    document.getElementById('stat-avg-margin').innerText = `Margin Rata-rata: ~${Math.round(sumMargin / menus.length)}%`;
    document.getElementById('stat-max-hpp').innerText = fmtRp(maxMenu.totalModal);
    document.getElementById('stat-max-name').innerText = maxMenu.name;
  }
}

function setCategoryFilter(cat) { selectedCatFilter = cat; renderDashboard(); }

function renderMasterTables() {
  const bahanBody = document.getElementById('bahan-table-body');
  if (bahanBody) {
    bahanBody.innerHTML = store.bahan.map(b => {
      const unitPrice = b.packQty > 0 ? b.buyPrice / b.packQty : 0;
      return `
        <tr class="hover:bg-slate-50/80 transition">
          <td class="py-3.5 px-4 font-semibold text-slate-400">${b.id}</td>
          <td class="py-3.5 px-4 font-sans font-bold text-slate-900">${b.name}</td>
          <td class="py-3.5 px-4 font-sans"><span class="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-semibold text-slate-600">${b.cat}</span></td>
          <td class="py-3.5 px-4 font-sans text-slate-500">${b.unit}</td>
          <td class="py-3.5 px-4 text-right font-medium text-slate-700">${b.packQty.toLocaleString('id-ID')}</td>
          <td class="py-3.5 px-4 text-right font-medium text-slate-700">${fmtRp(b.buyPrice)}</td>
          <td class="py-3.5 px-4 text-right font-bold text-tukaps-500 bg-tukaps-50/40">${fmtRp(unitPrice)}</td>
          <td class="py-3.5 px-4 font-sans text-slate-500">${b.supplier}</td>
          <td class="py-3.5 px-4 text-center font-sans">
            <div class="flex items-center justify-center space-x-1">
              <button onclick="openEditBahanModal('${b.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-tukaps-500 hover:bg-tukaps-50"><i data-lucide="edit-3" class="w-4 h-4"></i></button>
              <button onclick="deleteBahan('${b.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  const kemasanBody = document.getElementById('kemasan-table-body');
  if (kemasanBody) {
    kemasanBody.innerHTML = store.kemasan.map(k => {
      const unitPrice = k.packQty > 0 ? k.buyPrice / k.packQty : 0;
      return `
        <tr class="hover:bg-slate-50/80 transition">
          <td class="py-3.5 px-4 font-semibold text-slate-400">${k.id}</td>
          <td class="py-3.5 px-4 font-sans font-bold text-slate-900">${k.name}</td>
          <td class="py-3.5 px-4 font-sans"><span class="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-semibold text-slate-600">${k.cat}</span></td>
          <td class="py-3.5 px-4 font-sans text-slate-500">${k.unit}</td>
          <td class="py-3.5 px-4 text-right font-medium text-slate-700">${k.packQty.toLocaleString('id-ID')}</td>
          <td class="py-3.5 px-4 text-right font-medium text-slate-700">${fmtRp(k.buyPrice)}</td>
          <td class="py-3.5 px-4 text-right font-bold text-tukaps-500 bg-tukaps-50/40">${fmtRp(unitPrice)}</td>
          <td class="py-3.5 px-4 font-sans text-slate-500">${k.supplier}</td>
          <td class="py-3.5 px-4 text-center font-sans">
            <div class="flex items-center justify-center space-x-1">
              <button onclick="openEditKemasanModal('${k.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-tukaps-500 hover:bg-tukaps-50"><i data-lucide="edit-3" class="w-4 h-4"></i></button>
              <button onclick="deleteKemasan('${k.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }
}

function closeModal() { document.getElementById('modal-overlay').classList.add('hidden'); }
function openModalHtml(html) {
  const container = document.getElementById('modal-container');
  container.innerHTML = html;
  document.getElementById('modal-overlay').classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function editMenuModal(menuId) {
  const m = store.menu.find(x => x.id === menuId);
  if (!m) return;

  const bahanCheckboxes = store.bahan.map(b => {
    const qty = (m.recipe && m.recipe[b.id]) ? m.recipe[b.id] : 0;
    return `
      <div class="flex items-center justify-between py-1.5 border-b border-slate-100 text-xs">
        <span class="font-medium text-slate-700">${b.name} (${b.unit})</span>
        <input type="number" step="any" data-bahan-id="${b.id}" value="${qty}" class="recipe-bahan-input ios-input w-24 px-2 py-1 rounded-lg text-right font-mono text-xs">
      </div>
    `;
  }).join('');

  const kemasanCheckboxes = store.kemasan.map(k => {
    const qty = (m.pkg && m.pkg[k.id]) ? m.pkg[k.id] : 0;
    return `
      <div class="flex items-center justify-between py-1.5 border-b border-slate-100 text-xs">
        <span class="font-medium text-slate-700">${k.name} (${k.unit})</span>
        <input type="number" step="any" data-kemasan-id="${k.id}" value="${qty}" class="recipe-kemasan-input ios-input w-24 px-2 py-1 rounded-lg text-right font-mono text-xs">
      </div>
    `;
  }).join('');

  openModalHtml(`
    <div class="flex items-center justify-between border-b border-slate-100 pb-3">
      <h3 class="text-sm font-extrabold text-slate-900">Edit Resep: ${m.name}</h3>
      <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600"><i data-lucide="x" class="w-5 h-5"></i></button>
    </div>
    <div class="space-y-3 text-xs">
      <div class="grid grid-cols-2 gap-3">
        <div><label class="font-bold text-slate-700 block mb-1">Nama Menu</label><input type="text" id="edit-menu-name" value="${m.name}" class="ios-input w-full px-3 py-2 rounded-xl text-xs font-semibold"></div>
        <div><label class="font-bold text-slate-700 block mb-1">Kategori</label><input type="text" id="edit-menu-cat" value="${m.cat}" class="ios-input w-full px-3 py-2 rounded-xl text-xs font-semibold"></div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="font-bold text-slate-700 block mb-1">Harga Jual (Rp)</label><input type="number" id="edit-menu-price" value="${m.sellingPrice}" class="ios-input w-full px-3 py-2 rounded-xl text-xs font-mono font-bold"></div>
        <div><label class="font-bold text-slate-700 block mb-1">Biaya Overhead (Rp)</label><input type="number" id="edit-menu-overhead" value="${m.overhead || 0}" class="ios-input w-full px-3 py-2 rounded-xl text-xs font-mono"></div>
      </div>
      <div>
        <h4 class="font-extrabold text-slate-900 mb-2 border-t border-slate-100 pt-3">Takaran Bahan Baku:</h4>
        <div class="max-h-44 overflow-y-auto border border-slate-100 rounded-xl p-2 bg-slate-50/50">${bahanCheckboxes}</div>
      </div>
      <div>
        <h4 class="font-extrabold text-slate-900 mb-2 border-t border-slate-100 pt-3">Kemasan Digunakan:</h4>
        <div class="max-h-36 overflow-y-auto border border-slate-100 rounded-xl p-2 bg-slate-50/50">${kemasanCheckboxes}</div>
      </div>
    </div>
    <div class="flex items-center justify-end space-x-2 border-t border-slate-100 pt-3">
      <button onclick="closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold text-xs">Batal</button>
      <button onclick="saveMenuEdit('${m.id}')" class="ios-btn-primary px-5 py-2 rounded-xl text-white font-bold text-xs">Simpan Perubahan</button>
    </div>
  `);
}

function saveMenuEdit(menuId) {
  const m = store.menu.find(x => x.id === menuId);
  if (!m) return;

  m.name = document.getElementById('edit-menu-name').value;
  m.cat = document.getElementById('edit-menu-cat').value;
  m.sellingPrice = Number(document.getElementById('edit-menu-price').value);
  m.overhead = Number(document.getElementById('edit-menu-overhead').value);

  const newRecipe = {};
  document.querySelectorAll('.recipe-bahan-input').forEach(inp => {
    const qty = Number(inp.value);
    if (qty > 0) newRecipe[inp.getAttribute('data-bahan-id')] = qty;
  });
  m.recipe = newRecipe;

  const newPkg = {};
  document.querySelectorAll('.recipe-kemasan-input').forEach(inp => {
    const qty = Number(inp.value);
    if (qty > 0) newPkg[inp.getAttribute('data-kemasan-id')] = qty;
  });
  m.pkg = newPkg;

  saveStore();
  closeModal();
  renderDashboard();
}

function openAddMenuModal() {
  const nextId = "M" + String(store.menu.length + 1).padStart(3, '0');
  openModalHtml(`
    <div class="flex items-center justify-between border-b border-slate-100 pb-3">
      <h3 class="text-sm font-extrabold text-slate-900">Buat Menu Resep Baru</h3>
      <button onclick="closeModal()" class="text-slate-400 hover:text-slate-600"><i data-lucide="x" class="w-5 h-5"></i></button>
    </div>
    <div class="space-y-3 text-xs">
      <div class="grid grid-cols-2 gap-3">
        <div><label class="font-bold text-slate-700 block mb-1">Nama Menu Baru</label><input type="text" id="new-menu-name" placeholder="Misal: Matcha Latte 250ml" class="ios-input w-full px-3 py-2 rounded-xl text-xs font-semibold"></div>
        <div><label class="font-bold text-slate-700 block mb-1">Kategori</label><input type="text" id="new-menu-cat" value="Non-Coffee" class="ios-input w-full px-3 py-2 rounded-xl text-xs font-semibold"></div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="font-bold text-slate-700 block mb-1">Harga Jual (Rp)</label><input type="number" id="new-menu-price" value="20000" class="ios-input w-full px-3 py-2 rounded-xl text-xs font-mono font-bold"></div>
        <div><label class="font-bold text-slate-700 block mb-1">Biaya Overhead (Rp)</label><input type="number" id="new-menu-overhead" value="0" class="ios-input w-full px-3 py-2 rounded-xl text-xs font-mono"></div>
      </div>
    </div>
    <div class="flex items-center justify-end space-x-2 border-t border-slate-100 pt-3">
      <button onclick="closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold text-xs">Batal</button>
      <button onclick="createMenu('${nextId}')" class="ios-btn-primary px-5 py-2 rounded-xl text-white font-bold text-xs">Buat Menu</button>
    </div>
  `);
}

function createMenu(newId) {
  const name = document.getElementById('new-menu-name').value;
  if (!name) return alert('Nama menu wajib diisi!');
  store.menu.push({ id: newId, name, cat: document.getElementById('new-menu-cat').value, sellingPrice: Number(document.getElementById('new-menu-price').value), overhead: Number(document.getElementById('new-menu-overhead').value), recipe: {}, pkg: { KMS01: 1, KMS03: 1 } });
  saveStore(); closeModal(); renderDashboard();
}

function deleteMenu(id) {
  if (confirm('Yakin ingin menghapus menu ini?')) { store.menu = store.menu.filter(x => x.id !== id); saveStore(); renderDashboard(); }
}

function openAddBahanModal() {
  const nextId = "BHN" + String(store.bahan.length + 1).padStart(2, '0');
  openModalHtml(`
    <div class="flex items-center justify-between border-b border-slate-100 pb-3"><h3 class="text-sm font-extrabold text-slate-900">Tambah Bahan Baku Baru</h3><button onclick="closeModal()" class="text-slate-400 hover:text-slate-600"><i data-lucide="x" class="w-5 h-5"></i></button></div>
    <div class="space-y-3 text-xs">
      <div><label class="font-bold text-slate-700 block mb-1">Nama Bahan</label><input type="text" id="b-name" class="ios-input w-full px-3 py-2 rounded-xl"></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="font-bold text-slate-700 block mb-1">Kategori</label><input type="text" id="b-cat" value="Sirup" class="ios-input w-full px-3 py-2 rounded-xl"></div>
        <div><label class="font-bold text-slate-700 block mb-1">Satuan</label><input type="text" id="b-unit" value="ml" class="ios-input w-full px-3 py-2 rounded-xl"></div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="font-bold text-slate-700 block mb-1">Isi Kemasan</label><input type="number" id="b-pack" value="700" class="ios-input w-full px-3 py-2 rounded-xl"></div>
        <div><label class="font-bold text-slate-700 block mb-1">Harga Beli Total (Rp)</label><input type="number" id="b-price" value="95000" class="ios-input w-full px-3 py-2 rounded-xl"></div>
      </div>
    </div>
    <div class="flex items-center justify-end space-x-2 border-t border-slate-100 pt-3"><button onclick="closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold text-xs">Batal</button><button onclick="saveNewBahan('${nextId}')" class="ios-btn-primary px-5 py-2 rounded-xl text-white font-bold text-xs">Simpan Bahan</button></div>
  `);
}

function saveNewBahan(newId) {
  const name = document.getElementById('b-name').value;
  if (!name) return alert('Nama bahan wajib diisi!');
  store.bahan.push({ id: newId, name, cat: document.getElementById('b-cat').value, unit: document.getElementById('b-unit').value, packQty: Number(document.getElementById('b-pack').value), buyPrice: Number(document.getElementById('b-price').value), supplier: '-' });
  saveStore(); closeModal(); renderMasterTables(); renderDashboard();
}

function openEditBahanModal(id) {
  const b = store.bahan.find(x => x.id === id);
  if (!b) return;
  openModalHtml(`
    <div class="flex items-center justify-between border-b border-slate-100 pb-3"><h3 class="text-sm font-extrabold text-slate-900">Edit Bahan: ${b.name}</h3><button onclick="closeModal()" class="text-slate-400 hover:text-slate-600"><i data-lucide="x" class="w-5 h-5"></i></button></div>
    <div class="space-y-3 text-xs">
      <div><label class="font-bold text-slate-700 block mb-1">Nama Bahan</label><input type="text" id="eb-name" value="${b.name}" class="ios-input w-full px-3 py-2 rounded-xl"></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="font-bold text-slate-700 block mb-1">Isi Kemasan (${b.unit})</label><input type="number" id="eb-pack" value="${b.packQty}" class="ios-input w-full px-3 py-2 rounded-xl"></div>
        <div><label class="font-bold text-slate-700 block mb-1">Harga Beli Total (Rp)</label><input type="number" id="eb-price" value="${b.buyPrice}" class="ios-input w-full px-3 py-2 rounded-xl font-bold"></div>
      </div>
    </div>
    <div class="flex items-center justify-end space-x-2 border-t border-slate-100 pt-3"><button onclick="closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold text-xs">Batal</button><button onclick="updateBahan('${b.id}')" class="ios-btn-primary px-5 py-2 rounded-xl text-white font-bold text-xs">Update</button></div>
  `);
}

function updateBahan(id) {
  const b = store.bahan.find(x => x.id === id);
  if (!b) return;
  b.name = document.getElementById('eb-name').value;
  b.packQty = Number(document.getElementById('eb-pack').value);
  b.buyPrice = Number(document.getElementById('eb-price').value);
  saveStore(); closeModal(); renderMasterTables(); renderDashboard();
}

function deleteBahan(id) { if (confirm('Hapus bahan ini?')) { store.bahan = store.bahan.filter(x => x.id !== id); saveStore(); renderMasterTables(); renderDashboard(); } }

function openAddKemasanModal() {
  const nextId = "KMS" + String(store.kemasan.length + 1).padStart(2, '0');
  openModalHtml(`
    <div class="flex items-center justify-between border-b border-slate-100 pb-3"><h3 class="text-sm font-extrabold text-slate-900">Tambah Kemasan Baru</h3><button onclick="closeModal()" class="text-slate-400 hover:text-slate-600"><i data-lucide="x" class="w-5 h-5"></i></button></div>
    <div class="space-y-3 text-xs">
      <div><label class="font-bold text-slate-700 block mb-1">Nama Kemasan</label><input type="text" id="k-name" class="ios-input w-full px-3 py-2 rounded-xl"></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="font-bold text-slate-700 block mb-1">Isi Kemasan (pcs)</label><input type="number" id="k-pack" value="50" class="ios-input w-full px-3 py-2 rounded-xl"></div>
        <div><label class="font-bold text-slate-700 block mb-1">Harga Beli Total (Rp)</label><input type="number" id="k-price" value="25000" class="ios-input w-full px-3 py-2 rounded-xl"></div>
      </div>
    </div>
    <div class="flex items-center justify-end space-x-2 border-t border-slate-100 pt-3"><button onclick="closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold text-xs">Batal</button><button onclick="saveNewKemasan('${nextId}')" class="ios-btn-primary px-5 py-2 rounded-xl text-white font-bold text-xs">Simpan</button></div>
  `);
}

function saveNewKemasan(newId) {
  const name = document.getElementById('k-name').value;
  if (!name) return alert('Nama kemasan wajib diisi!');
  store.kemasan.push({ id: newId, name, cat: 'Cup', unit: 'pcs', packQty: Number(document.getElementById('k-pack').value), buyPrice: Number(document.getElementById('k-price').value), supplier: '-' });
  saveStore(); closeModal(); renderMasterTables(); renderDashboard();
}

function openEditKemasanModal(id) {
  const k = store.kemasan.find(x => x.id === id);
  if (!k) return;
  openModalHtml(`
    <div class="flex items-center justify-between border-b border-slate-100 pb-3"><h3 class="text-sm font-extrabold text-slate-900">Edit Kemasan: ${k.name}</h3><button onclick="closeModal()" class="text-slate-400 hover:text-slate-600"><i data-lucide="x" class="w-5 h-5"></i></button></div>
    <div class="space-y-3 text-xs">
      <div><label class="font-bold text-slate-700 block mb-1">Nama Kemasan</label><input type="text" id="ek-name" value="${k.name}" class="ios-input w-full px-3 py-2 rounded-xl"></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="font-bold text-slate-700 block mb-1">Isi Kemasan (pcs)</label><input type="number" id="ek-pack" value="${k.packQty}" class="ios-input w-full px-3 py-2 rounded-xl"></div>
        <div><label class="font-bold text-slate-700 block mb-1">Harga Beli Total (Rp)</label><input type="number" id="ek-price" value="${k.buyPrice}" class="ios-input w-full px-3 py-2 rounded-xl font-bold"></div>
      </div>
    </div>
    <div class="flex items-center justify-end space-x-2 border-t border-slate-100 pt-3"><button onclick="closeModal()" class="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold text-xs">Batal</button><button onclick="updateKemasan('${k.id}')" class="ios-btn-primary px-5 py-2 rounded-xl text-white font-bold text-xs">Update</button></div>
  `);
}

function updateKemasan(id) {
  const k = store.kemasan.find(x => x.id === id);
  if (!k) return;
  k.name = document.getElementById('ek-name').value;
  k.packQty = Number(document.getElementById('ek-pack').value);
  k.buyPrice = Number(document.getElementById('ek-price').value);
  saveStore(); closeModal(); renderMasterTables(); renderDashboard();
}

function deleteKemasan(id) { if (confirm('Hapus kemasan ini?')) { store.kemasan = store.kemasan.filter(x => x.id !== id); saveStore(); renderMasterTables(); renderDashboard(); } }

document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
  renderMasterTables();
  if (window.lucide) lucide.createIcons();
});
