"use client";

import React, { useState } from "react";
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  Database,
  Building2,
  HardHat,
  BarChart3,
  Boxes,
  ShoppingCart,
  Wallet,
} from "lucide-react";
import { trackEvent } from "./AnalyticsTracker";
import { useDemoModal } from "./DemoModalContext";

export default function SolutionSection() {
  const { openDemoModal } = useDemoModal();
  const [selectedPillar, setSelectedPillar] = useState(0);

  const pillars = [
    {
      id: "project",
      icon: Building2,
      name: "Project Management",
      badge: "Perencanaan",
      summary: "Struktur WBS, Timeline SPK, dan Master Data Kaveling",
      detail:
        "Memastikan seluruh unit perumahan, jadwal tahapan kerja, dan penugasan kontraktor terdokumentasi terpusat dengan milestone terukur.",
    },
    {
      id: "material",
      icon: Boxes,
      name: "Material Management",
      badge: "Kontrol Stok",
      summary: "Pencatatan BoQ, Kartu Stok Gudang, dan Batas Kuota",
      detail:
        "Mencegah kebocoran semen, besi, dan material lain melalui validasi batas kuota RAB sebelum material dikeluarkan ke kaveling.",
    },
    {
      id: "procurement",
      icon: ShoppingCart,
      name: "Procurement",
      badge: "Pengadaan",
      summary: "Material Request, Purchase Order & Verifikasi Surat Jalan",
      detail:
        "Mempercepat alur persetujuan pengadaan barang dengan perbandingan vendor terstruktur dan verifikasi fisik di gudang proyek.",
    },
    {
      id: "progress",
      icon: HardHat,
      name: "Progress Monitoring",
      badge: "Lapangan",
      summary: "Kurva S Dinamis & Log Harian dengan Geotag Foto",
      detail:
        "Memantau persentase bobot pekerjaan aktual versus rencana untuk mendeteksi deviasi keterlambatan fisik sejak hari pertama.",
    },
    {
      id: "budget",
      icon: Wallet,
      name: "Budget & Cost",
      badge: "Finansial",
      summary: "Realisasi Biaya vs RAB & Cash Outflow Control",
      detail:
        "Transparansi biaya tenaga kerja, material, dan operasional guna mengamankan margin profitabilitas developer dan kontraktor.",
    },
    {
      id: "reporting",
      icon: BarChart3,
      name: "Dashboard & Reporting",
      badge: "Eksekutif",
      summary: "Executive BI, Indikator KPI & Rekap Otomatis 1-Klik",
      detail:
        "Manajemen dan direksi dapat mengunduh laporan komprehensif PDF/Excel kapan saja tanpa menunggu kompilasi manual staf.",
    },
  ];

  const handlePillarClick = (index: number) => {
    setSelectedPillar(index);
    trackEvent("event_solution_tab_click", { pillar: pillars[index].name });
  };

  return (
    <section id="solusi" className="py-20 bg-white relative border-b border-slate-200/80 content-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Solusi Terpadu CPC</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Satu Sistem Untuk Mengelola Proyek Anda
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            CPC menghubungkan seluruh rantai operasional konstruksi perumahan dari fase perencanaan hingga serah terima unit dalam satu ekosistem data yang sinkron.
          </p>
        </div>

        {/* Interactive Solution Architecture Component */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl overflow-hidden relative">
          
          {/* Subtle Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Pillar Navigator */}
            <div className="lg:col-span-6 space-y-2.5">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-3">
                6 Pilar Alur Kerja Terpadu (Klik untuk eksplorasi)
              </span>

              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isSelected = selectedPillar === idx;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => handlePillarClick(idx)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                      isSelected
                        ? "bg-blue-600/90 border-blue-400 text-white shadow-lg"
                        : "bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                          isSelected ? "bg-white text-blue-600" : "bg-slate-700 text-slate-300"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold flex items-center gap-2">
                          <span>{pillar.name}</span>
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                              isSelected ? "bg-blue-700 text-blue-100" : "bg-slate-700 text-slate-400"
                            }`}
                          >
                            {pillar.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300 line-clamp-1">
                          {pillar.summary}
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "translate-x-1 text-white" : "text-slate-500"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Selected Pillar Deep-Dive & Visual Engine */}
            <div className="lg:col-span-6 bg-slate-800/80 rounded-2xl border border-slate-700 p-6 sm:p-8 flex flex-col justify-between min-h-[380px]">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700">
                  <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold">
                    <Database className="w-4 h-4" />
                    <span>CPC Central Synchronization Engine</span>
                  </div>
                  <span className="text-[11px] bg-slate-900 px-2.5 py-1 rounded text-slate-300 font-mono">
                    Pilar #{selectedPillar + 1} of 6
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  {React.createElement(pillars[selectedPillar].icon, {
                    className: "w-8 h-8 text-amber-400",
                  })}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {pillars[selectedPillar].name}
                    </h3>
                    <p className="text-xs text-slate-400">{pillars[selectedPillar].summary}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mt-4 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                  {pillars[selectedPillar].detail}
                </p>

                {/* Key Benefits Bullet */}
                <div className="mt-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Terhubung otomatis dengan pembukuan biaya dan estimasi Kurva S</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Akses multi-user untuk pengawas lapangan, PM, dan direksi</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 mt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  Lihat implementasi langsung pada studi kasus proyek perumahan Anda.
                </span>
                <button
                  type="button"
                  onClick={() => {
                    trackEvent("event_navbar_demo_click", { source: "solution_section" });
                    openDemoModal("solution_section");
                  }}
                  className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition shrink-0 cursor-pointer"
                >
                  Request Demo Fitur Ini
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
