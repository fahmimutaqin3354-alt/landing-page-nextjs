"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import FeatureSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import BenefitsSection from "../components/BenefitsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import RequestDemoModal from "../components/RequestDemoModal";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSource, setDemoSource] = useState("general");

  const handleOpenDemo = (source = "general") => {
    setDemoSource(source);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Header & Sticky Navbar */}
      <Navbar onRequestDemo={() => handleOpenDemo("navbar")} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onRequestDemo={() => handleOpenDemo("hero")} />

        {/* 2. Problem Section */}
        <ProblemSection />

        {/* 3. Solution Section */}
        <SolutionSection onRequestDemo={() => handleOpenDemo("solution")} />

        {/* 4. Core Features Section */}
        <FeatureSection onRequestDemo={() => handleOpenDemo("features")} />

        {/* 5. How It Works Workflow Section */}
        <HowItWorks />

        {/* 6. Measurable Business Benefits Section */}
        <BenefitsSection />

        {/* 7. Conversion CTA Banner Section */}
        <CTASection onRequestDemo={() => handleOpenDemo("cta_section")} />
      </main>

      {/* Footer */}
      <Footer onRequestDemo={() => handleOpenDemo("footer")} />

      {/* Global Interactive Request Demo Modal */}
      <RequestDemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
        source={demoSource}
      />
    </div>
  );
}
