import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

export const Logo: React.FC<{ link: string }> = ({ link }) => {
  return (
    <Link to={link} className={styles.logo}>
      <img src="/icon.svg" alt="" />
      <p>ProjectC</p>
    </Link>
  );
};
