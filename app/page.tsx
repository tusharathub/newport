import { HeroSection } from '@/components/HeroSection/HeroSection';
import { TransitionBridge } from '@/components/TransitionBridge/TransitionBridge';
import { WorkSection } from '@/components/WorkSection/WorkSection';
import { LabSection } from '@/components/Lab/LabSection';
import { ThoughtsSection } from '@/components/Thoughts/ThoughtsSection';
import { AboutSection } from '@/components/AboutSection/AboutSection';
import { ContactSection } from '@/components/ContactSection/ContactSection';
import { projects } from '@/data/projects';
import { labItems } from '@/data/lab';
import { getPublishedArticles } from '@/data/thoughts';

export default function Home() {
  const publishedArticles = getPublishedArticles();

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Transition: Hero → Work ── */}
      <TransitionBridge />

      {/* ── Selected Work ── */}
      <WorkSection projects={projects} />

      {/* ── The Lab / Experiments ── */}
      <LabSection items={labItems} />

      {/* ── Thoughts / Articles ── */}
      <ThoughtsSection articles={publishedArticles} />

      {/* ── About ── */}
      <AboutSection />

      {/* ── Contact ── */}
      <ContactSection />
    </>
  );
}
