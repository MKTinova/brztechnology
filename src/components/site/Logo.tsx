import { cn } from "@/lib/utils";

type Node = { x: number; y: number; r: number; accent?: boolean };

const CENTER: Node = { x: 110, y: 118, r: 14 };
const NODES: Node[] = [
  { x: 188, y: 36, r: 27 },
  { x: 44, y: 176, r: 27 },
  { x: 84, y: 36, r: 11, accent: true },
  { x: 198, y: 134, r: 11, accent: true },
  { x: 186, y: 222, r: 11, accent: true },
];

function edge(a: Node, b: Node) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  return {
    x1: a.x + ux * (a.r + 4),
    y1: a.y + uy * (a.r + 4),
    x2: b.x - ux * (b.r + 4),
    y2: b.y - uy * (b.r + 4),
  };
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 250" className={cn("h-10 w-auto", className)} aria-hidden="true">
      <g fill="none" strokeLinecap="round">
        {NODES.map((n, i) => (
          <line key={i} {...edge(CENTER, n)} stroke="currentColor" strokeWidth={12} />
        ))}
        <circle cx={CENTER.x} cy={CENTER.y} r={CENTER.r} stroke="currentColor" strokeWidth={11} />
        {NODES.map((n, i) => (
          <circle
            key={`c${i}`}
            cx={n.x}
            cy={n.y}
            r={n.r}
            className={n.accent ? "text-primary" : undefined}
            stroke="currentColor"
            strokeWidth={n.accent ? 9 : 12}
          />
        ))}
      </g>
    </svg>
  );
}

export function Logo({
  className,
  showTagline = false,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight">
          BRZ<span className="text-primary">.</span>
        </span>
        <span className="font-display text-[0.62rem] font-semibold tracking-[0.28em]">
          TECHNOLOGY
        </span>
        {showTagline && (
          <span className="mt-1 text-[0.55rem] font-medium uppercase tracking-[0.14em] opacity-60">
            Tecnologia em automação de dados
          </span>
        )}
      </span>
    </span>
  );
}
