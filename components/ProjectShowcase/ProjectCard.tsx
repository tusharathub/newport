'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Project } from '@/types/project';
import { ProjectMedia } from './ProjectMedia';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const layoutClass = getLayoutClass(project.layoutVariant);
  const projectHref = `/work/${project.slug}`;

  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
      aria-label={`Project: ${project.title}`}
    >
      <div className={`${styles.grid} ${layoutClass}`}>
        {/* Visual Media Showcase */}
        <div className={styles.mediaWrapper}>
          <Link href={projectHref} tabIndex={-1} aria-hidden="true">
            <ProjectMedia project={project} priority={priority} />
          </Link>
        </div>

        {/* Project Metadata & Description */}
        <div className={styles.content}>
          <div className={styles.headerMeta}>
            <span className={styles.index}>{project.id}</span>
            <span className={styles.category}>{project.category}</span>
          </div>

          <Link href={projectHref} className={styles.title}>
            {project.title}
          </Link>

          <p className={styles.description}>{project.description}</p>

          {project.technologies && project.technologies.length > 0 && (
            <div className={styles.techList}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className={styles.ctaWrapper}>
            <Link href={projectHref} className={styles.ctaLink}>
              <span>EXPLORE PROJECT</span>
              <span className={styles.ctaArrow} aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function getLayoutClass(variant?: string) {
  switch (variant) {
    case 'reversed':
      return styles.layout_reversed;
    case 'full':
      return styles.layout_full;
    case 'offset':
      return styles.layout_offset;
    case 'default':
    default:
      return styles.layout_default;
  }
}
