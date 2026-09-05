import {
  PageContainer,
  Section,
  SectionLabel,
  DisplayHeading,
  MotionWrapper,
} from '@/components';

export default function ThoughtPage() {
  return (
    <Section variant="hero">
      <PageContainer>
        <MotionWrapper variant="fadeIn">
          <SectionLabel>Article</SectionLabel>
        </MotionWrapper>
        <MotionWrapper variant="fadeUp" delay={1}>
          <DisplayHeading as="h1" size="md">
            Coming Soon
          </DisplayHeading>
        </MotionWrapper>
      </PageContainer>
    </Section>
  );
}
