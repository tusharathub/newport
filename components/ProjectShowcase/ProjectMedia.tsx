'use client';

import Image from 'next/image';
import { Project } from '@/types/project';
import styles from './ProjectMedia.module.css';

interface ProjectMediaProps {
  project: Project;
  priority?: boolean;
}

export function ProjectMedia({ project, priority = false }: ProjectMediaProps) {
  const ratioClass = getRatioClass(project.aspectRatio);

  if (project.thumbnail) {
    return (
      <div className={`${styles.mediaFrame} ${ratioClass}`}>
        <Image
          src={project.thumbnail}
          alt={`${project.title} preview visual`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
          priority={priority}
          className={styles.image}
        />
      </div>
    );
  }

  return (
    <div className={`${styles.mediaFrame} ${ratioClass}`}>
      <div className={styles.placeholder} aria-hidden="true">
        {/* Placeholder Header */}
        <div className={styles.phHeader}>
          <span>{project.id} // SYSTEM VISUAL</span>
          <span className={styles.phTag}>{project.category}</span>
        </div>

        {/* Project Specific Abstract Visual System */}
        {project.slug === 'rag-application' && (
          <div className={styles.phRagBody}>
            <div className={styles.phNode}>
              <span className={styles.phNodeLabel}>QUERY</span>
              <span className={styles.phNodeSub}>Vector Embedding</span>
            </div>
            <span className={styles.phArrow}>→</span>
            <div className={styles.phNode}>
              <span className={styles.phNodeLabel}>RETRIEVE</span>
              <span className={styles.phNodeSub}>Semantic Search</span>
            </div>
            <span className={styles.phArrow}>→</span>
            <div className={styles.phNode}>
              <span className={styles.phNodeLabel}>SYNTHESIZE</span>
              <span className={styles.phNodeSub}>LLM Response</span>
            </div>
          </div>
        )}

        {project.slug === 'water-tracking-app' && (
          <div className={styles.phWaterBody}>
            <div className={styles.phCircle}>
              <span className={styles.phCircleVal}>2,500 ml</span>
              <span className={styles.phCircleLabel}>DAILY HYDRATION</span>
            </div>
          </div>
        )}

        {project.slug === 'notablecv' && (
          <div className={styles.phCvBody}>
            <div className={styles.phDoc}>
              <div className={styles.phDocLine} />
              <div className={styles.phDocLine} />
              <div className={`${styles.phDocLine} ${styles.phDocLineShort}`} />
            </div>
            <div className={styles.phNode}>
              <span className={styles.phNodeLabel}>ANALYSIS</span>
              <span className={styles.phNodeSub}>Resume Match 94%</span>
            </div>
          </div>
        )}

        {project.slug === 'python-web-scraper' && (
          <div className={styles.phScraperBody}>
            <div className={styles.phCodeRow}>
              <span className={styles.phCodeKey}>GET</span>
              <span className={styles.phCodeVal}>https://api.target/stream</span>
            </div>
            <div className={styles.phCodeRow}>
              <span className={styles.phCodeKey}>PARSE</span>
              <span className={styles.phCodeVal}>DOM.querySelectorAll(".item")</span>
            </div>
            <div className={styles.phCodeRow}>
              <span className={styles.phCodeKey}>EXPORT</span>
              <span className={styles.phCodeVal}>Structured JSON // 1,420 records</span>
            </div>
          </div>
        )}

        {/* Fallback for general projects */}
        {!['rag-application', 'water-tracking-app', 'notablecv', 'python-web-scraper'].includes(
          project.slug
        ) && (
          <div className={styles.phRagBody}>
            <div className={styles.phNode}>
              <span className={styles.phNodeLabel}>{project.title.toUpperCase()}</span>
            </div>
          </div>
        )}

        {/* Placeholder Footer */}
        <div className={styles.phFooter}>
          <span>PROJECT REPOSITORY // DATA DRIVEN</span>
          <span>{project.year || '2024'}</span>
        </div>
      </div>
    </div>
  );
}

function getRatioClass(aspectRatio?: string) {
  switch (aspectRatio) {
    case '4/5':
      return styles.ratio_4_5;
    case '21/9':
      return styles.ratio_21_9;
    case '16/10':
      return styles.ratio_16_10;
    case '16/9':
    default:
      return styles.ratio_16_9;
  }
}
