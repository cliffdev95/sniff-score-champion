import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const FloatingActionButton = () => {
  const location = useLocation();
  
  // Don't show on home page or result page
  if (location.pathname === "/" || location.pathname === "/result") {
    return null;
  }

  return (
    <Link to="/">
      <Button
        size="lg"
        className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-40 rounded-full shadow-glow h-14 w-14 md:h-auto md:w-auto animate-float hover:scale-110 transition-all"
      >
        <Sparkles className="h-6 w-6 md:mr-2" />
        <span className="hidden md:inline font-semibold">Rate Yourself!</span>
      </Button>
    </Link>
  );
};

export default FloatingActionButton;
