import type { Metadata } from 'next';
import {
  PageContainer,
  Section,
  SectionLabel,
  DisplayHeading,
  MotionWrapper,
} from '@/components';

export const metadata: Metadata = {
  title: 'Lab',
  description: 'Experimental projects and explorations by Tushar Nailwal.',
};

export default function LabPage() {
  return (
    <Section variant="hero">
      <PageContainer>
        <MotionWrapper variant="fadeIn">
          <SectionLabel>Experiments</SectionLabel>
        </MotionWrapper>
        <MotionWrapper variant="fadeUp" delay={1}>
          <DisplayHeading as="h1" size="lg">
            LAB
          </DisplayHeading>
        </MotionWrapper>
        <MotionWrapper variant="fadeUp" delay={2}>
          <p style={{ color: 'var(--color-warm-gray)', fontSize: 'var(--text-lg)', marginTop: 'var(--space-xl)', maxWidth: '520px', lineHeight: 'var(--leading-relaxed)' }}>
            Experimental projects, prototypes, and technical explorations.
          </p>
        </MotionWrapper>
      </PageContainer>
    </Section>
  );
}
