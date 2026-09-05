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

  /** Problem statement for case study */
  problem?: string;

  /** Approach / methodology for case study */
  approach?: string;

  /** Build process notes for case study */
  build?: string;

  /** Result / outcome for case study */
  result?: string;

  /** Key learnings for case study */
  learnings?: string;
}

export type ProjectCategory =
  | 'AI Engineering'
  | 'Mobile'
  | 'Full-Stack'
  | 'Automation'
  | 'Experimental';
