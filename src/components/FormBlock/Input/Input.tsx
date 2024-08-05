import React, { useEffect, useRef, useState } from "react";
import styles from "./Input.module.css";
import { validateInput } from "../../../utils/validateInput";
import { MdCheckCircle } from "react-icons/md";
import { MdCancel } from "react-icons/md";

interface InputProps {
  type: "name" | "phone";
}

export const Input: React.FC<InputProps> = ({ type }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [style, setStyle] = useState<string>(styles.form__input)
  const inputRef = useRef(null); 
  
  const helperText =
    type === "name" ? "Допустимы только буквы" : "Допустимы цифры и знак +";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {

  }

  useEffect(() => {
    if (value) {
      const isCorrect = validateInput(value, type);
      setIsValid(isCorrect);     
    }
  }, [value]);

  return (
    <div className={styles.form__item}>
      <input
        type="text"
        className={styles.form__input}
        required
        onChange={(e) => handleChange(e)}
        ref={inputRef}
      />
      <label className={styles.form__label}>
        {type === "name" ? "Имя" : "Телефон"}
      </label>
      <div className={styles.check__icon}>
        {value && isValid && <MdCheckCircle color="#25CD82" size={20} />}
        {value && !isValid && <MdCancel color="#F13636" size={20} />}
      </div>
      {value && !isValid && (
        <span className={styles.helper__text}>{helperText}</span>
      )}
    </div>
  );
};
