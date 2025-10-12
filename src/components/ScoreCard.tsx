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
    <Card className="p-8 rounded-3xl shadow-bubble border-4 border-primary/20 bg-card relative overflow-hidden">
      <div ref={cardRef} className="space-y-8 relative z-10">
        <div className="text-center">
          <h3 className="font-heading text-2xl mb-2">Hours Since Last Shower</h3>
          <p className="text-6xl font-bold font-heading">{hours}</p>
        </div>

        <div className={`p-6 rounded-2xl ${rating.gradient} text-center transform transition-all duration-300 wobble shadow-glow`}>
          <div className="text-7xl mb-2 float">{rating.emoji}</div>
          <h2 className="font-heading text-3xl mb-2 text-foreground">{rating.level}</h2>
          <p className="text-lg text-foreground/90">{rating.message}</p>
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <Button
            onClick={onShare}
            className="rounded-full font-semibold transition-bouncy hover:scale-105 shadow-bubble"
            size="lg"
          >
            <Share2 className="mr-2 h-5 w-5" />
            Share My Score
          </Button>
          <Button
            onClick={handleDownload}
            variant="secondary"
            className="rounded-full font-semibold transition-bouncy hover:scale-105"
            size="lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Badge
          </Button>
          <Button
            onClick={onToggleMute}
            variant="outline"
            size="icon"
            className="rounded-full transition-bouncy hover:scale-105 w-12 h-12"
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground space-y-1">
          <p>✨ Powered by Totally Real SniffAI™ ✨</p>
          <p className="text-xs italic">Be honest… did you even use soap? 🤔</p>
        </div>
      </div>
    </Card>
  );
};

export default ScoreCard;
