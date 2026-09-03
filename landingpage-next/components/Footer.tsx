"use client";

import React from "react";
import { HardHat, Mail, Phone, MapPin, ArrowUpRight, Shield } from "lucide-react";
import { trackEvent } from "./AnalyticsTracker";
import { SITE_CONFIG, getWhatsAppLink } from "../constants/siteConfig";

interface FooterProps {
  onRequestDemo: () => void;
}

export default function Footer({ onRequestDemo }: FooterProps) {
  return (
    <footer id="kontak" className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 content-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-slate-800 flex items-center justify-center text-amber-400 shadow-md">
                <HardHat className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight leading-none">
                  CPC<span className="text-blue-500">.</span>
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  {SITE_CONFIG.brandTagline}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pr-4">
              Sistem Manajemen Konstruksi Perumahan (CPC) terintegrasi untuk developer, kontraktor, dan project manager modern di Indonesia.
            </p>

            <div className="pt-2 flex items-center gap-2 text-slate-500 text-[11px]">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>Enterprise Grade Security & Data Protection</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#masalah" className="hover:text-white transition">
                  Tantangan Lapangan
                </a>
              </li>
              <li>
                <a href="#solusi" className="hover:text-white transition">
                  Solusi Terpadu
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-white transition">
                  6 Pilar Fitur
                </a>
              </li>
              <li>
                <a href="#cara-kerja" className="hover:text-white transition">
                  Alur Sistem
                </a>
              </li>
              <li>
                <a href="#manfaat" className="hover:text-white transition">
                  Manfaat Bisnis
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Modules */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Modul Sistem
            </h4>
            <ul className="space-y-2">
              <li>Project Management & WBS</li>
              <li>Material BoQ & Warehouse Control</li>
              <li>Digital Procurement & PO Flow</li>
              <li>Dynamic S-Curve & Daily Log</li>
              <li>Budget Variance & Cash Outflow</li>
              <li>Executive BI & Multi-Project Report</li>
            </ul>
          </div>

          {/* Col 4: Office & Direct Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Kontak Kantor
            </h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.companyAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.companyEmail}`} className="hover:text-white transition">
                  {SITE_CONFIG.companyEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition text-emerald-400 font-medium"
                >
                  {SITE_CONFIG.whatsappDisplay} (WhatsApp)
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  trackEvent("event_navbar_demo_click", { source: "footer" });
                  onRequestDemo();
                }}
                className="w-full py-2.5 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Jadwalkan Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 CPC Systems Indonesia. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Kebijakan Privasi</span>
            <span className="hover:text-slate-400 cursor-pointer">Syarat & Ketentuan Layanan</span>
            <span className="hover:text-slate-400 cursor-pointer">Keamanan Cloud</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
