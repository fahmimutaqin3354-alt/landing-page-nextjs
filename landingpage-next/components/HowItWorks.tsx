"use client";

import React, { useState } from "react";
import {
  ClipboardList,
  Truck,
  Hammer,
  Camera,
  Activity,
  Award,
  ChevronRight,
  Workflow,
} from "lucide-react";
import { trackEvent } from "./AnalyticsTracker";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Planning & RAB",
      description:
        "Input master tipe rumah, jadwal master tahapan kerja (WBS), serta pagu anggaran RAB & volume BoQ.",
    },
    {
      number: "02",
      icon: Truck,
      title: "Procurement",
      description:
        "Pengajuan Material Request dan penerbitan Purchase Order otomatis dengan validasi kuota anggaran.",
    },
    {
      number: "03",
      icon: Hammer,
      title: "Construction",
      description:
        "Pelaksanaan fisik di lapangan oleh kontraktor/mandor sesuai target tahapan unit kaveling.",
    },
    {
      number: "04",
      icon: Camera,
      title: "Progress Update",
      description:
        "Input ceklis harian lapangan, persentase bobot, dan upload foto dokumentasi progres fisik bergeotag.",
    },
    {
      number: "05",
      icon: Activity,
      title: "Auto Monitoring",
      description:
        "Sistem secara otomatis menghitung kurva S realisasi vs rencana dan mendeteksi deviasi waktu.",
    },
    {
      number: "06",
      icon: Award,
      title: "Executive Report",
      description:
        "Laporan mingguan & bulanan terbit otomatis, siap diekspor ke PDF/Excel untuk direksi dan owner.",
    },
  ];

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    trackEvent("event_how_it_works_step_click", { stepIndex: index + 1, stepTitle: steps[index].title });
  };

  return (
    <section id="cara-kerja" className="py-20 bg-white relative border-b border-slate-200/80 content-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Alur Sistem Terstruktur</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bagaimana Sistem CPC Bekerja
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Alur sekuensial yang rapi dari inisiasi proyek hingga penerbitan laporan konsolidasi akhir.
          </p>
        </div>

        {/* Desktop Stepper View (>= 1024px) */}
        <div className="hidden lg:grid grid-cols-6 gap-4 relative">
          {/* Connector Line Behind */}
          <div className="absolute top-1/4 left-8 right-8 h-0.5 bg-slate-200 -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => handleStepClick(idx)}
                className={`relative z-10 p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-xl -translate-y-2"
                    : "bg-white text-slate-900 border-slate-200 hover:border-blue-400 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-colors ${
                        isSelected ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isSelected ? "bg-slate-800 text-blue-300" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    className={`text-base font-bold mb-2 ${
                      isSelected ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed ${
                      isSelected ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100/20 text-[11px] font-semibold text-blue-400 flex items-center gap-1">
                  <span>Tahap {idx + 1}</span>
                  {idx < steps.length - 1 && <ChevronRight className="w-3.5 h-3.5" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Timeline View (< 1024px) */}
        <div className="lg:hidden relative border-l-2 border-blue-500/40 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative group">
                {/* Step Circle Indicator */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                  {step.number}
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
