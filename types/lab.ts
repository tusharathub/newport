export type LabStatus =
  | 'EXPERIMENT'
  | 'PROTOTYPE'
  | 'IN PROGRESS'
  | 'ARCHIVED'
  | 'PLAYGROUND';

export interface LabItemContent {
  why?: string;
  explored?: string;
  learned?: string;
  next?: string;
}

export interface LabItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  status: LabStatus;
  technologies?: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  content?: LabItemContent;
}
