import type { Metadata } from 'next';
import {
  PageContainer,
  Section,
  SectionLabel,
  DisplayHeading,
  MotionWrapper,
} from '@/components';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Tushar Nailwal — AI + Full-Stack Engineer, product builder.',
};

export default function AboutPage() {
  return (
    <Section variant="hero">
      <PageContainer>
        <MotionWrapper variant="fadeIn">
          <SectionLabel>About</SectionLabel>
        </MotionWrapper>
        <MotionWrapper variant="fadeUp" delay={1}>
          <DisplayHeading as="h1" size="lg">
            ABOUT
          </DisplayHeading>
        </MotionWrapper>
        <MotionWrapper variant="fadeUp" delay={2}>
          <p style={{ color: 'var(--color-warm-gray)', fontSize: 'var(--text-lg)', marginTop: 'var(--space-xl)', maxWidth: '640px', lineHeight: 'var(--leading-relaxed)' }}>
            AI + Full-Stack Engineer. I build software across AI applications, web, mobile, and automation. Curious, creative, and practical — I learn by building.
          </p>
        </MotionWrapper>
      </PageContainer>
    </Section>
  );
}
