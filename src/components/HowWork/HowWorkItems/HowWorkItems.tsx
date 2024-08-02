import React from "react";
import { HowWorkItem } from "../../../types";
import styles from "./HowWorkItems.module.css";
import howwork1 from "../../../images/howwork1.png";
import howwork2 from "../../../images/howwork2.png";
import howwork3 from "../../../images/howwork3.png";
import howwork4 from "../../../images/howwork4.png";

export const HowWorkItems = () => {
  const items: HowWorkItem[] = [
    {
      imgUrl: howwork1,
      title: "Прочитай задание внимательно",
      description: "Думаю у тебя не займет это больше двух-трех минут",
    },
    {
      imgUrl: howwork2,
      title: "Изучи весь макет заранее",
      description:
        "Подумай как это будет работать на разных разрешениях и при скролле",
    },
    {
      imgUrl: howwork3,
      title: "Сделай хорошо",
      description: "Чтобы мы могли тебе доверить подобные задачи в будущем",
    },
    {
      imgUrl: howwork4,
      title: "Получи предложение",
      description:
        "Ну тут все просто, не я придумал правила, но думаю так и будет)))",
    },
  ];
  return (
    <div className={styles.howWork__items}>
      {items.map((el) => (
        <div key={el.title} className={styles.howWork__item}>
          <img src={el.imgUrl} alt={el.title} />
          <div className={styles.howWork__item__text}>
            <h5>{el.title}</h5>
            <span>{el.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
