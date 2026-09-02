"use client";

import React from "react";
import {
  FileSpreadsheet,
  AlertOctagon,
  ClockAlert,
  PackageX,
  TrendingDown,
  FileClock,
  ArrowDownRight,
} from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: FileSpreadsheet,
      title: "Data Proyek Tersebar",
      description:
        "Informasi progres tersebar di pesan chat grup, puluhan file spreadsheet lokal, dan catatan kertas yang sering hilang atau berbeda versi antar tim.",
      tag: "Fragmented Data",
    },
    {
      icon: ClockAlert,
      title: "Progres Sulit Dipantau",
      description:
        "Keterlambatan di lapangan baru disadari saat mendekati deadline serah terima unit kaveling. Tidak ada visibilitas kurva S real-time.",
      tag: "Opaque Progress",
    },
    {
      icon: PackageX,
      title: "Material Sulit Dikontrol",
      description:
        "Penggunaan semen, besi, dan bata sering melebihi kuota BoQ/RAB tanpa ada batas peringatan otomatis, memicu kebocoran biaya tak terlacak.",
      tag: "Material Leakage",
    },
    {
      icon: TrendingDown,
      title: "Biaya Sulit Dimonitor",
      description:
        "Pembengkakan anggaran (cost overrun) baru disadari setelah proyek rampung, menggerus proyeksi margin keuntungan developer.",
      tag: "Cost Overrun Risk",
    },
    {
      icon: FileClock,
      title: "Laporan Masih Manual & Lambat",
      description:
        "Staf admin dan project manager menghabiskan waktu berjam-jam setiap minggu hanya untuk merekap laporan fisik yang rentan human-error.",
      tag: "High Manual Effort",
    },
  ];

  return (
    <section id="masalah" className="py-20 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold mb-3">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>Tantangan Operasional Lapangan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mengapa Proyek Perumahan Sering Mengalami Keterlambatan & Biaya Membengkak?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Tanpa sistem manajemen konstruksi terpadu, komunikasi antara kantor pusat, kontraktor, dan pengawas lapangan menjadi lambat dan penuh celah inefisiensi.
          </p>
        </div>

        {/* 5 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 hover:border-red-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-red-600/80 gap-1">
                  <span>Dampak: Inefisiensi Biaya & Waktu</span>
                  <ArrowDownRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}

          {/* Callout Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-7 rounded-2xl text-white flex flex-col justify-between shadow-md">
            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-bold mb-3 border border-blue-500/30">
                Solusi Dibutuhkan
              </div>
              <h3 className="text-xl font-bold leading-tight mb-2">
                Sudah Saatnya Beralih ke Ekosistem Terpadu
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                CPC menyatukan kontrol operasional lapangan dan kantor direksi ke dalam satu platform yang terotomatisasi secara instan.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="#solusi"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 group"
              >
                <span>Pelajari Solusi CPC</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
