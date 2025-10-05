"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, FileText, Boxes, ShieldCheck, Link2, Gem, CircuitBoard, Database, Cpu, Vote, Zap, Rocket, Lock, BookOpen, Globe2, PlugZap, Coins, BoxesIcon, ListChecks, Code, Network, GitBranch, Trophy, Info, ChevronRight } from "lucide-react";

/**
 * LLL Documentation Page
 * - Sidebar with anchor nav
 * - Search (client-side filter)
 * - Structured sections for: Overview, DAO, Token, Lottery Mechanics, Sponsorship, Architecture, Contracts, APIs, Mini App, Frontend, Security, Compliance, Ops/DevOps, FAQ, Glossary
 * - Copy is written to be practical and technical. Replace network/addresses with real values.
 */

function LLLDocsPage() {
  const sections = useMemo(() => getSections(), []);
  const [query, setQuery] = useState("");
  const filtered = useMemo(() =>
    query.trim().length < 2
      ? sections
      : sections.map(group => ({
          ...group,
          items: group.items.map(s => ({
            ...s,
            hidden: !(
              s.title.toLowerCase().includes(query.toLowerCase()) ||
              s.keywords?.some(k => k.toLowerCase().includes(query.toLowerCase())) ||
              s.html.toLowerCase().includes(query.toLowerCase())
            ),
          }))
        })), [query, sections]);

  useEffect(() => {
    // hash navigation on mount
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background/70 to-background text-white py-16">
      {/* Top hero */}
      <section className="px-4 py-10 border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between gap-6">
          <div className="max-w-3xl">
            <Badge variant="outline" className="border-neon-cyan text-neon-cyan">Docs</Badge>
            <h1 className="mt-3 text-3xl md:text-5xl font-orbitron font-bold">LLL Documentation</h1>
            <p className="mt-3 text-muted-foreground">Everything you need to build on and integrate with the Lossless Lottery (LLL): DAO, token standards, lottery mechanics, APIs, mini app, sponsorship, and security.</p>
          </div>
          <div className="hidden md:block w-80">
            <Card className="bg-card/40 border-white/10">
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground">Latest</div>
                <ul className="mt-2 text-sm space-y-1">
                  <li>• Added ROI estimator API</li>
                  <li>• Clarified randomness proofs (VRF)</li>
                  <li>• New webhook examples</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid grid-cols-1 md:grid-cols-[280px,minmax(0,1fr)] gap-6 px-4 py-8">
        {/* Sidebar */}
        <aside className="md:sticky md:top-6 h-fit">
          <div className="mb-3 flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground"/>
            <Input placeholder="Search docs… (min 2 chars)" value={query} onChange={(e)=>setQuery(e.target.value)} className="bg-background/60"/>
          </div>
          <ScrollArea className="h-[70vh] rounded-lg border border-white/10">
            <nav className="p-3 space-y-4">
              {filtered.map((group, gi) => (
                <div key={gi}>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{group.title}</div>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                        //@ts-ignore
                      <li key={item.id} className={item.hidden?"hidden":"block"}>
                        <a href={`#${item.id}`} className="flex items-center gap-2 text-sm px-2 py-1 rounded-md hover:bg-white/5">
                          {item.icon}
                          <span>{item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </ScrollArea>
        </aside>

        {/* Content */}
        <div className="space-y-12">
          {sections.flatMap(g => g.items).map((s) => (
            <article id={s.id} key={s.id} className="scroll-mt-24">
              <header className="mb-3 flex items-center gap-3">
                {s.icon}
                <h2 className="text-2xl md:text-3xl font-orbitron font-bold">{s.title}</h2>
              </header>
              <div className="prose prose-invert max-w-none prose-pre:bg-black/40 prose-pre:border prose-pre:border-white/10 prose-code:text-neon-yellow" dangerouslySetInnerHTML={{ __html: s.html }} />
              <div className="mt-4">
                <a href="#top" className="inline-flex items-center text-neon-cyan text-sm">Back to top <ChevronRight className="h-4 w-4"/></a>
              </div>
              <Separator className="my-8 bg-white/5"/>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function html(strings: TemplateStringsArray) {
  return strings.join("")
}

function getSections() {
  return [
    {
      title: "Introduction",
      items: [
        {
          id: "overview",
          title: "Overview",
          icon: <BookOpen className="h-5 w-5 text-neon-yellow"/> ,
          keywords: ["intro","what is lll","lossless"],
          html: html`<p><strong>LLL</strong> (Lossless Lottery) is a crypto-native weekly prize system where players <em>never lose their principal</em>. Deposits are pooled, yield funds the prizes, and users can withdraw their principal anytime outside draw windows.</p>
          <ul>
            <li>Networks: <code>TON</code> (Telegram mini app first-class), optional EVM mirrors</li>
            <li>Core values: Fairness, Transparency (on-chain), Simplicity, Fun</li>
            <li>Key actors: Players, Sponsors, DAO Governors, Oracles</li>
          </ul>`
        },
        {
          id: "glossary",
          title: "Glossary",
          icon: <Info className="h-5 w-5 text-neon-cyan"/> ,
          html: html`<ul>
            <li><strong>Epoch</strong>: A prize cycle, typically 7 days.</li>
            <li><strong>LLL</strong>: Utility/governance token; used for perks, fees, and votes.</li>
            <li><strong>Prize Boost</strong>: Extra pool funded by sponsors or DAO budget.</li>
            <li><strong>Burn</strong>: Permanent removal of tokens from supply.</li>
            <li><strong>Jetton</strong>: Fungible token standard on TON (similar to ERC‑20).</li>
          </ul>`
        }
      ]
    },

    {
      title: "DAO & Governance",
      items: [
        {
          id: "dao-model",
          title: "Governance Model",
          icon: <Vote className="h-5 w-5 text-neon-yellow"/> ,
          keywords: ["dao","voting","governance"],
          html: html`<p>LLL is governed by a token‑holder DAO with progressive decentralization. Early phases use a <em>council + token vote</em> hybrid; full on-chain governance is the long‑term goal.</p>
          <h4>Voting Topics</h4>
          <ul>
            <li>Prize split (main prize vs. runner‑ups)</li>
            <li>Yield strategy allocation & risk parameters</li>
            <li>Burn schedules and emissions decay</li>
            <li>New games/quests and sponsor eligibility</li>
          </ul>
          <pre><code>// Example: Snapshot (off‑chain) → On‑chain execution via multisig
proposal {
  title: "Increase weekly burn from 20% to 30%",
  param: { burnRate: 0.30 },
  quorum: 10_000_000 LLL,
  threshold: 50% + 1,
}
</code></pre>`
        },
        {
          id: "dao-treasury",
          title: "Treasury & Policy",
          icon: <Coins className="h-5 w-5 text-neon-cyan"/> ,
          html: html`<p>The DAO treasury receives a portion of protocol revenue and sponsor funds earmarked for growth. Policies define spending constraints and transparent reporting.</p>
          <ul>
            <li>50/50 rule example: 50% of net revenue burned, 50% reinvested.</li>
            <li>Treasury wallet: <code>ton://EQD... (replace)</code></li>
            <li>Reports: monthly, with on-chain proofs and CSV exports.</li>
          </ul>`
        }
      ]
    },

    {
      title: "Token (LLL)",
      items: [
        {
          id: "token-standard",
          title: "Standard & Addresses",
          icon: <Network className="h-5 w-5 text-neon-yellow"/> ,
          keywords: ["jetton","erc20","address"],
          html: html`<p>Primary deployment is a <strong>TON Jetton</strong>. Optional EVM mirror (ERC‑20) can be used for CEX/DEX integrations.</p>
          <ul>
            <li>TON Jetton master: <code>ton://EQA... (replace)</code></li>
            <li>EVM (optional): <code>0xAbC... (replace)</code></li>
            <li>Decimals: 9 (TON), 18 (EVM)</li>
          </ul>
          <pre><code>// TON Jetton metadata (off‑chain)
{
  name: "LLL Token",
  symbol: "LLL",
  description: "Utility token for Lossless Lottery",
  image: "ipfs://...",
  socials: { twitter: "...", website: "https://lll.space" }
}
</code></pre>`
        },
        {
          id: "tokenomics",
          title: "Tokenomics",
          icon: <GitBranch className="h-5 w-5 text-neon-cyan"/> ,
          html: html`<ul>
            <li><strong>Supply</strong>: Max cap with inflationary issuance + decay & burn mechanism (governed).</li>
            <li><strong>Utility</strong>: Fee discounts, governance votes, boosted rewards, sponsor integrations.</li>
            <li><strong>Burns</strong>: From sponsor programs (LLL Burner) and protocol fees.</li>
            <li><strong>Staking</strong>: Tiered voting power; higher stakers gain more influence.</li>
          </ul>`
        },
        {
          id: "fees",
          title: "Fees & Economics",
          icon: <ListChecks className="h-5 w-5 text-neon-purple"/> ,
          html: html`<p>Protocol aims for sustainable yield‑funded prizes. Fees are minimized and transparent.</p>
          <ul>
            <li>Deposit/Withdraw: 0 (network fee only)</li>
            <li>Prize Claim: gas only</li>
            <li>Swap/Bridge (if any): per‑integrated DEX/bridge schedule</li>
          </ul>`
        }
      ]
    },

    {
      title: "Lottery Mechanics",
      items: [
        {
          id: "participation",
          title: "How to Participate",
          icon: <Trophy className="h-5 w-5 text-neon-yellow"/> ,
          keywords: ["join","buy ticket","howto"],
          html: html`<ol>
            <li>Open the Telegram mini app or web app.</li>
            <li>Deposit the supported asset (e.g., <code>TON</code>).</li>
            <li>Choose an <em>epoch</em> and buy tickets. Principal is recoverable outside draw windows.</li>
            <li>After the draw, claim winnings if any—or stay for the next epoch.</li>
          </ol>
          `
        },
        {
          id: "randomness",
          title: "Randomness & Fairness",
          icon: <ShieldCheck className="h-5 w-5 text-neon-cyan"/> ,
          keywords: ["vrf","random","fair"],
          html: html`<p>Draws use a verifiable randomness function (VRF) or oracle‑backed beacon. Proofs are published with each epoch.</p>
          <pre><code>// Pseudocode: Verifying VRF proof
require vrf.verify({
  seed: epochId || blockHash,
  proof,
  publicKey,
}) == true
</code></pre>
          <ul>
            <li>Public seed: previous block hash or epoch hash</li>
            <li>Independent verification script in repo</li>
            <li>Full audit trail linked per epoch</li>
          </ul>`
        },
        {
          id: "prizes",
          title: "Prize Structure",
          icon: <Gem className="h-5 w-5 text-neon-purple"/> ,
          html: html`<ul>
            <li>Main prize + runner‑ups (DAO configurable)</li>
            <li>Unclaimed prizes roll‑over by policy</li>
            <li>Sponsor boosts visible on epoch cards</li>
          </ul>`
        },
        {
          id: "sponsorship",
          title: "Sponsorship Integration",
          icon: <PlugZap className="h-5 w-5 text-neon-yellow"/> ,
          html: html`<p>Sponsors can boost prize pools (TON) or buy & burn LLL for exposure. All actions surface in the app with badges and logs.</p>
          <pre><code>// Example: Sponsor boost payload
POST /api/epochs/{id}/boost
{
  sponsor: "Exchange X",
  amountTON: 10_000000000,
  tx: "ton://..."
}
</code></pre>`
        }
      ]
    },

    {
      title: "Architecture & Contracts",
      items: [
        {
          id: "architecture",
          title: "System Architecture",
          icon: <CircuitBoard className="h-5 w-5 text-neon-yellow"/> ,
          keywords: ["microservices","kafka","k8s"],
          html: html`<p>Modular services connected via message brokers (Kafka/RabbitMQ/NATS). Smart contracts handle custody‑light flows; yield strategies are abstracted.</p>
          <pre><code>Users ─ Web/MiniApp ─ API Gateway ─┬─ Lottery Service
                                  ├─ Wallet/On‑chain Adapter
                                  ├─ Epoch Scheduler
                                  ├─ VRF/Oracle Service
                                  └─ Analytics & Reporting
Storage: PostgreSQL (core), QuestDB (timeseries), Redis (cache)
Infra: Kubernetes + Traefik + Prometheus/Grafana</code></pre>`
        },
        {
          id: "contracts",
          title: "Smart Contracts",
          icon: <Code className="h-5 w-5 text-neon-cyan"/> ,
          html: html`<ul>
            <li><strong>Jetton LLL</strong> — token logic</li>
            <li><strong>PrizePool</strong> — deposits, prize accrual, claims</li>
            <li><strong>EpochManager</strong> — epoch lifecycle, draw hooks</li>
            <li><strong>Oracle/VrfProxy</strong> — VRF coordination</li>
          </ul>
          <pre><code>// Interfaces (pseudo‑TL‑B / ABI)
get_prize(epoch_id) → amount
buy_tickets(user, epoch_id, qty) → receipt
withdraw(user, amount) → txHash
prove_draw(epoch_id, vrf_proof) → result</code></pre>`
        },
        {
          id: "addresses",
          title: "Addresses & Networks",
          icon: <Globe2 className="h-5 w-5 text-neon-purple"/> ,
          html: html`<ul>
            <li>TON Mainnet: PrizePool <code>ton://EQC... (replace)</code></li>
            <li>TON Testnet: PrizePool <code>ton://EQX... (replace)</code></li>
            <li>EVM (optional mirror): <code>0xabc... (replace)</code></li>
          </ul>`
        }
      ]
    },

    {
      title: "APIs & Webhooks",
      items: [
        {
          id: "rest",
          title: "REST API",
          icon: <Link2 className="h-5 w-5 text-neon-yellow"/> ,
          keywords: ["api","rest","swagger"],
          html: html`<pre><code>GET   /api/epochs                // list epochs
GET   /api/epochs/{id}          // epoch details
POST  /api/tickets              // buy tickets
POST  /api/withdraw             // withdraw principal
GET   /api/user/{addr}/balance  // user balance
</code></pre>
          <p>Auth: JWT (user), HMAC (server‑to‑server). Rate limits: 60 req/min (public), 600 req/min (partner).</p>`
        },
        {
          id: "webhooks",
          title: "Webhooks",
          icon: <Zap className="h-5 w-5 text-neon-cyan"/> ,
          html: html`<pre><code>// Signed webhook (HMAC‑SHA256)
POST https://partner.com/hooks/lll
{
  event: "epoch.drawn",
  epoch: 123,
  result: { seed: "0x..", winners: ["UQ..."], proof: "0x.." },
  ts: 1736111111,
  sig: "base64(hmac(body, secret))"
}
</code></pre>`
        },
        {
          id: "sdk",
          title: "SDK & Examples",
          icon: <Boxes className="h-5 w-5 text-neon-purple"/> ,
          html: html`<pre><code>// JS example
import { LLL } from "@lll/sdk";
const lll = new LLL({ baseUrl: "https://api.lll.space", apiKey: process.env.LLL_KEY });
await lll.buyTickets({ epochId: 123, qty: 5, address: "UQ..." });
</code></pre>`
        }
      ]
    },


    {
      title: "Security & Compliance",
      items: [
        {
          id: "security",
          title: "Security Model",
          icon: <Lock className="h-5 w-5 text-neon-yellow"/> ,
          keywords: ["audit","hsm","key management"],
          html: html`<ul>
            <li>Non‑custodial architecture where possible; minimize hot‑wallet exposure</li>
            <li>Key management via HSM/secure vaults, role‑based approvals</li>
            <li>Independent audits and ongoing monitoring (APM/alerting)</li>
          </ul>`
        },
        {
          id: "compliance",
          title: "Compliance & Fair Play",
          icon: <ShieldCheck className="h-5 w-5 text-neon-cyan"/> ,
          html: html`<ul>
            <li>Clear "Sponsored" labels and disclosures</li>
            <li>Regional compliance checks; restricted jurisdictions list</li>
            <li>Anti‑fraud: device fingerprinting, velocity checks</li>
          </ul>`
        }
      ]
    },

    {
      title: "Operations",
      items: [
        {
          id: "observability",
          title: "Observability",
          icon: <Database className="h-5 w-5 text-neon-yellow"/> ,
          keywords: ["apm","logs","metrics"],
          html: html`<ul>
            <li>Tracing/APM: Elastic APM / OpenTelemetry</li>
            <li>Metrics: Prometheus + Grafana</li>
            <li>Logs: Loki/ELK, alerting via PagerDuty/Telegram</li>
          </ul>`
        },
        {
          id: "devops",
          title: "DevOps & CI/CD",
          icon: <Cpu className="h-5 w-5 text-neon-cyan"/> ,
          html: html`<ul>
            <li>Kubernetes (private cluster) + GitOps</li>
            <li>Blue/green for API; canary for mini app</li>
            <li>Backups: PostgreSQL PITR, object storage for assets</li>
          </ul>`
        }
      ]
    },

    {
      title: "FAQ & Resources",
      items: [
        {
          id: "faq",
          title: "FAQ",
          icon: <FileText className="h-5 w-5 text-neon-yellow"/> ,
          html: html`<p><strong>Q:</strong> Can sponsors influence odds?<br/><strong>A:</strong> No. Sponsors have zero lottery weight; they only boost prizes or burn tokens.</p>
          <p><strong>Q:</strong> How are winners selected?<br/><strong>A:</strong> Via VRF proofs published per epoch (see Randomness & Fairness).</p>`
        },
        {
          id: "links",
          title: "Links & Repos",
          icon: <Link2 className="h-5 w-5 text-neon-cyan"/> ,
          html: html`<ul>
            <li>Website: <code>https://lll.space</code></li>
            <li>API: <code>https://api.lll.space</code></li>
            <li>Docs repo: <code>github.com/lll-space/docs</code> (replace)</li>
          </ul>`
        }
      ]
    }
  ];
}


export default LLLDocsPage