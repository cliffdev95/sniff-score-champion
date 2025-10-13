import Navigation from "@/components/Navigation";
import BubbleBackground from "@/components/BubbleBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields! Even funky people need to be complete.");
      return;
    }

    toast.success("Message sent! We'll sniff out your inquiry soon! 👃");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen relative pb-20 md:pb-8">
      <BubbleBackground />
      <div className="relative z-10">
        <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="text-6xl">📬</div>
            <h1 className="font-heading text-5xl md:text-6xl">Got Questions or New Scents?</h1>
            <p className="text-xl text-muted-foreground">
              Send us your freshest ideas (or confessions). We promise not to judge your hygiene habits… much.
            </p>
          </div>

          <Card className="p-8 rounded-3xl shadow-bubble border-4 border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-semibold">Your Name</label>
                <Input
                  id="name"
                  placeholder="Fresh Frank or Funky Fiona"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-xl border-2"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-semibold">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="totally.showered@clean.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl border-2"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-semibold">Message</label>
                <Textarea
                  id="message"
                  placeholder="Share your thoughts, confessions, or shower routines..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl border-2 min-h-32"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full font-semibold transition-bouncy hover:scale-105"
              >
                Send Message 📤
              </Button>
            </form>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-6 rounded-2xl text-center shadow-card">
              <div className="text-4xl mb-2">🚿</div>
              <h3 className="font-heading text-lg mb-1">Clean Support</h3>
              <p className="text-sm text-muted-foreground">We respond within 24 showers</p>
            </Card>
            
            <Card className="p-6 rounded-2xl text-center shadow-card">
              <div className="text-4xl mb-2">💡</div>
              <h3 className="font-heading text-lg mb-1">Fresh Ideas</h3>
              <p className="text-sm text-muted-foreground">Suggest new rating levels</p>
            </Card>
            
            <Card className="p-6 rounded-2xl text-center shadow-card">
              <div className="text-4xl mb-2">🎉</div>
              <h3 className="font-heading text-lg mb-1">Share Stories</h3>
              <p className="text-sm text-muted-foreground">Tell us your SniffScore tales</p>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
