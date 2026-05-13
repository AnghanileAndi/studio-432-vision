interface WaveformProps {
  bars?: number;
  className?: string;
}

export function Waveform({ bars = 40, className = "" }: WaveformProps) {
  return (
    <div className={`flex items-center gap-[3px] h-12 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="w-[2px] bg-taupe/70 rounded-full animate-wave"
          style={{
            height: `${20 + Math.sin(i * 0.5) * 30 + Math.random() * 20}%`,
            animationDelay: `${i * 60}ms`,
            animationDuration: `${1000 + (i % 5) * 200}ms`,
          }}
        />
      ))}
    </div>
  );
}
