"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Building2, User, Mail, Phone, Calendar, ArrowRight, ShieldCheck, Loader2 } from "lucide-react";
import { trackEvent } from "./AnalyticsTracker";
import { getWhatsAppLink } from "../constants/siteConfig";

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export default function RequestDemoModal({ isOpen, onClose, source = "general" }: RequestDemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "Project Manager",
    email: "",
    phone: "",
    unitCount: "20 - 50 Unit",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Nama lengkap wajib diisi";
    if (!formData.company.trim()) newErrors.company = "Nama perusahaan/developer wajib diisi";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email valid wajib diisi";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = "Nomor WhatsApp/telepon valid wajib diisi";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    trackEvent("event_form_demo_submit", {
      source,
      role: formData.role,
      unitCount: formData.unitCount,
      company: formData.company,
    });

    // Simulate instant responsive submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      company: "",
      role: "Project Manager",
      email: "",
      phone: "",
      unitCount: "20 - 50 Unit",
      notes: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all duration-300 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-5 text-white flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
              CPC
            </div>
            <div>
              <h3 id="modal-title" className="text-lg font-bold tracking-tight">
                Jadwalkan Live Demo
              </h3>
              <p className="text-xs text-slate-300">
                Sesi konsultasi & demo interaktif 30 menit disesuaikan kebutuhan proyek Anda
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">
                Permohonan Demo Terkirim!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                Terima kasih, <strong className="text-slate-900">{formData.name}</strong>. Tim konsultan solusi CPC akan menghubungi Anda via WhatsApp/Email (<span className="text-blue-600">{formData.email}</span>) dalam waktu maksimal 1x24 jam kerja untuk mengonfirmasi jadwal demo.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-600 mb-6 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Perusahaan:</span>
                  <span className="font-semibold text-slate-900">{formData.company}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Peran:</span>
                  <span className="font-semibold text-slate-900">{formData.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Skala Proyek:</span>
                  <span className="font-semibold text-slate-900">{formData.unitCount}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 bg-slate-900 text-white font-medium text-sm rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Selesai
                </button>
                <a
                  href={getWhatsAppLink(`Halo Tim CPC, saya ${formData.name} dari ${formData.company} telah mengajukan Request Demo.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-emerald-600 text-white font-medium text-sm rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Hubungi via WhatsApp Sekarang
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border ${
                        errors.name ? "border-red-500 bg-red-50/50" : "border-slate-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Perusahaan / Developer <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. PT Graha Properti Utama"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border ${
                        errors.company ? "border-red-500 bg-red-50/50" : "border-slate-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Role Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Jabatan / Peran di Perusahaan
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="Developer / Owner">Developer / Owner Perumahan</option>
                    <option value="Kontraktor Utama">Kontraktor Utama</option>
                    <option value="Project Manager">Project Manager (PM)</option>
                    <option value="Quantity Surveyor / Estimator">Quantity Surveyor / Estimator</option>
                    <option value="Direksi / Management">Direksi / C-Level Management</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                {/* Scale of Projects */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Estimasi Unit / Proyek Aktif
                  </label>
                  <select
                    value={formData.unitCount}
                    onChange={(e) => setFormData({ ...formData, unitCount: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="1 - 20 Unit">&lt; 20 Unit Rumah</option>
                    <option value="20 - 50 Unit">20 – 50 Unit Rumah</option>
                    <option value="50 - 200 Unit">50 – 200 Unit Rumah</option>
                    <option value="> 200 Unit">&gt; 200 Unit / Multi-Cluster</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Kerja / Perusahaan <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="email"
                      placeholder="budi@grahaproperti.co.id"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border ${
                        errors.email ? "border-red-500 bg-red-50/50" : "border-slate-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nomor WhatsApp / Telp <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="0812-3456-7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border ${
                        errors.phone ? "border-red-500 bg-red-50/50" : "border-slate-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kebutuhan Khusus / Pertanyaan Tambahan (Opsional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Misal: Ingin fokus pada modul kontrol material BoQ dan integrasi laporan kurva S..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Data perusahaan Anda 100% aman dan hanya digunakan untuk penjadwalan demo.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition duration-150 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 disabled:opacity-75 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Memproses Permohonan...</span>
                  </>
                ) : (
                  <>
                    <span>Kirim & Jadwalkan Demo Sekarang</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
