import React from "react";
import styles from "./Logo.module.css";

interface LogoProps {
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({ textColor }) => {
  return (
    <div className={styles.logo} style={{ color: textColor || "white" }}>
      <div className={styles.circle__primary}></div>
      <div className={styles.circle__white}></div>
      <span>testLab</span>
    </div>
  );
};
