
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-buildrunners-blue relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover opacity-15"></div>
      <div className="absolute inset-0 bg-buildrunners-blue-dark opacity-80"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-1">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Eliminate the Shop Run?
          </h2>
          <p className="text-xl text-buildrunners-neutral-200 mb-10 max-w-xl mx-auto">
            Join thousands of professionals who've taken back control of their time and improved project profitability.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-2">
            <Button className="bg-white text-buildrunners-blue-dark hover:bg-buildrunners-neutral-200 px-8 py-6 text-lg font-medium">
              Apply for Pro Access
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium">
              Browse Catalog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <p className="text-buildrunners-neutral-200 mt-8 animate-fade-in-3">
            Questions? Call 1-800-BULD-NOW or email support@buildrunners.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
