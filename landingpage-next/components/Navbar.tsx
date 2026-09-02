"use client";

import React, { useState, useEffect } from "react";
import { HardHat, Menu, X, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";
import { trackEvent } from "./AnalyticsTracker";
import { getWhatsAppLink } from "../constants/siteConfig";

interface NavbarProps {
  onRequestDemo: () => void;
}

export default function Navbar({ onRequestDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tantangan", href: "#masalah" },
    { name: "Solusi", href: "#solusi" },
    { name: "Fitur Utama", href: "#fitur" },
    { name: "Cara Kerja", href: "#cara-kerja" },
    { name: "Manfaat", href: "#manfaat" },
    { name: "Kontak", href: "#kontak" },
  ];

  const handleNavClick = (name: string) => {
    setIsMobileMenuOpen(false);
  };

  const handleDemoTrigger = () => {
    trackEvent("event_navbar_demo_click");
    onRequestDemo();
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            aria-label="CPC - Sistem Manajemen Konstruksi Perumahan"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-slate-900 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform duration-200">
              <HardHat className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                  CPC<span className="text-blue-600">.</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-blue-700 rounded border border-blue-200">
                  SaaS
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 tracking-tight">
                Konstruksi Perumahan
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("event_contact_whatsapp_click", { source: "navbar" })}
              className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors flex items-center gap-1.5 border border-slate-200"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>Tanya CS</span>
            </a>
            <button
              type="button"
              onClick={handleDemoTrigger}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition duration-150 flex items-center gap-2 shadow-sm shadow-blue-600/30 active:scale-95 cursor-pointer"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={handleDemoTrigger}
              className="px-3 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg shadow-sm"
            >
              Demo
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            <button
              type="button"
              onClick={handleDemoTrigger}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <span>Request Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("event_contact_whatsapp_click", { source: "navbar_mobile" })}
              className="w-full py-2.5 bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>Hubungi Tim Konsultan WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
