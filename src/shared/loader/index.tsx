import styles from "./styles.module.scss";

export const Loader: React.FC<{ size: string }> = ({ size }) => {
  return (
    <div
      className={styles.container}
      style={{ width: `clac(${size} + 2px)`, height: `clac(${size} + 2px)` }}
    >
      <div className={styles.loader} style={{ width: size, height: size }} />
    </div>
  );
};
