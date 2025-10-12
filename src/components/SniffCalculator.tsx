import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface Rating {
  level: string;
  emoji: string;
  message: string;
  gradient: string;
}

const getRating = (hours: number): Rating => {
  if (hours <= 12) {
    return {
      level: "Fresh as a Daisy",
      emoji: "🌸",
      message: "You're living your best life! Keep up the hygiene game!",
      gradient: "gradient-fresh"
    };
  } else if (hours <= 24) {
    return {
      level: "Citrus Cloud",
      emoji: "☁️",
      message: "Still acceptable in polite society. Barely.",
      gradient: "gradient-fresh"
    };
  } else if (hours <= 48) {
    return {
      level: "Questionable Aura",
      emoji: "🤔",
      message: "Your friends are starting to notice. It's shower o'clock!",
      gradient: "gradient-funky"
    };
  } else if (hours <= 72) {
    return {
      level: "Endangered Air Quality",
      emoji: "🦠",
      message: "Plants are wilting in your presence. Intervention needed!",
      gradient: "gradient-funky"
    };
  } else if (hours <= 120) {
    return {
      level: "Biohazard Alert",
      emoji: "🚨",
      message: "You're a walking ecosystem. Scientists are intrigued.",
      gradient: "gradient-stinky"
    };
  } else {
    return {
      level: "Nuclear Stank",
      emoji: "☢️",
      message: "Congratulations! You've achieved legendary status. Please shower.",
      gradient: "gradient-stinky"
    };
  }
};

const SniffCalculator = () => {
  const [hours, setHours] = useState([24]);
  const rating = getRating(hours[0]);

  const handleShare = () => {
    const message = `My SniffScore: ${rating.level} ${rating.emoji}\nI haven't showered in ${hours[0]} hours! 😂\n\nCheck yours at SniffScore!`;
    
    if (navigator.share) {
      navigator.share({
        title: "My SniffScore",
        text: message,
      });
    } else {
      navigator.clipboard.writeText(message);
      toast.success("Copied to clipboard! Share your funky score! 📋");
    }
  };

  return (
    <Card className="p-8 rounded-3xl shadow-bubble border-4 border-primary/20 bg-card">
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="font-heading text-2xl mb-2">Hours Since Last Shower</h3>
          <p className="text-6xl font-bold font-heading">{hours[0]}</p>
        </div>

        <Slider
          value={hours}
          onValueChange={setHours}
          max={168}
          step={1}
          className="w-full"
        />

        <div className={`p-6 rounded-2xl ${rating.gradient} text-center transform transition-all duration-300 scale-100 hover:scale-105`}>
          <div className="text-7xl mb-2">{rating.emoji}</div>
          <h2 className="font-heading text-3xl mb-2 text-foreground">{rating.level}</h2>
          <p className="text-lg text-foreground/90">{rating.message}</p>
        </div>

        <div className="flex gap-3 justify-center">
          <Button
            onClick={() => setHours([0])}
            variant="secondary"
            className="rounded-full font-semibold transition-bouncy hover:scale-105"
          >
            Just Showered! 🚿
          </Button>
          <Button
            onClick={handleShare}
            className="rounded-full font-semibold transition-bouncy hover:scale-105"
          >
            Share My Score 📤
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>✨ Powered by Totally Real SniffAI™ ✨</p>
        </div>
      </div>
    </Card>
  );
};

export default SniffCalculator;
