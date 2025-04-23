import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-advance timer
  useEffect(() => {
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="relative w-full h-full bg-gray-100">
      {/* Single image display */}
      <div className="relative w-full h-full">
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Navigation buttons */}
      <button 
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center z-10 transition-colors"
        onClick={goToPrevious}
      >
        ←
      </button>

      <button 
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center z-10 transition-colors"
        onClick={goToNext}
      >
        →
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
