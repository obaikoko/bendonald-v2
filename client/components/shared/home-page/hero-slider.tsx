"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  {
    url: "/images/building1.jpg",
    text1: "Bendonalds International Schools Calabar",
    text2: "Citadel for Future Leaders",
    text3: "Excellence in Education Since 2020",
  },
  {
    url: "/images/building3.jpg",
    text1: "Excellence in Education",
    text2: "Empowering Future Leaders Through Knowledge",
    text3: "British, Jolly Phonics & Nigerian Curricula",
  },
  {
    url: "/images/exam.jpg",
    text1: "Unlock Your Child's Potential",
    text2: "An Investment in Education Lasts a Lifetime",
    text3: "From Crèche to Secondary Education",
  },
  {
    url: "/images/building2.jpg",
    text1: "Discover Bendonald's Community",
    text2: "Shaping Bright Futures in a Caring Environment",
    text3: "Join Our Thriving Educational Community",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden">
      {images.map((image, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ${
            i === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={image.url}
            alt={image.text1}
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center space-y-6 p-8">
            <div className="max-w-4xl mx-auto space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {image.text1}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold ">
                {image.text2}
              </p>
              <p className="text-lg md:text-xl text-blue-200">{image.text3}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Play/Pause Button */}
      <div className="absolute top-4 right-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlayPause}
          className="w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentSlide === i
                ? "bg-gray-400 scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
