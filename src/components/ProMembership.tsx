
import { Button } from "@/components/ui/button";
import { BadgeCheck, HeadphonesIcon, Percent } from "lucide-react";

const ProMembership = () => {
  const benefits = [
    {
      icon: <BadgeCheck className="h-8 w-8 text-buildrunners-blue" />,
      title: "Free Membership",
      description: "Approval required to ensure pro-only access"
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-buildrunners-blue" />,
      title: "Priority Support",
      description: "Direct line to our pro support team"
    },
    {
      icon: <Percent className="h-8 w-8 text-buildrunners-blue" />,
      title: "Bulk Pricing",
      description: "Special rates on high-demand items"
    }
  ];

  return (
    <section id="pro-membership" className="py-24 bg-buildrunners-blue-dark text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-buildrunners-blue rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-buildrunners-blue rounded-tr-full opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Exclusive Access for Building Professionals
          </h2>
          <p className="text-xl text-buildrunners-neutral-200 mb-12 max-w-xl mx-auto">
            Join our community of professionals and transform how you source materials
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-buildrunners-blue bg-opacity-30 rounded-lg p-6 animate-fade-in-2">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-buildrunners-neutral-200">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <Button className="bg-white text-buildrunners-blue-dark hover:bg-buildrunners-neutral-200 px-8 py-6 text-lg font-medium animate-fade-in-3">
            Apply Now — Get Approved in 24 Hours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProMembership;
