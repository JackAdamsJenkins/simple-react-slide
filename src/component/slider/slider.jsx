import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './slider.css';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    currentIndex === images.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
  };

  const goPrev = () => {
    currentIndex === 0 ? setCurrentIndex(images.length - 1) : setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="slider">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} className="slider-image" />
        ))}
      </div>
      <div className="slider-arrow slider-arrow-left" onClick={goPrev}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="slider-arrow slider-arrow-right" onClick={goNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className="slider-counter">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
};

export default Slider;
