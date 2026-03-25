<div align="center">

<img src="icons/icon-192.png" alt="LitologiKu Pro Icon" width="96" height="96" style="border-radius:18px"/>

# ⛏️ LitologiKu Pro

### Aplikasi Deskripsi Batuan Lapangan Berstandar IUGS

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-amber?style=for-the-badge&logo=pwa&logoColor=white&color=f59e0b)](https://web.dev/progressive-web-apps/)
[![Offline](https://img.shields.io/badge/Offline-Capable-green?style=for-the-badge&logo=serviceworker&color=10b981)](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
[![IndexedDB](https://img.shields.io/badge/Storage-IndexedDB-blue?style=for-the-badge&color=0ea5e9)](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
[![License](https://img.shields.io/badge/License-MIT-stone?style=for-the-badge&color=78716c)](LICENSE)
[![UIR](https://img.shields.io/badge/Teknik_Geologi-UIR-stone?style=for-the-badge&color=44403c)](https://uir.ac.id)

**Dikembangkan oleh Teknik Geologi — Universitas Islam Riau**  
_Alat bantu deskripsi megaskopis batuan beku, sedimen, dan metamorf untuk mahasiswa geologi & geolog lapangan._

---

[🚀 Demo Live](#) · [📥 Download](#installation) · [📖 Dokumentasi](#fitur-lengkap) · [🐛 Lapor Bug](../../issues)

</div>

---

## 📸 Screenshot

<div align="center">

| Beranda | Input Batuan Beku | Data & Export |
|:---:|:---:|:---:|
| ![Home](docs/screenshot-home.png) | ![Beku](docs/screenshot-beku.png) | ![Data](docs/screenshot-data.png) |

> _Screenshot akan tampil setelah deploy. Buka DevTools → screenshot tiap halaman._

</div>

---

## ✨ Tentang Aplikasi

**LitologiKu Pro** adalah aplikasi web berbasis **Progressive Web App (PWA)** yang dirancang khusus untuk membantu mahasiswa geologi dan geolog lapangan dalam melakukan **deskripsi batuan megaskopis** secara sistematis, cepat, dan berstandar internasional IUGS.

Tidak perlu internet di lapangan. Tidak perlu instalasi rumit. Cukup satu file HTML — buka di browser, simpan ke layar utama, dan langsung pakai.

---

## 🌟 Fitur Unggulan

### 🔥 Batuan Beku
- Klasifikasi lengkap berdasarkan **IUGS/QAPF (Streckeisen, 1976)**
- Input komposisi mineral: **Q · A · P · F · M** (persentase)
- **Colour Index otomatis**: Leukokratik / Mesokratik / Melanokratik
- Pemilihan tekstur: derajat kristalisasi, granularitas, hubungan antar kristal, bentuk kristal
- Tekstur khusus: Ofitik, Sub-ofitik, Trakitik, Grafik, Mirmekitik, Pertitik, Poikilitik, Sferulit, dll.
- Struktur batuan: Masif, Vesikuler, Skoria, Amigdaloidal, Pillow Lava, Columnar Joint, Flow Structure, Banded, Xenolith
- **Saran nama batuan otomatis** berdasarkan rasio QAPF

### 📚 Batuan Sedimen
- Referensi: **Wentworth (1922)**, **Dunham (1962)**, **Folk (1959/1962)**, **Pettijohn et al. (1987)**
- Tipe batuan: Klastik, Karbonat (Limestone/Dolomit), Vulkaniklastik, Non-klastik (Evaporit, Silika, dll.)
- Parameter klastik: ukuran butir, sorting, roundness, sphericity, fabric, maturity, semen/matriks
- Klasifikasi karbonat: **Dunham** (Mudstone → Grainstone → Boundstone) & **Folk**
- Klasifikasi piroklastik: **Schmid (1981)** — Agglomerat, Lapilli Tuff, Tuff, Fine Ash
- Tes **Reaksi HCl** (effervescence kuat/lemah/dolomit/tidak bereaksi)
- Input ketebalan perlapisan & struktur sedimen (Laminasi, Silang-siur, Graded Bedding, dll.)

### 💎 Batuan Metamorf
- Referensi: **IUGS SCMR (Fettes & Desmons, 2007)**, **Miyashiro (1994)**, **Yardley (1989)**
- Klasifikasi struktur: Foliasi (Slate/Phyllite/Schist/Gneiss) & Non-foliasi (Hornfels/Granofels/Milonit/dll.)
- Tipe foliasi: Slaty Cleavage, Fracture Cleavage, Schistosity, Gneissosity, Phyllitic
- Tekstur metamorf: Granoblastik, Lepidoblastik, Nematoblastik, Porfiroblastik, Poikiloblastik, Milonitik, dll.
- Parameter derajat metamorfisme: Sangat Rendah → Rendah → Menengah → Tinggi → Sangat Tinggi
- Tipe metamorfisme: Kontak, Regional/Barrovian, Tektonik/Dinamik, Hidrotermal, Dasar Samudra, Impak
- Input **protolith** (batuan asal)

### 📍 Informasi Lokasi Terpadu (semua tipe batuan)
| Parameter | Keterangan |
|---|---|
| Nama Lokasi / Station | Identifikasi titik pengamatan |
| 📡 GPS otomatis | Ambil koordinat langsung dari browser |
| Elevasi (mdpl) | Ketinggian lokasi |
| Strike & Dip | Arah jurus & kemiringan |
| Traverse | Sungai / Jalan / Bukit / Pantai / Tambang |
| Dimensi Singkapan | Panjang × Lebar × Tinggi |
| Derajat Pelapukan | Fresh (I) sampai Completely Weathered (V) |
| Kekerasan | Skala deskriptif (sangat lunak → sangat keras) |
| Cuaca | Kondisi saat observasi |
| 📸 Foto lapangan | Upload drag-&-drop, max 5MB, tersimpan dalam DB |

### 📊 Manajemen Data
- Tabel data **sortable** (klik header untuk urut asc/desc)
- **Filter** berdasarkan tipe batuan
- **Search** nama lokasi
- Statistik: total data, jumlah foto, ukuran database
- Edit & hapus data individual
- **Preview modal** data lengkap satu entri

### 📤 Export Multi-Format
| Format | Isi |
|---|---|
| 📄 **PDF** | Laporan geologi profesional dengan header, tabel per batuan, foto lapangan, footer halaman |
| 📊 **CSV** | Seluruh kolom (50+ field) dengan encoding UTF-8 BOM untuk Excel |
| 🗂️ **JSON** | Backup lengkap semua data untuk import ulang |
| ⬆️ **Import JSON** | Restore data dari backup sebelumnya |

### 📖 Referensi Terpadu
Panel referensi terintegrasi mencakup:
- Skala Wentworth (ukuran butir)
- Klasifikasi QAPF (Streckeisen)
- Klasifikasi Dunham & Folk (karbonat)
- Skala pelapukan
- Tabel mineral umum batuan beku

---

## 🛠️ Teknologi

```
LitologiKu Pro
├── Frontend        → HTML5 · CSS3 · Vanilla JavaScript (ES2020+)
├── Database        → IndexedDB (via idb wrapper)
├── PDF Export      → jsPDF v2.5.1
├── Fonts           → DM Sans · Playfair Display · JetBrains Mono (Google Fonts)
├── PWA             → Service Worker · Web App Manifest · Cache API
├── Storage         → Cache-First strategy, stale-while-revalidate
└── Icons           → 8 ukuran PNG (72px → 512px)
```

**Zero framework. Zero build tool. Zero backend.** Murni satu file HTML yang berjalan sepenuhnya di browser.

---

## 📦 Instalasi & Penggunaan

### Opsi 1 — Buka Langsung (paling mudah)
```bash
# Tidak perlu npm install, tidak perlu server
# Cukup buka file di browser
open LitologiKu_Pro_6.html
```
> ⚠️ Beberapa fitur PWA (install, service worker) memerlukan HTTPS atau `localhost`.

### Opsi 2 — Local Server (direkomendasikan untuk PWA penuh)
```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8080
```
Buka `http://localhost:8080/LitologiKu_Pro_6.html`

### Opsi 3 — Deploy ke GitHub Pages
```bash
# 1. Fork atau clone repo ini
git clone https://github.com/username/litologiku-pro.git
cd litologiku-pro

# 2. Pastikan struktur file:
#    ├── LitologiKu_Pro_6.html
#    ├── manifest.json
#    ├── sw.js
#    └── icons/
#        ├── icon-72.png ... icon-512.png

# 3. Push ke branch main/gh-pages
git add .
git commit -m "Deploy LitologiKu Pro PWA"
git push origin main

# 4. Aktifkan GitHub Pages di Settings → Pages → Source: main
```
App akan tersedia di `https://username.github.io/litologiku-pro/LitologiKu_Pro_6.html`

### Opsi 4 — Deploy ke Netlify / Vercel
Drag & drop folder `LitologiKu_PWA/` langsung ke [app.netlify.com](https://app.netlify.com) — selesai dalam 30 detik dengan HTTPS otomatis.

---

## 📲 Install sebagai PWA

Setelah dibuka di browser melalui HTTPS:

**Android (Chrome):**
> Menu ⋮ → _"Tambahkan ke Layar Utama"_ → Install

**iOS (Safari):**
> Tombol Share 🔗 → _"Tambahkan ke Layar Utama"_ → Tambahkan

**Desktop (Chrome/Edge):**
> Ikon install ⊕ di address bar → Install

Setelah diinstall, app berjalan penuh **offline** — cocok untuk kondisi lapangan tanpa sinyal.

---

## 📁 Struktur Proyek

```
litologiku-pro/
├── 📄 LitologiKu_Pro_6.html     # Aplikasi utama (single-file)
├── 📋 manifest.json              # PWA manifest (nama, ikon, warna tema)
├── ⚙️  sw.js                     # Service Worker (cache & offline)
├── 🖼️  icons/
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-192.png
│   ├── icon-384.png
│   └── icon-512.png
├── 📖 README.md
└── 📜 LICENSE
```

---

## 🗂️ Struktur Data (IndexedDB)

Setiap entri batuan disimpan sebagai objek JSON dengan struktur:

```json
{
  "id": "beku_1718000000000",
  "type": "beku",
  "timestamp": "2025-06-10T08:30:00.000Z",
  "location": {
    "nama": "ST-01",
    "tanggal": "2025-06-10",
    "latitude": 0.507068,
    "longitude": 101.447779,
    "elevasi": 125,
    "cuaca": "Cerah",
    "traverse": "Sungai",
    "dimensi": "3 × 2 × 1.5 m",
    "strike": 45,
    "dip": 30,
    "pelapukan": "Slightly Weathered (II)",
    "kekerasan": "Keras",
    "catatan": "Singkapan di tepi sungai",
    "foto": "data:image/jpeg;base64,..."
  },
  "warna_segar": "Abu-abu",
  "warna_lapuk": "Coklat",
  "struktur": ["Masif"],
  "kristalisasi": "Holokristalin",
  "granularitas": "Fanerik Sedang",
  "q": 30, "a": 25, "p": 35, "f": 0, "m": 10,
  "color_class": "Leukokratik",
  "mineral": ["Kuarsa", "Ortoklas", "Plagioklas", "Biotit"],
  "rock_name": "Granodiorit",
  "catatan": "Kontak dengan batuan sedimen di sisi utara"
}
```

---

## 🔒 Privasi & Data

- ✅ Semua data **tersimpan lokal** di IndexedDB browser pengguna
- ✅ **Tidak ada server**, tidak ada pengiriman data ke luar
- ✅ Foto lapangan dikompres dan disimpan sebagai base64 lokal
- ⚠️ Data akan hilang jika cache browser dihapus → gunakan **Export JSON** untuk backup berkala

---

## 🗺️ Roadmap

- [ ] 🗺️ Tampilan peta interaktif (Leaflet.js) untuk semua titik lokasi
- [ ] 📷 Kompresi foto otomatis lebih agresif (Canvas API)
- [ ] 🔄 Sinkronisasi cloud opsional (Google Drive / Dropbox)
- [ ] 📊 Diagram segitiga QAPF interaktif (klasifikasi visual)
- [ ] 🌍 Dukungan multi-bahasa (English)
- [ ] 🖨️ Template laporan custom (header instansi)
- [ ] 📱 Tampilan mode gelap (Dark Mode)
- [ ] 📐 Kalkulator stereonet sederhana

---

## 🤝 Kontribusi

Kontribusi sangat terbuka! Langkah-langkahnya:

```bash
# 1. Fork repo ini
# 2. Buat branch fitur baru
git checkout -b fitur/nama-fitur-baru

# 3. Commit perubahan
git commit -m "Tambah: fitur nama batuan metamorf otomatis"

# 4. Push ke branch
git push origin fitur/nama-fitur-baru

# 5. Buat Pull Request
```

Harap ikuti konvensi kode yang sudah ada dan uji di minimal dua browser (Chrome + Firefox) sebelum PR.

---

## 📚 Referensi Ilmiah

| Referensi | Digunakan untuk |
|---|---|
| Streckeisen, A. (1976). _To each plutonic rock its proper name_. Earth-Sci. Rev., 12(1) | Klasifikasi QAPF batuan beku |
| Wentworth, C.K. (1922). _A scale of grade and class terms for clastic sediments_. J. Geology, 30(5) | Skala ukuran butir sedimen |
| Dunham, R.J. (1962). _Classification of carbonate rocks according to depositional texture_. AAPG Mem. 1 | Klasifikasi batuan karbonat |
| Folk, R.L. (1959). _Practical petrographic classification of limestones_. AAPG Bull., 43(1) | Klasifikasi Folk |
| Pettijohn, F.J., Potter, P.E., Siever, R. (1987). _Sand and Sandstone_. Springer | Batuan klastik |
| Fettes, D. & Desmons, J. (2007). _Metamorphic Rocks: A Classification and Glossary of Terms_. Cambridge | Batuan metamorf |
| Miyashiro, A. (1994). _Metamorphic Petrology_. Oxford University Press | Derajat & fasies metamorf |
| Schmid, R. (1981). _Descriptive nomenclature and classification of pyroclastic deposits_. Geologische Rundschau | Batuan piroklastik |

---

## 📜 Lisensi

```
MIT License — Copyright (c) 2025 Teknik Geologi, Universitas Islam Riau

Izin diberikan secara gratis untuk menggunakan, menyalin, memodifikasi,
menggabungkan, mempublikasikan, mendistribusikan, mensublisensikan, dan/atau
menjual salinan perangkat lunak ini, dengan syarat pemberitahuan hak cipta
dan izin ini disertakan dalam semua salinan atau bagian substansial.
```

---

## 👨‍🏫 Tentang Pengembang

<div align="center">

Dikembangkan dengan ❤️ oleh **Program Studi Teknik Geologi**  
**Universitas Islam Riau (UIR)**  
Pekanbaru, Riau, Indonesia

_"Geologi bukan hanya ilmu — ia adalah cara membaca sejarah bumi."_

---

⭐ Jika aplikasi ini membantu penelitian atau praktikum Anda, **berikan bintang** di repository ini!

</div>
