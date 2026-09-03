import React from "react";
import {
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  DollarSign,
  FileCheck,
  Building,
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Building,
      title: "Kontrol Proyek Lebih Mudah",
      description:
        "Visibilitas penuh atas seluruh kaveling, klaster, dan kontraktor dari satu layar kerja terpadu tanpa perlu menelusuri puluhan grup chat.",
      metric: "100%",
      metricLabel: "Visibilitas Multi-Unit",
    },
    {
      icon: Zap,
      title: "Monitoring 3x Lebih Cepat",
      description:
        "Kalkulasi Kurva S dan persentase bobot otomatis memangkas waktu tunggu pembuatan laporan dari berhari-hari menjadi hitungan detik.",
      metric: "3x",
      metricLabel: "Kecepatan Evaluasi Progres",
    },
    {
      icon: ShieldCheck,
      title: "Penggunaan Material Lebih Terkontrol",
      description:
        "Validasi kuota material terhadap BoQ mencegah pembelian berlebih, pemborosan stok di lapangan, dan kehilangan inventaris.",
      metric: "15-20%",
      metricLabel: "Efisiensi Biaya Material",
    },
    {
      icon: DollarSign,
      title: "Biaya Lebih Transparan & Aman",
      description:
        "Peringatan dini varians biaya mencegah lonjakan tak terduga (*cost overrun*) sehingga target margin laba developer tetap terjaga.",
      metric: "Real-Time",
      metricLabel: "Deteksi Deviasi Anggaran",
    },
    {
      icon: FileCheck,
      title: "Laporan Lebih Terstruktur & Kredibel",
      description:
        "Format laporan terstandarisasi siap pakai untuk rapat direksi, audit internal, pengajuan termin bank, dan pelaporan owner.",
      metric: "1-Klik",
      metricLabel: "Ekspor PDF / Excel Resmi",
    },
  ];

  return (
    <section id="manfaat" className="py-20 bg-slate-50 relative border-b border-slate-200/80 content-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Dampak & Nilai Bisnis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dampak Nyata bagi Developer & Kontraktor
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Efisiensi operasional bukan sekadar janji, melainkan hasil terukur dari standarisasi sistem digital.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-emerald-400 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-extrabold text-slate-900 font-mono block">
                        {benefit.metric}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                        {benefit.metricLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Standarisasi Operasional Terjamin</span>
                </div>
              </div>
            );
          })}

          {/* Business Assurance Card */}
          <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 p-7 rounded-2xl text-white flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Dirancang untuk Skala Pertumbuhan Bisnis Anda
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Mulai dari 1 proyek klaster 20 unit hingga multi-kawasan ratusan kaveling dengan performa stabil dan keamanan data level enterprise.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-blue-600/50 flex items-center justify-between text-xs">
              <span className="text-blue-200">Dukungan Implementasi Penuh</span>
              <span className="font-bold text-amber-300">100% Onboarding</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
