import {
  PageContainer,
  Section,
  SectionLabel,
  DisplayHeading,
  MotionWrapper,
  Button,
} from '@/components';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { TransitionBridge } from '@/components/TransitionBridge/TransitionBridge';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Transition: Hero → Work ── */}
      <TransitionBridge />

      {/* ── Selected Work ── */}
      <Section bordered id="work">
        <PageContainer>
          <MotionWrapper>
            <SectionLabel>Selected Work</SectionLabel>
          </MotionWrapper>

          <div className={styles.workGrid}>
            {projects.map((project, i) => (
              <MotionWrapper key={project.id} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <article className={styles.workItem}>
                  <div className={styles.workImagePlaceholder}>
                    <span className={styles.workImageLabel}>{project.id}</span>
                  </div>
                  <div className={styles.workInfo}>
                    <span className={styles.workIndex}>{project.id}</span>
                    <h3 className={styles.workTitle}>{project.title}</h3>
                    <p className={styles.workDesc}>{project.description}</p>
                    <span className={styles.workCategory}>
                      {project.category}
                    </span>
                  </div>
                </article>
              </MotionWrapper>
            ))}
          </div>

          <MotionWrapper delay={3}>
            <div className={styles.workCta}>
              <Button as="a" href="/work" arrow>
                View All Work
              </Button>
            </div>
          </MotionWrapper>
        </PageContainer>
      </Section>

      {/* ── Brief About ── */}
      <Section bordered id="about">
        <PageContainer variant="narrow">
          <MotionWrapper>
            <SectionLabel>About</SectionLabel>
          </MotionWrapper>

          <MotionWrapper delay={1}>
            <DisplayHeading as="h2" size="sm">
              I build software across AI, web, mobile, and automation.
            </DisplayHeading>
          </MotionWrapper>

          <MotionWrapper delay={2}>
            <p className={styles.aboutText}>
              Curious, practical, and action-oriented. I learn by building —
              shipping real products across the full stack, from intelligent
              systems to polished interfaces.
            </p>
          </MotionWrapper>

          <MotionWrapper delay={3}>
            <Button as="a" href="/about" variant="ghost" arrow>
              More About Me
            </Button>
          </MotionWrapper>
        </PageContainer>
      </Section>
    </>
  );
}
