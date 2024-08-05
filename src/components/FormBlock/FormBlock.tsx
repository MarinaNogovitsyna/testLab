import React from 'react'
import styles from './FormBlock.module.css'
import { Input } from './Input/Input'

export const FormBlock = () => {
  return (
    <div id='form' className={styles.form__container}>
        <h2>Отправь форму</h2>
        <form className={styles.form}>
            <div className={styles.form__item}>
                <Input type='name'/>
            </div>
            <div className={styles.form__item}>
                <Input type='phone'/>
            </div>
            <div className={styles.form__item}>
                Согласен
            </div>
            <div className={styles.form__item}>
                <button>Отправить</button>
            </div>
        </form>
    </div>
  )
}
