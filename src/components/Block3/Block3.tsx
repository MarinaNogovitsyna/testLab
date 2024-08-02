import React from "react";
import styles from "./Block3.module.css";
import block3img from "../../images/block3img.png";

export const Block3 = () => {
  return (
    <div className={styles.block3__container} id="block3">
      <div className={styles.block3__text}>
        <h2>Круто, ты дошел до третьего блока</h2>
        <span>
          63% опрошенных пользовались кредитами из-за того, что не могли покрыть
          непредвиденные расходы свыше 15 000 ₽.
        </span>
        <span>
          Доступ к заработанным деньгам помогает отказаться от кредитов и
          экономить деньги на процентах и штрафах.
        </span>
      </div>
      <img src={block3img} className={styles.block3__img} />
    </div>
  );
};
