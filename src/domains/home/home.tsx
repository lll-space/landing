"use client";

import Hero from "@/domains/home/components/Hero";
import HowItWorks from "@/domains/home/components/HowItWorks";
import Tokenomics from "@/domains/home/components/Tokenomics";
import DAOIntroduction from "@/domains/home/components/DAOIntroduction";
import Sponsorship from "@/domains/home/components/Sponsorship";
import RoadmapSection from "@/domains/home/components/RoadmapSection";
import LandingFAQ from "@/domains/home/components/LandingFAQ";
import Community from "@/domains/home/components/Community";

const Index = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
        <Hero />
        <HowItWorks />
        {/* <Pools /> */}
        <Tokenomics />
        <DAOIntroduction />
        <Sponsorship />
        <RoadmapSection />
        <LandingFAQ />
        <Community />
    </main>
  );
};

export default Index;
