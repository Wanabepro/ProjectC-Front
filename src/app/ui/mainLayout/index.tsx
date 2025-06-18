import { useState } from "react";
import { Outlet } from "react-router";

import { keycloak } from "shared/keycloak";
import { AuthButton } from "shared/authButton";
import { Logo } from "./ui/logo";
import { BurgerButton } from "shared/burgerButton";
import { Navigation } from "entities/navigation";

import styles from "./styles.module.scss";

export const MainLayout: React.FC = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const onLogin = () => {
    keycloak.login();
  };

  const onLogout = () => {
    keycloak.logout();
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__leftGroup}>
          <BurgerButton onClick={toggleNav} isOpen={navIsOpen} />
          <Logo link="/" />
        </div>
        <AuthButton
          appearance={keycloak.authenticated ? "logout" : "login"}
          onClick={keycloak.authenticated ? onLogout : onLogin}
        />
      </header>
      <div className={styles.container}>
        <Navigation isOpen={navIsOpen} className={styles.navigation} />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </>
  );
};
