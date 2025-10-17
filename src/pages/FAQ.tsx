import Navigation from "@/components/Navigation";
import BubbleBackground from "@/components/BubbleBackground";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can SniffScore actually smell me?",
    a: "Not yet. SniffCheck is a playful app and does not actually smell users. Maybe one day in sci-fi future!",
  },
  {
    q: "Does deodorant count as a shower?",
    a: "Deodorant helps but isn't a full replacement for washing. Water and soap are best for cleaning.",
  },
  {
    q: "What if I bathe in perfume?",
    a: "Fragrance can mask odors briefly, but regular bathing with water and soap is healthier for your skin.",
  },
  {
    q: "How can I improve my SniffScore?",
    a: "Try a quick shower, stay hydrated, and maintain good hygiene habits.",
  },
  {
    q: "Can I challenge my friends to a friendly competition?",
    a: "Sure — keep it kind and fun. Consider challenges that encourage healthy habits.",
  },
  {
    q: "Is SniffScore backed by real science?",
    a: "No. SniffCheck is for entertainment only and not a scientific or medical tool.",
  },
  {
    q: "What's the world record for not showering?",
    a: "We don't track that — focus on healthy habits instead!",
  },
  {
    q: "Can pets use SniffScore?",
    a: "Pets aren't the intended audience, but you can use the site for fun. Keep pet care in line with veterinarian advice.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen relative pb-20 md:pb-8">
      <BubbleBackground />
      <div className="relative z-10">
        <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="text-6xl">🤔</div>
            <h1 className="font-heading text-5xl md:text-6xl">Goofy Questions We Actually Get</h1>
            <p className="text-xl text-muted-foreground">
              Everything you never needed to know about body odor ratings
            </p>
          </div>

          <Card className="p-8 rounded-3xl shadow-bubble border-4 border-primary/20">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b-2 border-primary/10 pb-4"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <div className="text-center p-8 rounded-2xl bg-secondary/30">
            <p className="text-lg font-semibold mb-2">Still confused?</p>
            <p className="text-muted-foreground">
              That's okay. We're confused too. Just remember to shower regularly and you'll be fine! 🚿
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FAQ;
