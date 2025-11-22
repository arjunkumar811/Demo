import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntegrationsNew from "@/components/IntegrationsNew";
import Features from "@/components/Features";
import WorkflowVisual from "@/components/WorkflowVisual";
import Team from "@/components/Team";
import Analytics from "@/components/Analytics";
import Timeline from "@/components/Timeline";
import Organised from "@/components/Organised";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <main className="flex min-h-screen flex-col justify-between bg-[#050505] text-white w-full overflow-x-hidden relative">
        <Header />
        <Hero />
        <Solution />
        <IntegrationsNew />
        <Features />
        <WorkflowVisual />
        <Team />
        <Analytics />
        <Timeline />
        <Organised />
        <PainPoints />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
