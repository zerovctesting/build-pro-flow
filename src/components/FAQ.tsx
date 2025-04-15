
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does the price match guarantee work?",
    answer: "Simply show us a competitor's current price or discount for the same item, and we'll match it. This includes both local retailers and online stores."
  },
  {
    question: "What areas do you deliver to?",
    answer: "We deliver to all major construction sites and locations within our service area. Contact us for specific delivery zone information."
  },
  {
    question: "How quickly can I get my materials?",
    answer: "We offer same-day or next-day delivery for most items in our catalog, depending on your location and the time of order."
  },
  {
    question: "Do you offer bulk pricing?",
    answer: "Yes, we offer competitive bulk pricing for larger orders. Contact our sales team for detailed pricing information."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-buildrunners-neutral-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-buildrunners-gray">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
