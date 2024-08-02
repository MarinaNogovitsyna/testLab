import React from 'react'
import { Review } from '../../../types'
import styles from './Slide.module.css'
import noavatar from '../../../images/noavatar.png'

interface SlideProps {
    review: Review
}

export const Slide: React.FC<SlideProps> = ({review}) => {
  return (
    <div className={styles.slide}>
        <div className={styles.slide__autor}>
            <img src={review.avatarUrl || noavatar} alt='avatar'/>
            <div className={styles.slide__autor_info}>
                <h5>{review.autor}</h5>
                <span>{review.city}</span>
            </div>
        </div>
        <span className={styles.slide__text}>{review.text}</span>
    </div>
  )
}
