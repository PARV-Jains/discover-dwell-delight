import { motion } from "framer-motion";

type Props = { className?: string; compact?: boolean };

/** Stylized isometric SVG of the Innovya discovery shelf. */
export function InnovyaShelf({ className, compact }: Props) {
  const products = [
    { c: "var(--brand-orange)", label: "AURA" },
    { c: "var(--brand-pink)", label: "BLOOM" },
    { c: "var(--brand-blue)", label: "NOVA" },
    { c: "var(--brand-yellow)", label: "ZEST" },
    { c: "var(--brand-lime)", label: "FIZZ" },
    { c: "var(--brand-purple)", label: "LUXE" },
  ];
  return (
    <div className={className} style={{ perspective: 1400 }}>
      <motion.div
        initial={{ rotateY: -18, rotateX: 8 }}
        animate={{ rotateY: [-18, -12, -18], rotateX: [8, 6, 8] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative mx-auto w-full max-w-[520px] aspect-[3/4]"
      >
        {/* Shelf body */}
        <div
          className="absolute inset-0 rounded-[36px] shadow-glow"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.97 0.01 85) 0%, oklch(0.9 0.02 85) 100%)",
            border: "1px solid color-mix(in oklab, black 10%, transparent)",
          }}
        />
        {/* Top brand panel */}
        <div className="absolute left-6 right-6 top-6 h-14 rounded-2xl grad-hero flex items-center justify-between px-5 text-white">
          <span className="font-display font-bold tracking-tight">innovya</span>
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-80">
            discover
          </span>
        </div>
        {/* Shelves with products */}
        <div className="absolute inset-x-6 top-24 bottom-20 grid grid-rows-3 gap-3">
          {[0, 1, 2].map((row) => (
            <div
              key={row}
              className="relative rounded-2xl border border-black/5 bg-white/70 shadow-inner overflow-hidden"
            >
              <div className="absolute inset-x-3 top-3 bottom-3 grid grid-cols-2 gap-3">
                {products.slice(row * 2, row * 2 + 2).map((p, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6, scale: 1.05 }}
                    className="relative rounded-xl flex flex-col items-center justify-end pb-3 pt-4 overflow-hidden"
                    style={{
                      background: `linear-gradient(160deg, ${p.c}, color-mix(in oklab, ${p.c} 60%, black))`,
                      color: "white",
                    }}
                  >
                    <div className="absolute inset-x-3 top-3 h-2 rounded-full bg-white/40" />
                    <div className="h-8 w-8 rounded-full bg-white/25 mb-2" />
                    <span className="text-[10px] font-bold tracking-[0.2em]">
                      {p.label}
                    </span>
                  </motion.div>
                ))}
              </div>
              {/* shelf edge */}
              <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-b from-black/10 to-transparent" />
            </div>
          ))}
        </div>
        {/* Base plinth */}
        <div className="absolute inset-x-10 bottom-4 h-8 rounded-b-2xl bg-gradient-to-b from-black/20 to-black/5 blur-[2px]" />
        {/* Glow behind */}
        <div
          className="absolute -inset-10 -z-10 rounded-[60px] opacity-70 blur-3xl grad-hero"
          aria-hidden
        />
      </motion.div>
      {!compact && (
        <>
          <FloatingChip className="left-[-6%] top-[12%]" color="var(--brand-yellow)" text="Discover" />
          <FloatingChip className="right-[-4%] top-[28%]" color="var(--brand-blue)" text="Explore" delay={0.6} />
          <FloatingChip className="left-[-2%] bottom-[18%]" color="var(--brand-pink)" text="Experience" delay={1.2} />
          <FloatingChip className="right-[-8%] bottom-[8%]" color="var(--brand-lime)" text="Engage" delay={1.8} />
        </>
      )}
    </div>
  );
}

function FloatingChip({
  className,
  color,
  text,
  delay = 0,
}: {
  className?: string;
  color: string;
  text: string;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`absolute z-20 rounded-full px-4 py-2 text-sm font-semibold shadow-soft glass ${className}`}
      style={{ color: "var(--ink)" }}
    >
      <span
        className="mr-2 inline-block h-2 w-2 rounded-full align-middle"
        style={{ background: color }}
      />
      {text}
    </motion.div>
  );
}
