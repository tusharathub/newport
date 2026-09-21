import { HeroSection } from '@/components/HeroSection/HeroSection';
import { TransitionBridge } from '@/components/TransitionBridge/TransitionBridge';
import { WorkSection } from '@/components/WorkSection/WorkSection';
import { AboutSection } from '@/components/AboutSection/AboutSection';
import { ContactSection } from '@/components/ContactSection/ContactSection';
import { getProjectBySlug } from '@/data/projects';
import { Project } from '@/types/project';

export default function Home() {
  const featuredProjects = [
    getProjectBySlug('rag-application'),
    getProjectBySlug('python-web-scraper'),
    getProjectBySlug('notablecv'),
  ].filter(Boolean) as Project[];

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Transition: Hero → Work ── */}
      <TransitionBridge />

      {/* ── Selected Work ── */}
      <WorkSection projects={featuredProjects} />

      {/* ── About ── */}
      <AboutSection />

      {/* ── Contact ── */}
      <ContactSection />
    </>
  );
}

