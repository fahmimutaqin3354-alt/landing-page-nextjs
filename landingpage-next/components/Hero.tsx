"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Layers,
  Building,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  DollarSign,
  Package,
  Activity,
  Sparkles,
} from "lucide-react";
import { trackEvent } from "./AnalyticsTracker";

interface HeroProps {
  onRequestDemo: () => void;
}

export default function Hero({ onRequestDemo }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "units" | "materials">("overview");

  const handleHeroDemoClick = () => {
    trackEvent("event_hero_demo_click");
    onRequestDemo();
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-100/70 via-slate-50 to-white border-b border-slate-200/60">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="tracking-wide">Sistem Terintegrasi Proyek Perumahan</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Kelola Proyek Konstruksi Perumahan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Lebih Mudah
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Pantau proyek, material, progres pembangunan, dan biaya dalam satu sistem terintegrasi. Hilangkan data terisolasi dan cegah pembengkakan anggaran secara real-time.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                type="button"
                onClick={handleHeroDemoClick}
                className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition duration-150 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 active:scale-95 cursor-pointer"
              >
                <span>Request Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#fitur"
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-xl border border-slate-300 transition duration-150 flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Lihat Fitur Lengkap</span>
              </a>
            </div>

            {/* Key Value Badges */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3 text-left">
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                <div className="text-blue-600 font-bold text-base sm:text-lg">Kurva S</div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight">Otomatis Realisasi vs Rencana</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                <div className="text-amber-600 font-bold text-base sm:text-lg">BoQ Material</div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight">Kontrol Kuota & Stok Gudang</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                <div className="text-emerald-600 font-bold text-base sm:text-lg">Multi-Unit</div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight">Monitoring Klaster & Kaveling</div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Construction SaaS Dashboard Mockup */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer App Frame */}
              <div className="bg-slate-900 rounded-2xl shadow-2xl ring-1 ring-slate-800 p-3 sm:p-4 text-slate-100 overflow-hidden">
                
                {/* App Topbar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="ml-2 px-2.5 py-1 rounded-md bg-slate-800 text-[11px] font-medium text-slate-300 flex items-center gap-1.5 border border-slate-700">
                      <Building className="w-3 h-3 text-blue-400" />
                      <span>Cluster Grand Harmoni — Blok A s/d D (70 Unit)</span>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
                    <Activity className="w-3 h-3" /> Live Data
                  </span>
                </div>

                {/* Dashboard Tabs */}
                <div className="flex gap-1 mb-3 bg-slate-800/80 p-1 rounded-lg border border-slate-700/60 text-xs">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`flex-1 py-1.5 px-2 rounded-md font-semibold transition ${
                      activeTab === "overview"
                        ? "bg-blue-600 text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Ringkasan Proyek
                  </button>
                  <button
                    onClick={() => setActiveTab("units")}
                    className={`flex-1 py-1.5 px-2 rounded-md font-semibold transition ${
                      activeTab === "units"
                        ? "bg-blue-600 text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Status Unit Kaveling
                  </button>
                  <button
                    onClick={() => setActiveTab("materials")}
                    className={`flex-1 py-1.5 px-2 rounded-md font-semibold transition ${
                      activeTab === "materials"
                        ? "bg-blue-600 text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Kontrol BoQ Material
                  </button>
                </div>

                {/* Tab 1: Overview */}
                {activeTab === "overview" && (
                  <div className="space-y-3">
                    {/* Metrics Strip */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/60">
                        <span className="text-[10px] text-slate-400 block font-medium">Progres Fisik</span>
                        <div className="text-lg font-bold text-emerald-400 flex items-center gap-1">
                          <span>88.4%</span>
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <span className="text-[9px] text-slate-400">Target Rencana: 85.0%</span>
                      </div>

                      <div className="bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/60">
                        <span className="text-[10px] text-slate-400 block font-medium">Realisasi Biaya</span>
                        <div className="text-lg font-bold text-white">
                          Rp 12.8M
                        </div>
                        <span className="text-[9px] text-slate-400">RAB Total: Rp 14.5M</span>
                      </div>

                      <div className="bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/60">
                        <span className="text-[10px] text-slate-400 block font-medium">Status Serah Terima</span>
                        <div className="text-lg font-bold text-blue-400">
                          42 / 70
                        </div>
                        <span className="text-[9px] text-slate-400">Unit Siap BAST</span>
                      </div>
                    </div>

                    {/* S-Curve Chart Mockup */}
                    <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700/60">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                          <span className="text-xs font-semibold text-slate-200">
                            Kurva S Kumulatif (Minggu ke-18)
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-[10px]">
                          <span className="flex items-center gap-1 text-slate-400">
                            <span className="w-2.5 h-0.5 bg-slate-400 inline-block" /> Rencana
                          </span>
                          <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                            <span className="w-2.5 h-1 bg-emerald-400 inline-block rounded" /> Realisasi (+3.4%)
                          </span>
                        </div>
                      </div>

                      {/* SVG Visual Chart */}
                      <div className="h-28 w-full bg-slate-900/80 rounded-lg p-2 relative flex items-end">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                          {/* Grid Lines */}
                          <line x1="0" y1="20" x2="400" y2="20" stroke="#334155" strokeDasharray="2" strokeWidth="1" />
                          <line x1="0" y1="50" x2="400" y2="50" stroke="#334155" strokeDasharray="2" strokeWidth="1" />
                          <line x1="0" y1="80" x2="400" y2="80" stroke="#334155" strokeDasharray="2" strokeWidth="1" />
                          
                          {/* Target Plan Curve (Gray Dotted) */}
                          <path
                            d="M 0 95 Q 120 85, 200 55 T 320 28 T 400 10"
                            fill="none"
                            stroke="#64748b"
                            strokeWidth="2"
                            strokeDasharray="4 2"
                          />
                          {/* Actual Progress Curve (Emerald Solid) */}
                          <path
                            d="M 0 95 Q 120 80, 200 48 T 320 18"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="3"
                          />
                          {/* Current Point Indicator */}
                          <circle cx="320" cy="18" r="4" fill="#10b981" className="animate-ping opacity-75" />
                          <circle cx="320" cy="18" r="4" fill="#34d399" />
                        </svg>
                      </div>
                    </div>

                    {/* Live Recent Activity */}
                    <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-medium text-slate-200">
                            PO #2026-084 Disetujui PM: 400 Sak Semen Gresik
                          </p>
                          <p className="text-[9px] text-slate-400">Gudang Kaveling B12 • 10 menit lalu</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-blue-400 font-semibold px-2 py-0.5 rounded bg-blue-500/10">
                        Otomatis Sync
                      </span>
                    </div>
                  </div>
                )}

                {/* Tab 2: Status Unit */}
                {activeTab === "units" && (
                  <div className="space-y-2 py-1">
                    <div className="text-xs font-semibold text-slate-300 mb-1 flex justify-between items-center">
                      <span>Monitoring Kaveling Berdasarkan Tahapan:</span>
                      <span className="text-[10px] text-slate-400">Total 70 Unit Tipe 45/60</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 font-medium">Finishing & Serah Terima</span>
                          <span className="text-emerald-400 font-bold">42 Unit</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                          <div className="bg-emerald-500 h-full w-[60%]" />
                        </div>
                      </div>

                      <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 font-medium">Pemasangan Atap & Plafon</span>
                          <span className="text-blue-400 font-bold">18 Unit</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                          <div className="bg-blue-500 h-full w-[25%]" />
                        </div>
                      </div>

                      <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 font-medium">Struktur & Dinding</span>
                          <span className="text-amber-400 font-bold">8 Unit</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                          <div className="bg-amber-500 h-full w-[11%]" />
                        </div>
                      </div>

                      <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 font-medium">Pondasi & Sloof</span>
                          <span className="text-purple-400 font-bold">2 Unit</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                          <div className="bg-purple-500 h-full w-[4%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Materials Control */}
                {activeTab === "materials" && (
                  <div className="space-y-2 py-1 text-xs">
                    <div className="text-xs font-semibold text-slate-300 mb-1 flex justify-between items-center">
                      <span>Evaluasi Kuota Material vs Penggunaan Aktual:</span>
                      <span className="text-[10px] text-emerald-400">Varians Terkendali</span>
                    </div>

                    <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-200 font-medium">Semen Gresik 50kg</span>
                        <span className="text-slate-300 font-bold">2.450 / 3.000 Sak (81.6%)</span>
                      </div>
                      <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[81.6%]" />
                      </div>
                    </div>

                    <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-200 font-medium">Besi Beton Ulir 10mm</span>
                        <span className="text-slate-300 font-bold">1.820 / 2.200 Btg (82.7%)</span>
                      </div>
                      <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full w-[82.7%]" />
                      </div>
                    </div>

                    <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-200 font-medium">Bata Ringan Hebel (m³)</span>
                        <span className="text-slate-300 font-bold">340 / 400 m³ (85.0%)</span>
                      </div>
                      <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[85%]" />
                      </div>
                    </div>
                  </div>
                )}

              </div>
              
              {/* Floating Badge Accent */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white text-slate-800 p-3 rounded-xl shadow-xl border border-slate-200 items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Zero Data Loss</div>
                  <div className="text-[10px] text-slate-500">Sinkronisasi Lapangan & Head Office</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
