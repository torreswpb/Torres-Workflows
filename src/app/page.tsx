import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  ssr: false,
  loading: () => (
    <div className="py-12 text-center text-slate-500 text-sm">
      Loading form...
    </div>
  ),
});

/* ─────────────────────────────────────────────
   Torres Workflows — marketing site
   Dark / indigo / emerald aesthetic
───────────────────────────────────────────── */

const services = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Workflow Automation",
    description:
      "Connect your existing tools with AI decision layers that route, classify, and act—without rebuilding your stack from scratch.",
    tag: "Automation",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "Document Intelligence",
    description:
      "Extract, classify, and act on unstructured data automatically. Invoices, contracts, reports—turned into structured signals your systems understand.",
    tag: "Extraction",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "Process Co-pilots",
    description:
      "Deploy AI assistants that know your business context, surface the right information at the right moment, and help your team move faster.",
    tag: "AI Assist",
  },
];

const steps = [
  {
    n: "01",
    title: "Audit your workflow",
    desc: "We map what your team actually does—tools, handoffs, bottlenecks—to find the highest-leverage automation opportunities.",
  },
  {
    n: "02",
    title: "Design the integration",
    desc: "We architect a solution that slots into your existing stack, not a rip-and-replace that stalls your operations.",
  },
  {
    n: "03",
    title: "Deploy & iterate",
    desc: "Ship fast with a working integration in days, then tune it with real usage data. No long consulting engagements.",
  },
];

const testimonials = [
  {
    quote:
      "Torres Workflows cut our invoice processing from 3 days to 4 hours. The AI doesn't just extract data—it routes and flags edge cases our team used to miss.",
    name: "Maria Chen",
    role: "VP of Operations",
    company: "Meridian Logistics",
  },
  {
    quote:
      "They shipped a working document analysis pipeline in two weeks. It plugged directly into our CRM—zero downtime, no rebuilding anything we already had.",
    name: "James Okafor",
    role: "Head of Revenue Ops",
    company: "Stackbridge Capital",
  },
];

const demoEntities = [
  { label: "Vendor", value: "Acme Supplies LLC", confidence: 99 },
  { label: "Invoice #", value: "INV-2024-08811", confidence: 99 },
  { label: "Amount Due", value: "$14,250.00", confidence: 98 },
  { label: "Due Date", value: "April 15, 2026", confidence: 97 },
  { label: "Line Items", value: "6 items detected", confidence: 95 },
  { label: "Routing", value: "→ Finance team / Tier 2 approval", confidence: 91 },
];

