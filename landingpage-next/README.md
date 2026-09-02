# 🏗️ CPC — Sistem Manajemen Konstruksi Perumahan
> **Platform SaaS Enterprise Terintegrasi untuk Developer Perumahan, Kontraktor, Project Manager, dan Manajemen Proyek Modern.**

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-slate?style=flat-square)](#)

---

## 📑 Daftar Isi
1. [Tentang Produk](#-tentang-produk)
2. [Target Pengguna & Nilai Bisnis](#-target-pengguna--nilai-bisnis)
3. [6 Pilar Fitur Utama](#-6-pilar-fitur-utama)
4. [Alur Alur Kerja Sistem (Workflow)](#-alur-kerja-sistem-workflow)
5. [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
6. [Struktur Folder & Komponen](#-struktur-folder--komponen)
7. [Panduan Instalasi & Menjalankan Project](#-panduan-instalasi--menjalankan-project)
8. [Panduan Kustomisasi Kontak & WhatsApp](#-panduan-kustomisasi-kontak--whatsapp)
9. [Sistem Desain, Responsif & Aksesibilitas](#-sistem-desain-responsif--aksesibilitas)
10. [Kesiapan Integrasi Analytics](#-kesiapan-integrasi-analytics)
11. [Dokumentasi Spesifikasi](#-dokumentasi-spesifikasi)

---

## 💡 Tentang Produk

**CPC (Construction Project Control)** adalah platform perangkat lunak manajemen proyek berbasis web (*Enterprise B2B SaaS*) yang dirancang khusus untuk memecahkan kompleksitas operasional pada proyek perumahan multi-unit/kaveling.

Sistem ini menjembatani komunikasi antara **lapangan (*site operations*)** dan **kantor direksi (*head office*)**, menyatukan data progres fisik, kuota material BoQ, pesanan pembelian (PO), dan evaluasi anggaran dalam satu sistem terintegrasi secara *real-time*.

---

## 🎯 Target Pengguna & Nilai Bisnis

| Target Pengguna | Peran & Tanggung Jawab | Manfaat Utama dari CPC |
| :--- | :--- | :--- |
| **Developer Perumahan** | Pemilik proyek & pengembang kawasan residensial | Memastikan proyek serah terima tepat waktu, arus kas (*cash flow*) sehat, dan margin profit terjaga. |
| **Perusahaan Konstruksi** | Pelaksana multi-proyek perumahan | Standarisasi SOP operasional lintas klaster, kontrol armada logistik, dan transparansi laporan. |
| **Kontraktor & Subkon** | Pelaksana teknis fisik di lapangan | Kemudahan pengajuan material harian, pelaporan SPK, dan transparansi *approval* bertahap. |
| **Project Manager (PM)** | Penanggung jawab teknis & jadwal di site | Kontrol kurva S rencana vs realisasi, deteksi dini keterlambatan (*delay*), dan validasi BoQ. |
| **Direksi & C-Level** | Pengambil keputusan strategis korporat | *Executive BI Dashboard*, laporan konsolidasi 1-klik, dan *real-time audit trail*. |

---

## ⚡ 6 Pilar Fitur Utama

```
┌────────────────────────────────────────────────────────────────────────┐
│                        6 PILAR UTAMA SISTEM CPC                        │
├───────────────────┬────────────────────┬───────────────────────────────┤
│ 1. Project Mgmt   │ 2. Material BoQ    │ 3. Procurement System         │
│ • Master Kaveling │ • Validasi Kuota   │ • Material Request & PO       │
│ • Gantt Chart     │ • Kartu Stok Site  │ • Perbandingan Vendor         │
│ • SPK Kontraktor  │ • Cegah Kebocoran  │ • Verifikasi Surat Jalan      │
├───────────────────┼────────────────────┼───────────────────────────────┤
│ 4. Progress Track │ 5. Budget & Cost   │ 6. Executive Reporting        │
│ • Kurva S Dinamis │ • Varians Biaya    │ • Multi-Project KPI Dashboard │
│ • Log Foto Harian │ • Cash Outflow     │ • Ekspor 1-Klik PDF & Excel   │
│ • Deviasi Waktu   │ • Margin Profit    │ • Laporan Resmi Owner & Bank  │
└───────────────────┴────────────────────┴───────────────────────────────┘
```

1. **Project Management:** Strukturisasi master tipe unit (36/60, 45/90, dll.), timeline pekerjaan WBS, penugasan SPK kontraktor, dan penjadwalan milestone serah terima kunci.
2. **Material Management:** Kontrol volume material per kaveling berbasis Bill of Quantities (BoQ) rencana. Mencegah pemesanan berlebih dan kebocoran material di lapangan hingga 15-20%.
3. **Procurement:** Digitalisasi alur pengadaan dari *Material Request (MR)*, *Purchase Order (PO)*, seleksi supplier, hingga *Good Receipt* di gudang proyek.
4. **Progress Monitoring:** Kalkulasi Kurva S realisasi secara otomatis dibandingkan rencana, dilengkapi rekap log foto fisik bergeotag dari lapangan.
5. **Budget & Cost Control:** Pemantauan varians biaya pengeluaran riil terhadap pagu anggaran RAB secara *real-time* untuk mencegah *cost overrun*.
6. **Dashboard & Reporting:** *Executive Business Intelligence* dengan metrik kesehatan proyek, grafik kinerja multi-klaster, dan ekspor instan format PDF/Excel.

---

## 🔄 Alur Kerja Sistem (Workflow)

Landing page memvisualisasikan 6 siklus kerja CPC yang terstruktur:

```
[ 01. Planning & RAB ]
        │  Input master data tipe rumah, volume BoQ, dan pagu anggaran RAB.
        ▼
[ 02. Procurement ]
        │  Pengajuan Material Request & Purchase Order terverifikasi kuota.
        ▼
[ 03. Construction ]
        │  Pelaksanaan pekerjaan fisik di lapangan per unit kaveling.
        ▼
[ 04. Progress Update ]
        │  Input checklist harian & upload dokumentasi foto fisik bergeotag.
        ▼
[ 05. Auto Monitoring ]
        │  Kalkulasi kurva S deviasi aktual vs rencana & kuota anggaran.
        ▼
[ 06. Executive Report ]
        │  Penerbitan laporan konsolidasi otomatis siap ekspor bagi manajemen.
```

---

## 🛠️ Teknologi yang Digunakan

* **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
* **Library:** [React](https://react.dev/) (Hooks, Strict Mode, Client Components)
* **Bahasa:** [TypeScript](https://www.typescriptlang.org/) (Strict Type-Safety)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Ikon:** [Lucide React](https://lucide.dev/) (SVG Icons enterprise)
* **Font:** Inter / Geist Sans modern

---

## 📁 Struktur Folder & Komponen

```
landing-page-nextjs/landingpage-next/
├── app/
│   ├── layout.tsx             # Root layout, meta tag SEO, & Open Graph data
│   ├── page.tsx               # Master controller & state modal Request Demo
│   └── globals.css            # Tailwind configuration, theme variables & scroll-smooth
│
├── components/
│   ├── Navbar.tsx             # Sticky navbar + responsive mobile drawer
│   ├── Hero.tsx               # Value prop headline + mockup dashboard SaaS interaktif
│   ├── ProblemSection.tsx     # 5 kartu tantangan operasional lapangan
│   ├── SolutionSection.tsx    # Diagram arsitektur 6 pilar terintegrasi
│   ├── FeatureSection.tsx     # 6 kartu modul fitur utama & detail poin kapabilitas
│   ├── HowItWorks.tsx         # Stepper alur sistem (Horizontal di Desktop / Vertikal di Mobile)
│   ├── BenefitsSection.tsx    # Komparasi metrik & dampak bisnis terukur
│   ├── CTASection.tsx         # Banner konversi "Request Demo" & konsultasi WhatsApp
│   ├── RequestDemoModal.tsx   # Modal interaktif pengajuan jadwal live demo
│   ├── Footer.tsx             # Identitas perusahaan, modul sistem, & kontak kantor
│   └── AnalyticsTracker.ts    # Utility pelacak event analitik frontend
│
├── constants/
│   └── siteConfig.ts          # ⭐️ Pusat konfigurasi nomor WhatsApp, Email, & Alamat
│
├── public/                    # Aset statis & favicon
├── package.json               # Dependensi & script project
└── tsconfig.json              # Konfigurasi TypeScript
```

---

## 🚀 Panduan Instalasi & Menjalankan Project

### 1. Prasyarat Sistem
Pastikan perangkat Anda telah terpasang:
* **Node.js**: Versi `>= 18.18.0` (disarankan Node LTS)
* **npm**: Versi `>= 9.0.0`

### 2. Pemasangan Dependensi
Buka terminal dan navigasikan ke folder Next.js:
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (*Development*)
```bash
npm run dev
```
Buka browser Anda dan akses:
👉 **`http://localhost:3000`**

### 4. Menjalankan Build Produksi (*Production Build*)
Untuk menguji performa dan integritas tipe data TypeScript sebelum rilis:
```bash
npm run build
npm run start
```

---

## 📱 Panduan Kustomisasi Kontak & WhatsApp

Seluruh tombol dan tautan WhatsApp, email, dan alamat di seluruh website terpusat pada **1 file konfigurasi**.

### File: `constants/siteConfig.ts`
*(Path: `landing-page-nextjs/landingpage-next/constants/siteConfig.ts`)*

```typescript
export const SITE_CONFIG = {
  // Ganti dengan nomor WhatsApp tujuan Anda (format internasional tanpa +, contoh: 628xxxxxxxxxx)
  whatsappNumber: "6281234567890",

  // Format tampilan teks nomor telepon di Footer
  whatsappDisplay: "+62 812-3456-7890",

  // Pesan default saat pengunjung mengklik tombol WhatsApp
  whatsappDefaultMessage: "Halo Tim CPC, saya ingin konsultasi mengenai Sistem Manajemen Konstruksi Perumahan.",

  // Email resmi perusahaan
  companyEmail: "info@cpc-system.id",

  // Alamat kantor
  companyAddress: "Gedung Graha Konstruksi Lt. 8, Jl. TB Simatupang, Jakarta Selatan",
};
```

> **Semua komponen berikut akan terupdate otomatis saat file di atas diubah:**
> * Tombol *"Tanya CS"* di Navbar
> * Menu Navigasi Mobile
> * Tombol *"Konsultasi via WhatsApp"* di CTA Section
> * Informasi kontak di Footer
> * Tombol konfirmasi WhatsApp di Modal *Request Demo*

---

## 🎨 Sistem Desain, Responsif & Aksesibilitas

* **Palet Warna Enterprise:**
  * Primary Navy: `#0F172A` (Slate 900)
  * Brand Accent: `#2563EB` (Blue 600)
  * Safety Amber: `#F59E0B` (Amber 500)
  * Success Emerald: `#10B981` (Emerald 500)
* **Responsive Breakpoints:**
  * **Desktop ($\ge 1024\text{ px}$):** Layout 2 kolom Hero, grid 3 kolom fitur, horizontal stepper alur sistem.
  * **Tablet ($768\text{ px} - 1023\text{ px}$):** Grid 2 kolom, adaptasi proporsi spasi, dashboard visual auto-fit.
  * **Mobile ($< 768\text{ px}$):** Single column stack, drawer hamburger menu, touch target tombol $\ge 44 \times 44\text{ px}$, vertical timeline.
* **Aksesibilitas (WCAG AA):**
  * Kontras warna teks terhadap latar belakang tinggi ($> 4.5:1$).
  * Navigasi keyboard penuh (`Escape` untuk menutup modal interaktif).
  * Struktur semantik HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).

---

## 📊 Kesiapan Integrasi Analytics

Sistem dilengkapi helper `trackEvent()` di `components/AnalyticsTracker.ts` yang siap dihubungkan ke Google Analytics, Google Tag Manager, atau Mixpanel:

| Nama Event | Pemicu / Trigger |
| :--- | :--- |
| `event_navbar_demo_click` | Klik tombol Request Demo pada Navbar |
| `event_hero_demo_click` | Klik tombol Request Demo pada Hero Section |
| `event_cta_bottom_demo_click` | Klik tombol Request Demo pada CTA Banner bawah |
| `event_form_demo_submit` | Pengiriman data formulir Request Demo |
| `event_feature_card_click` | Interaksi klik pada kartu fitur utama |
| `event_contact_whatsapp_click` | Klik pada kanal konsultasi WhatsApp |
| `event_how_it_works_step_click` | Interaksi klik pada tahapan alur sistem |

---

## 📖 Dokumentasi Spesifikasi Lengkap

Untuk melihat analisis rekayasa perangkat lunak dan dokumen spesifikasi formal:
* [**`prd.md`**](../../prd.md) — *Product Requirements Document*
* [**`design.md`**](../../design.md) — *Landing Page Design Specification*

---

© 2026 **CPC Systems Indonesia**. Hak Cipta Dilindungi Undang-Undang.
