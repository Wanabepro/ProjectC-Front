import styles from "./styles.module.scss";

export const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  const progressBarStyle = { "--progress": `${progress}%` } as React.CSSProperties;

  return (
    <div className={styles.progress} style={progressBarStyle}>
      {progress || ""}
    </div>
  );
};
