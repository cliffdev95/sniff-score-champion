import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import BubbleBackground from "@/components/BubbleBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Trash2, RefreshCw } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface LeaderboardEntry {
  username: string;
  hours: number;
  level: string;
  emoji: string;
  timestamp: string;
  score: number;
}

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    loadLeaderboard();
    // Auto-refresh every 5 seconds to catch new entries
    const interval = setInterval(loadLeaderboard, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadLeaderboard = () => {
    const stored = localStorage.getItem("sniffLeaderboard");
    if (stored) {
      const data = JSON.parse(stored);
      // Sort by hours descending (highest/funkiest first)
      const sorted = data.sort((a: LeaderboardEntry, b: LeaderboardEntry) => b.hours - a.hours);
      setLeaderboardData(sorted);
    }
  };

  const clearLeaderboard = () => {
    if (confirm("Are you sure you want to clear the leaderboard? This will remove all funky legends! 🧹")) {
      localStorage.removeItem("sniffLeaderboard");
      setLeaderboardData([]);
    }
  };

  const getRankEmoji = (rank: number) => {
    if (rank === 1) return "🏆";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return "";
  };

  const getRankTitle = (entry: LeaderboardEntry) => {
    const hours = entry.hours;
    if (hours >= 121) return "☢️ Nuclear Stank Legend";
    if (hours >= 73) return "🚨 Biohazard Overlord";
    if (hours >= 49) return "🦠 Funk Emperor";
    if (hours >= 25) return "🤔 Odour Baron";
    if (hours >= 13) return "☁️ Mild Musk Knight";
    return "🧼 Fresh Champion";
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const then = new Date(timestamp);
    const diffMs = now.getTime() - then.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  };
  return (
    <div className="min-h-screen relative pb-20 md:pb-8">
      <BubbleBackground />
      <div className="relative z-10">
        <Navigation />
      
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          <div className="text-center space-y-4">
            <div className="text-5xl md:text-7xl mb-4">🏆</div>
            <h1 className="font-heading text-4xl md:text-6xl">Hall of Funk</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ranked by funkiness (highest scores = longest without shower)
            </p>
            <p className="text-sm md:text-base text-muted-foreground italic">
              🏆 Top spot = Most hours unwashed. Wear it proudly... or don't 😅
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
              <Button
                onClick={loadLeaderboard}
                variant="secondary"
                className="rounded-full font-semibold transition-bouncy hover:scale-105"
                size="lg"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
              {leaderboardData.length > 0 && (
                <Button
                  onClick={clearLeaderboard}
                  variant="outline"
                  className="rounded-full font-semibold transition-bouncy hover:scale-105"
                  size="lg"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear Leaderboard
                </Button>
              )}
            </div>
          </div>

          {leaderboardData.length === 0 ? (
            <Card className="p-12 md:p-16 rounded-3xl shadow-bubble border-4 border-primary/20 text-center">
              <div className="space-y-4">
                <div className="text-6xl md:text-8xl">🤷</div>
                <h2 className="font-heading text-2xl md:text-3xl">No Funky Legends Yet!</h2>
                <p className="text-muted-foreground text-base md:text-lg">
                  Be the first to calculate your SniffScore and claim your spot on the leaderboard!
                </p>
                <Button
                  onClick={() => window.location.href = "/"}
                  className="rounded-full font-semibold transition-bouncy hover:scale-105 mt-4"
                  size="lg"
                >
                  Calculate My Score
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="p-4 md:p-6 rounded-3xl shadow-bubble border-4 border-primary/20 overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b-2 border-primary/20">
                      <TableHead className="font-heading text-base md:text-lg">Rank</TableHead>
                      <TableHead className="font-heading text-base md:text-lg">Player</TableHead>
                      <TableHead className="font-heading text-base md:text-lg hidden sm:table-cell">Hours</TableHead>
                      <TableHead className="font-heading text-base md:text-lg">Score</TableHead>
                      <TableHead className="font-heading text-base md:text-lg hidden md:table-cell">Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                  {leaderboardData.map((entry, index) => {
                      const rank = index + 1;
                      const rankEmoji = getRankEmoji(rank);
                      
                      return (
                        <TableRow 
                          key={entry.timestamp}
                          className={`border-b border-primary/10 hover:bg-primary/5 transition-colors ${
                            rank <= 3 ? 'bg-accent/10' : ''
                          }`}
                        >
                          <TableCell className="font-bold text-base md:text-lg">
                            {rankEmoji && <span className="mr-1 md:mr-2 text-xl md:text-2xl">{rankEmoji}</span>}
                            <span className="hidden sm:inline">#{rank}</span>
                            <span className="sm:hidden">{rank}</span>
                          </TableCell>
                  <TableCell>
                    <div className="min-w-[120px]">
                      <p className="font-semibold text-sm md:text-base">{entry.username}</p>
                      <p className="text-xs text-muted-foreground italic hidden md:block">{getRankTitle(entry)}</p>
                    </div>
                  </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <span className="font-semibold text-sm md:text-base">{entry.hours}h</span>
                          </TableCell>
                          <TableCell>
                            <div className="min-w-[100px]">
                              <span className="text-xl md:text-2xl">{entry.emoji}</span>
                              <p className="font-semibold text-xs md:text-sm hidden lg:block">{entry.level}</p>
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                            {formatTimeAgo(entry.timestamp)}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </Card>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 rounded-2xl bg-accent/20 text-center">
              <div className="text-3xl md:text-4xl mb-2">👑</div>
              <p className="text-sm md:text-base text-muted-foreground">
                #1 = Longest without shower. Congrats... we think? 😬
              </p>
            </Card>
            <Card className="p-6 rounded-2xl bg-accent/20 text-center">
              <div className="text-3xl md:text-4xl mb-2">🏃‍♂️</div>
              <p className="text-sm md:text-base text-muted-foreground">
                Leaderboard updates in real-time
              </p>
            </Card>
            <Card className="p-6 rounded-2xl bg-accent/20 text-center">
              <div className="text-3xl md:text-4xl mb-2">💡</div>
              <p className="text-sm md:text-base text-muted-foreground">
                Being #1 isn't always a flex...
              </p>
            </Card>
          </div>

          <div className="text-center p-4 md:p-6 rounded-2xl bg-gradient-funky">
            <p className="text-base md:text-lg font-semibold">
              🚿 Ready to claim your throne of funk?
            </p>
            <Button
              onClick={() => window.location.href = "/"}
              className="mt-4 rounded-full font-semibold transition-bouncy hover:scale-105"
              size="lg"
            >
              <Trophy className="mr-2 h-5 w-5" />
              Calculate My SniffScore
            </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Leaderboard;
