import {
  Section,
  SectionLabel,
  DisplayHeading,
} from '@/components';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { TransitionBridge } from '@/components/TransitionBridge/TransitionBridge';
import { WorkSection } from '@/components/WorkSection/WorkSection';
import { LabSection } from '@/components/Lab/LabSection';
import { ThoughtsSection } from '@/components/Thoughts/ThoughtsSection';
import { projects } from '@/data/projects';
import { labItems } from '@/data/lab';
import { getPublishedArticles } from '@/data/thoughts';
import styles from './page.module.css';

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
      <Section id="about">
        <SectionLabel index="02">ABOUT</SectionLabel>
        <DisplayHeading as="h2">
          BUILDING AT THE INTERSECTION OF AI & SYSTEM DESIGN.
        </DisplayHeading>
        <p className={styles.aboutText}>
          I&apos;m Tushar Nailwal — a software engineer focused on building practical,
          high-performance applications across AI, web, and mobile platforms.
          I value clean architecture, rapid iteration, and software that solves
          real problems.
        </p>
      </Section>
    </>
  );
}
