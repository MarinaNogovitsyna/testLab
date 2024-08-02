import React from "react";
import { Navbar } from "./Navbar/Navbar";
import styles from "./Navigation.module.css";
import { useMediaQuery } from "react-responsive";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { Logo } from "../../Logo/Logo";
import { NavItem } from "../../../types";

export const Navigation = () => {
  const isNotDesktopWidth = useMediaQuery({ maxWidth: 768 });

  const navItems: NavItem[] = [
    { id: "howWork", title: "Как это работает" },
    { id: "block3", title: "3-й блок" },
    { id: "questions", title: "Вопросы и ответы" },
    { id: "form", title: "Форма" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>
        <Logo />
      </div>
      {isNotDesktopWidth ? (
        <BurgerMenu navItems={navItems} scrollToSection={scrollToSection} />
      ) : (
        <Navbar navItems={navItems} scrollToSection={scrollToSection} />
      )}
    </div>
  );
};
