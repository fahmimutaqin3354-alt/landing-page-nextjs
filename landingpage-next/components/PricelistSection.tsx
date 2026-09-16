"use client";

import React from "react";
import { Check, Sparkles, Tag, ArrowRight, ShieldCheck, Zap, Building2 } from "lucide-react";
import pricingData from "../data/harga.json";
import { useDemoModal } from "./DemoModalContext";
import { getWhatsAppLink } from "../constants/siteConfig";
import { trackEvent } from "./AnalyticsTracker";

interface FeatureItem {
  title: string;
  detail?: string;
}

interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period?: string;
  description: string;
  highlighted?: boolean;
  buttonText: string;
  action: "demo" | "whatsapp" | string;
  whatsappMessage?: string;
  features: (string | FeatureItem)[];
}

export default function PricelistSection() {
  const { openDemoModal } = useDemoModal();
  const { sectionHeader, plans } = pricingData as {
    sectionHeader: {
      badge: string;
      title: string;
      subtitle: string;
    };
    plans: PricingPlan[];
  };

  const handleAction = (plan: PricingPlan) => {
    trackEvent("event_pricing_card_click", { planId: plan.id, planName: plan.name });

    if (plan.action === "demo") {
      openDemoModal(`pricing_${plan.id}`);
    } else if (plan.action === "whatsapp") {
      const url = getWhatsAppLink(plan.whatsappMessage);
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      openDemoModal(`pricing_${plan.id}`);
    }
  };

  const parseFeature = (item: string | FeatureItem): { title: string; detail?: string } => {
    if (typeof item === "string") {
      return { title: item };
    }
    return item;
  };

  return (
    <section id="harga" className="py-16 bg-white relative border-b border-slate-200/80 content-auto overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span>{sectionHeader.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {sectionHeader.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {sectionHeader.subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {plans.map((plan) => {
            const isHighlight = Boolean(plan.highlighted);

            return (
              <div
                key={plan.id}
                className={`group relative flex flex-col justify-between rounded-2xl transition-all duration-300 ease-out cursor-pointer ${
                  isHighlight
                    ? "bg-gradient-to-b from-white to-blue-50/30 border-2 border-blue-600 shadow-lg shadow-blue-500/10 lg:-translate-y-1.5 hover:lg:-translate-y-3.5 hover:-translate-y-2.5 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-700 p-5 z-10"
                    : plan.id === "custom"
                    ? "bg-white border border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2 p-5"
                    : "bg-white border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 p-5"
                }`}
              >
                {/* Top Glowing Gradient Accent Line on Hover */}
                <div
                  className={`absolute top-0 inset-x-8 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                    isHighlight
                      ? "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                      : plan.id === "custom"
                      ? "bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                      : "bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
                  }`}
                />

                {/* Popular Badge */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold py-0.5 px-3.5 rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wider group-hover:scale-105 transition-transform duration-200">
                    <Sparkles className="w-3 h-3 group-hover:rotate-12 transition-transform duration-200" />
                    <span>{plan.badge || "Paling Populer"}</span>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        {plan.description}
                      </p>
                    </div>
                    {!isHighlight && plan.badge && (
                      <span className="ml-2 px-2 py-0.5 text-[10px] font-semibold bg-slate-100 text-slate-600 rounded-full border border-slate-200 whitespace-nowrap group-hover:border-slate-300 transition-colors duration-200">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price Block */}
                  <div className="my-3 pb-3 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-slate-900 tracking-tight font-mono">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-xs font-medium text-slate-500">
                          {plan.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List — title only */}
                  <ul className="space-y-2 mb-5 text-sm">
                    {plan.features.map((rawFeature, idx) => {
                      const { title } = parseFeature(rawFeature);
                      return (
                        <li key={idx} className="flex items-center gap-2">
                          <div
                            className={`rounded-full p-0.5 shrink-0 transition-all duration-200 ${
                              isHighlight
                                ? "bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white"
                                : plan.id === "custom"
                                ? "bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white"
                                : "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white"
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="text-slate-700 text-xs leading-snug">{title}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Card CTA */}
                <button
                  type="button"
                  onClick={() => handleAction(plan)}
                  className={`w-full py-2.5 px-5 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    isHighlight
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/30 hover:shadow-blue-600/40 active:scale-[0.98]"
                      : plan.id === "custom"
                      ? "bg-slate-900 hover:bg-indigo-600 text-white active:scale-[0.98]"
                      : "bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-800 border border-slate-200 hover:border-blue-200 active:scale-[0.98]"
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-5 text-xs text-slate-500 text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Garansi pendampingan setup & onboarding data</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full" />
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>Tanpa biaya instalasi tersembunyi</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full" />
          <div className="flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Upgrade paket kapan saja seiring pertumbuhan proyek</span>
          </div>
        </div>
      </div>
    </section>
  );
}
