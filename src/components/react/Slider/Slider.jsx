import React, { useState } from "react";
import "./Slider.scss";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="Slider">
      <div
        className="Slides-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="Slide">
            <img
              className="Slide-image"
              src={slide.image}
              alt={`Slide ${index + 1}`}
            />
            <div className="TextOverlay">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <span className="Label">{slide.label}</span>
              <a
                className="TextOverlay-link"
                target="_blank"
                href={slide.ctaURL}>
                {slide.ctaText}
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* <button className="Control prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="Control next" onClick={nextSlide}>
        &gt;
      </button> */}

      <div className="Dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`Dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;