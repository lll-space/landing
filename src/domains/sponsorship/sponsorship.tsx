"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Crown, Zap, TrendingUp, Rocket, ShieldCheck, Sparkles, ArrowRight, Handshake, LineChart, Coins, Megaphone, Mail, Phone, Building2, CheckCircle2, ChevronRight, Gauge, CircleDollarSign } from "lucide-react";

// shadcn/ui components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function SponsorshipPage() {
  // ROI calculator state
  const [amount, setAmount] = useState<number>(10000);
  const [cpm, setCpm] = useState<number>(8); // cost per 1k impressions (USD)
  const [ctr, setCtr] = useState<number>(2.5); // % click-through
  const [conv, setConv] = useState<number>(4); // % conversion to signup
  const [arpu, setArpu] = useState<number>(18); // average revenue per new user (USD)

  const impressions = useMemo(() => (amount / cpm) * 1000, [amount, cpm]);
  const clicks = useMemo(() => impressions * (ctr / 100), [impressions, ctr]);
  const signups = useMemo(() => clicks * (conv / 100), [clicks, conv]);
  const estRevenue = useMemo(() => signups * arpu, [signups, arpu]);
  const roiPct = useMemo(() => (estRevenue - amount) / amount * 100, [estRevenue, amount]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background/60 to-background text-white">
      {/* Hero */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-5 border-neon-cyan text-neon-cyan">Partnership Opportunities</Badge>
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold tracking-tight mb-4">
              Become an <span className="text-neon-yellow">LLL Sponsor</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              Boost prize pools, gain premium brand exposure across our lossless lottery ecosystem, and help onboard the next
              million users to fair, transparent crypto gaming.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a href="#models"><Button size="lg" className="bg-neon-yellow text-black hover:bg-neon-yellow/90">Explore Models <ArrowRight className="ml-2 h-4 w-4"/></Button></a>
              <a href="#contact"><Button size="lg" variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">Talk to Partnerships</Button></a>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
            {[
              { icon: <Rocket className="h-5 w-5"/>, label: "Weekly Epochs", value: "52+ /yr" },
              { icon: <Megaphone className="h-5 w-5"/>, label: "Avg. Impressions/Epoch", value: "250k+" },
              { icon: <ShieldCheck className="h-5 w-5"/>, label: "Lossless Core", value: "100%" },
              { icon: <LineChart className="h-5 w-5"/>, label: "On‑chain Transparency", value: "Live" },
            ].map((s, i) => (
              <Card key={i} className="bg-card/40 backdrop-blur border-white/10">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="text-neon-cyan">{s.icon}</div>
                  <div>
                    <div className="text-xl font-bold">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Models */}
      <section id="models" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron">Sponsorship Models</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Flexible ways to participate—pick one model or combine them for maximum impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/50 border-neon-purple/20 hover:border-neon-purple/40 transition-all">
              <CardHeader>
                <Crown className="h-8 w-8 text-neon-yellow mb-2" />
                <CardTitle>Prize Booster</CardTitle>
                <CardDescription>Deposit TON to directly increase prize pools and attract more players.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-neon-yellow"/> No lottery weight (fair play)</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-neon-yellow"/> Brand on epoch cards & winner screens</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-neon-yellow"/> Custom sponsor badge</p>
                <Separator className="bg-white/10" />
                <div className="text-xs">Ideal for: Protocols, wallets, L2s, foundations.</div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-neon-cyan/20 hover:border-neon-cyan/40 transition-all">
              <CardHeader>
                <Zap className="h-8 w-8 text-neon-cyan mb-2" />
                <CardTitle>LLL Burner</CardTitle>
                <CardDescription>Buy & burn LLL for maximum exposure across the platform.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-neon-cyan"/> Logo in Telegram mini app</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-neon-cyan"/> “Sponsored by” mentions in feeds</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-neon-cyan"/> Press & blog coverage inclusion</p>
                <Separator className="bg-white/10" />
                <div className="text-xs">Ideal for: Exchanges, media, KOL collectives.</div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-neon-purple/20 hover:border-neon-purple/40 transition-all">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-neon-purple mb-2" />
                <CardTitle>Strategic Partnership</CardTitle>
                <CardDescription>Deeper integrations and co‑marketing with revenue sharing options.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-neon-purple"/> Cross‑promotion & quests</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-neon-purple"/> Integration possibilities (SDK/API)</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-neon-purple"/> Optional revenue share</p>
                <Separator className="bg-white/10" />
                <div className="text-xs">Ideal for: L1/L2s, DeFi, wallets, infra.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tiers & Benefits */}
      {/* <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold font-orbitron">Tiers & Benefits</h3>
            <p className="text-muted-foreground mt-2">Choose a package or request a custom mix. All tiers include safety review & brand guidelines alignment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Starter", color: "border-white/15", price: "$5k+", perks: ["Logo on epoch card", "Tweet mention", "Leaderboard badge"] },
              { name: "Growth", color: "border-neon-cyan/40", price: "$15k+", perks: ["All Starter perks", "Mini app placement", "Newsletter feature"] },
              { name: "Pro", color: "border-neon-yellow/40", price: "$35k+", perks: ["All Growth perks", "Homepage hero", "Co‑branded quests"] },
              { name: "Enterprise", color: "border-neon-purple/40", price: "Custom", perks: ["Full funnel package", "Integrations & API", "Press & PR sprint"] },
            ].map((t, idx) => (
              <Card key={idx} className={`bg-card/40 backdrop-blur border ${t.color} hover:translate-y-[-2px] transition`}> 
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{t.name}</span>
                    {idx === 2 && (
                      <Badge className="bg-neon-yellow text-black">Popular</Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-lg">Starting at <span className="font-semibold text-white">{t.price}</span></CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  {t.perks.map((p, i) => (
                    <p key={i} className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-neon-yellow"/>{p}</p>
                  ))}
                  <div className="pt-3">
                    <a href="#contact"><Button variant="outline" className="w-full border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">Request Offer</Button></a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why sponsor */}
      {/* <section className="py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-3xl font-bold font-orbitron mb-4">Why Sponsor LLL?</h3>
            <p className="text-muted-foreground mb-6">We blend crypto‑native virality with on‑chain transparency. Sponsoring LLL puts your brand at the center of weekly moments of excitement.</p>
            <div className="space-y-4">
              {[
                { icon: <Handshake className="h-5 w-5"/>, title: "Trusted Audience", desc: "Active, crypto‑savvy users across Telegram, web, and partner channels." },
                { icon: <Gauge className="h-5 w-5"/>, title: "Performance Tracking", desc: "Unique links, UTM tracking, and transparent reports per epoch." },
                { icon: <ShieldCheck className="h-5 w-5"/>, title: "Fair & Lossless", desc: "No sponsor advantage in draws. 100% user‑first mechanics." },
                { icon: <CircleDollarSign className="h-5 w-5"/>, title: "Flexible Budgets", desc: "From $5k test flights to enterprise co‑marketing programs." },
              ].map((f, i) => (
                <div key={i} className="flex gap-3">
                  <div className="text-neon-cyan mt-1">{f.icon}</div>
                  <div>
                    <div className="font-semibold">{f.title}</div>
                    <div className="text-sm text-muted-foreground">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Card className="bg-card/50 border-white/10">
            <CardHeader>
              <CardTitle>ROI Estimator</CardTitle>
              <CardDescription>Back‑of‑the‑envelope to plan budgets. Edit assumptions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Budget (USD)</Label>
                  <Input type="number" min={1000} value={amount} onChange={(e)=>setAmount(Number(e.target.value)||0)} />
                </div>
                <div>
                  <Label>CPM (USD)</Label>
                  <Input type="number" step="0.1" value={cpm} onChange={(e)=>setCpm(Number(e.target.value)||0)} />
                </div>
                <div>
                  <Label>CTR (%)</Label>
                  <Input type="number" step="0.1" value={ctr} onChange={(e)=>setCtr(Number(e.target.value)||0)} />
                </div>
                <div>
                  <Label>Conv. to Signup (%)</Label>
                  <Input type="number" step="0.1" value={conv} onChange={(e)=>setConv(Number(e.target.value)||0)} />
                </div>
                <div className="col-span-2">
                  <Label>ARPU per New User (USD)</Label>
                  <Input type="number" step="0.1" value={arpu} onChange={(e)=>setArpu(Number(e.target.value)||0)} />
                </div>
              </div>
              <Separator className="bg-white/10"/>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <Metric label="Est. Impressions" value={formatNumber(impressions)} />
                <Metric label="Est. Clicks" value={formatNumber(clicks)} />
                <Metric label="Est. Signups" value={formatNumber(signups)} />
                <Metric label="Est. Revenue" value={`$${formatNumber(estRevenue)}`} />
              </div>
              <div className={`text-center font-semibold ${roiPct>=0?"text-neon-yellow":"text-red-400"}`}>
                ROI: {roiPct.toFixed(1)}%
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Process */}
      <section className="py-16 px-4 bg-gradient-to-b from-background/40 to-background/60">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold font-orbitron text-center mb-10">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: 1, t: "Discovery", d: "Share goals, audience fit, and creative preferences." },
              { n: 2, t: "Package", d: "Pick a model, tier, and timeline. Sign LOA." },
              { n: 3, t: "Launch", d: "Assets live across mini app, web, and socials." },
              { n: 4, t: "Report", d: "Weekly metrics & on‑chain proof of spend." },
            ].map((s) => (
              <Card key={s.n} className="bg-card/40 border-white/10">
                <CardContent className="p-6">
                  <div className="text-4xl font-orbitron text-neon-yellow">{s.n}</div>
                  <div className="mt-2 font-semibold">{s.t}</div>
                  <div className="text-sm text-muted-foreground">{s.d}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logos (placeholder) */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center text-sm text-muted-foreground mb-6">Trusted by teams across crypto & fintech</div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 opacity-80">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="aspect-[3/1] bg-white/5 rounded-xl border border-white/10" />
            ))}
          </div>
        </div>
      </section>

      {/* Case study / Guarantee */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <Card className="bg-card/50 border-neon-yellow/30">
            <CardHeader>
              <CardTitle>Case Snapshot</CardTitle>
              <CardDescription>Exchange sponsor — 3 week sprint</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Budget: $20k • Impressions: 2.6M • Clicks: 63k • Signups: 2.4k • CAC: ~$8.3</p>
              <p>Channels: Mini app hero, epoch cards, X/Telegram posts, quest collab.</p>
              <p>Result: +14% MoM trading MAU from sponsored cohorts.</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-white/10">
            <CardHeader>
              <CardTitle>Brand Safety & Compliance</CardTitle>
              <CardDescription>We follow strict policies for fair play and disclosures.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Clearly labeled “Sponsored” placements</li>
                <li>No sponsor advantage in draws or odds</li>
                <li>On‑chain attestations for burns and prize boosts</li>
                <li>Regional compliance checks for campaigns</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-3xl font-bold font-orbitron text-center mb-6">FAQ</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What budgets do you support?</AccordionTrigger>
              <AccordionContent>From $5k tests to enterprise campaigns. We can ramp per performance.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do you measure results?</AccordionTrigger>
              <AccordionContent>UTM links, referral codes, on‑chain proofs, and weekly reports with impressions/clicks/CAC.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can we combine models?</AccordionTrigger>
              <AccordionContent>Yes. Many partners mix Prize Boost + LLL Burn + Quests for maximum effect.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How fast can we launch?</AccordionTrigger>
              <AccordionContent>Simple packages can go live within 3–5 business days after assets & LOA.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-t from-black/40 to-transparent">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <Badge variant="outline" className="mb-3 border-neon-yellow text-neon-yellow">Get in Touch</Badge>
            <h3 className="text-3xl font-bold font-orbitron mb-2">Start your sponsorship</h3>
            <p className="text-muted-foreground mb-6">Fill the form and our partnerships team will reply within 24–48h.
              Or email <span className="text-neon-cyan">info@lll.space</span>.</p>

            <div className="space-y-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><Building2 className="h-4 w-4 text-neon-cyan"/> Tailored packages for exchanges, L1/L2s, wallets, protocols, media.</p>
              <p className="flex items-center gap-2"><Coins className="h-4 w-4 text-neon-yellow"/> TON prize boosts and LLL burns supported.</p>
              <p className="flex items-center gap-2"><Megaphone className="h-4 w-4 text-neon-purple"/> Co‑marketing, quests, creator activations available.</p>
            </div>

            <div className="mt-6">
              <Link href="/media-kit" className="inline-flex items-center text-neon-cyan hover:underline">Download media kit <ChevronRight className="h-4 w-4 ml-1"/></Link>
            </div>
          </div>

          <Card className="bg-card/50 border-white/10">
            <CardHeader>
              <CardTitle>Contact Partnerships</CardTitle>
              <CardDescription>Tell us about your brand and goals.</CardDescription>
            </CardHeader>
            <ContactForm />
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 px-4">
        <div className="container mx-auto text-center">
          <h4 className="text-2xl font-orbitron font-bold mb-3">Ready to co‑create the next epoch?</h4>
          <p className="text-muted-foreground mb-6">Let’s design a sponsorship that users love and your CFO applauds.</p>
          <a href="#contact"><Button size="lg" className="bg-neon-yellow text-black hover:bg-neon-yellow/90">Book a Call <ArrowRight className="ml-2 h-4 w-4"/></Button></a>
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

function formatNumber(n: number) {
  if (!isFinite(n)) return "-";
  if (n < 1000) return n.toFixed(0);
  if (n < 1000000) return (n/1000).toFixed(1) + "k";
  return (n/1000000).toFixed(1) + "M";
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    model: "Prize Booster",
    budget: "5k‑15k",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) return alert("Please fill required fields.");
    try {
      setLoading(true);
      // Replace with your API route
      await fetch("/api/partner-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (e) {
      console.error(e);
      alert("Something went wrong. Please try again or email info@lll.space");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-neon-yellow mt-0.5"/>
          <div>
            <div className="font-semibold">Thanks! Your request has been received.</div>
            <div className="text-sm text-muted-foreground">We’ll get back to you within 24–48 hours.</div>
          </div>
        </div>
      </CardContent>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="flex items-center gap-1">Full name<span className="text-neon-yellow">*</span></Label>
          <Input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Jane Doe"/>
        </div>
        <div>
          <Label className="flex items-center gap-1">Work email<span className="text-neon-yellow">*</span></Label>
          <Input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="jane@company.com"/>
        </div>
        <div>
          <Label className="flex items-center gap-1">Company<span className="text-neon-yellow">*</span></Label>
          <Input value={form.company} onChange={(e)=>setForm({...form, company:e.target.value})} placeholder="Company Inc."/>
        </div>
        <div>
          <Label>Website</Label>
          <Input value={form.website} onChange={(e)=>setForm({...form, website:e.target.value})} placeholder="https://..."/>
        </div>
        <div>
          <Label>Model</Label>
          <Select value={form.model} onValueChange={(v)=>setForm({...form, model:v})}>
            <SelectTrigger className="w-full"><SelectValue/></SelectTrigger>
            <SelectContent>
              <SelectItem value="Prize Booster">Prize Booster</SelectItem>
              <SelectItem value="LLL Burner">LLL Burner</SelectItem>
              <SelectItem value="Strategic Partnership">Strategic Partnership</SelectItem>
              <SelectItem value="Media Sponsor">Media Sponsor</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Budget</Label>
          <Select value={form.budget} onValueChange={(v)=>setForm({...form, budget:v})}>
            <SelectTrigger className="w-full"><SelectValue/></SelectTrigger>
            <SelectContent>
              <SelectItem value="5k‑15k">$5k–$15k</SelectItem>
              <SelectItem value="15k‑35k">$15k–$35k</SelectItem>
              <SelectItem value="35k‑75k">$35k–$75k</SelectItem>
              <SelectItem value="75k+">$75k+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-2">
          <Label>Message</Label>
          <Textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} placeholder="Campaign goals, timelines, target regions, KPIs…" className="min-h-[120px]"/>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-xs text-muted-foreground">By submitting, you agree to be contacted about partnership opportunities.</div>
        <Button type="submit" disabled={loading} className="bg-neon-yellow text-black hover:bg-neon-yellow/90">
          {loading ? "Sending…" : "Request Partnership"}
        </Button>
      </div>
    </form>
  );
}
