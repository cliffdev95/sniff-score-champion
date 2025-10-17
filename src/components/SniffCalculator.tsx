import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import LoadingAnimation from "@/components/LoadingAnimation";

interface Rating {
  level: string;
  emoji: string;
  message: string;
  gradient: string;
}

  const getRating = (hours: number): Rating => {
  // Determine a friendly, playful rating based on hours
  if (hours <= 12) {
    return {
      level: "Fresh as a Daisy",
      emoji: "🌸",
      message: "Looking fresh! Keep doing what you're doing.",
      gradient: "gradient-fresh"
    };
  } else if (hours <= 24) {
    return {
      level: "Citrus Cloud",
      emoji: "🍊",
      message: "Still tidy and presentable.",
      gradient: "gradient-fresh"
    };
  } else if (hours <= 48) {
    return {
      level: "Playful Breeze",
      emoji: "💨",
      message: "Time for a quick refresh soon!",
      gradient: "gradient-funky"
    };
  } else if (hours <= 72) {
    return {
      level: "Friendly Reminder",
      emoji: "�",
      message: "A shower might lift your spirits — and the room!",
      gradient: "gradient-funky"
    };
  } else if (hours <= 120) {
    return {
      level: "Legend-in-Training",
      emoji: "🏅",
      message: "You're on a long streak. Consider a freshen-up for max vibes.",
      gradient: "gradient-stinky"
    };
  } else {
    return {
      level: "Mythical Freshness",
      emoji: "✨",
      message: "You've reached legendary status in this game — time for a treat-yourself shower!",
      gradient: "gradient-stinky"
    };
  }
};

