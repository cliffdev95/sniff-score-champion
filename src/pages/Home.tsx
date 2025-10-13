import Navigation from "@/components/Navigation";
import SniffCalculator from "@/components/SniffCalculator";
import BubbleBackground from "@/components/BubbleBackground";
import { Button } from "@/components/ui/button";

const Home = () => {
  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative pb-20 md:pb-8">
      <BubbleBackground />
      <div className="relative z-10">
        <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <div className="text-6xl md:text-8xl animate-bounce">🧼</div>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight px-2">
            How Funky Are You Today?
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground px-4">
            Get your SniffScore before your friends do!
          </p>
          <Button
            onClick={scrollToCalculator}
            size="lg"
            className="rounded-full text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 font-semibold shadow-bubble transition-bouncy hover:scale-110 w-full sm:w-auto"
          >
            Find My SniffScore 🧼
          </Button>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-2xl mx-auto space-y-6 md:space-y-8">
          <div className="text-center space-y-4 px-2">
            <h2 className="font-heading text-3xl md:text-4xl">Your Funk Level Calculator</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Enter your name (optional), adjust the slider, and get a totally scientific rating from 'Fresh as a Daisy 🌸' to 'Nuclear Stank ☢️'.
            </p>
          </div>
          
          <SniffCalculator />
        </div>
      </section>

      {/* Highlight Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-3xl mx-auto px-2">
          <div className="p-6 md:p-10 rounded-3xl bg-accent/30 border-4 border-accent shadow-bubble text-center">
            <div className="text-5xl md:text-6xl mb-4">🧪</div>
            <h2 className="font-heading text-2xl md:text-4xl mb-4">100% Real AI Sniff Technology</h2>
            <p className="text-base md:text-lg">
              SniffScore uses cutting-edge algorithms (and imaginary nanobots) to detect 
              your aura of freshness. Trust the science.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 md:py-12 text-center text-muted-foreground">
        <p className="text-sm md:text-base">Made with 🧼 and questionable humor</p>
        <p className="text-xs md:text-sm mt-2">Remember: Deodorant is not a shower replacement!</p>
        <p className="text-xs mt-4 italic">No noses were harmed in the making of this website 🫧</p>
      </footer>
      </div>
    </div>
  );
};

export default Home;
