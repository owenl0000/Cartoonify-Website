"use client";

import React, { useState, useEffect } from 'react';
import './Slideshow.css';

export default function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    '/images/slideshow1.jpg',
    '/images/slideshow2.jpg',
    '/images/slideshow3.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div className={`mySlides ${index === slideIndex ? 'show' : ''}`} key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
