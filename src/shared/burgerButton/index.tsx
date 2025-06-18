import clsx from "clsx";
import styles from "./styles.module.scss";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
};

export const BurgerButton: React.FC<Props> = ({ onClick, isOpen }) => {
  return (
    <button className={clsx(styles.burger, isOpen && styles["burger-open"])} onClick={onClick}>
      <span></span>
    </button>
  );
};
