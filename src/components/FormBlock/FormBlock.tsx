import React, { useState } from 'react'
import styles from './FormBlock.module.css'
import { Input } from './Input/Input'

export const FormBlock = () => {
    const [isValidName, setIsValidName] = useState(false)
    const [isValidPhone, setIsValidPhone] = useState(false)

    const handleValid = (type: "name" | "phone", isValid: boolean) => {
        if(type === 'name'){
            setIsValidName(isValid)
        } else {
            setIsValidPhone(isValid)
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValidName && isValidPhone){
            alert('Форма успешно отправлена!')
        }
    }
  return (
    <div id='form' className={styles.form__container}>
        <h2>Отправь форму</h2>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.form__item}>
                <Input type='name' handleValid={handleValid}/>
            </div>
            <div className={styles.form__item}>
                <Input type='phone' handleValid={handleValid}/>
            </div>
            <div className={styles.form__item}>
                <label className={styles.form__agree}>
                    <input type='checkbox'/>
                    Согласен, отказываюсь
                </label>
            </div>
            <div className={styles.form__item}>
                <button>Отправить</button>
            </div>
        </form>
    </div>
  )
}
