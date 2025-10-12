import Navigation from "@/components/Navigation";
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
    a: "Not yet. Our AI interns are still developing 'Scratch-n-Sniff 2.0'. But we're optimistic about achieving digital olfactory capabilities by 2077!",
  },
  {
    q: "Does deodorant count as a shower?",
    a: "Nice try. That's like using cologne to fix procrastination. Deodorant is a supplement, not a replacement. Science says so. Probably.",
  },
  {
    q: "What if I bathe in perfume?",
    a: "You'll smell like a fancy candle that's hiding something. Also, your skin will hate you. Just use water and soap like a normal human.",
  },
  {
    q: "How can I improve my SniffScore?",
    a: "Step 1: Water. Step 2: Soap. Step 3: Repeat tomorrow. Revolutionary, we know. We're considering patenting this groundbreaking method.",
  },
  {
    q: "Can I challenge my friends to a stink-off?",
    a: "Yes! We call it 'Survivor: Shower Edition.' Loser buys detergent. Winner gets bragging rights and a functional sense of smell.",
  },
  {
    q: "Is SniffScore backed by real science?",
    a: "Absolutely! We have a team of imaginary scientists working around the clock. Their credentials are as real as our smell-detection technology.",
  },
  {
    q: "What's the world record for not showering?",
    a: "We don't officially track this because we're not monsters. But rumor has it someone named Greg hasn't showered since 2019. Greg, if you're reading this, please bathe.",
  },
  {
    q: "Can pets use SniffScore?",
    a: "Your dog is judging you, not the other way around. But yes, feel free to calculate their score. Just don't tell them the results.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen">
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
  );
};

export default FAQ;
