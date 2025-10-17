import Navigation from "@/components/Navigation";
import BubbleBackground from "@/components/BubbleBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Shield, Laugh } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen relative pb-20 md:pb-8">
      <BubbleBackground />
      <div className="relative z-10">
        <Navigation />
      
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="text-6xl animate-wobble">🧼</div>
              <h1 className="font-heading text-5xl md:text-6xl">About SniffCheck</h1>
              <p className="text-xl text-muted-foreground">
                Where hygiene meets hilarity, one shower at a time
              </p>
            </div>

            <Card className="p-8 md:p-12 rounded-3xl shadow-bubble border-4 border-primary/20 space-y-8">
              <section className="space-y-4">
                <h2 className="font-heading text-3xl text-primary">What Is SniffCheck?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SniffCheck (aka SniffScore) is a playful web app that estimates freshness based on when you last showered. 
                  Think of it as a lighthearted report — for laughs, not for medical advice.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Powered by playful algorithms and a sprinkle of humor, SniffCheck analyzes simple inputs and gives a friendly score.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-3xl text-primary">Why Does This Exist?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Great question! We created SniffCheck because the internet needed another ridiculous calculator, and also because:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="flex gap-3 p-4 rounded-2xl bg-secondary/30">
                    <Laugh className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Make People Laugh</h3>
                      <p className="text-sm text-muted-foreground">
                        Life's too short to be serious about everything. Sometimes you just need to check if you're "Spring Breeze Fresh."
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-4 rounded-2xl bg-secondary/30">
                    <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Encourage Good Hygiene</h3>
                      <p className="text-sm text-muted-foreground">
                        If our goofy calculator convinces even one person to shower more regularly, we've done our job.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-4 rounded-2xl bg-secondary/30">
                    <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Spread Joy</h3>
                      <p className="text-sm text-muted-foreground">
                        We wanted to create something wholesome, shareable, and fun. No drama, just positive vibes.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-4 rounded-2xl bg-secondary/30">
                    <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Privacy-Friendly Fun</h3>
                      <p className="text-sm text-muted-foreground">
                        No tracking, no accounts, no judgment (except the funny kind). Your shower secrets stay with you.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-3xl text-primary">Is This Scientifically Accurate?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Absolutely not! SniffCheck is pure parody—a comedy project, not a medical device. Our "AI Sniff Technology" is about as real 
                  as a chocolate teapot. We don't actually smell you (thank goodness), and our scores are based on simple time calculations, 
                  a sprinkle of randomness, and a dash of comedy.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you need real hygiene advice, consult a doctor. If you need a laugh and a gentle reminder to shower, you're in the right place.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-3xl text-primary">Our Mission</h2>
                <p className="text-lg font-semibold text-primary">
                  To make the internet a funnier, fresher place—one calculated SniffScore at a time. 🚿✨
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe laughter is contagious and that good hygiene can be celebrated with confetti, uplifting messages, and friendly encouragement.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-3xl text-primary">Who Made This?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SniffCheck was created by a small team of developers, designers, and hygiene enthusiasts. We're passionate about building fun, lighthearted web experiences that bring people together.
                </p>
              </section>

              <section className="space-y-4 pt-4 border-t-2 border-primary/10">
                <h2 className="font-heading text-2xl text-primary">Ready to Get Your SniffScore?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Calculate your freshness level, share your results with friends, and remember: a shower a day helps you feel your best!
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link to="/">
                    <Button size="lg" className="rounded-full font-semibold text-lg">
                      🧼 Check Your Score
                    </Button>
                  </Link>
                  <Link to="/faq">
                    <Button variant="outline" size="lg" className="rounded-full font-semibold text-lg">
                      ❓ Read FAQs
                    </Button>
                  </Link>
                </div>
              </section>

              <section className="text-center py-4">
                <p className="text-sm text-muted-foreground italic">
                  Disclaimer: SniffCheck is for entertainment only and does not represent medical advice.
                </p>
              </section>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
