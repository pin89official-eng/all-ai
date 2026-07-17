export default function Logo({
  className = "",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c7000b" />
            <stop offset="1" stopColor="#8a0000" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#logoGrad)" fillOpacity="0.1" />
        <rect x="1" y="1" width="38" height="38" rx="11" stroke="url(#logoGrad)" strokeWidth="1.5" />
        <path
          d="M21.5 8L12 22.5H18.5L17 32L28 16.5H21L21.5 8Z"
          fill="url(#logoGrad)"
        />
      </svg>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-bold tracking-tight text-zinc-900">
            P.INNOVATION<span className="text-gradient">89</span>
          </span>
          <span className="text-[10px] font-medium tracking-[0.2em] text-zinc-500">
            EV CHARGING STATION
          </span>
        </span>
      )}
    </div>
  );
}