const logos = [
  { name: "Meridian", letter: "M" },
  { name: "Stackbridge", letter: "S" },
  { name: "Quorum", letter: "Q" },
  { name: "Halvex", letter: "H" },
  { name: "Novaris", letter: "N" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050814] text-white">
      <Navbar />

      {/* ── HERO ────────────────────────────────────────── */}
      <section id="hero" className="relative overflow-hidden pt-32 pb-24 px-6">
        {/* Background glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-radial from-brand-700/25 via-brand-900/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-purple-700/15 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gradient-radial from-accent-500/10 to-transparent rounded-full blur-3xl" />
          {/* Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
              AI workflow integration — built for operations teams
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-balance">
              We wire{" "}
              <span className="bg-gradient-to-r from-brand-400 via-purple-400 to-brand-300 bg-clip-text text-transparent">
                AI
              </span>{" "}
              into how your business actually{" "}
              <span className="text-white/90">works.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
              We don&apos;t sell AI hype. We embed practical AI into your existing
              processes—reducing manual work, improving accuracy, and shipping
              results in weeks, not quarters.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-brand-900/50"
              >
                Book a Free Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-300 border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <svg className="w-4 h-4 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
                See the Demo
              </a>
            </div>
          </div>

          {/* Workflow diagram mockup */}
          <div className="absolute hidden lg:block right-0 top-8 w-[420px]">
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm shadow-2xl shadow-black/40">
              {/* window chrome */}
              <div className="flex items-center gap-1.5 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-slate-500 font-mono">invoice-pipeline.flow</span>
              </div>

              {/* Nodes */}
              <div className="flex flex-col gap-2">
                {[
                  { label: "Email Inbox", icon: "✉️", status: "trigger", color: "from-slate-600 to-slate-700" },
                  { label: "Extract Invoice Data", icon: "🧠", status: "AI", color: "from-brand-700 to-purple-700" },
                  { label: "Validate & Enrich", icon: "✓", status: "rule", color: "from-slate-700 to-slate-800" },
                  { label: "Route to Approver", icon: "→", status: "action", color: "from-accent-600 to-accent-700" },
                ].map((node, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center text-sm flex-shrink-0`}>
                      {node.icon}
                    </div>
                    <div className="flex-1 bg-white/4 rounded-lg px-3 py-2 border border-white/6">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/80 font-medium">{node.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                          node.status === "AI"
                            ? "bg-brand-500/20 text-brand-300"
                            : node.status === "trigger"
                            ? "bg-yellow-500/15 text-yellow-400"
                            : node.status === "action"
                            ? "bg-accent-500/20 text-accent-400"
                            : "bg-white/8 text-slate-400"
                        }`}>
                          {node.status}
                        </span>
                      </div>
                    </div>
                    {i < 3 && (
                      <div className="absolute ml-4 mt-10 w-px h-2 bg-white/10" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/8 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                  <span className="text-xs text-slate-500">Running live</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">247 docs/day</span>
              </div>
            </div>
            {/* glow behind card */}
            <div className="absolute inset-0 -z-10 blur-2xl bg-gradient-to-br from-brand-700/20 to-purple-700/15 rounded-3xl scale-110" />
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────── */}
      <section className="border-y border-white/6 bg-white/2 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest text-slate-600 mb-8">
            Trusted by operations teams who ship fast
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {logos.map(({ name, letter }) => (
              <div key={name} className="flex items-center gap-2.5 opacity-40 hover:opacity-70 transition-opacity">
                <div className="w-7 h-7 rounded-md bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-xs font-bold text-white">
                  {letter}
                </div>
                <span className="text-sm font-semibold text-slate-300 tracking-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-xs uppercase tracking-widest text-brand-400 font-medium mb-3">What we build</p>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
              Three ways AI fits into your operations
            </h2>
            <p className="text-slate-400">
              We focus on integration depth, not feature breadth. Every engagement is scoped to your actual workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative bg-white/4 hover:bg-white/6 border border-white/8 hover:border-brand-500/30 rounded-2xl p-6 transition-all duration-300 cursor-default"
              >
                {/* hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-brand-500/5 to-purple-500/5" />

                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600/30 to-purple-700/30 border border-brand-500/20 flex items-center justify-center text-brand-300 mb-5">
                    {s.icon}
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-white text-base">{s.title}</h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-500/15 border border-brand-500/20 text-brand-400 font-medium">
                      {s.tag}
                    </span>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-white/2 border-y border-white/6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-xs uppercase tracking-widest text-brand-400 font-medium mb-3">The process</p>
            <h2 className="text-4xl font-bold text-white tracking-tight">
              From audit to automation in weeks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* connecting line */}
            <div className="hidden md:block absolute top-6 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-brand-500/40 via-purple-500/40 to-brand-500/40" />

            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-purple-700 flex items-center justify-center font-bold text-sm text-white shadow-lg shadow-brand-900/50 flex-shrink-0 z-10">
                    {step.n}
                  </div>
                  {i < 2 && (
                    <div className="md:hidden flex-1 h-px bg-brand-500/20" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE DEMO ────────────────────────────────────── */}
      <section id="demo" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-400 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
              Live demo
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
              See document intelligence in action
            </h2>
            <p className="text-slate-400">
              Drop any business document and our pipeline extracts, classifies, and routes it automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Upload panel */}
            <div className="bg-white/4 border border-white/10 rounded-2xl overflow-hidden">
              <div className="px-5 py-3.5 border-b border-white/8 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">Input</span>
                <span className="text-xs text-slate-600 font-mono">Accepts PDF, DOCX, PNG, JPG</span>
              </div>
              <div className="p-8 flex flex-col items-center justify-center gap-4 min-h-[220px]">
                <div className="w-14 h-14 rounded-2xl border-2 border-dashed border-white/15 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-white/80">Drop a business document</p>
                  <p className="text-xs text-slate-500 mt-1">or click to select a file</p>
                </div>
                <div className="w-full mt-2 bg-white/4 border border-white/8 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-white/80 truncate">ACME_Invoice_INV-2024-08811.pdf</p>
                    <p className="text-xs text-slate-500">142 KB · Loaded as sample</p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Output panel */}
            <div className="bg-white/4 border border-white/10 rounded-2xl overflow-hidden">
              <div className="px-5 py-3.5 border-b border-white/8 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">Extracted entities</span>
                <div className="flex items-center gap-1.5 text-xs text-accent-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                  Processed in 1.2s
                </div>
              </div>
              <div className="divide-y divide-white/5">
                {demoEntities.map((e) => (
                  <div key={e.label} className="px-5 py-3 flex items-center justify-between gap-4">
                    <span className="text-xs text-slate-500 w-24 flex-shrink-0">{e.label}</span>
                    <span className="text-xs text-white/90 font-medium flex-1">{e.value}</span>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <div className="h-1 w-14 rounded-full bg-white/8 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent-500 to-accent-400 rounded-full"
                          style={{ width: `${e.confidence}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-600 font-mono">{e.confidence}%</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-5 py-3.5 bg-accent-500/5 border-t border-accent-500/20 flex items-center gap-2">
                <svg className="w-4 h-4 text-accent-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="text-xs text-accent-400 font-medium">Routed to Finance / Tier 2 approval queue</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-white/2 border-y border-white/6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-xs uppercase tracking-widest text-brand-400 font-medium mb-3">Results</p>
            <h2 className="text-4xl font-bold text-white tracking-tight">
              What our customers say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white/4 border border-white/8 rounded-2xl p-7 relative overflow-hidden group hover:border-white/14 transition-colors"
              >
                <div className="absolute top-5 right-6 text-6xl text-white/4 font-serif leading-none select-none">
                  &ldquo;
                </div>
                <p className="text-base text-slate-300 leading-relaxed mb-6 relative">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-600 to-purple-700 flex items-center justify-center text-sm font-bold text-white">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-brand-400 font-medium mb-4">Get started</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 text-balance">
                Ready to put AI to work?
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Tell us what process you want to transform. We&apos;ll scope a practical integration plan—no hype, no 6-month roadmaps. Just working software.
              </p>

              <div className="space-y-4">
                {[
                  "Free 30-minute workflow audit",
                  "Custom integration proposal within 48h",
                  "Working prototype in 2 weeks",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-500/15 border border-accent-500/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/4 border border-white/8 rounded-2xl p-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="border-t border-white/6 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <span className="font-semibold text-white text-sm">Torres Workflows</span>
              </div>
              <p className="text-xs text-slate-500 max-w-xs">
                We help implement AI into existing business processes.
              </p>
            </div>

            <nav className="flex flex-wrap gap-6">
              {["Services", "Demo", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-500 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} Torres Workflows. All rights reserved.
            </p>
            <p className="text-xs text-slate-700">torresworkflows.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
