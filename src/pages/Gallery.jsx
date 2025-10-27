import React, { useState, useEffect } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  const images = [
    '/wop1 images/IMG-20251019-WA0000.jpg',
    '/wop1 images/IMG-20251019-WA0002.jpg',
    '/wop1 images/IMG-20251019-WA0003.jpg',
    '/wop1 images/IMG-20251019-WA0004.jpg',
    '/wop1 images/IMG-20251019-WA0012.jpg',
    '/wop1 images/IMG-20251019-WA0025.jpg',
    '/wop1 images/IMG-20251019-WA0026.jpg',
    '/wop1 images/IMG-20251019-WA0027.jpg',
    '/wop1 images/IMG-20251019-WA0028.jpg',
    '/wop1 images/IMG-20251019-WA0029.jpg',
    '/wop1 images/IMG-20251019-WA0030.jpg',
    '/wop1 images/IMG-20251019-WA0035.jpg',
    '/wop1 images/IMG-20251019-WA0036.jpg',
    '/wop1 images/IMG-20251019-WA0037.jpg',
    '/wop1 images/IMG-20251019-WA0038.jpg',
    '/wop1 images/IMG-20251019-WA0048.jpg',
    '/wop1 images/IMG-20251019-WA0049.jpg',
  ];

  // Auto-rotate featured image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/game-of-thrones');

        .got-font {
          font-family: 'Game of Thrones', serif;
          letter-spacing: 0.1em;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }

        @keyframes snowfall {
          0% { transform: translateY(-10vh) translateX(0); opacity: 1; }
          100% { transform: translateY(100vh) translateX(10px); opacity: 0.8; }
        }

        .snowflake {
          position: fixed;
          top: -10vh;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1em;
          animation: snowfall linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .slide-left {
          animation: slideLeft 0.6s ease-out forwards;
        }

        .slide-right {
          animation: slideRight 0.6s ease-out forwards;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(148, 163, 184, 0.3);
          filter: brightness(1.1);
        }

        @keyframes frost {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }

        .frost-pulse {
          animation: frost 3s ease-in-out infinite;
        }
      `}</style>

      {/* Snowfall Effect */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 10 + 10}px`,
          }}
        >
          ❄
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="mb-6 flex justify-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="frost-pulse"
            >
              <path
                d="M50 10 L35 30 L20 35 L15 50 L20 65 L30 75 L35 85 L40 90 L50 95 L60 90 L65 85 L70 75 L80 65 L85 50 L80 35 L65 30 L50 10 Z"
                stroke="rgba(148, 163, 184, 0.8)"
                strokeWidth="2"
                fill="rgba(148, 163, 184, 0.1)"
              />
              <circle cx="50" cy="50" r="15" fill="rgba(148, 163, 184, 0.3)" />
            </svg>
          </div>

          <h1 className="got-font text-5xl md:text-7xl mb-6 text-slate-100 tracking-wide">
            WINTER OF PROJECTS
          </h1>
          
          <div className="w-32 h-px bg-slate-400 mx-auto mb-8" />

          <p className="text-2xl md:text-3xl text-slate-300 italic mb-4 got-font">
            2024 Chronicles
          </p>
        </div>

        {/* Featured Rotating Carousel */}
        <div className="mb-16 fade-in">
          <div className="relative max-w-6xl mx-auto">
            <div className="relative aspect-video md:aspect-21/9 overflow-hidden border-4 border-slate-700 bg-slate-900 shadow-2xl">
              <img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`Winter of Projects ${currentImageIndex + 1}`}
                className="w-full h-full object-cover slide-right"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 border-2 border-slate-600 hover:border-slate-400 p-3 md:p-4 transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 border-2 border-slate-600 hover:border-slate-400 p-3 md:p-4 transition-all duration-300 backdrop-blur-sm"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.slice(0, 10).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === idx ? 'bg-slate-200 w-8' : 'bg-slate-500 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm border border-slate-600 px-4 py-2">
              <span className="text-slate-200 text-sm tracking-wider">
                {currentImageIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden bg-slate-900 border-2 border-slate-800 hover:border-slate-600 cursor-pointer hover-lift fade-in group"
              style={{ animationDelay: `${index * 0.03}s`, opacity: 0 }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Winter of Projects ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 scale-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors bg-slate-900/80 p-2 border border-slate-700"
            aria-label="Close modal"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="max-w-7xl max-h-[90vh] w-full">
            <img
              src={selectedImage}
              alt="Winter of Projects"
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
