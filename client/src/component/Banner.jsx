import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon } from '@heroicons/react/24/outline';
import { SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const banners = [
  {
    id: 1,
    image: 'http://i.ibb.co/vvQQJBwT/slider1.jpg',
    alt: 'Discover Your Hobby',
    title: 'Discover Your Hobby',
    subtitle: 'Transform Your Free Time',
    description: 'Explore new passions and make your free time fun and fulfilling with thousands of hobby enthusiasts.',
    buttonText: 'Explore Now',
    color: 'from-purple-600 to-blue-600',
    bgOverlay: 'from-purple-900/20 to-blue-900/20',
  },
  {
    id: 2,
    image: 'http://i.ibb.co/nMM2kjfn/slider2.jpg',
    alt: 'Creative Arts',
    title: 'Creative Arts',
    subtitle: 'Unleash Your Potential',
    description: 'Express yourself through painting, drawing, crafts and connect with fellow artists worldwide.',
    buttonText: 'Start Creating',
    color: 'from-pink-600 to-orange-600',
    bgOverlay: 'from-pink-900/20 to-orange-900/20',
  },
  {
    id: 3,
    image: 'http://i.ibb.co/Kx5tbmHV/slider3.jpg',
    alt: 'Join Our Community',
    title: 'Join Our Community',
    subtitle: 'Connect & Share',
    description: 'Build meaningful connections with hobbyists around the world and share your creative journey.',
    buttonText: 'Join Now',
    color: 'from-green-600 to-teal-600',
    bgOverlay: 'from-green-900/20 to-teal-900/20',
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState([false, false, false]);

  const SLIDE_DURATION = 5000;
  const PROGRESS_INTERVAL = 50;

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrent((current) => (current === banners.length - 1 ? 0 : current + 1));
          return 0;
        }
        return prev + (100 / (SLIDE_DURATION / PROGRESS_INTERVAL));
      });
    }, PROGRESS_INTERVAL);

    return () => clearInterval(progressTimer);
  }, [isPlaying, isHovered, current]);

  const goToSlide = useCallback((index) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    setProgress(0);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    setProgress(0);
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleImageLoad = (index) => {
    setImageLoaded(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [prevSlide, nextSlide]);

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Featured content carousel"
    >
      {/* Background Images with Parallax Effect */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === current 
                ? 'opacity-100 scale-100 z-10' 
                : 'opacity-0 scale-105 z-0'
            }`}
          >
            {/* Image with loading state */}
            {!imageLoaded[index] && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
                </div>
              </div>
            )}
            <img
              src={banner.image}
              alt={banner.alt}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered && index === current ? 'scale-110' : 'scale-100'
              }`}
              onLoad={() => handleImageLoad(index)}
            />
            
            {/* Gradient Overlays */}
            <div className={`absolute inset-0 bg-gradient-to-r ${banner.bgOverlay}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
          </div>
        ))}

        {/* Floating Elements */}
        <div className="absolute top-8 right-8 opacity-30">
          <SparklesIcon className="w-8 h-8 text-white animate-pulse" />
        </div>
        <div className="absolute bottom-12 left-8 opacity-20">
          <SparklesIcon className="w-6 h-6 text-white animate-bounce delay-300" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
            {/* Subtitle with animation */}
            <div className={`transform transition-all duration-700 delay-200 ${
              current >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${banners[current].color} text-white mb-4 shadow-lg`}>
                {banners[current].subtitle}
              </span>
            </div>

            {/* Main Title with staggered animation */}
            <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-700 delay-300 ${
              current >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
                {banners[current].title}
              </span>
            </h1>

            {/* Description */}
            <p className={`text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed transform transition-all duration-700 delay-500 ${
              current >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              {banners[current].description}
            </p>

            {/* CTA Button with enhanced design */}
            <div className={`transform transition-all duration-700 delay-700 ${
              current >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <button 
                className={`group relative inline-flex items-center px-8 py-4 bg-gradient-to-r ${banners[current].color} text-white font-semibold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden`}
                aria-label={banners[current].buttonText}
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                <span className="relative z-10 mr-2">{banners[current].buttonText}</span>
                <ArrowRightIcon className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Ripple effect */}
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-30">
          <button
            onClick={prevSlide}
            className="group p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform duration-200" />
          </button>
        </div>

        <div className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-30">
          <button
            onClick={nextSlide}
            className="group p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        </div>

        {/* Play/Pause Button */}
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-30">
          <button
            onClick={togglePlayPause}
            className="group p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? (
              <PauseIcon className="w-5 h-5" />
            ) : (
              <PlayIcon className="w-5 h-5 ml-0.5" />
            )}
          </button>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-30 p-6 sm:p-8">
        <div className="flex items-center justify-between">
          {/* Slide Indicators with Progress */}
          <div className="flex items-center space-x-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`group relative h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? 'w-12 bg-white' 
                    : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {/* Progress bar for current slide */}
                {index === current && (
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-white/80 text-sm font-medium bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
            {current + 1} / {banners.length}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>
  );
}