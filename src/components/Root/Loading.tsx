// app/loading.tsx  (Next.js)  یا  components/LllLoading.tsx
import { useEffect, useMemo, useState } from "react";

export default function LllLoading() {
  const [pct, setPct] = useState(2);
  const statuses = useMemo(
    () => [
      "Connecting to TON network…",
      "Seeding liquidity modules…",
      "Syncing DAO parameters…",
      "Preparing USDe pools…",
      "Warming up RNG & proofs…",
      "Fetching player profiles…",
      "Calibrating Real-Time SPINS…",
    ],
    []
  );
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setPct((p) => (p < 97 ? p + Math.max(0.25, (100 - p) * 0.01) : p));
    }, 50);
    const s = setInterval(() => setStep((i) => (i + 1) % statuses.length), 1100);
    return () => {
      clearInterval(t);
      clearInterval(s);
    };
  }, [statuses.length]);

  const ringStyle = useMemo(
    () => ({
      background: `conic-gradient(#22d3ee ${pct * 3.6}deg, rgba(34,211,238,0.15) ${pct * 3.6}deg 360deg)`,
    }),
    [pct]
  );

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      {/* glowing blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-28 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/5 blur-3xl" />
      </div>

      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6">
        {/* logo / wordmark */}
        <div className="mb-8 text-center">
          <div className="relative">
            <h1 className="font-orbitron text-5xl font-extrabold tracking-wide text-white md:text-6xl">
              LLL
              <span className="sr-only">Loading</span>
            </h1>
            {/* glow clones */}
            <span className="pointer-events-none absolute inset-0 -z-10 blur-lg mix-blend-screen">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">LLL</span>
            </span>
          </div>
          <p className="mt-2 text-sm tracking-widest text-zinc-400">
            FAIR · LOSSLESS · COMMUNITY-DRIVEN · TON
          </p>
        </div>

        {/* progress ring */}
        <div className="relative mb-10">
          <div
            aria-hidden
            className="h-44 w-44 rounded-full p-1 md:h-52 md:w-52"
            style={ringStyle}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-black/70 backdrop-blur">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-300 drop-shadow md:text-5xl">
                  {Math.floor(pct)}%
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-zinc-400">
                  Initializing
                </div>
              </div>
            </div>
          </div>
          {/* spinning halo */}
          <div className="pointer-events-none absolute inset-0 -z-10 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,rgba(244,114,182,.12),transparent,rgba(34,211,238,.12),transparent)] blur-sm" />
        </div>

        {/* rotating status */}
        <div
          role="status"
          aria-live="polite"
          className="mb-8 flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          <span className="font-medium text-white">{statuses[step]}</span>
        </div>

        {/* skeleton shimmer preview */}
        <div className="grid w-full max-w-3xl grid-cols-1 gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-12 w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/50"
            >
              <div className="h-full w-2/3 animate-shimmer bg-[linear-gradient(110deg,rgba(39,39,42,0.2),rgba(39,39,42,0.6),rgba(39,39,42,0.2))] bg-[length:200%_100%]" />
            </div>
          ))}
        </div>

        {/* footer tips */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 text-xs text-zinc-500">
          <span className="rounded-full border border-zinc-800 px-3 py-1">
            Principal stays safe
          </span>
          <span className="rounded-full border border-zinc-800 px-3 py-1">
            DAO from day one
          </span>
          <span className="rounded-full border border-zinc-800 px-3 py-1">
            Buy on STON.fi
          </span>
        </div>
      </div>

      {/* keyframes (Next.js styled-jsx or global) */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.8s linear infinite;
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
}
