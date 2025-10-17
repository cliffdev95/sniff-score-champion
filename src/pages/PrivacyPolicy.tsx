import Navigation from "@/components/Navigation";
import BubbleBackground from "@/components/BubbleBackground";
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen relative pb-20 md:pb-8">
      <BubbleBackground />
      <div className="relative z-10">
        <Navigation />
      
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="text-6xl">🔒</div>
              <h1 className="font-heading text-5xl md:text-6xl">Privacy Policy</h1>
              <p className="text-xl text-muted-foreground">
                Your data is safe—we promise we're not sniffing around
              </p>
              <p className="text-sm text-muted-foreground">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <Card className="p-8 md:p-12 rounded-3xl shadow-bubble border-4 border-primary/20 space-y-8">
              <section className="space-y-4">
                <h2 className="font-heading text-3xl text-primary">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to SniffCheck! We take your privacy seriously (even if we don't take ourselves seriously). 
                  This Privacy Policy explains how we handle information when you use our goofy hygiene calculator at sniffcheck.tech.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  TL;DR: We don't collect or store personal information. We just want to make you laugh and maybe encourage better shower habits.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-3xl text-primary">Information We Don't Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SniffCheck does NOT collect, store, or process any personally identifiable information (PII). We can't smell you through the screen, 
                  and we don't know your name, email, address, or shower schedule. All calculations happen right in your browser—no databases, 
                  no accounts, no tracking who last showered when.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-3xl text-primary">Cookies & Local Storage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use minimal cookies or browser local storage to remember your preferences or improve your experience 
                  (like keeping your last score visible). These are stored locally on your device and are never sent to us or any third party.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-3xl text-primary">Google AdSense & Third-Party Advertising</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SniffCheck uses Google AdSense to display ads that help keep the lights on (and the soap dispensers full). 
                  Google AdSense may use cookies and web beacons to serve ads based on your prior visits to this website or other websites. 
                  Google's use of advertising cookies enables it and its partners to serve ads based on your visits to our site and/or other sites on the Internet.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You can opt out of personalized advertising by visiting{" "}
                  <a 
                    href="https://www.google.com/settings/ads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    Google's Ads Settings
                  </a>
                  . You can also opt out via the{" "}
                  <a 
                    href="http://www.aboutads.info/choices/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    Network Advertising Initiative opt-out page
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-3xl text-primary">Analytics</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may use basic analytics tools (like Google Analytics or similar services) to understand how visitors use our site—things like 
                  page views, button clicks, and general traffic patterns. This helps us make SniffCheck better and funnier. 
                  These analytics are anonymized and aggregated, meaning we can't identify individual users.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-3xl text-primary">External Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SniffCheck may contain links to external websites (like social media or hygiene tips). We're not responsible for the privacy practices 
                  of those sites. When you leave SniffCheck, we recommend reviewing the privacy policies of any site you visit.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-3xl text-primary">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SniffCheck is intended for general audiences and does not knowingly collect information from children under 13. 
                  If you're a kid reading this, go ask your parents if you need a shower. They'll know.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-3xl text-primary">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Since we don't collect personal data, there's nothing for hackers to steal! Your shower secrets are safe. 
                  All calculations are done client-side in your browser.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-3xl text-primary">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. 
                  We encourage you to check back occasionally, though let's be honest—you probably have better things to do.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-3xl text-primary">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, or if you want to tell us a funny shower-related story, 
                  feel free to reach out via our{" "}
                  <a href="/contact" className="text-primary hover:underline font-semibold">
                    Contact page
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-4 pt-4 border-t-2 border-primary/10">
                <p className="text-sm text-muted-foreground italic">
                  Remember: SniffCheck is a parody website for entertainment purposes. We're not doctors, scientists, or professional sniffers. 
                  Just a bunch of people who think hygiene can be funny. Stay fresh! 🧼✨
                </p>
              </section>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
