import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, Trophy, HelpCircle, Mail, Menu, Sparkles } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  
  const navLinks = [
    { path: "/", label: "Home", icon: Home, emoji: "🏠" },
    { path: "/leaderboard", label: "Leaderboard", icon: Trophy, emoji: "🏆" },
    { path: "/faq", label: "FAQ", icon: HelpCircle, emoji: "❓" },
    { path: "/contact", label: "Contact", icon: Mail, emoji: "📤" },
  ];

  const NavLink = ({ item, mobile = false }: { item: typeof navLinks[0]; mobile?: boolean }) => {
    const isActive = location.pathname === item.path;
    const Icon = item.icon;
    
    return (
      <Link to={item.path} onClick={() => mobile && setOpen(false)}>
        <Button
          variant={isActive ? "default" : "ghost"}
          className={`rounded-full font-semibold transition-bouncy hover:scale-105 ${
            mobile ? "w-full justify-start text-lg" : ""
          }`}
          size={mobile ? "lg" : "default"}
        >
          {mobile ? (
            <>
              <span className="text-2xl mr-3">{item.emoji}</span>
              {item.label}
            </>
          ) : (
            <>
              <Icon className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">{item.label}</span>
            </>
          )}
        </Button>
      </Link>
    );
  };

  return (
    <>
      {/* Desktop/Tablet Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-card/95 border-b-4 border-primary shadow-card">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl animate-wobble">🧼</span>
              <span className="font-heading text-xl sm:text-2xl bg-gradient-fresh bg-clip-text text-transparent">
                SniffScore
              </span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-2">
              {navLinks.map((link) => (
                <NavLink key={link.path} item={link} />
              ))}
            </div>

            {/* Mobile Hamburger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] border-l-4 border-primary">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-2 animate-wobble">🧼</div>
                    <h2 className="font-heading text-2xl bg-gradient-fresh bg-clip-text text-transparent">
                      SniffScore
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Rate your freshness! 🌸
                    </p>
                  </div>
                  {navLinks.map((link) => (
                    <NavLink key={link.path} item={link} mobile />
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-lg bg-card/95 border-t-4 border-primary shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex justify-around items-center px-2 py-3">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            
            return (
              <Link 
                key={link.path} 
                to={link.path}
                className="flex flex-col items-center gap-1 min-w-[60px]"
              >
                <div className={`p-2 rounded-2xl transition-all ${
                  isActive 
                    ? "bg-primary text-primary-foreground scale-110" 
                    : "text-muted-foreground hover:bg-accent"
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className={`text-[10px] font-medium ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
