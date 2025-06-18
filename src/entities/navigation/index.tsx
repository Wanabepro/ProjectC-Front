import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

type Props = { isOpen: boolean; className?: string };

export const Navigation: React.FC<Props> = ({ isOpen, className }) => {
  const links = [
    { name: "Главная", path: "/" },
    { name: "Загрузить", path: "/upload" },
    { name: "Мои видео", path: "/my-videos" },
    { name: "Профиль", path: "/profile" },
  ];

  return (
    <nav className={clsx(styles.nav, !isOpen && styles.closed, className)}>
      <ul className={styles.linksList}>
        {links.map(({ name, path }) => (
          <li className={styles.linksList__item} key={path}>
            <Link className={styles.linksList__link} to={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
