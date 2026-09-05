import {
  PageContainer,
  Section,
  SectionLabel,
  DisplayHeading,
  MotionWrapper,
  Button,
} from '@/components';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <Section variant="hero">
        <PageContainer>
          <div className={styles.hero}>
            <MotionWrapper variant="fadeIn">
              <SectionLabel>Portfolio — 2024</SectionLabel>
            </MotionWrapper>

            <MotionWrapper variant="fadeUp" delay={1}>
              <DisplayHeading as="h1" size="hero" edgeBleed>
                TUSHAR
                <br />
                NAILWAL
              </DisplayHeading>
            </MotionWrapper>

            <MotionWrapper variant="fadeUp" delay={2}>
              <p className={styles.heroSub}>
                AI + Full-Stack Engineer.
                <br />
                I build things.
              </p>
            </MotionWrapper>

            <MotionWrapper variant="fadeUp" delay={3}>
              <div className={styles.heroMeta}>
                <span className={styles.heroMetaItem}>AI Applications</span>
                <span className={styles.heroMetaDivider}>/</span>
                <span className={styles.heroMetaItem}>Full-Stack</span>
                <span className={styles.heroMetaDivider}>/</span>
                <span className={styles.heroMetaItem}>Mobile</span>
                <span className={styles.heroMetaDivider}>/</span>
                <span className={styles.heroMetaItem}>Automation</span>
              </div>
            </MotionWrapper>
          </div>
        </PageContainer>
      </Section>

      {/* ── Selected Work (Preview) ── */}
      <Section bordered>
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
      <Section bordered>
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
