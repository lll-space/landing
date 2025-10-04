'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Rocket } from "lucide-react";

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Pre-Launch Game & Public Sale",
      timeline: "2 months",
      status: "in-progress",
      items: [
        "Launch pre-launch game with leaderboard and daily rewards",
        "Public Sale on STON.fi at $0.01 (max $500 per wallet)",
        "Seed initial liquidity pool",
        "Publish treasury and distribution transparency reports"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Official Launch + Day-1 DAO",
      timeline: "3–5 months",
      status: "planned",
      items: [
        "Distribute tokens to players from the pre-launch game",
        "Activate DAO governance from day one (proposals for rewards, burn, marketing)",
        "Launch Staking v1 with base APY and time-lock boosts",
        "On-chain monitoring and anti-sybil measures"
      ]
    },
    {
      phase: "Phase 3",
      title: "USDe Pool",
      timeline: "2–4 months",
      status: "planned", 
      items: [
        "Users can buy lottery tickets with USDe instead of TON",
        "Stable entry reduces exposure to TON price volatility",
        "DAO decides how much reward allocation goes into USDe pools"
      ]
    },
    {
      phase: "Phase 4",
      title: "VIP Rooms",
      timeline: "2–4 months",
      status: "planned",
      items: [
        "Users can create private and exclusive lotteries",
        "Invite-only or staking/holding requirements for entry",
        "Bigger prize pools with fewer participants",
        "Designed for high-stakes community play"
      ]
    },
    {
      phase: "Phase 5",
      title: "Real-Time SPINS (new LLL product)",
      timeline: "2–4 months",
      status: "planned",
      items: [
        "Unlike standard lotteries that take 3 days, users can spin instantly",
        "User locks funds for 1 month but can spin immediately to see instant rewards",
        "At the end of the lock period, principal is fully returned (lossless)",
        "Brings instant gratification and keeps liquidity in the ecosystem"
      ]
    },
    {
      phase: "Phase 6",
      title: "NFT Lottery",
      timeline: "2–4 months",
      status: "planned",
      items: [
        "Lottery prizes are rare NFTs instead of tokens",
        "NFTs may carry financial value (tradable on TON marketplaces)",
        "Or utility (e.g., access to VIP rooms, boosts, seasonal perks)",
        "Expands LLL into the NFT ecosystem and secondary markets"
      ]
    },
    {
      phase: "Phase 7",
      title: "DAO Expansion & Cross-Chain",
      timeline: "2–4 months",
      status: "planned",
      items: [
        "Strengthen DAO governance with more voting powers and treasury control",
        "Explore cross-chain bridges (ETH, BSC) once TON ecosystem stabilizes",
        "Build partnerships with other projects in GameFi and DeFi",
        "DAO-gated rollout to ensure community-driven expansion"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-neon-yellow" />;
      default:
        return <Rocket className="h-5 w-5 text-neon-cyan" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Live</Badge>;
      case "in-progress":
        return <Badge className="bg-neon-yellow/20 text-neon-yellow border-neon-yellow/30">In Progress</Badge>;
      default:
        return <Badge variant="outline" className="border-neon-cyan/30 text-neon-cyan">Planned</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
        <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      {/* glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-32 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-20">
        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs tracking-wide text-cyan-200">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          LLL on TON · Introduction
        </div>

        {/* Heading */}
        <h1 className="font-orbitron text-4xl font-extrabold leading-tight text-white md:text-5xl">
          Fair, <span className="text-cyan-300">Lossless</span>, Community-Driven
          <br className="hidden sm:block" /> Lottery on <span className="text-fuchsia-300">TON</span>
        </h1>

        {/* Subheading */}
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-300">
          LLL is building a transparent, gamified prize ecosystem where your{" "}
          <span className="text-white font-semibold">principal stays safe</span> and
          the upside comes from community-powered rewards. Launching with a
          pre-launch game and a fair public sale on STON.fi, governed by the DAO
          from day one.
        </p>

        {/* Pillars */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 p-4">
            <h3 className="text-sm font-semibold text-cyan-200">Lossless by Design</h3>
            <p className="mt-2 text-sm text-zinc-300">Deposit, play, earn—withdraw principal intact.</p>
          </div>
          <div className="rounded-2xl border border-fuchsia-400/30 bg-fuchsia-400/5 p-4">
            <h3 className="text-sm font-semibold text-fuchsia-200">DAO from Day One</h3>
            <p className="mt-2 text-sm text-zinc-300">Community steers rewards, burns, partnerships.</p>
          </div>
          <div className="rounded-2xl border border-amber-400/30 bg-amber-400/5 p-4">
            <h3 className="text-sm font-semibold text-amber-200">TON-Native UX</h3>
            <p className="mt-2 text-sm text-zinc-300">Fast, low-fee, Telegram-friendly experiences.</p>
          </div>
          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-4">
            <h3 className="text-sm font-semibold text-emerald-200">Real Utility</h3>
            <p className="mt-2 text-sm text-zinc-300">VIP rooms, USDe pools, instant real-time spins.</p>
          </div>
        </div>

        {/* Micro KPIs / Trust */}
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-xs text-zinc-300">
            Public Sale: $0.01 · max $500/wallet
          </span>
          <span className="rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-xs text-zinc-300">
            Principal Safe · Transparent Treasury
          </span>
          <span className="rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-xs text-zinc-300">
            Day-1 DAO · Staking v1
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
          <a
            href="/game"
            className="inline-flex items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 font-medium text-cyan-200 hover:bg-cyan-400/20"
          >
            Play &amp; Earn LLL
          </a>
          <a
            href="https://ston.fi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-fuchsia-400/40 px-5 py-3 font-medium text-fuchsia-300 hover:bg-fuchsia-400/10"
          >
            Buy on STON.fi →
          </a>
        </div>
      </div>
    </section>
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-neon-purple text-neon-purple">
              Development Timeline
            </Badge>
            <h1 className="text-5xl font-bold font-orbitron text-white mb-4">
              Project <span className="text-neon-cyan">Roadmap</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our journey to build the ultimate lossless lottery ecosystem on TON
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-magenta opacity-30" />
            
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-neon-purple items-center justify-center z-10">
                    {getStatusIcon(item.status)}
                  </div>
                  
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <Card className="bg-card/50 backdrop-blur-sm border-neon-purple/30 hover:border-neon-purple/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                              {item.phase}
                            </Badge>
                            <Badge variant="outline" className="border-neon-yellow/50 text-neon-yellow text-xs">
                              {item.timeline}
                            </Badge>
                          </div>
                          {getStatusBadge(item.status)}
                        </div>
                        <CardTitle className="text-xl text-white font-orbitron">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2.5">
                          {item.items.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;