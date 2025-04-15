
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPreview = () => {
  const articles = [
    {
      title: "How to Cut Supply Run Time by 80%",
      description: "Learn how top contractors are eliminating wasted time and keeping crews productive.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Why Pros Are Ditching Big Box Stores for Scheduled Delivery",
      description: "The hidden costs of traditional supply runs and how to eliminate them.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <section className="py-20 bg-buildrunners-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 animate-fade-in-1">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-buildrunners-neutral-900 mb-4">
              Resources for Pros
            </h2>
            <p className="text-xl text-buildrunners-gray max-w-2xl">
              Expert insights to help you optimize your business
            </p>
          </div>
          <Button variant="link" className="text-buildrunners-blue flex items-center no-underline mt-4 md:mt-0">
            View all resources <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden hover-scale animate-fade-in-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-buildrunners-neutral-800">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-buildrunners-gray-dark">
                  {article.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-buildrunners-blue hover:text-buildrunners-blue-dark p-0">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
          
          <Card className="border-none shadow-lg bg-buildrunners-blue text-white hover-scale animate-fade-in-3">
            <CardHeader>
              <Calculator className="h-12 w-12 mb-4" />
              <CardTitle className="text-xl">ROI Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-buildrunners-neutral-200">
                See how much time and money you'll save by eliminating supply runs.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="bg-white text-buildrunners-blue hover:bg-buildrunners-neutral-200">
                Calculate Your Savings
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
