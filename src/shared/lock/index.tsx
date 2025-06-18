import clsx from "clsx";

import styles from "./styles.module.scss";

type Props = {
  locked: boolean;
  className?: string;
};

export const Lock: React.FC<Props> = ({ locked, className }) => {
  return (
    <div className={clsx(styles.lock, locked && styles["lock--locked"], className)}>
      <div className={styles.lock__top}></div>
      <div className={styles.lock__body}></div>
    </div>
  );
};
