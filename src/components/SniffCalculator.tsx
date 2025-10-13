import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LoadingAnimation from "@/components/LoadingAnimation";

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
  const navigate = useNavigate();
  const [hours, setHours] = useState([24]);
  const [username, setUsername] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);

  const handleSliderChange = (value: number[]) => {
    setHours(value);
  };

  const handleCalculate = () => {
    setIsCalculating(true);
  };

  useEffect(() => {
    if (isCalculating) {
      const timer = setTimeout(() => {
        const rating = getRating(hours[0]);
        navigate("/result", {
          state: {
            hours: hours[0],
            rating,
            username: username || undefined
          }
        });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCalculating, hours, username, navigate]);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Username Input */}
      <div className="space-y-3">
        <Label htmlFor="username" className="text-base sm:text-lg md:text-xl font-heading flex items-center gap-2">
          <span className="text-xl">👤</span>
          Enter Your Name (Optional)
        </Label>
        <Input
          id="username"
          type="text"
          placeholder="Anonymous Funky Legend"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="text-center text-base sm:text-lg md:text-xl font-semibold rounded-2xl border-2 border-primary/30 focus:border-primary shadow-bubble h-12 sm:h-14"
          maxLength={20}
          disabled={isCalculating}
        />
      </div>

      {/* Hours Input Section */}
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <Label className="text-lg sm:text-xl md:text-2xl font-heading block">
            ⏰ How Long Since Your Last Shower?
          </Label>
          <p className="text-sm sm:text-base text-muted-foreground px-4">
            Be honest... we won't judge. Much. 😏
          </p>
        </div>

        <div className="text-center space-y-2">
          <p className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading transition-smooth text-primary drop-shadow-lg">
            {hours[0]}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium">
            {hours[0] === 1 ? "hour" : "hours"}
          </p>
        </div>

        <div className="px-2 sm:px-4 md:px-8">
          <Slider
            value={hours}
            onValueChange={handleSliderChange}
            max={168}
            step={1}
            className="w-full"
            disabled={isCalculating}
          />
          <div className="flex justify-between mt-3 text-xs sm:text-sm text-muted-foreground font-medium px-2">
            <span>0h 🌸</span>
            <span>168h ☢️</span>
          </div>
        </div>
      </div>

      {isCalculating && <LoadingAnimation />}

      {!isCalculating && (
        <div className="text-center pt-4">
          <Button
            onClick={handleCalculate}
            size="lg"
            className="w-full sm:w-auto rounded-full font-semibold transition-bouncy hover:scale-110 shadow-glow text-base sm:text-lg md:text-2xl px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 h-auto"
          >
            🧼 Calculate My SniffScore
          </Button>
          <p className="text-xs sm:text-sm text-muted-foreground mt-4 italic px-4">
            Brace yourself for the truth... 🫣
          </p>
        </div>
      )}
    </div>
  );
};

export default SniffCalculator;
