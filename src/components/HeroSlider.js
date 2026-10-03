'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  { 
    image: '/assets/hero.jpg', 
    subtitle: 'Wafa Educational And Charitable Trust',
    title: 'Be A Voice For Poor People',
    desc: 'We are dedicated to empowering, educating, and uplifting communities across India through sustainable and compassionate initiatives.'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} alt={slide.title} />
          
          {/* Premium Gradient Overlay */}
          <div className="hero-overlay-premium"></div>
          
          <div className="hero-content-wrapper">
            <div className="container">
              <div className={`hero-content ${index === currentSlide ? 'animate' : ''}`}>
                <span className="hero-subtitle">{slide.subtitle}</span>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-desc">{slide.desc}</p>
                <div className="hero-buttons">
                  <Link href="/donate" className="btn btn-primary btn-lg">
                    ❤ Donate Now
                  </Link>
                  <Link href="/about" className="btn btn-white btn-lg">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </section>
  );
}
