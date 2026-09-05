import type { Metadata } from 'next';
import {
  PageContainer,
  Section,
  SectionLabel,
  DisplayHeading,
  MotionWrapper,
} from '@/components';

export const metadata: Metadata = {
  title: 'Thoughts',
  description: 'Writing on engineering, AI, and building software by Tushar Nailwal.',
};

export default function ThoughtsPage() {
  return (
    <Section variant="hero">
      <PageContainer>
        <MotionWrapper variant="fadeIn">
          <SectionLabel>Writing</SectionLabel>
        </MotionWrapper>
        <MotionWrapper variant="fadeUp" delay={1}>
          <DisplayHeading as="h1" size="lg">
            THOUGHTS
          </DisplayHeading>
        </MotionWrapper>
        <MotionWrapper variant="fadeUp" delay={2}>
          <p style={{ color: 'var(--color-warm-gray)', fontSize: 'var(--text-lg)', marginTop: 'var(--space-xl)', maxWidth: '520px', lineHeight: 'var(--leading-relaxed)' }}>
            Notes on engineering, AI, and building software.
          </p>
        </MotionWrapper>
      </PageContainer>
    </Section>
  );
}
