
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I used to waste 3 hours a week at Home Depot. Now I just click 'reorder' and get back to work.",
      author: "Mike Johnson",
      role: "Independent Contractor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      quote: "My crews stay on-site. No more 'I need to run to the store' excuses. Productivity has increased by 15%.",
      author: "Sarah Williams",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    },
    {
      quote: "As an electrician, finding specialty parts used to take hours. BuildRunners has everything I need, ready for pickup.",
      author: "David Chen",
      role: "Master Electrician",
      image: "https://images.unsplash.com/photo-1618088129969-bcb0c051985e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in-1">
          <h2 className="text-3xl md:text-4xl font-bold text-buildrunners-neutral-900 mb-4">
            What Pros Are Saying
          </h2>
          <p className="text-xl text-buildrunners-gray max-w-2xl mx-auto">
            BuildRunners is transforming how professionals source materials
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover-scale animate-fade-in-2">
              <CardContent className="p-6">
                <div className="mb-6">
                  <QuoteIcon className="h-8 w-8 text-buildrunners-blue-light opacity-50" />
                </div>
                <p className="text-buildrunners-gray-dark mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-buildrunners-neutral-800">{testimonial.author}</p>
                    <p className="text-sm text-buildrunners-gray">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
