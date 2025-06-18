import clsx from "clsx";

import styles from "./styles.module.scss";

type Appearance = "login" | "logout";
type Props = { appearance: Appearance; onClick: () => void };

const urlByAppearance: Record<Appearance, string> = {
  login: "/enter.svg",
  logout: "/exit.svg",
};

export const AuthButton: React.FC<Props> = ({ appearance, onClick }) => {
  return (
    <button className={clsx(styles[appearance], styles.button)} onClick={onClick}>
      <div className={styles.button__before}>
        <img src={urlByAppearance[appearance]} />
      </div>
      {appearance[0].toUpperCase() + appearance.slice(1)}
    </button>
  );
};
