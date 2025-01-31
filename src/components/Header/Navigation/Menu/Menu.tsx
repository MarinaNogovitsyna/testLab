import React from "react";
import styles from "./Menu.module.css";
import { Logo } from "../../../Logo/Logo";
import { IoMdClose } from "react-icons/io";
import { NavItem } from "../../../../types";

interface MenuProps {
  handleClose: () => void;
  navItems: NavItem[];
  scrollToSection: (id: string) => void;
}

export const Menu: React.FC<MenuProps> = ({ handleClose, navItems, scrollToSection }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu__top}>
        <Logo textColor="black"/>
        <IoMdClose size={30} onClick={handleClose}/>
      </div>
      {navItems.map((el) => (
        <div key={el.id} className={styles.menu__item} onClick={() => scrollToSection(el.id)}>
          <span>{el.title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
          >
            <path
              d="M0.400124 12.293C0.212616 12.4807 0.107328 12.7351 0.107422 13.0004C0.107516 13.2657 0.212984 13.52 0.400624 13.7075C0.588265 13.895 0.842708 14.0003 1.10798 14.0002C1.37325 14.0001 1.62762 13.8947 1.81512 13.707L6.40012 9.12104C6.96254 8.55845 7.27848 7.79553 7.27848 7.00004C7.27848 6.20454 6.96254 5.44162 6.40012 4.87904L1.81112 0.293037C1.62072 0.120876 1.3714 0.0285305 1.11478 0.0351199C0.858167 0.0417093 0.613915 0.146729 0.432594 0.328435C0.251274 0.510141 0.146773 0.754617 0.140729 1.01124C0.134685 1.26787 0.227559 1.517 0.400124 1.70704L4.98612 6.29304C5.17359 6.48056 5.27891 6.73487 5.27891 7.00004C5.27891 7.2652 5.17359 7.51951 4.98612 7.70704L0.400124 12.293Z"
              fill="#83898F"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
