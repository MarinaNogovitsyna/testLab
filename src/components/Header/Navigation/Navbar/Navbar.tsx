import React from "react";
import styles from "./Navbar.module.css";
import { NavItem } from "../../../../types";

interface NavbarProps {
  navItems: NavItem[];
  scrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  navItems,
  scrollToSection,
}) => {
  return (
    <nav className={styles.nav}>
      {navItems.map((el) => (
        <div
          onClick={() => scrollToSection(el.id)}
          className={styles.nav__item}
          key={el.id}
        >
          {el.title}
        </div>
      ))}
    </nav>
  );
};
