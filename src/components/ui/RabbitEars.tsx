interface RabbitEarsProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'purple' | 'pink' | 'cyan' | 'gradient';
}

export function RabbitEars({ className = '', size = 'md', color = 'gradient' }: RabbitEarsProps) {
  const sizes = {
    sm: { height: 16, width: 3, gap: 6 },
    md: { height: 24, width: 4, gap: 8 },
    lg: { height: 32, width: 5, gap: 10 },
  };

  const colors = {
    purple: 'from-violet-500 to-violet-400',
    pink: 'from-pink-500 to-fuchsia-400',
    cyan: 'from-cyan-400 to-cyan-300',
    gradient: 'from-violet-500 via-fuchsia-500 to-cyan-400',
  };

  const { height, width, gap } = sizes[size];

  return (
    <div className={`relative inline-flex items-end ${className}`} style={{ gap: `${gap}px` }}>
      <div
        className={`bg-gradient-to-t ${colors[color]} rounded-full transform -rotate-12`}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
      <div
        className={`bg-gradient-to-t ${colors[color]} rounded-full transform rotate-12`}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  );
}

export function RabbitDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <RabbitEars size="sm" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
    </div>
  );
}
