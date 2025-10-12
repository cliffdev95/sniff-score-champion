import Navigation from "@/components/Navigation";
import BubbleBackground from "@/components/BubbleBackground";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const leaderboardData = [
  { rank: 1, user: "Greg the Legend", lastShower: "7 days ago", score: "Nuclear Stank ☢️", badge: "🏆", title: "Emperor of Odor" },
  { rank: 2, user: "Camping Carl", lastShower: "5 days ago", score: "Biohazard Alert 🚨", badge: "🥈", title: "Duke of Dirt" },
  { rank: 3, user: "Festival Fiona", lastShower: "4 days ago", score: "Biohazard Alert 🚨", badge: "🥉", title: "Baroness of B.O." },
  { rank: 4, user: "Tom the Gamer", lastShower: "3 days ago", score: "Endangered Air Quality 🦠", badge: "", title: "Knight of the Unwashed" },
  { rank: 5, user: "Sleepy Steve", lastShower: "2 days ago", score: "Questionable Aura 🤔", badge: "", title: "Apprentice of Aroma" },
  { rank: 6, user: "Busy Betty", lastShower: "36 hours ago", score: "Questionable Aura 🤔", badge: "", title: "Squire of Scent" },
  { rank: 7, user: "Lola Fresh", lastShower: "12 hours ago", score: "Citrus Cloud ☁️", badge: "🌟", title: "Princess of Pleasant" },
  { rank: 8, user: "Clean Queen", lastShower: "6 hours ago", score: "Fresh as a Daisy 🌸", badge: "✨", title: "Duchess of Deodorant" },
];

const Leaderboard = () => {
  return (
    <div className="min-h-screen relative">
      <BubbleBackground />
      <div className="relative z-10">
        <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="font-heading text-5xl md:text-6xl">Leaderboard of Legends</h1>
            <p className="text-xl text-muted-foreground">
              The funkiest (and freshest) people on the internet 🏆
            </p>
          </div>

          <Card className="p-6 rounded-3xl shadow-bubble border-4 border-primary/20">
            <Table>
              <TableHeader>
                <TableRow className="border-b-2 border-primary/20">
                  <TableHead className="font-heading text-lg">Rank</TableHead>
                  <TableHead className="font-heading text-lg">User</TableHead>
                  <TableHead className="font-heading text-lg">Last Shower</TableHead>
                  <TableHead className="font-heading text-lg">SniffScore</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardData.map((entry) => (
                  <TableRow 
                    key={entry.rank}
                    className="border-b border-primary/10 hover:bg-primary/5 transition-colors"
                  >
                    <TableCell className="font-bold text-lg">
                      {entry.badge && <span className="mr-2">{entry.badge}</span>}
                      #{entry.rank}
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-semibold">{entry.user}</p>
                        <p className="text-xs text-muted-foreground italic">{entry.title}</p>
                      </div>
                    </TableCell>
                    <TableCell>{entry.lastShower}</TableCell>
                    <TableCell className="font-semibold">{entry.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          <div className="text-center p-6 rounded-2xl bg-accent/30">
            <p className="text-muted-foreground">
              💡 Pro tip: Being at the top isn't always a good thing here...
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Leaderboard;
