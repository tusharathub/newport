import { HeroSection } from '@/components/HeroSection/HeroSection';
import { TransitionBridge } from '@/components/TransitionBridge/TransitionBridge';
import { WorkSection } from '@/components/WorkSection/WorkSection';
import { AboutSection } from '@/components/AboutSection/AboutSection';
import { ContactSection } from '@/components/ContactSection/ContactSection';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Transition: Hero → Work ── */}
      <TransitionBridge />

      {/* ── Selected Work ── */}
      <WorkSection projects={projects} />

      {/* ── About ── */}
      <AboutSection />

      {/* ── Contact ── */}
      <ContactSection />
    </>
  );
}

