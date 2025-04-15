
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-buildrunners-neutral-800 text-buildrunners-neutral-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-bold text-white text-lg mb-4">BuildRunners</h3>
            <p className="mb-6">
              Guaranteed delivery and pickup for building professionals. No more wasted time at the store.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-buildrunners-neutral-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-buildrunners-neutral-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-buildrunners-neutral-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-buildrunners-neutral-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Same Day Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Express Pickup</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pro Membership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bulk Ordering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Credit Program</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-buildrunners-neutral-700 pt-8 mt-8 text-center md:text-left md:flex md:justify-between md:items-center">
          <p>© 2025 BuildRunners. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built for Pros, by Pros.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
