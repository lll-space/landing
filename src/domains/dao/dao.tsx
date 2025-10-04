// app/dao/page.tsx  (or components/DaoPage.tsx)
export default function DaoPage() {
  const pillars = [
    { title: "Community-First", text: "From day one, the DAO governs emissions, burns, LP policy, and growth." },
    { title: "Transparent by Default", text: "On-chain treasury, public reports, time-locked upgrades." },
    { title: "Merit & Commitment", text: "veLLL rewards long-term lockers with real influence and utility boosts." },
    { title: "Security-Driven", text: "Multisig + timelock + audits + public disclosure and bounties." },
  ];

  const lifecycle = [
    { step: "1", title: "Draft", text: "Community drafts a proposal in forum/Discord; collect feedback and supporters." },
    { step: "2", title: "Submit", text: "Submit on-chain proposal payload with description, targets, and parameters." },
    { step: "3", title: "Review", text: "Warm-up window for public review & risk assessment before voting opens." },
    { step: "4", title: "Vote", text: "veLLL holders vote FOR/AGAINST within the voting window (e.g., 5–7 days)." },
    { step: "5", title: "Queue", text: "Approved proposals are queued in timelock to allow final checks." },
    { step: "6", title: "Execute", text: "After timelock, proposal executes on-chain; results published automatically." },
  ];

  const votingParams = [
    { label: "Quorum", value: "≥ 8% of total veLLL", note: "Minimum participation to consider a vote valid." },
    { label: "Approval Threshold", value: "≥ 51% FOR", note: "Simple majority; adjustable via meta-governance." },
    { label: "Voting Window", value: "5–7 days", note: "DAO can extend/shorten in special cases." },
    { label: "Timelock", value: "24–72 hours", note: "Safety delay before execution." },
    { label: "Proposal Cooldown", value: "48 hours", note: "Prevents spam and conflicting votes." },
    { label: "Delegate Voting", value: "Supported", note: "veLLL holders can delegate to trusted stewards." },
  ];

  const vePoints = [
    "Lock LLL to mint veLLL (non-transferable governance weight).",
    "Longer lock → higher voting power (e.g., 1m, 3m, 6m, 12m tiers).",
    "veLLL decays linearly; renew/extend to maintain voting strength.",
    "veLLL boosts utility: staking APY, ticket multipliers, VIP access priority.",
    "DAO defines multipliers, max lock, boost weights via meta-governance.",
  ];

  const transparency = [
    { label: "Treasury Address", value: "TBA (multisig + timelock)" },
    { label: "Monthly Reports", value: "Emissions, burns, LP add/remove, grants, ops spend" },
    { label: "Audit Status", value: "External audit before major upgrades" },
    { label: "Bounty Program", value: "Whitehat-friendly, published scope & rewards" },
    { label: "On-chain Registry", value: "Proposal history, results, execution txs" },
  ];

  const roadmap = [
    { phase: "Now", items: ["Day-1 DAO for rewards/burn/LP policy", "Transparency reports", "Public proposal forum"] },
    { phase: "Next", items: ["Delegation UI & steward program", "Grant framework for builders", "Partner pools via DAO"] },
    { phase: "Later", items: ["Meta-governance over voting params", "SubDAOs for products (VIP, SPINS)", "Cross-chain representation"] },
  ];

  const faqs = [
    { q: "What is veLLL?", a: "Vote-escrowed LLL. Lock LLL for time T to receive non-transferable voting power that decays over time. Longer locks = more influence + utility boosts." },
    { q: "Who can submit proposals?", a: "Any wallet that meets the proposal threshold (e.g., min veLLL). Drafts should first be discussed in the forum for feedback." },
    { q: "How do I verify execution?", a: "All proposals, queues, and executions are on-chain. Links to tx hashes and timelock queues are published in the DAO explorer." },
    { q: "What can the DAO control?", a: "Rewards emissions, burn cadence, LP strategy, grants/partnerships, marketing budgets, and future parameter changes." },
    { q: "Is there a risk committee?", a: "The DAO may elect stewards to review proposals. Their recommendations are advisory; the vote always decides." },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-32 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        {/* header */}
        <div className="text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs tracking-wide text-cyan-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            LLL · DAO
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Community-Governed. <span className="text-cyan-300">Transparent.</span> <span className="text-fuchsia-300">Secure.</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-300 max-w-3xl mx-auto">
            LLL DAO puts the community in charge—from emissions and burns to LP policy and partnerships—using veLLL to reward long-term commitment.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/vote" className="inline-flex items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 font-medium text-cyan-200 hover:bg-cyan-400/20">
              View Proposals
            </a>
            <a href="/treasury" className="inline-flex items-center justify-center rounded-xl border border-fuchsia-400/40 px-5 py-3 font-medium text-fuchsia-300 hover:bg-fuchsia-400/10">
              Treasury & Reports →
            </a>
          </div>
        </div>

        {/* pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-5">
              <div className="text-sm font-semibold text-cyan-200">{p.title}</div>
              <p className="mt-2 text-sm text-zinc-300">{p.text}</p>
            </div>
          ))}
        </div>

        {/* How it works + veLLL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="text-2xl font-bold text-neon-cyan">How the DAO Works</h2>
            <p className="mt-3 text-zinc-300">
              Governance happens fully on-chain. Proposals are drafted by the community, voted by veLLL holders, and executed through timelocked contracts for safety.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>• Anyone meeting the proposal threshold can submit.</li>
              <li>• Voting power is proportional to veLLL balance at snapshot.</li>
              <li>• Execution is delayed by timelock to allow public scrutiny.</li>
              <li>• Full history is permanently auditable on-chain.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="text-2xl font-bold text-neon-yellow">veLLL (Vote-Escrowed LLL)</h2>
            <p className="mt-3 text-zinc-300">
              Lock LLL for a chosen duration to mint veLLL. Longer locks grant more voting power and utility boosts. veLLL decays linearly until unlock.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300">
              {vePoints.map((pt) => (
                <div key={pt} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neon-purple" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
              <div className="text-sm text-zinc-400">Example lock tiers (final values via DAO):</div>
              <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-100">1m → 1.0×</div>
                <div className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-100">3m → 1.5×</div>
                <div className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-100">6m → 2.0×</div>
                <div className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-100">12m → 3.0×</div>
              </div>
            </div>
          </div>
        </div>

        {/* Proposal lifecycle */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 mb-16">
          <h2 className="text-2xl font-bold text-neon-cyan">Proposal Lifecycle</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {lifecycle.map((s) => (
              <div key={s.step} className="relative rounded-xl border border-zinc-800/80 bg-zinc-950/40 p-4">
                <div className="absolute -top-3 -left-3 rounded-full border border-zinc-700 bg-zinc-900/90 px-3 py-1 text-xs text-zinc-300">
                  Step {s.step}
                </div>
                <div className="mt-2 font-semibold text-white">{s.title}</div>
                <p className="mt-1 text-sm text-zinc-300">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Voting parameters */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 mb-16">
          <h2 className="text-2xl font-bold text-neon-yellow">Voting Parameters</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {votingParams.map((v) => (
              <div key={v.label} className="rounded-xl border border-zinc-800/70 bg-zinc-950/50 p-4">
                <div className="text-sm text-zinc-400">{v.label}</div>
                <div className="mt-1 font-semibold text-white">{v.value}</div>
                <div className="mt-1 text-sm text-zinc-400">{v.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Treasury & Transparency */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="text-2xl font-bold text-neon-cyan">Treasury</h2>
            <p className="mt-3 text-zinc-300">
              DAO treasury receives allocations and revenue shares, funds LP deepening, grants, audits, and growth initiatives under community oversight.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>• Multisig signers (public) with rotation policy.</li>
              <li>• Timelock on all sensitive operations.</li>
              <li>• Monthly transparency reports.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {transparency.map((t) => (
                <span key={t.label} className="rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-zinc-300">
                  <span className="text-zinc-400">{t.label}:</span> {t.value}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <a href="/treasury" className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200 hover:bg-cyan-400/20">Open Treasury</a>
              <a href="/reports" className="rounded-xl border border-fuchsia-400/40 px-4 py-2 text-fuchsia-300 hover:bg-fuchsia-400/10">Monthly Reports</a>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="text-2xl font-bold text-neon-yellow">Security</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>• External audits before token deployment and major upgrades.</li>
              <li>• Bug bounty program and responsible disclosure.</li>
              <li>• Production monitoring and anomaly alerts on pools/emissions.</li>
              <li>• Emergency shutdowns guarded by DAO-defined criteria.</li>
            </ul>
            <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 text-sm text-zinc-400">
              *Security is a process, not a switch—the DAO iterates parameters and safeguards as the system scales.
            </div>
          </div>
        </div>

        {/* DAO roadmap */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 mb-16">
          <h2 className="text-2xl font-bold text-neon-cyan">DAO Roadmap</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {roadmap.map((r) => (
              <div key={r.phase} className="rounded-xl border border-zinc-800/70 bg-zinc-950/50 p-4">
                <div className="text-sm text-zinc-400">{r.phase}</div>
                <ul className="mt-2 space-y-1 text-sm text-zinc-300">
                  {r.items.map((it) => (<li key={it}>• {it}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 mb-10">
          <h2 className="text-2xl font-bold text-white">FAQs</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-zinc-800/70 bg-zinc-950/50 p-4">
                <div className="font-semibold text-white">{f.q}</div>
                <div className="mt-1 text-sm text-zinc-300">{f.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* bottom CTAs */}
        <div className="mb-4 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/vote" className="inline-flex items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 font-medium text-cyan-200 hover:bg-cyan-400/20">
            Start a Proposal
          </a>
          <a href="/delegate" className="inline-flex items-center justify-center rounded-xl border border-emerald-400/40 px-5 py-3 font-medium text-emerald-300 hover:bg-emerald-400/10">
            Delegate veLLL
          </a>
          <a href="/docs/dao" className="inline-flex items-center justify-center rounded-xl border border-fuchsia-400/40 px-5 py-3 font-medium text-fuchsia-300 hover:bg-fuchsia-400/10">
            Read Governance Docs →
          </a>
        </div>

        <p className="text-center text-xs text-zinc-500">
          *Parameters shown are examples and may evolve via DAO voting. Always verify current settings on the governance portal.
        </p>
      </div>
    </section>
  );
}
