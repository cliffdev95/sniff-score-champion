import Navigation from "@/components/Navigation";
import BubbleBackground from "@/components/BubbleBackground";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen relative pb-20 md:pb-8">
      <BubbleBackground />
      <div className="relative z-10">
        <Navigation />

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="text-6xl">📜</div>
              <h1 className="font-heading text-5xl md:text-6xl">Terms of Use</h1>
              <p className="text-xl text-muted-foreground">These terms explain how you may use SniffCheck. Keep it friendly and fun.</p>
            </div>

            <Card className="p-8 md:p-12 rounded-3xl shadow-bubble border-4 border-primary/20 space-y-6">
              <p className="text-muted-foreground">
                SniffCheck is provided for entertainment purposes only. Do not rely on the results for medical, legal, or professional advice.
                Use the site responsibly and treat other users with respect. By using SniffCheck you agree to these simple, friendly terms.
              </p>

              <h3 className="font-heading text-lg mt-4">Reporting and Safety</h3>
              <p className="text-muted-foreground">If you see inappropriate content, please use the report tools or contact us and we will review it promptly.</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
