
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="pt-20 pb-12 md:pt-32 md:pb-16 relative overflow-hidden min-h-[90vh]">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-buildrunners-neutral-100 opacity-90 z-0"></div>
      
      {/* Blue gradient accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-buildrunners-blue-light/30 to-transparent rounded-bl-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Mobile: Carousel appears first */}
          <div className="w-full aspect-square md:hidden animate-fade-in-1 mb-8">
            <HeroCarousel />
          </div>

          <div className="animate-fade-in-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-buildrunners-neutral-900 leading-tight text-shadow mb-4">
              Never Waste Time at the Store Again.
            </h1>
            <p className="text-xl md:text-2xl font-medium text-buildrunners-blue mb-6">
              Built for Pros, by Pros.
            </p>
            <p className="text-lg text-buildrunners-gray mb-8 max-w-lg">
              Guaranteed same/next-day delivery or ready-to-pickup materials — exclusively for approved building professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-buildrunners-blue hover:bg-buildrunners-blue-dark text-white px-6 py-6 text-lg">
                Apply for Pro Access
              </Button>
            </div>
          </div>
          
          {/* Desktop: Carousel appears on the right */}
          <div className="hidden md:block relative animate-fade-in-2">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-buildrunners-orange/10 rounded-full"></div>
            <div className="aspect-square">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
