import React from 'react'
import styles from './Pagination.module.css'

export const Pagination: React.FC<{
    currentSlide: number;
    totalSlides: number;
  }> = ({ currentSlide, totalSlides }) => {
    const getColor = (num: number) => {
        return num === currentSlide ? '#2A6CEA' : '#C2C8CD'
    }
  return (
    <div className={styles.pagination}>
    {Array.from({ length: totalSlides }).map((_, index) => (
      <div
        key={index}
        className={styles.pagination__dot} 
        style={{background: getColor(index)}}
      />
    ))}
  </div>
  )
}
