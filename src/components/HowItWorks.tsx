
import { FileText, ShoppingCart, Building, Clock } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Apply",
      description: "Submit your business details (website, description, contact info).",
      color: "bg-buildrunners-blue"
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-white" />,
      title: "Order",
      description: "Browse our guaranteed-in-stock catalog online.",
      color: "bg-buildrunners-orange"
    },
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: "Choose",
      description: "Opt for same/next-day delivery or pickup.",
      color: "bg-buildrunners-gray"
    },
    {
      icon: <Building className="h-10 w-10 text-white" />,
      title: "Build",
      description: "Focus on your project, not supply runs.",
      color: "bg-buildrunners-blue-dark"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in-1">
          <h2 className="text-3xl md:text-4xl font-bold text-buildrunners-neutral-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-buildrunners-gray max-w-2xl mx-auto">
            Four simple steps to streamline your material sourcing
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center animate-fade-in-2">
              <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                {step.icon}
              </div>
              <div className="relative pb-10 md:pb-0 md:h-6">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-3 left-[50%] w-full h-0.5 bg-buildrunners-neutral-300"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-buildrunners-neutral-900 mb-2">{step.title}</h3>
              <p className="text-buildrunners-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
