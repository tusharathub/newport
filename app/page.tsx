import { HeroSection } from '@/components/HeroSection/HeroSection';
import { WorkSection } from '@/components/WorkSection/WorkSection';
import { AboutSection } from '@/components/AboutSection/AboutSection';
import { ContactSection } from '@/components/ContactSection/ContactSection';
import { getProjectBySlug } from '@/data/projects';
import { Project } from '@/types/project';

export default function Home() {
  const featuredProjects = [
    getProjectBySlug('rag-application'),
    getProjectBySlug('water-tracking-app'),
    getProjectBySlug('routine-melt'),
    getProjectBySlug('python-web-scraper'),
  ].filter(Boolean) as Project[];

  return (
    <>
      {/* ── Main content (scrolls over sticky contact footer) ── */}
      <div className="relative z-10 bg-[#080909]">
        <HeroSection />
        <WorkSection projects={featuredProjects} showViewAll={false} />
        <AboutSection />
      </div>

      {/* ── Sticky Contact Footer (reveals smoothly beneath About section) ── */}
      <div className="sticky bottom-0 z-0 w-full">
        <ContactSection />
      </div>
    </>
  );
}

