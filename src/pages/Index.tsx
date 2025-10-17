import { useRef } from "react";
import Navigation from "@/components/Navigation";
import SniffCalculator from "@/components/SniffCalculator";
import BubbleBackground from "@/components/BubbleBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Target, TrendingUp, Shield } from "lucide-react";

const Home = () => {
  const calculatorRef = useRef<HTMLDivElement>(null);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative pb-20 md:pb-8">
      <BubbleBackground />
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in">
            <div className="space-y-3">
              <div className="text-6xl md:text-8xl mb-4 animate-bounce">
                👃✨
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl leading-tight px-2 bg-gradient-fresh bg-clip-text text-transparent">
                Rate Your Funk.<br />Face Your Fate.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-semibold max-w-2xl mx-auto px-4">
                SniffCheck uses science (and sass) to rate your body odor based on when you last showered.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                onClick={scrollToCalculator}
                size="lg"
                className="w-full sm:w-auto rounded-full font-bold text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 h-auto shadow-glow hover:scale-110 transition-bouncy pulse-glow"
              >
                🚿 Start My Sniff Test
              </Button>
            </div>

            <p className="text-sm md:text-base text-muted-foreground italic px-4">
              100% scientific. 0% judgemental. (Okay, maybe a little judgemental.) 😏
            </p>
          </div>
        </section>

        {/* Info Cards */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 md:p-8 rounded-3xl shadow-bubble border-2 border-primary/20 hover:scale-105 transition-smooth bg-gradient-to-br from-card to-accent/10">
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-5xl">🧪</div>
                <h3 className="font-heading text-xl md:text-2xl">AI-Powered</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Our totally real AI sniffs your vibes and calculates your exact funk level.
                </p>
              </div>
            </Card>

            <Card className="p-6 md:p-8 rounded-3xl shadow-bubble border-2 border-secondary/20 hover:scale-105 transition-smooth bg-gradient-to-br from-card to-secondary/10">
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-5xl">🏆</div>
                <h3 className="font-heading text-xl md:text-2xl">Compete</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Climb the leaderboard and prove you're the funkiest (or freshest) in the game.
                </p>
              </div>
            </Card>

            <Card className="p-6 md:p-8 rounded-3xl shadow-bubble border-2 border-accent/30 hover:scale-105 transition-smooth bg-gradient-to-br from-card to-accent/20">
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-5xl">😂</div>
                <h3 className="font-heading text-xl md:text-2xl">Share</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Show your friends your official SniffScore certificate. They'll love it. Maybe.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="font-heading text-3xl md:text-5xl">How It Works</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Three simple steps to discover your destiny (and your stench level)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3 p-6 rounded-2xl bg-card/50 border-2 border-primary/10">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-2xl md:text-3xl font-heading">
                  1
                </div>
                <Target className="w-8 h-8 md:w-10 md:h-10 mx-auto text-primary" />
                <h3 className="font-heading text-lg md:text-xl">Enter Your Time</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Slide, type, or let AI guess when you last showered. No shame... much.
                </p>
              </div>

              <div className="text-center space-y-3 p-6 rounded-2xl bg-card/50 border-2 border-secondary/10">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto text-2xl md:text-3xl font-heading">
                  2
                </div>
                <Sparkles className="w-8 h-8 md:w-10 md:h-10 mx-auto text-secondary" />
                <h3 className="font-heading text-lg md:text-xl">Get Sniffed</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Our advanced algorithms process your hygiene data with cutting-edge sass.
                </p>
              </div>

              <div className="text-center space-y-3 p-6 rounded-2xl bg-card/50 border-2 border-accent/20">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto text-2xl md:text-3xl font-heading">
                  3
                </div>
                <TrendingUp className="w-8 h-8 md:w-10 md:h-10 mx-auto text-accent-foreground" />
                <h3 className="font-heading text-lg md:text-xl">Get Roasted</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Receive your official SniffScore, ranking, and certificate of funkiness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section ref={calculatorRef} className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <Card className="p-6 md:p-10 rounded-3xl shadow-glow border-4 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <div className="space-y-6">
                <div className="text-center space-y-3">
                  <h2 className="font-heading text-3xl md:text-5xl">Ready to Get Tested?</h2>
                  <p className="text-base md:text-lg text-muted-foreground">
                    Answer honestly. The nose knows. 👃
                  </p>
                </div>
                <SniffCalculator />
              </div>
            </Card>
          </div>
        </section>

        {/* AI Tech Section */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 rounded-3xl shadow-bubble border-2 border-accent/20 bg-gradient-funky">
              <div className="text-center space-y-4">
                <Shield className="w-12 h-12 md:w-16 md:h-16 mx-auto text-foreground" />
                <h2 className="font-heading text-2xl md:text-4xl">Advanced AI Sniff Technology™</h2>
                <p className="text-base md:text-lg max-w-2xl mx-auto">
                  Powered by proprietary odor-detection algorithms and a sprinkle of comedy, SniffCheck delivers results you can trust (sort of). Your data stays private—we only judge your hygiene, not your privacy.
                </p>
                <p className="text-sm md:text-base text-muted-foreground italic">
                  * Not actually AI. Definitely actually judgemental.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="text-5xl md:text-6xl">🧼</div>
            <h2 className="font-heading text-2xl md:text-4xl">Remember: Showering is Cool</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              SniffCheck is fun, but hygiene is real. Please shower regularly. Your friends will thank you. 🙏
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
