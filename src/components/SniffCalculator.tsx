import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import ShareModal from "@/components/ShareModal";
import ScoreCard from "@/components/ScoreCard";
import LoadingAnimation from "@/components/LoadingAnimation";
import { useSoundEffects } from "@/hooks/useSoundEffects";

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
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const { playSound, isMuted, toggleMute } = useSoundEffects();
  
  const rating = getRating(hours[0]);

  const handleSliderChange = (value: number[]) => {
    setHours(value);
    setShowResult(false);
    setIsCalculating(true);
  };

  useEffect(() => {
    if (isCalculating) {
      const timer = setTimeout(() => {
        setIsCalculating(false);
        setShowResult(true);
        playSound(rating.level);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isCalculating, rating.level, playSound]);

  const handleJustShowered = () => {
    setHours([0]);
    setShowResult(false);
    setIsCalculating(true);
  };

  const handlePlaySound = () => {
    playSound(rating.level);
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h3 className="font-heading text-2xl mb-2">Hours Since Last Shower</h3>
        <p className="text-6xl font-bold font-heading transition-smooth">{hours[0]}</p>
      </div>

      <Slider
        value={hours}
        onValueChange={handleSliderChange}
        max={168}
        step={1}
        className="w-full"
      />

      {isCalculating && <LoadingAnimation />}

      {showResult && !isCalculating && (
        <div className="animate-scale-in">
          <ScoreCard
            hours={hours[0]}
            rating={rating}
            onShare={() => setShareModalOpen(true)}
            onPlaySound={handlePlaySound}
            isMuted={isMuted}
            onToggleMute={toggleMute}
          />
        </div>
      )}

      {!showResult && !isCalculating && (
        <div className="text-center">
          <Button
            onClick={() => {
              setIsCalculating(true);
            }}
            size="lg"
            className="rounded-full font-semibold transition-bouncy hover:scale-110 shadow-bubble text-xl px-8 py-6"
          >
            Calculate My SniffScore 🧼
          </Button>
        </div>
      )}

      {showResult && (
        <div className="text-center">
          <Button
            onClick={handleJustShowered}
            variant="secondary"
            className="rounded-full font-semibold transition-bouncy hover:scale-105"
            size="lg"
          >
            Just Showered! 🚿
          </Button>
        </div>
      )}

      <ShareModal
        open={shareModalOpen}
        onOpenChange={setShareModalOpen}
        hours={hours[0]}
        level={rating.level}
        emoji={rating.emoji}
      />
    </div>
  );
};

export default SniffCalculator;
