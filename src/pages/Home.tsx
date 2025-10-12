import Navigation from "@/components/Navigation";
import SniffCalculator from "@/components/SniffCalculator";
import { Button } from "@/components/ui/button";

const Home = () => {
  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-8xl animate-bounce">🧼</div>
          <h1 className="font-heading text-6xl md:text-7xl leading-tight">
            How Funky Are You Today?
          </h1>
          <p className="text-2xl text-muted-foreground">
            Get your SniffScore before your friends do!
          </p>
          <Button
            onClick={scrollToCalculator}
            size="lg"
            className="rounded-full text-xl px-8 py-6 font-semibold shadow-bubble transition-bouncy hover:scale-110"
          >
            Find My SniffScore 🧼
          </Button>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="font-heading text-4xl">Your Funk Level Calculator</h2>
            <p className="text-lg text-muted-foreground">
              Move the slider to reveal how long it's been since your last shower. 
              Get a totally scientific rating from 'Fresh as a Daisy 🌸' to 'Nuclear Stank ☢️'.
            </p>
          </div>
          
          <SniffCalculator />
        </div>
      </section>

      {/* Highlight Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="p-10 rounded-3xl bg-accent/30 border-4 border-accent shadow-bubble text-center">
            <div className="text-6xl mb-4">🧪</div>
            <h2 className="font-heading text-4xl mb-4">100% Real AI Sniff Technology</h2>
            <p className="text-lg">
              SniffScore uses cutting-edge algorithms (and imaginary nanobots) to detect 
              your aura of freshness. Trust the science.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-muted-foreground">
        <p>Made with 🧼 and questionable humor</p>
        <p className="text-sm mt-2">Remember: Deodorant is not a shower replacement!</p>
      </footer>
    </div>
  );
};

export default Home;