const SniffCalculator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [hours, setHours] = useState([24]);
  const [username, setUsername] = useState("");
  const [manualInput, setManualInput] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [isAiGuessing, setIsAiGuessing] = useState(false);

  const parseTimeInput = (input: string): number | null => {
    const lowerInput = input.toLowerCase().trim();
    
    // Match patterns like "2 days ago", "5 hours", "3 days", "12h", etc.
    const daysMatch = lowerInput.match(/(\d+)\s*(day|days|d)/);
    const hoursMatch = lowerInput.match(/(\d+)\s*(hour|hours|h)/);
    
    if (daysMatch) {
      return parseInt(daysMatch[1]) * 24;
    } else if (hoursMatch) {
      return parseInt(hoursMatch[1]);
    }
    
    // Try to parse just a number (assume hours)
    const numberMatch = lowerInput.match(/^(\d+)$/);
    if (numberMatch) {
      return parseInt(numberMatch[1]);
    }
    
    return null;
  };

  const handleManualEntry = () => {
    const parsedHours = parseTimeInput(manualInput);
    
    if (parsedHours === null) {
      toast({
        title: "Oops! 🤔",
        description: "Try something like '2 days ago' or '5 hours'",
        variant: "destructive"
      });
      return;
    }
    
    if (parsedHours < 0 || parsedHours > 168) {
      toast({
        title: "Whoa there! 😳",
        description: "Let's keep it between 0 and 168 hours (1 week)",
        variant: "destructive"
      });
      return;
    }
    
    setHours([parsedHours]);
    setManualInput("");
    toast({
      title: "Got it! 📝",
      description: `Updated to ${parsedHours} hours since last shower`,
    });
  };

  const handleAiGuess = () => {
    setIsAiGuessing(true);
    
    // Simulate AI thinking
    setTimeout(() => {
      // Generate a "smart" random guess with weighted probabilities
      const random = Math.random();
      let guessedHours: number;
      let aiComment: string;
      
      if (random < 0.3) {
        // 30% chance: Fresh (0-24 hours)
        guessedHours = Math.floor(Math.random() * 24) + 1;
        aiComment = "AI thinks you're fresh! 🌸";
      } else if (random < 0.6) {
        // 30% chance: Mild (24-48 hours)
        guessedHours = Math.floor(Math.random() * 24) + 24;
        aiComment = "AI's guess: a mild need-for-refresh soon. 🤔";
      } else if (random < 0.85) {
        // 25% chance: Needs refresh (48-96 hours)
        guessedHours = Math.floor(Math.random() * 48) + 48;
        aiComment = "AI's algorithm says... you might enjoy a refresh soon! 😅";
      } else {
        // 15% chance: Long time since shower (96-168 hours)
        guessedHours = Math.floor(Math.random() * 72) + 96;
        aiComment = "AI detected legendary time-since-shower! 🚨";
      }
      
      setHours([guessedHours]);
      setIsAiGuessing(false);
      
      toast({
        title: aiComment,
        description: `AI thinks it's been ${guessedHours} hours (${Math.floor(guessedHours / 24)} days, ${guessedHours % 24} hours)`,
      });
    }, 1500);
  };

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

      {/* Manual Entry & AI Guess Section */}
      <div className="space-y-4 bg-card/50 rounded-2xl p-4 sm:p-6 border-2 border-primary/20 shadow-bubble">
        <div className="text-center space-y-2">
          <Label className="text-lg sm:text-xl font-heading flex items-center justify-center gap-2">
            💧 When Did You Last Shower?
          </Label>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Enter an approximate time (hours or days). Keep it light and fun!
          </p>
        </div>

        {/* Manual Text Input */}
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder='Try "2 days ago" or "5 hours"'
            value={manualInput}
            onChange={(e) => setManualInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleManualEntry()}
            className="text-center text-sm sm:text-base rounded-xl border-2 border-primary/30 focus:border-primary"
            disabled={isCalculating || isAiGuessing}
          />
          <Button
            onClick={handleManualEntry}
            variant="secondary"
            className="px-4 sm:px-6 rounded-xl"
            disabled={isCalculating || isAiGuessing || !manualInput.trim()}
          >
            ✓ Set
          </Button>
        </div>

        {/* AI Guess Button */}
        <div className="relative">
          <Button
            onClick={handleAiGuess}
            variant="outline"
            className="w-full rounded-xl font-semibold text-sm sm:text-base py-5 sm:py-6 border-2 hover:scale-105 transition-transform"
            disabled={isCalculating || isAiGuessing}
          >
            {isAiGuessing ? (
              <>
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                AI is thinking... �
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                Let the AI Guess (Just for fun)
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Hours Input Section */}
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <Label className="text-lg sm:text-xl md:text-2xl font-heading block">
            ⏰ How Long Since Your Last Shower?
          </Label>
            <p className="text-sm sm:text-base text-muted-foreground px-4">
            Be honest — it's all in good fun!
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

        <div className="px-2 sm:px-4 md:px-8 space-y-4">
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
          
          {/* Visual Funk Scale */}
          <div className="bg-gradient-to-br from-card/80 to-muted/50 rounded-3xl p-4 md:p-6 border-2 border-primary/10 shadow-card">
            <p className="text-xs font-bold text-center mb-4 text-primary uppercase tracking-wider">⚡ The Funk Scale ⚡</p>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-fresh hover:scale-105 transition-smooth shadow-sm">
                <span className="text-xl">🧼</span>
                <span className="font-semibold">0-12h: Fresh as a daisy!</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-fresh opacity-90 hover:scale-105 transition-smooth shadow-sm">
                <span className="text-xl">☁️</span>
                <span className="font-semibold">13-24h: Citrus Cloud</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-funky hover:scale-105 transition-smooth shadow-sm">
                <span className="text-xl">🤔</span>
                <span className="font-semibold">25-48h: Questionable Aura</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-funky opacity-95 hover:scale-105 transition-smooth shadow-sm">
                <span className="text-xl">🦠</span>
                <span className="font-semibold">49-72h: Air Quality Alert</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-stinky hover:scale-105 transition-smooth shadow-sm">
                <span className="text-xl">🚨</span>
                <span className="font-semibold">73-120h: Biohazard Zone</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-stinky opacity-95 hover:scale-105 transition-smooth shadow-sm">
                <span className="text-xl">☢️</span>
                <span className="font-semibold">121h+: Nuclear Stank Legend</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isCalculating && <LoadingAnimation />}

      {!isCalculating && (
        <div className="text-center pt-6">
          <Button
            onClick={handleCalculate}
            size="lg"
            className="w-full sm:w-auto rounded-full font-bold transition-bouncy hover:scale-110 shadow-glow text-lg md:text-2xl px-8 md:px-16 py-6 md:py-8 h-auto pulse-glow"
          >
            🧼 Calculate My SniffScore
          </Button>
          <p className="text-xs sm:text-sm text-muted-foreground mt-6 italic px-4">
            Results are playful and for entertainment only.
          </p>
        </div>
      )}
    </div>
  );
};

export default SniffCalculator;
