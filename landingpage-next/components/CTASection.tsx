"use client";

import React from "react";
import { ArrowRight, PhoneCall, Calendar, CheckCircle2, ShieldCheck, HardHat } from "lucide-react";
import { trackEvent } from "./AnalyticsTracker";
import { getWhatsAppLink } from "../constants/siteConfig";

interface CTASectionProps {
  onRequestDemo: () => void;
}

export default function CTASection({ onRequestDemo }: CTASectionProps) {
  const handleCTADemoClick = () => {
    trackEvent("event_cta_bottom_demo_click");
    onRequestDemo();
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-6">
          <HardHat className="w-4 h-4 text-amber-400" />
          <span>Transformasi Digital Proyek Anda Dimulai Hari Ini</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
          Siap Mengelola Proyek Konstruksi dengan Lebih Baik?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tingkatkan efisiensi kerja tim lapangan, kendalikan kuota material, dan pantau kurva S proyek perumahan secara real-time.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleCTADemoClick}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Request Demo Gratis</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={getWhatsAppLink("Halo Tim CPC, saya tertarik untuk konsultasi sistem manajemen konstruksi perumahan.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("event_contact_whatsapp_click", { source: "cta_section" })}
            className="w-full sm:w-auto px-7 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-base rounded-xl transition duration-150 flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-5 h-5 text-emerald-400" />
            <span>Konsultasi via WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges under CTA */}
        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Sesi Demo Interaktif 30 Menit</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Simulasi dengan Data Kaveling Nyata</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Tanpa Komitmen Kontrak di Awal</span>
          </div>
        </div>

      </div>
    </section>
  );
}
