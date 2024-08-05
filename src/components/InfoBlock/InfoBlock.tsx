import React from "react";
import styles from './InfoBlock.module.css'

interface Info {
  title: string;
  text: string;
}

export const InfoBlock = () => {
  const infoBlocks: Info[] = [
    {
      title: "Опрошенных пользовались микрокредитами",
      text: "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах",
    },
    {
      title: "Опрошенных пользовались микрокредитами",
      text: "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафахНе могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах",
    },
    {
      title: "Опрошенных пользовались микрокредитами",
      text: "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафахНе могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах",
    },
    {
      title: "Опрошенных пользовались микрокредитами",
      text: "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах",
    },
  ];

  return (
    <div className={styles.info__container}>
      <div className={styles.info__block}>
        {infoBlocks.map((el, index) => (
          <div key={index} className={styles.info}>
            <h5>{el.title}</h5>
            <span>{el.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
