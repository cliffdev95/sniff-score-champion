import { useEffect, useState } from "react";

const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState<Array<{ id: number; left: number; size: number; duration: number }>>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 60 + 20,
      duration: Math.random() * 10 + 10,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;
