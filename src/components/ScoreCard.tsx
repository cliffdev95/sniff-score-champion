import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Share2, Volume2, VolumeX } from "lucide-react";
import { useRef } from "react";
import { toast } from "sonner";

interface Rating {
  level: string;
  emoji: string;
  message: string;
  gradient: string;
}

interface ScoreCardProps {
  hours: number;
  rating: Rating;
  onShare: () => void;
  onPlaySound: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

const ScoreCard = ({ hours, rating, onShare, onPlaySound, isMuted, onToggleMute }: ScoreCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    toast.success("Coming soon! 🎨", {
      description: "Score download feature is in the works!",
    });
  };

  return (
    <Card className="p-5 sm:p-6 md:p-8 rounded-3xl shadow-bubble border-4 border-primary/30 bg-gradient-to-br from-primary/20 to-background/90 backdrop-blur-sm relative overflow-hidden">
      <div ref={cardRef} className="space-y-6 md:space-y-8 relative z-10">
        <div className="text-center space-y-2">
          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl">Hours Since Last Shower</h3>
          <p className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading text-primary drop-shadow-lg">{hours}</p>
        </div>

        <div className={`p-5 sm:p-6 md:p-8 rounded-2xl ${rating.gradient} text-center transform transition-all duration-300 animate-wobble shadow-glow`}>
          <div className="text-6xl sm:text-7xl md:text-8xl mb-3 animate-float drop-shadow-2xl">{rating.emoji}</div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-2 text-foreground px-2">{rating.level}</h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/90 font-medium px-4">{rating.message}</p>
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <Button
            onClick={onShare}
            className="flex-1 sm:flex-none rounded-full font-semibold transition-bouncy hover:scale-105 shadow-bubble text-sm sm:text-base"
            size="lg"
          >
            <Share2 className="mr-2 h-5 w-5" />
            Share
          </Button>
          <Button
            onClick={handleDownload}
            variant="secondary"
            className="flex-1 sm:flex-none rounded-full font-semibold transition-bouncy hover:scale-105 text-sm sm:text-base"
            size="lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download
          </Button>
          <Button
            onClick={onToggleMute}
            variant="outline"
            size="icon"
            className="rounded-full transition-bouncy hover:scale-105 w-12 h-12 sm:w-14 sm:h-14"
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </Button>
        </div>

        <div className="text-center text-xs sm:text-sm text-muted-foreground space-y-1 px-2">
          <p className="font-medium">✨ Powered by Totally Real SniffAI™ ✨</p>
          <p className="text-[10px] sm:text-xs italic">Be honest… did you even use soap? 🤔</p>
        </div>
      </div>
    </Card>
  );
};

export default ScoreCard;
