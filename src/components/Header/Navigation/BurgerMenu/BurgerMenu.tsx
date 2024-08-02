import React, { useState } from "react";
import styles from "./BurgerMenu.module.css";
import { Menu } from "../Menu/Menu";
import { NavItem } from "../../../../types";

interface BurgerMenuProps {
  navItems: NavItem[];
  scrollToSection: (id: string) => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  navItems,
  scrollToSection,
}) => {
  const [isOpenMenu, setIsopenMenu] = useState<boolean>(false);

  const handleClose = () => {
    setIsopenMenu(!isOpenMenu);
  };
  
  return (
    <>
      {!isOpenMenu && (
        <button className={styles.burger__button} onClick={handleClose}>
          <div className={styles.burger}></div>
        </button>
      )}
      {isOpenMenu && (
        <Menu
          handleClose={handleClose}
          navItems={navItems}
          scrollToSection={scrollToSection}
        />
      )}
    </>
  );
};
