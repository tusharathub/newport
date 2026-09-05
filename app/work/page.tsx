import type { Metadata } from 'next';
import {
  PageContainer,
  Section,
  SectionLabel,
  DisplayHeading,
  MotionWrapper,
} from '@/components';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects by Tushar Nailwal — AI, full-stack, mobile, and automation.',
};

export default function WorkPage() {
  return (
    <Section variant="hero">
      <PageContainer>
        <MotionWrapper variant="fadeIn">
          <SectionLabel>Selected Projects</SectionLabel>
        </MotionWrapper>
        <MotionWrapper variant="fadeUp" delay={1}>
          <DisplayHeading as="h1" size="lg">
            WORK
          </DisplayHeading>
        </MotionWrapper>
        <MotionWrapper variant="fadeUp" delay={2}>
          <p style={{ color: 'var(--color-warm-gray)', fontSize: 'var(--text-lg)', marginTop: 'var(--space-xl)', maxWidth: '520px', lineHeight: 'var(--leading-relaxed)' }}>
            A selection of projects across AI, full-stack engineering, mobile development, and automation.
          </p>
        </MotionWrapper>
      </PageContainer>
    </Section>
  );
}
