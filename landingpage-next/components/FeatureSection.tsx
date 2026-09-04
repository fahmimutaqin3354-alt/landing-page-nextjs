"use client";

import React from "react";
import {
  FolderKanban,
  Boxes,
  ShoppingCart,
  TrendingUp,
  Coins,
  FilePieChart,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { trackEvent } from "./AnalyticsTracker";
import { useDemoModal } from "./DemoModalContext";

export default function FeatureSection() {
  const { openDemoModal } = useDemoModal();

  const features = [
    {
      icon: FolderKanban,
      title: "Project Management",
      badge: "Master Struktur",
      description:
        "Kelola master tipe unit kaveling (36/60, 45/90, dsb), timeline pekerjaan terstruktur, penugasan SPK kontraktor, serta penjadwalan milestone serah terima kunci.",
      points: [
        "Master data unit & kaveling perumahan",
        "Penjadwalan Gantt Chart interaktif",
        "Penugasan SPK & mandor terstruktur",
      ],
    },
    {
      icon: Boxes,
      title: "Material Management",
      badge: "Kontrol BoQ",
      description:
        "Pantau volume material per unit berdasarkan standar BoQ/RAB. Cegah pemborosan semen, besi beton, dan bata dengan sistem validasi kuota otomatis.",
      points: [
        "Batas kuota pengeluaran material",
        "Kartu stok gudang proyek real-time",
        "Deteksi dini selisih (material leakage)",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Procurement",
      badge: "Pengadaan Cepat",
      description:
        "Digitalisasi seluruh alur permintaan barang (Material Request), Surat Pesanan (PO), hingga verifikasi Surat Jalan penerimaan di lokasi proyek.",
      points: [
        "Persetujuan (approval) berjenjang digital",
        "Database komparasi harga supplier",
        "Verifikasi barang datang langsung di site",
      ],
    },
    {
      icon: TrendingUp,
      title: "Progress Monitoring",
      badge: "Kurva S Dinamis",
      description:
        "Grafik Kurva S dinamis yang membandingkan progres rencana dengan realisasi fisik di lapangan, dilengkapi dokumentasi foto harian.",
      points: [
        "Kalkulasi Kurva S realisasi otomatis",
        "Log harian mandor dengan bukti visual",
        "Notifikasi dini deviasi keterlambatan",
      ],
    },
    {
      icon: Coins,
      title: "Budget & Cost",
      badge: "Kontrol Anggaran",
      description:
        "Evaluasi realisasi pengeluaran terhadap pagu RAB kaveling secara akurat. Monitor varians biaya tenaga kerja dan material untuk mengamankan margin proyek.",
      points: [
        "Analisis varians biaya (Cost Variance)",
        "Monitoring arus kas (cash outflow) proyek",
        "Proyeksi profitabilitas per klaster",
      ],
    },
    {
      icon: FilePieChart,
      title: "Dashboard & Reporting",
      badge: "Executive BI",
      description:
        "Ringkasan performa multi-proyek dalam satu dashboard eksekutif. Ekspor laporan mingguan/bulanan berformat rapi ke PDF atau Excel dengan sekali klik.",
      points: [
        "Executive KPI & health-check proyek",
        "Konsolidasi laporan multi-klaster",
        "Ekspor instan format PDF & Excel",
      ],
    },
  ];

  const handleCardClick = (title: string) => {
    trackEvent("event_feature_card_click", { featureName: title });
  };

  return (
    <section id="fitur" className="py-20 bg-slate-50 relative border-b border-slate-200/80 content-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fitur Utama Sistem</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Enam Pilar Utama Sistem CPC
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Dirancang secara spesifik untuk menjawab kompleksitas pembangunan kawasan perumahan multi-kaveling.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                onClick={() => handleCardClick(feature.title)}
                className="group bg-white p-7 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {feature.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Bottom Action Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Ingin melihat bagaimana fitur-fitur ini bekerja di proyek perumahan Anda?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Jadwalkan demonstrasi langsung bersama tim konsultan sistem CPC.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              trackEvent("event_navbar_demo_click", { source: "feature_banner" });
              openDemoModal("feature_banner");
            }}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition shrink-0 cursor-pointer shadow-md shadow-blue-600/20"
          >
            Request Demo Sekarang
          </button>
        </div>

      </div>
    </section>
  );
}
