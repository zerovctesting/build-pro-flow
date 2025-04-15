
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-buildrunners-neutral-100 opacity-90 z-0"></div>
      
      {/* Blue gradient accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-buildrunners-blue-light/30 to-transparent rounded-bl-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              <Button variant="outline" className="border-buildrunners-gray text-buildrunners-gray hover:bg-buildrunners-gray hover:text-white px-6 py-6 text-lg">
                Browse Catalog
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-2">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-buildrunners-orange/10 rounded-full"></div>
            <div className="relative bg-white shadow-xl rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1574746436509-97c409a267c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Contractor receiving materials on-site" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-buildrunners-blue to-transparent p-6">
                <p className="text-white font-medium">Materials delivered right when you need them.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
