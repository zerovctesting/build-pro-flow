
import { Clock, Package, Truck, UserPlus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceFeatures = () => {
  const features = [
    {
      icon: <Truck className="h-10 w-10 text-buildrunners-blue" />,
      title: "Reliable Delivery",
      description: "Schedule a 2-hour delivery window, starting just 2 hours from now. No more delays. No more stockouts. Guaranteed."
    },
    {
      icon: <Package className="h-10 w-10 text-buildrunners-orange" />,
      title: "Efficient Pickup",
      description: "McAuto-Style Pickup: Order online, grab and go. Everything you see is in stock. Skip the lines and the guesswork."
    },
    {
      icon: <Clock className="h-10 w-10 text-buildrunners-blue-light" />,
      title: "Time-Saving",
      description: "Reclaim 10+ hours a week lost to supply runs. Your time is billable. Don't waste it at the store."
    },
    {
      icon: <UserPlus className="h-10 w-10 text-buildrunners-gray" />,
      title: "Pro-Exclusive Access",
      description: "A Costco-like membership for contractors. Pro-only access means no DIYers, no distractions."
    }
  ];

  return (
    <section id="features" className="py-20 bg-buildrunners-neutral-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in-1">
          <h2 className="text-3xl md:text-4xl font-bold text-buildrunners-neutral-900 mb-4">
            Services Built for Professionals
          </h2>
          <p className="text-xl text-buildrunners-gray max-w-2xl mx-auto">
            Stop wasting time at big box stores. Get back to what matters: building.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover-scale animate-fade-in-2">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-buildrunners-blue-dark">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-buildrunners-gray-dark text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
