"use client";
import React, { useState, useEffect } from "react";
import { Heart, Pause, Play } from "lucide-react";
import Link from "next/link";

interface BirthdaySlide {
  id: number;
  image: string;
  score: number;
}

export default function Birthday() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPortrait, setIsPortrait] = useState(false);

  const slides: BirthdaySlide[] = [
    {
      id: 2023,
      image: "/image/home/2023.png",
      score: 2023,
    },
    {
      id: 2024,
      image: "/image/home/2024.png",
      score: 2024,
    },
    {
      id: 2025,
      image: "/image/home/2025.png",
      score: 2025,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);

    const checkOrientation = () => {
      setIsPortrait(window.innerWidth < window.innerHeight);
    };

    checkOrientation();

    window.addEventListener("resize", checkOrientation);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", checkOrientation);
    };
  }, [slides.length]);

  const PhoneFrame = ({ images }: { images: string[] }) => (
    <div className="w-40 border-2 border-white rounded-lg p-2 bg-white shadow-lg transform transition-all duration-1000 hover:scale-105">
      <div className="space-y-2">
        {images.map((image, index) => (
          <div key={index} className="space-y-1">
            <img
              src={image}
              alt={`Memory ${index + 1}`}
              className="w-full h-24 object-cover rounded-lg"
            />
            <div className="text-center text-xs font-semibold">
              {index === 0 ? "HAPPY" : "BIRTHDAY!"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 overflow-auto bg-gradient-to-b from-pink-50 to-blue-50">
      <div
        className={`h-full flex items-center justify-center transition-transform duration-700
          ${isPortrait ? "rotate-90 origin-center w-[120%]" : "w-full"}`}
      >
        <div
          className={`max-w-5xl mx-auto scale-90 ${
            isPortrait ? "scale-75" : "scale-110"
          }`}
        >
          <div className="text-center mb-12 relative">
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              HAPPY BIRTHDAY!
            </h1>
            <div className="relative inline-block z-10">
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden mx-auto bg-white shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={slides[currentSlide].image}
                  alt="Birthday Person"
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg animate-bounce">
                <span className="text-2xl">❤️</span>
              </div>
            </div>

            <div className="absolute left-1/2 top-full -translate-x-1/2 w-0.5 h-6 bg-gray-300" />
            <div className="absolute left-1/2 top-[calc(100%+1.5rem)] -translate-x-1/2 w-[43%] h-0.5 bg-gray-300 -translate-y-1/2" />
            {/* {slides.map((_, index) => (
              <div
                key={index}
                className="absolute top-[calc(100%+1.5rem)] bg-gray-300"
                style={{
                  left: `${25 + index * 25}%`,
                  width: "0.125rem",
                  height: "1.5rem",
                  transform: "translateX(-50%)",
                }}
              />
            ))} */}
          </div>

          <div className="flex flex-col items-center relative">
            <div className="flex justify-between gap-16 w-full mb-12">
              <PhoneFrame images={[slides[0].image, slides[1].image]} />
              <div className="w-full max-w-3xl">
                <div className="flex justify-between items-center mb-6">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className="flex flex-col items-center space-y-3 relative"
                    >
                      <Link
                        href={`${slide.score}`}
                        className={`bg-white rounded-full p-2 hover:bg-gray-100 transition-all transform hover:scale-110
                          ${currentSlide === index ? "shadow-lg" : ""}`}
                        onClick={() => setCurrentSlide(index)}
                      >
                        <Play
                          className={`w-6 h-6 ${
                            currentSlide === index
                              ? "text-blue-500"
                              : "text-gray-600"
                          }`}
                        />
                      </Link>
                      <div className="w-28 bg-white rounded-lg p-2 shadow-lg transform transition-all duration-300 hover:scale-105">
                        <img
                          src={slide.image}
                          alt={`Slide ${slide.id}`}
                          className="w-full h-20 object-cover rounded-lg mb-2"
                        />
                        <div className="text-center text-sm font-semibold">
                          {slide.score}
                        </div>
                      </div>
                      <div
                        className={`bg-white p-2 text-sm rounded-full flex items-center justify-center font-semibold shadow-md`}
                      >
                        <Heart
                          className={`w-4 h-4 transition-colors duration-300 ${
                            currentSlide === index
                              ? "text-red-500"
                              : "text-gray-400"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-2 bg-gray-200 rounded-full relative overflow-hidden shadow-inner">
                  <div
                    className="absolute h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-300"
                    style={{
                      width: `${(currentSlide / (slides.length - 1)) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <PhoneFrame images={[slides[2].image, slides[0].image]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
