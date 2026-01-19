"use client";

import { FloatingNav } from "@/components/navigation/FloatingNav";
import { LandingScene } from "@/components/scenes/LandingScene";
import { ManifestoScene } from "@/components/scenes/ManifestoScene";
import { CapabilitiesScene } from "@/components/scenes/CapabilitiesScene";
import { WorkScene } from "@/components/scenes/WorkScene";
import { ProcessScene } from "@/components/scenes/ProcessScene";
import { CTAScene } from "@/components/scenes/CTAScene";

export default function Home() {
  return (
    <main className="relative">
      <FloatingNav />
      <LandingScene />
      <ManifestoScene />
      <CapabilitiesScene />
      <WorkScene />
      <ProcessScene />
      <CTAScene />
    </main>
  );
}
