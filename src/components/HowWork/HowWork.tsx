import React from 'react'
import styles from './HowWork.module.css'
import { HowWorkItems } from './HowWorkItems/HowWorkItems'

export const HowWork = () => {
  return (
    <div id='howWork' className={styles.howWork}>
        <h1>Как это работает</h1>
        <HowWorkItems />
    </div>
  )
}
