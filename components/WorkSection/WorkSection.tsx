import Link from 'next/link';
import { Project } from '@/types/project';
import { ProjectCard } from '../ProjectShowcase/ProjectCard';
import styles from './WorkSection.module.css';

interface WorkSectionProps {
  projects: Project[];
}

export function WorkSection({ projects }: WorkSectionProps) {
  return (
    <section id="work" className={styles.section} aria-label="Selected Work">
      <div className={styles.intro}>
        <span className={styles.label}>SELECTED WORK</span>
        <h2 className={styles.title}>SELECTED PROJECTS</h2>
      </div>

      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            priority={index === 0}
          />
        ))}
      </div>

      <div className={styles.footerCta}>
        <Link href="/work" className={styles.allWorkLink}>
          <span>VIEW ALL WORK</span>
          <span className={styles.arrow} aria-hidden="true">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}
