
import * as React from "react";
import { Circle, CircleDot } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel/carousel-types";
import { useEffect, useState } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1574746436509-97c409a267c5",
    alt: "Contractor receiving materials on-site",
  },
  {
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    alt: "Professional construction management software",
  },
  {
    url: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    alt: "Quick delivery to construction sites",
  },
];

const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    // Auto-rotate every 1.8 seconds
    const autoplayInterval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 1800);

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
      clearInterval(autoplayInterval);
    };
  }, [api]);

  return (
    <div className="relative h-full">
      <Carousel 
        className="w-full h-full" 
        opts={{ loop: true }} 
        setApi={setApi}
      >
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem 
              key={index} 
              className="h-full"
            >
              <div className="relative bg-white shadow-xl rounded-lg overflow-hidden h-full">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-buildrunners-blue to-transparent p-6">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className="focus:outline-none"
          >
            {index === currentSlide ? (
              <CircleDot className="w-4 h-4 text-white" />
            ) : (
              <Circle className="w-4 h-4 text-white/60" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
