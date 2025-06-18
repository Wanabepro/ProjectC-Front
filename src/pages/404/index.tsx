import styles from "./style.module.scss";

export const ErrorPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.typewriter}>
        <h1 className="text-3xl sm:text-4xl">
          <span className="text-green-400">404</span>
          <span className={styles.redText}>:</span> Not Found
        </h1>
      </div>

      <div>
        <p className={styles["terminal-line"]}>$ Connecting to server...</p>
        <p className={styles["terminal-line"]}>
          $ Fetching resource: <span className={styles.redText}>/not-found</span>
        </p>
        <p className={styles["terminal-line"]}>$ Error: Resource not found (code 404)</p>
        <p className={styles["terminal-line"]}>$_</p>
      </div>

      <a href="/" className={styles.blueText}>
        ← Back to Home
      </a>
    </div>
  );
};
