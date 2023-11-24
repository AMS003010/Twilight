import React, { useState, useEffect } from 'react';

import img1 from '../img/carousel2.jpg'
import img2 from '../img/carousel1.jpg'
import img3 from '../img/carousel3.jpg'
import img4 from '../img/carousel4.jpg'
import img5 from '../img/carousel5.jpg'
import img6 from '../img/carousel6.jpg'
//import musicIcon from '../img/musicIcon.png'
//<img src={musicIcon} alt='jun'/>


const images = [img1,img2,img3,img4,img5,img6];
const names = ["Juice WRLD","The Weeknd","Niall Horan","Billie Eilish","Marshmello","Imagine Dragons"];
const listeners = ["23,45,678","98,41,618","23,45,678","11,90,678","57,45,668","19,45,678"];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentName , setCurrentName] = useState(0);
  const [currentListeners , setCurrentListeners] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentName((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentListeners((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="carousel-container">
      <div className="carousel">
        <div style={{width:'100%',height:'100%',backgroundImage: `url(${images[currentIndex]})`}}>
          <div className='infoDiv' style={{height:'100px'}}>
            <span className='exploreArtistName'>{names[currentName]}</span>
            <div className='exploreCarouselInfo' style={{height:'50px'}}>
              <span id='noOfList'>{listeners[currentListeners]}</span>
              <span id='monList'>&nbsp;monthly listeners</span>
            </div>
          </div>
        </div>
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;