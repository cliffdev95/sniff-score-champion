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
          <div className="text-6xl md:text-8xl animate-bounce">👃💦</div>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight px-2">
            How Funky Are You Today?
          </h1>
          <div className="max-w-2xl mx-auto space-y-3 px-4">
            <p className="text-lg md:text-2xl font-semibold text-foreground">
              SniffScore rates how funky you are based on when you last showered 💦👃
            </p>
            <p className="text-base md:text-xl text-muted-foreground">
              The longer you've gone without a shower, the higher (and smellier) your score!
            </p>
            <p className="text-sm md:text-base text-muted-foreground italic">
              No actual sniffing involved... yet 😜
            </p>
          </div>
          <Button
            onClick={scrollToCalculator}
            size="lg"
            className="rounded-full text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 font-semibold shadow-bubble transition-bouncy hover:scale-110 w-full sm:w-auto"
          >
            Calculate My Funk 🧼
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-2xl bg-card border-2 border-primary/20 shadow-card">
              <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="font-heading text-xl mb-2">Enter Details</h3>
              <p className="text-sm text-muted-foreground">
                Tell us when you last showered (be honest! 😏)
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card border-2 border-secondary/20 shadow-card">
              <div className="text-5xl mb-4">2️⃣</div>
              <h3 className="font-heading text-xl mb-2">Calculate Funk</h3>
              <p className="text-sm text-muted-foreground">
                Hit "Calculate My Funk" and watch the magic happen ✨
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card border-2 border-accent/20 shadow-card">
              <div className="text-5xl mb-4">3️⃣</div>
              <h3 className="font-heading text-xl mb-2">Brag or Hide</h3>
              <p className="text-sm text-muted-foreground">
                Share your score... or keep it a secret. Your call 🤐
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-2xl mx-auto space-y-6 md:space-y-8">
          <div className="text-center space-y-4 px-2">
            <h2 className="font-heading text-3xl md:text-4xl">Your Funk Level Calculator</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Slide to reveal your destiny... from 'Fresh as a Daisy 🌸' to 'Nuclear Stank ☢️'
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
