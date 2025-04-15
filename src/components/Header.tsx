
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-buildrunners-blue">
              BuildRunners
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-buildrunners-gray-dark hover:text-buildrunners-blue font-medium transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-buildrunners-gray-dark hover:text-buildrunners-blue font-medium transition-colors">
              How It Works
            </a>
            <a href="#pro-membership" className="text-buildrunners-gray-dark hover:text-buildrunners-blue font-medium transition-colors">
              Pro Membership
            </a>
            <Button variant="outline" className="border-buildrunners-blue text-buildrunners-blue hover:bg-buildrunners-blue hover:text-white">
              Log In
            </Button>
            <Button className="bg-buildrunners-blue hover:bg-buildrunners-blue-dark text-white">
              Apply Now
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-buildrunners-gray-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a href="#features" className="text-buildrunners-gray-dark py-2 px-4 hover:bg-buildrunners-neutral-200 rounded-md">
              Features
            </a>
            <a href="#how-it-works" className="text-buildrunners-gray-dark py-2 px-4 hover:bg-buildrunners-neutral-200 rounded-md">
              How It Works
            </a>
            <a href="#pro-membership" className="text-buildrunners-gray-dark py-2 px-4 hover:bg-buildrunners-neutral-200 rounded-md">
              Pro Membership
            </a>
            <Button variant="outline" className="border-buildrunners-blue text-buildrunners-blue hover:bg-buildrunners-blue hover:text-white w-full">
              Log In
            </Button>
            <Button className="bg-buildrunners-blue hover:bg-buildrunners-blue-dark text-white w-full">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
