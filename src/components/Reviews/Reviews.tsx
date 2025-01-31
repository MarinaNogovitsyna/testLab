import React from "react";
import { Slider } from "./Slider/Slider";
import styles from "./Reviews.module.css";
import { Review } from "../../types";
import ivan from "../../images/ivan.png";
import artem from "../../images/artem.png";
import ivan2 from "../../images/ivan2.png";

export const Reviews = () => {
  const reviews: Review[] = [
    {
      autor: "Константинов Михаил Павлович",
      city: "Санкт-Петербург",
      text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ",
    },
    {
      autor: "Иван Иванов",
      city: "Санкт-Петербург",
      text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
      avatarUrl: ivan,
    },
    {
      autor: "Артем Корнилов",
      city: "Самара",
      text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.",
      avatarUrl: artem,
    },
    {
      autor: "Иван Иванов",
      city: "Санкт-Петербург, ИП Иванов",
      text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
      avatarUrl: ivan2,
    },
    {
      autor: "Петр Михайлович",
      city: "Москва",
      text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ",
    },
  ];
  return (
    <div className={styles.reviews}>
      <h1>Отзывы</h1>
      <Slider slides={reviews}/>
    </div>
  );
};
