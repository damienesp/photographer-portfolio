import { useState } from "react";

const Carousel = ({ carouselData }) => {
  const [current, setCurrent] = useState(0);
  const lengthData = carouselData.length;

  const nextSlide = () => {
    setCurrent(current === lengthData - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? lengthData - 1 : current - 1);
  };

  return (
    <div className="carousel-wrapper">
      <button className="btn-left" onClick={prevSlide}>
        ‹
      </button>
      {carouselData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current ? <p>{slide.text}</p> : null}
            {index === current ? (
              <img src={process.env.PUBLIC_URL + slide.image} alt="mots" />
            ) : null}
          </div>
        );
      })}
      <button className="btn-right" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default Carousel;
