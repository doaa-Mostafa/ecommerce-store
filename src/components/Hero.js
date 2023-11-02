import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Hero = () => {
  const slides = [
    { image: "slide_one.jpeg" },
    { image: "slide_two.jpeg" },
    { image: "slide_three.jpeg" },
    { image: "slide_four.jpeg" },
    { image: "slide_five.jpeg" },
  

    // Add more image URLs as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const gotToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Update the slider to the next slide every 5 seconds (you can adjust the interval)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="lg:max-w-[1000px] lg:w-full m-auto lg:py-16 lg:px-4 relative group ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className="w-full h-96 sm:h-64  md:h-[500px] bg-center bg-cover lg:rounded-2xl duration-500 "
      ></div>
      {/* Left Arrow */}
      <div>
        <BsChevronCompactLeft
          onClick={prevSlide}
          size={30}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        />
      </div>
      {/* Right Arrow */}
      <div>
        <BsChevronCompactRight
          onClick={nextSlide}
          size={30}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        />
      </div>
      <div className="flex justify-center mt-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => gotToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex ? "text-orange-500" : "text-gray-400"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
