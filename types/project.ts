export interface ArchitectureNode {
  label: string;
  sublabel?: string;
}

export interface CaseStudyData {
  overview?: string;
  problem?: string;
  approach?: string;
  build?: string;
  architectureNodes?: ArchitectureNode[];
  codeSnippet?: {
    language: string;
    title: string;
    code: string;
  };
  challenges?: string[];
  solution?: string;
  result?: string;
  learnings?: string[];
  nextSteps?: string;
}

export interface Project {
  /** Unique identifier */
  id: string;

  /** URL-safe slug for routing */
  slug: string;

  /** Project display title */
  title: string;

  /** Short description (1–2 sentences) */
  description: string;

  /** Year of creation or completion */
  year: string;

  /** Primary category (e.g., "AI Engineering", "Mobile", "Full-Stack") */
  category: string;

  /** Role in the project */
  role?: string;

  /** Technologies used */
  technologies?: string[];

  /** Thumbnail image path for project listings */
  thumbnail?: string;

  /** Hero image path for case study pages */
  heroImage?: string;

  /** Gallery image paths */
  gallery?: string[];

  /** Live project URL */
  liveUrl?: string;

  /** GitHub repository URL */
  githubUrl?: string;

  /** Whether to feature prominently on the home page */
  featured: boolean;

  /** Whether a full case study exists */
  caseStudy?: boolean;

  /** Optional layout style variant for editorial presentation */
  layoutVariant?: 'default' | 'reversed' | 'full' | 'offset';

  /** Optional aspect ratio constraint for media placeholder */
  aspectRatio?: '16/9' | '4/5' | '21/9' | '16/10';

  /** Structured case study content */
  caseStudyData?: CaseStudyData;
}

export type ProjectCategory =
  | 'AI Engineering'
  | 'Mobile'
  | 'Full-Stack'
  | 'Automation'
  | 'Experimental';
