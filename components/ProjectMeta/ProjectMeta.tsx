import { Project } from '@/types/project';
import styles from './ProjectMeta.module.css';

interface ProjectMetaProps {
  project: Project;
  className?: string;
}

export function ProjectMeta({ project, className = '' }: ProjectMetaProps) {
  return (
    <div className={`${styles.meta} ${className}`}>
      <div className={styles.item}>
        <span className={styles.itemLabel}>Year</span>
        <span className={styles.itemValue}>{project.year}</span>
      </div>

      <div className={styles.item}>
        <span className={styles.itemLabel}>Category</span>
        <span className={styles.itemValue}>{project.category}</span>
      </div>

      {project.role && (
        <div className={styles.item}>
          <span className={styles.itemLabel}>Role</span>
          <span className={styles.itemValue}>{project.role}</span>
        </div>
      )}

      {project.technologies && project.technologies.length > 0 && (
        <div className={styles.item}>
          <span className={styles.itemLabel}>Tech</span>
          <div className={styles.technologies}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
