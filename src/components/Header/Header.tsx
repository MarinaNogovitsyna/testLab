import React from 'react'
import styles from './Header.module.css'
import { Navigation } from './Navigation/Navigation'

export const Header = () => {
  return (
    <div className={styles.header}>
        <Navigation />
        <div className={styles.header__content}>
          <h1>Говорят, никогда не поздно сменить профессию</h1>
          <span>Сделай круто тестовое задание и у тебя получится</span>
          <button>Проще простого!</button>
        </div>
    </div>
  )
}
