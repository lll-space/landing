'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TokenomicsPage() {
  const metrics = [
    { label: "Token", value: "LLL (TON)" },
    { label: "Max Supply", value: "100,000,000 LLL" },
    { label: "Public Sale Price", value: "$0.01" },
    { label: "Public Sale Cap", value: "$350,000 total · max $500/wallet" },
    { label: "Ticker", value: "LLL" },
    { label: "Initial Listing", value: "STON.fi (DEX)" },
  ];

  const utilities = [
    {
      icon: "🎟️",
      title: "Ticket Purchases",
      description: "Use LLL to buy lottery tickets (TON and USDe supported).",
      color: "text-neon-yellow",
    },
    {
      icon: "🗳️",
      title: "DAO Governance",
      description:
        "Vote on reward splits, burns, LP policy, emissions, VIP rules, and partnerships.",
      color: "text-neon-cyan",
    },
    {
      icon: "💠",
      title: "Staking & Boosts",
      description:
        "Stake LLL to earn bonus entries, higher APY, and multiplier boosts via veLLL.",
      color: "text-neon-pink",
    },
    {
      icon: "🛡️",
      title: "Access Layers",
      description:
        "Unlock VIP Rooms, private lotteries, and seasonal perks through holding/locking.",
      color: "text-neon-orange",
    },
  ];

  const distribution = [
    { label: "Public Sale", value: "35M LLL", percentage: 35 },
    { label: "Marketing", value: "20M LLL", percentage: 20 },
    { label: "Community & Staking Rewards", value: "12M LLL", percentage: 12 },
    { label: "Team & Advisors", value: "10M LLL", percentage: 10 },
    { label: "Development", value: "10M LLL", percentage: 10 },
    { label: "Liquidity", value: "8M LLL", percentage: 8 },
    { label: "Reserve & Partnerships", value: "5M LLL", percentage: 5 },
  ];

  const vesting = [
    {
      label: "Public Sale",
      details:
        "No vesting (DEX-friendly). Optional 7–14 days linear unlock to smooth day-one volatility (DAO-configurable).",
    },
    {
      label: "Team & Advisors",
      details:
        "12–18 months vesting · 3–6 months cliff · monthly linear thereafter (anti-dump, long-term alignment).",
    },
    {
      label: "Marketing",
      details:
        "Emits quarterly based on DAO-approved campaigns and performance KPIs (spend-to-impact).",
    },
    {
      label: "Community & Staking",
      details:
        "Emissions streamed by season/events; DAO can re-target pools (e.g., USDe pool, VIP boosts, spins).",
    },
    {
      label: "Development",
      details:
        "Milestone-based releases (audits, features, infra). Unused tranches remain locked.",
    },
    {
      label: "Liquidity",
      details:
        "Used to seed and deepen DEX pools; topped up from treasury as volume grows (DAO policy).",
    },
    {
      label: "Reserve & Partnerships",
      details:
        "DAO-gated usage for strategic partnerships and emergency reserves; transparent on-chain execution.",
    },
  ];

  const accrual = [
    {
      icon: "🔥",
      title: "Burns",
      text: "Periodic LLL burns from yield conversion and revenue share (DAO-controlled cadence & %).",
      color: "text-neon-yellow",
    },
    {
      icon: "💧",
      title: "LP Deepening",
      text: "Portion of proceeds strengthens LLL/TON and LLL/USDe pools → lower slippage and higher trust.",
      color: "text-neon-cyan",
    },
    {
      icon: "🏆",
      title: "Prize Flywheel",
      text: "Part of prizes in LLL → organic buy pressure + ecosystem circulation.",
      color: "text-neon-pink",
    },
    {
      icon: "🔒",
      title: "veLLL Boosts",
      text: "Locking reduces liquid supply and concentrates governance with long-term holders.",
      color: "text-neon-orange",
    },
  ];

  const veNotes = [
    "Lock LLL to mint veLLL (non-transferable governance power).",
    "Longer lock → higher veLLL boost (e.g., 1m, 3m, 6m, 12m tiers).",
    "veLLL boosts staking APY, ticket multipliers, VIP access priority.",
    "Unlock after lock period; veLLL decays linearly over time.",
    "DAO sets exact multipliers, max lock, and boost weights.",
  ];

  const addresses = [
    { label: "LLL Token (TON)", value: "TBA (after audit)" },
    { label: "Sale/Distributor", value: "STON.fi pool (link at launch)" },
    { label: "Treasury (DAO)", value: "Multisig / Timelock (TBA)" },
  ];

  const faqs = [
    {
      q: "What’s the token utility?",
      a: "Ticket purchases, DAO voting, staking boosts, VIP access, and ecosystem fees/prizes routing.",
    },
    {
      q: "Is the principal safe?",
      a: "Yes—core products are designed lossless: principal is withdrawable at the end of lock or term.",
    },
    {
      q: "How are emissions controlled?",
      a: "Emissions are season-based and DAO-governed; unallocated tranches stay locked.",
    },
    {
      q: "Will you list on CEX?",
      a: "We’ll explore strategic listings as traction scales. No hard promises in the roadmap.",
    },
    {
      q: "How do burns work?",
      a: "DAO can schedule burns funded by yield conversion, fees, or revenue share.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--neon-yellow))_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,hsl(var(--neon-cyan))_0%,transparent_50%)]" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-neon-purple to-neon-pink text-white border-0 glow-pink">
            💎 LLL Tokenomics
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            <span className="text-neon-cyan">Tokenomics</span> & <span className="text-neon-yellow">veLLL</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Utility-first design, fair distribution, DAO-controlled emissions, and value accrual
            that compounds as the ecosystem grows.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-12">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-4 text-center"
            >
              <div className="text-xs uppercase tracking-wide text-muted-foreground">{m.label}</div>
              <div className="mt-1 font-semibold">{m.value}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {/* Utility */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neon-cyan text-glow mb-4">Token Utility</h3>
            {utilities.map((f, idx) => (
              <Card
                key={idx}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`text-2xl ${f.color} text-glow group-hover:animate-pulse-glow`}>{f.icon}</div>
                    <CardTitle className="text-lg text-glow">{f.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">{f.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Distribution */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neon-yellow text-glow mb-4">Token Distribution</h3>
            <Card className="bg-card/50 backdrop-blur-sm border-border glow-yellow">
              <CardHeader className="pb-2">
                <CardTitle className="text-center text-neon-yellow text-glow">Total Supply: 100,000,000 LLL</CardTitle>
                <CardDescription className="text-center">
                  Optimized for community growth, liquidity depth, and long-term sustainability.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {distribution.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{item.label}</span>
                      <span className="text-primary font-semibold">{item.value}</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-neon-yellow to-neon-orange transition-all duration-1000 ease-out"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* veLLL Section */}
        <div className="bg-gradient-to-r from-card/50 to-muted/50 backdrop-blur-sm border border-border rounded-2xl p-8 glow-intense mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-neon-cyan text-glow">veLLL: Vote-Escrowed LLL</h3>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
            Lock LLL to receive <span className="text-foreground font-semibold">veLLL</span>, a non-transferable governance weight
            that decays over time. Longer locks earn higher boosts for staking APY, ticket multipliers, and VIP access priority.
            Exact multipliers and max lock are defined via DAO.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-border">
              <CardHeader className="pb-2"><CardTitle>Lock Tiers (example)</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between"><span>1 month</span><span>→ 1.0× base veLLL</span></div>
                <div className="flex justify-between"><span>3 months</span><span>→ 1.5×</span></div>
                <div className="flex justify-between"><span>6 months</span><span>→ 2.0×</span></div>
                <div className="flex justify-between"><span>12 months</span><span>→ 3.0×</span></div>
                <p className="mt-3">*Values are indicative. DAO will finalize multipliers and weights.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardHeader className="pb-2"><CardTitle>Boost Targets</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div>• Staking APY boost weights (time-lock bonus)</div>
                <div>• Ticket multiplier for selected events</div>
                <div>• VIP room priority and private lottery access</div>
                <div>• Governance voting power (proportional to veLLL)</div>
              </CardContent>
            </Card>
          </div>

          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
            {veNotes.map((n, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neon-purple" />
                {n}
              </li>
            ))}
          </ul>
        </div>

        {/* Public Sale & Vesting */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle>Public Sale Details</CardTitle>
              <CardDescription>Fair participation and anti-whale design.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between"><span>Price</span><span className="text-foreground font-medium">$0.01</span></div>
              <div className="flex justify-between"><span>Allocation</span><span className="text-foreground font-medium">35,000,000 LLL</span></div>
              <div className="flex justify-between"><span>Cap</span><span className="text-foreground font-medium">$350,000 total</span></div>
              <div className="flex justify-between"><span>Wallet Cap</span><span className="text-foreground font-medium">$500 per wallet</span></div>
              <div className="flex justify-between"><span>Venue</span><span className="text-foreground font-medium">STON.fi</span></div>
              <p className="mt-3">Anti-bot protections and spacing between buys applied. Transparency reports published periodically.</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle>Vesting & Cliffs</CardTitle>
              <CardDescription>Alignment-focused release schedule.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {vesting.map((v, i) => (
                <div key={i}>
                  <div className="font-medium">{v.label}</div>
                  <div className="text-sm text-muted-foreground">{v.details}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Value Accrual */}
        <div className="bg-gradient-to-r from-card/50 to-muted/50 backdrop-blur-sm border border-border rounded-2xl p-8 glow-intense mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-neon-cyan text-glow">Value Accrual</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {accrual.map((a, i) => (
              <div key={i} className="text-center">
                <div className={`text-3xl mb-3 ${a.color} text-glow`}>{a.icon}</div>
                <h4 className={`text-lg font-bold mb-2 ${a.color}`}>{a.title}</h4>
                <p className="text-muted-foreground text-sm">{a.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Liquidity & DAO Policy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle>Liquidity Policy</CardTitle>
              <CardDescription>Stability-first, community-approved deepening.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div>• Initial pool seeded small; scaled with a portion of sale proceeds.</div>
              <div>• Pools: LLL/TON and LLL/USDe as usage grows.</div>
              <div>• Slippage targets and MM programs proposed via DAO.</div>
              <div>• Emergency liquidity measures and rebalancing outlined on-chain.</div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle>Governance & DAO</CardTitle>
              <CardDescription>Community decides. On-chain, transparent, enforceable.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div>• Proposals: rewards, burns, LP policy, marketing, partner pools.</div>
              <div>• Voting power: proportional to <span className="text-foreground font-medium">veLLL</span>.</div>
              <div>• Treasury: multisig/timelock; periodic transparency reports.</div>
              <div>• Anti-sybil: participation thresholds, cooldowns, and identity heuristics.</div>
            </CardContent>
          </Card>
        </div>

        {/* Addresses / Security */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle>Addresses</CardTitle>
              <CardDescription>Published after audit, verified on TON explorers.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {addresses.map((a, i) => (
                <div key={i} className="flex justify-between flex-col md:flex-row gap-1 md:gap-4">
                  <span className="text-muted-foreground">{a.label}</span>
                  <span className="font-medium">{a.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border">
            <CardHeader>
              <CardTitle>Security & Audits</CardTitle>
              <CardDescription>Ship-safe policy with staged releases.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div>• External audit prior to token deployment and major upgrades.</div>
              <div>• Bounties for whitehats; public disclosure policy.</div>
              <div>• Timelocks and multisig safeguards for treasury operations.</div>
              <div>• Runtime monitors and anomaly alerts on pools and emissions.</div>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">FAQs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-xl border border-border/60 p-4">
                <div className="font-semibold mb-1">{f.q}</div>
                <div className="text-sm text-muted-foreground">{f.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center">
          *This page is informational and may evolve through DAO decisions. Figures and schedules are subject to change.
        </p>
      </div>
    </section>
  );
}
