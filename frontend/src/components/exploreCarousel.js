import React, { useState, useEffect } from 'react';

import img1 from '../img/carousel1.jpg'
import img2 from '../img/carousel2.jpg'
import img3 from '../img/carousel3.jpg'
import img4 from '../img/carousel4.jpg'
import img5 from '../img/carousel5.jpg'
import img6 from '../img/carousel6.jpg'

const images = [img1,img2,img3,img4,img5,img6];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img src={images[currentIndex]} alt='ih' style={{width:'100%',height:'100%'}}/>
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;