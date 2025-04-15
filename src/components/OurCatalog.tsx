
import { Tag, Box } from "lucide-react";

const OurCatalog = () => {
  return (
    <section className="py-20 bg-buildrunners-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-buildrunners-neutral-900 mb-6">
            Our Comprehensive Catalog
          </h2>
          <p className="text-xl text-buildrunners-gray mb-8">
            Over 5,000+ essential items to complete any construction project
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Box className="w-10 h-10 text-buildrunners-blue mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Complete Inventory</h3>
              <p className="text-buildrunners-gray">
                Everything you need, from basic supplies to specialized equipment, all in one place.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Tag className="w-10 h-10 text-buildrunners-orange mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Price Match Guarantee</h3>
              <p className="text-buildrunners-gray">
                We match any retailer's price or discount. Show us a better price, and we'll match it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCatalog;
