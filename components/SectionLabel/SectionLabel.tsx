import styles from './SectionLabel.module.css';

interface SectionLabelProps {
  children: string;
  index?: string;
  className?: string;
}

export function SectionLabel({
  children,
  index,
  className = '',
}: SectionLabelProps) {
  if (index) {
    return (
      <div className={`${styles.label} ${styles.indexed} ${className}`}>
        <span className={styles.index}>{index}</span>
        <span className={styles.separator}>—</span>
        <span>{children}</span>
      </div>
    );
  }

  return <p className={`${styles.label} ${className}`}>{children}</p>;
}
