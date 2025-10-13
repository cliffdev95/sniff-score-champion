import { useEffect, useState } from "react";

interface VibeBackgroundProps {
  level: string;
}

const VibeBackground = ({ level }: VibeBackgroundProps) => {
  const [bubbles, setBubbles] = useState<Array<{ id: number; left: number; size: number; duration: number }>>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 80 + 30,
      duration: Math.random() * 8 + 8,
    }));
    setBubbles(newBubbles);
  }, [level]);

  // Get vibe colors based on score level
  const getVibeStyle = () => {
    switch (level) {
      case "Fresh as a Daisy 🌸":
      case "Minty Fresh 🌿":
        return {
          gradient: "linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 50%, #81C784 100%)",
          bubbleColor: "rgba(129, 199, 132, 0.4)",
        };
      case "Acceptable Human 👍":
      case "Mildly Suspicious 😏":
        return {
          gradient: "linear-gradient(135deg, #FFECB3 0%, #FFE082 50%, #FFD54F 100%)",
          bubbleColor: "rgba(255, 213, 79, 0.4)",
        };
      case "Public Hazard 🚨":
      case "Nuclear Stank 💀":
        return {
          gradient: "linear-gradient(135deg, #FFCDD2 0%, #EF9A9A 50%, #E57373 100%)",
          bubbleColor: "rgba(229, 115, 115, 0.4)",
        };
      default:
        return {
          gradient: "linear-gradient(135deg, #B3E5FC 0%, #81D4FA 50%, #4FC3F7 100%)",
          bubbleColor: "rgba(79, 195, 247, 0.4)",
        };
    }
  };

  const vibeStyle = getVibeStyle();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div 
        className="absolute inset-0 transition-all duration-1000"
        style={{ background: vibeStyle.gradient }}
      />
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble absolute rounded-full opacity-60 animate-bubble-rise"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            backgroundColor: vibeStyle.bubbleColor,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${Math.random() * 3}s`,
            boxShadow: `0 0 20px ${vibeStyle.bubbleColor}`,
          }}
        />
      ))}
    </div>
  );
};

export default VibeBackground;
