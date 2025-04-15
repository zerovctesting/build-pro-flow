
import { HardHat, ClipboardList, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CustomerPersonas = () => {
  const personas = [
    {
      icon: <HardHat className="h-14 w-14 text-buildrunners-blue" />,
      title: "Independent Contractors",
      subtitle: "1–5 person crew",
      description: "Stop losing hours at Home Depot. Get back to work.",
      features: [
        "Fast reordering",
        "Guaranteed stock",
        "No delays"
      ]
    },
    {
      icon: <ClipboardList className="h-14 w-14 text-buildrunners-orange" />,
      title: "Project Managers",
      subtitle: "Keep your team productive",
      description: "Keep crews on-site and productive. Track orders in real time.",
      features: [
        "Scheduled logistics",
        "Centralized visibility",
        "Team ordering access"
      ]
    },
    {
      icon: <Wrench className="h-14 w-14 text-buildrunners-gray" />,
      title: "Tradespeople",
      subtitle: "Electricians, Plumbers & more",
      description: "Parts in stock. Pickup in minutes. Built for your needs.",
      features: [
        "Specialty item availability",
        "Pro-first interface",
        "Technical specifications"
      ]
    }
  ];

  return (
    <section className="py-20 bg-buildrunners-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in-1">
          <h2 className="text-3xl md:text-4xl font-bold text-buildrunners-neutral-900 mb-4">
            Built for Building Professionals
          </h2>
          <p className="text-xl text-buildrunners-gray max-w-2xl mx-auto">
            Solutions tailored to your specific role
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <Card key={index} className="border-none shadow-lg hover-scale animate-fade-in-2">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className="mb-6">{persona.icon}</div>
                <CardTitle className="text-2xl text-buildrunners-neutral-800">{persona.title}</CardTitle>
                <p className="text-sm font-medium text-buildrunners-blue mt-1">{persona.subtitle}</p>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-buildrunners-gray-dark text-lg mb-6">
                  {persona.description}
                </CardDescription>
                <div className="space-y-2">
                  {persona.features.map((feature, i) => (
                    <div key={i} className="flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-buildrunners-blue mr-2"></div>
                      <p className="text-buildrunners-gray-dark">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerPersonas;
