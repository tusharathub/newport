import Image from 'next/image';
import styles from './ProjectMedia.module.css';

interface ProjectMediaProps {
  src?: string;
  alt: string;
  aspect?: 'landscape' | 'square' | 'portrait';
  priority?: boolean;
  className?: string;
}

export function ProjectMedia({
  src,
  alt,
  aspect = 'landscape',
  priority = false,
  className = '',
}: ProjectMediaProps) {
  const aspectClass =
    aspect === 'landscape'
      ? styles.aspectLandscape
      : aspect === 'square'
        ? styles.aspectSquare
        : styles.aspectPortrait;

  if (!src) {
    return (
      <div className={`${styles.wrapper} ${aspectClass} ${styles.placeholder} ${className}`}>
        <span>Image</span>
      </div>
    );
  }

  return (
    <div className={`${styles.wrapper} ${aspectClass} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={styles.image}
        priority={priority}
      />
    </div>
  );
}
