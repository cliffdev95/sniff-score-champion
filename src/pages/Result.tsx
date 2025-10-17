import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import VibeBackground from "@/components/VibeBackground";
import ScoreCard from "@/components/ScoreCard";
import ShareModal from "@/components/ShareModal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { toast } from "sonner";
import { Home, Download, Trophy, Share2 } from "lucide-react";

interface Rating {
  level: string;
  emoji: string;
  message: string;
  gradient: string;
}

interface LocationState {
  hours: number;
  rating: Rating;
  username?: string;
}

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [ranking, setRanking] = useState<number>(0);
  const [totalPlayers, setTotalPlayers] = useState<number>(0);
  const { playSound, isMuted, toggleMute } = useSoundEffects();
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!state?.hours || !state?.rating) {
      navigate("/");
      return;
    }

    // Save score to leaderboard
    const leaderboard = JSON.parse(localStorage.getItem("sniffLeaderboard") || "[]");
    const username = state.username || `Player${Math.floor(Math.random() * 9999)}`;
    
    const newEntry = {
      username,
      hours: state.hours,
      level: state.rating.level,
      emoji: state.rating.emoji,
      timestamp: new Date().toISOString(),
      score: state.hours // Higher hours = higher "score" (worse smell)
    };

    leaderboard.push(newEntry);
    leaderboard.sort((a: any, b: any) => b.score - a.score);
    
    // Keep top 100
    const updatedLeaderboard = leaderboard.slice(0, 100);
    localStorage.setItem("sniffLeaderboard", JSON.stringify(updatedLeaderboard));

    // Calculate ranking
    const userRank = updatedLeaderboard.findIndex((entry: any) => 
      entry.timestamp === newEntry.timestamp
    ) + 1;
    
    setRanking(userRank);
    setTotalPlayers(updatedLeaderboard.length);

    // Play sound
    playSound(state.rating.level);
  }, [state, navigate, playSound]);

  const handleDownloadCertificate = async () => {
    // For now, show coming soon message
    // In future, could use html2canvas to convert the certificate div to image
    toast.success("Certificate feature coming soon! 🎓", {
      description: "We're preparing your playful certificate!",
    });
  };

  const handlePlaySound = () => {
    if (state?.rating) {
      playSound(state.rating.level);
    }
  };

  if (!state?.hours || !state?.rating) {
    return null;
  }

  const getRankingSuffix = (rank: number) => {
    const j = rank % 10;
    const k = rank % 100;
    if (j === 1 && k !== 11) return "st";
    if (j === 2 && k !== 12) return "nd";
    if (j === 3 && k !== 13) return "rd";
    return "th";
  };

  const getTrophyEmoji = (rank: number) => {
    if (rank === 1) return "🏆";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return "🎖️";
  };

  return (
    <div className="min-h-screen relative pb-20 md:pb-8">
      <VibeBackground level={state.rating.level} />
      <div className="relative z-10">
        <Navigation />
        
        <section className="container mx-auto px-4 py-6 md:py-12">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-8">
            {/* Header */}
            <div className="text-center space-y-3 md:space-y-4 animate-fade-in">
              <div className="text-7xl md:text-9xl animate-bounce drop-shadow-2xl">
                {state.rating.emoji}
              </div>
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl leading-tight px-2">
                Your Official SniffScore!
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-foreground/80 font-medium px-4">
                The results are in — all in good fun! 🎉
              </p>
            </div>

            {/* Ranking Card */}
            <Card className="p-5 md:p-8 rounded-3xl shadow-bubble border-4 border-accent/30 bg-gradient-to-br from-accent/30 to-background/90 backdrop-blur-sm animate-scale-in">
              <div className="text-center space-y-3 md:space-y-4">
                <div className="text-6xl md:text-8xl animate-wobble drop-shadow-lg">
                  {getTrophyEmoji(ranking)}
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl bg-gradient-fresh bg-clip-text text-transparent">
                  Rank #{ranking}
                </h2>
                  <p className="text-lg sm:text-xl md:text-2xl font-semibold px-2">
                  You're ranked #{ranking} out of {totalPlayers} players — great participation!
                </p>
                <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium bg-accent/20 rounded-full px-4 py-2 mx-auto max-w-fit">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span>
                    {ranking <= 3 ? "Top 3 Champion! 🎉" : 
                     ranking <= 10 ? "Top 10! ⭐" : 
                     "Certified Legend! 💫"}
                  </span>
                </div>
              </div>
            </Card>

            {/* Score Card */}
            <div className="animate-scale-in">
              <ScoreCard
                hours={state.hours}
                rating={state.rating}
                onShare={() => setShareModalOpen(true)}
                onPlaySound={handlePlaySound}
                isMuted={isMuted}
                onToggleMute={toggleMute}
              />
            </div>

            {/* Certificate Preview (Hidden, for future download) */}
            <Card 
              ref={certificateRef}
              className="p-8 md:p-12 rounded-3xl shadow-glow border-4 border-primary/30 bg-gradient-to-br from-primary/10 to-background animate-scale-in"
            >
              <div className="text-center space-y-6">
                <div className="text-4xl md:text-6xl">🏆</div>
                <h3 className="font-heading text-2xl md:text-4xl">
                  OFFICIAL SNIFFCERTIFICATE
                </h3>
                <div className="border-t-2 border-b-2 border-dashed border-primary/30 py-6 space-y-4">
                  <p className="text-lg md:text-xl">This certifies that</p>
                  <p className="font-heading text-3xl md:text-5xl text-primary">
                    {state.username || "Anonymous Player"}
                  </p>
                  <p className="text-lg md:text-xl">has achieved the rank of</p>
                  <p className="font-heading text-2xl md:text-4xl">
                    {state.rating.emoji} {state.rating.level}
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground">
                    With {state.hours} hours since last shower
                  </p>
                  <p className="text-sm md:text-base font-bold text-primary">
                    Global Rank: #{ranking} of {totalPlayers}
                  </p>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground italic">
                  ✨ Powered by SniffCheck — for entertainment only ✨
                </p>
                <p className="text-xs text-muted-foreground">
                  This certificate is a playful keepsake and not an official document.
                </p>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Button
                  onClick={() => setShareModalOpen(true)}
                  size="lg"
                  className="w-full rounded-full font-semibold transition-bouncy hover:scale-110 shadow-glow text-base sm:text-lg py-6"
                >
                  <Share2 className="mr-2 h-5 w-5" />
                  Share My Score
                </Button>
                <Button
                  onClick={() => navigate("/leaderboard")}
                  size="lg"
                  variant="secondary"
                  className="w-full rounded-full font-semibold transition-bouncy hover:scale-110 text-base sm:text-lg py-6"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  Leaderboard
                </Button>
              </div>
              <p className="text-center text-xs sm:text-sm text-muted-foreground italic px-4">
                Share your glory (or shame) with the world 🌍
              </p>
            </div>

            {/* Play Again Button */}
            <div className="text-center">
              <Button
                onClick={() => navigate("/")}
                size="lg"
                variant="outline"
                className="rounded-full font-bold transition-bouncy hover:scale-110 text-base sm:text-xl px-8 py-6 border-2 hover:border-primary"
              >
                <Home className="mr-2 h-6 w-6" />
                Take Test Again
              </Button>
            </div>

            {/* Goofy Footer Message */}
            <div className="text-center space-y-2 text-xs sm:text-sm text-muted-foreground animate-fade-in px-4">
              <p className="font-medium">🎉 Well done!</p>
              <p className="italic">Share the fun with friends — keep it kind and lighthearted.</p>
              <p className="text-[10px] sm:text-xs">Disclaimer: SniffCheck is for entertainment only and does not represent health or hygiene advice.</p>
            </div>
          </div>
        </section>
      </div>

      <ShareModal
        open={shareModalOpen}
        onOpenChange={setShareModalOpen}
        hours={state.hours}
        level={state.rating.level}
        emoji={state.rating.emoji}
      />
    </div>
  );
};

export default Result;

