import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import FeatureSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import BenefitsSection from "../components/BenefitsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { DemoModalProvider } from "../components/DemoModalContext";

export default function Home() {
  return (
    <DemoModalProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
        {/* Header & Sticky Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Problem Section (Server Component) */}
          <ProblemSection />

          {/* 3. Solution Section */}
          <SolutionSection />

          {/* 4. Core Features Section */}
          <FeatureSection />

          {/* 5. How It Works Workflow Section */}
          <HowItWorks />

          {/* 6. Measurable Business Benefits Section (Server Component) */}
          <BenefitsSection />

          {/* 7. Conversion CTA Banner Section */}
          <CTASection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </DemoModalProvider>
  );
}
