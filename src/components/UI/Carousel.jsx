import React, { useEffect, useState } from 'react';
import aboutBG1 from '../../assets/image 44.png'
import aboutBG2 from '../../assets/image 45.png'
import aboutBG3 from '../../assets/image 46.png'

const images = [
    aboutBG1,
    aboutBG2,
    aboutBG3
];

const Carousel = ({ width = '100%', height = '100%' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl" style={{ width, height }}>
      <div
        className="flex transition-transform duration-500 size-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`size-[10px] rounded-full ${index === currentIndex ? 'bg-custom-gradient' : 'bg-gray-200'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;