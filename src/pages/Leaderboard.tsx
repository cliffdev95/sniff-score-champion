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
      // Sort by hours descending (highest time since shower first)
      const sorted = data.sort((a: LeaderboardEntry, b: LeaderboardEntry) => b.hours - a.hours);
      setLeaderboardData(sorted);
    }
  };

  const clearLeaderboard = () => {
  if (confirm("Are you sure you want to clear the leaderboard? This will remove all entries.")) {
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
    if (hours >= 121) return { title: "Mythical Freshness", badge: "✨", color: "text-destructive" };
    if (hours >= 73) return { title: "Biohazard Overlord", badge: "🚨", color: "text-orange-500" };
    if (hours >= 49) return { title: "Legend-in-Training", badge: "🏅", color: "text-yellow-600" };
    if (hours >= 25) return { title: "Needs Refresh", badge: "💧", color: "text-yellow-500" };
    if (hours >= 13) return { title: "Mild Musk Knight", badge: "☁️", color: "text-blue-400" };
    return { title: "Fresh Champion", badge: "🧼", color: "text-primary" };
  };

  const getBadgeAnimation = (rank: number) => {
    if (rank === 1) return "animate-bounce";
    if (rank <= 3) return "animate-pulse";
    return "";
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
          <div className="text-center space-y-4 animate-fade-in">
            <div className="text-5xl md:text-7xl mb-4 animate-bounce">🏆</div>
            <h1 className="font-heading text-4xl md:text-6xl bg-gradient-fresh bg-clip-text text-transparent">Hall of Funk</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              The official leaderboard of playful freshness scores. Highest scores = longest time since last shower.
            </p>
            <p className="text-sm md:text-base text-muted-foreground italic px-4">
              🏆 Being #1 isn't always a flex... but it's definitely memorable 😅
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
              <Button
                onClick={loadLeaderboard}
                variant="secondary"
                className="rounded-full font-semibold transition-bouncy hover:scale-110 shadow-bubble"
                size="lg"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
              {leaderboardData.length > 0 && (
                <Button
                  onClick={clearLeaderboard}
                  variant="outline"
                  className="rounded-full font-semibold transition-bouncy hover:scale-110 border-2"
                  size="lg"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear Leaderboard
                </Button>
              )}
            </div>
          </div>

          {leaderboardData.length === 0 ? (
            <Card className="p-12 md:p-16 rounded-3xl shadow-glow border-4 border-primary/20 text-center animate-scale-in">
              <div className="space-y-4">
                <div className="text-6xl md:text-8xl animate-pulse">🤷</div>
                <h2 className="font-heading text-2xl md:text-3xl">No Funky Legends Yet!</h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
                  Be the first to calculate your SniffScore and have fun on the leaderboard!
                </p>
                <Button
                  onClick={() => window.location.href = "/"}
                  className="rounded-full font-bold transition-bouncy hover:scale-110 mt-6 shadow-glow px-8 py-6 text-lg"
                  size="lg"
                >
                  🚿 Start My Sniff Test
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="p-4 md:p-6 rounded-3xl shadow-glow border-4 border-primary/20 overflow-hidden animate-scale-in">
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
                      <p className={`text-xs italic hidden md:block ${getRankTitle(entry).color}`}>
                        {getRankTitle(entry).badge} {getRankTitle(entry).title}
                      </p>
                    </div>
                  </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <span className="font-semibold text-sm md:text-base">{entry.hours}h</span>
                          </TableCell>
                          <TableCell>
                            <div className="min-w-[100px]">
                              <span className={`text-xl md:text-2xl ${getBadgeAnimation(rank)}`}>{entry.emoji}</span>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <Card className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 text-center shadow-bubble hover:scale-105 transition-smooth border-2 border-primary/20">
              <div className="text-4xl md:text-5xl mb-3">👑</div>
              <p className="text-sm md:text-base text-foreground font-medium">
                #1 = Longest without shower. Legendary status achieved! 😬
              </p>
            </Card>
            <Card className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 text-center shadow-bubble hover:scale-105 transition-smooth border-2 border-secondary/20">
              <div className="text-4xl md:text-5xl mb-3">⚡</div>
              <p className="text-sm md:text-base text-foreground font-medium">
                Live rankings update automatically with each new test
              </p>
            </Card>
            <Card className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/10 text-center shadow-bubble hover:scale-105 transition-smooth border-2 border-accent/30">
              <div className="text-4xl md:text-5xl mb-3">🎯</div>
              <p className="text-sm md:text-base text-foreground font-medium">
                Compete with friends for the funkiest (or freshest) score
              </p>
            </Card>
          </div>

          <div className="text-center p-6 md:p-10 rounded-3xl bg-gradient-funky shadow-glow border-2 border-secondary/30">
            <p className="text-lg md:text-2xl font-heading mb-4">
                  🚿 Ready to See Your Rank?
            </p>
            <p className="text-sm md:text-base text-foreground/80 mb-6 max-w-md mx-auto">
              Take the test and see where you rank among the legends!
            </p>
            <Button
              onClick={() => window.location.href = "/"}
              className="rounded-full font-bold transition-bouncy hover:scale-110 shadow-glow px-8 py-6 text-lg"
              size="lg"
            >
              <Trophy className="mr-2 h-6 w-6" />
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
