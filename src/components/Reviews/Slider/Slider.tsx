import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Slide } from "../Slide/Slide";
import { Pagination } from "../Pagination/Pagination";
import styles from './Slider.module.css'
import { ArrowSlide } from "../ArrowSlide/ArrowSlide";
import { Review } from "../../../types";

interface SliderProps {
    slides: Review[]
}

export const Slider:React.FC<SliderProps> = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const is769pxOrMore = useMediaQuery({ minWidth: 769 });
  const is375pxOrMore = useMediaQuery({ minWidth: 376 });
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchCurrentX = e.touches[0].clientX;
    const touchDelta = touchCurrentX - touchStartX;

    if (Math.abs(touchDelta) > 50) {
      if (touchDelta > 0) {
        handlePrevSlide();
      } else {
        handleNextSlide();
      }
      setTouchStartX(touchCurrentX);
    }
  };

  // Определяем количество отображаемых слайдов
  const slidesToShow = is769pxOrMore ? 3 : is375pxOrMore ? 2 : 1;

  // Генерируем массив слайдов для отображения
  const visibleSlides = [];

  for (let i = 0; i < slidesToShow; i++) {
    visibleSlides.push(slides[(currentSlide + i) % slides.length]);
  }

  return (
    <>
      <div
        className={styles.slider}
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {is769pxOrMore && <ArrowSlide handleClick={handlePrevSlide} type="left"/>}
        <div className={styles.slider__container}>
          {visibleSlides.map((slide, index) => (
            <Slide key={index} review={slide} />
          ))}
        </div>
        {is769pxOrMore && <ArrowSlide handleClick={handleNextSlide} type="right"/>}
      </div>
      <Pagination currentSlide={currentSlide} totalSlides={slides.length} />
    </>
  );
};
