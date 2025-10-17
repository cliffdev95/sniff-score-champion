const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12">
      <div className="relative">
        <div className="w-24 h-24 rounded-full border-8 border-primary/30 border-t-primary animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-4xl animate-pulse">
          🧼
        </div>
      </div>
      <div className="text-center space-y-2">
        <p className="font-heading text-2xl animate-pulse">Calculating your SniffScore...</p>
        <p className="text-sm text-muted-foreground">
          Just for fun — making a playful estimate! ✨
        </p>
      </div>
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingAnimation;
