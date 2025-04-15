
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative bg-white shadow-xl rounded-lg overflow-hidden aspect-[16/9]">
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
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default HeroCarousel;
