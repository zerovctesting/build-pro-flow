
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceFeatures from "@/components/ServiceFeatures";
import HowItWorks from "@/components/HowItWorks";
import CustomerPersonas from "@/components/CustomerPersonas";
import OurCatalog from "@/components/OurCatalog";
import FAQ from "@/components/FAQ";
import ProMembership from "@/components/ProMembership";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServiceFeatures />
      <HowItWorks />
      <CustomerPersonas />
      <OurCatalog />
      <ProMembership />
      <FAQ />
      <Testimonials />
      <BlogPreview />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
