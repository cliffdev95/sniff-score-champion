import { useEffect, useRef, useState } from "react";

interface SoundEffect {
  level: string;
  frequency: number;
  duration: number;
  type: "sparkle" | "sniff" | "siren";
}

const soundEffects: SoundEffect[] = [
  { level: "Fresh as a Daisy", frequency: 800, duration: 300, type: "sparkle" },
  { level: "Citrus Cloud", frequency: 600, duration: 200, type: "sparkle" },
  { level: "Questionable Aura", frequency: 400, duration: 400, type: "sniff" },
  { level: "Endangered Air Quality", frequency: 300, duration: 500, type: "sniff" },
  { level: "Biohazard Alert", frequency: 200, duration: 600, type: "siren" },
  { level: "Nuclear Stank", frequency: 150, duration: 800, type: "siren" },
];

export const useSoundEffects = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }, []);

  const playSound = (level: string) => {
    if (isMuted || !audioContextRef.current) return;

    const effect = soundEffects.find((s) => level.includes(s.level.split(" ")[0]));
    if (!effect) return;

    const context = audioContextRef.current;
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.frequency.value = effect.frequency;
    oscillator.type = effect.type === "sparkle" ? "sine" : effect.type === "sniff" ? "triangle" : "sawtooth";

    gainNode.gain.setValueAtTime(0.1, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + effect.duration / 1000);

    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + effect.duration / 1000);

    // Add second harmonic for sparkle effect
    if (effect.type === "sparkle") {
      const oscillator2 = context.createOscillator();
      const gainNode2 = context.createGain();
      oscillator2.connect(gainNode2);
      gainNode2.connect(context.destination);
      oscillator2.frequency.value = effect.frequency * 2;
      oscillator2.type = "sine";
      gainNode2.gain.setValueAtTime(0.05, context.currentTime);
      gainNode2.gain.exponentialRampToValueAtTime(0.01, context.currentTime + effect.duration / 1000);
      oscillator2.start(context.currentTime);
      oscillator2.stop(context.currentTime + effect.duration / 1000);
    }
  };

  const toggleMute = () => setIsMuted(!isMuted);

  return { playSound, isMuted, toggleMute };
};
