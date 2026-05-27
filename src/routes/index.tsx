import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Index });

const MEMBERS = [
  {
    initials: "AS",
    name: "Arrya Sridhar",
    college: "BITS Pilani, Hyderabad",
    focus: "Machine Learning · Agentic AI · Computer Vision",
    learn: "LLM fine-tuning & MLOps",
    hobbies: "Building autonomous systems, exploring agent architectures",
    stack: ["Python", "C", "Java", "MATLAB"],
  },
  {
    initials: "JK",
    name: "Jayaditya Kushwah",
    college: "BITS Pilani, Hyderabad",
    focus: "Quantitative Research · Backend · Probability",
    learn: "Stochastic calculus for quant systems",
    hobbies: "Guitar, Minecraft, competitive programming",
    stack: ["Python", "C++", "Java", "Docker"],
  },
  {
    initials: "SG",
    name: "Shreyas Ghosh",
    college: "BITS Pilani, Hyderabad",
    focus: "Embedded Systems · Simulation · Process Modeling",
    learn: "Full-stack web & deployment workflows",
    hobbies: "Arduino tinkering, football, cultural events",
    stack: ["C", "C++", "Python", "MATLAB"],
  },
];

const NAV = [
  { id: "home", label: "Home" },
  { id: "team", label: "Team" },
  { id: "skills", label: "Skills" },
  { id: "learning", label: "Learning" },
  { id: "workflow", label: "Workflow" },
  { id: "opensource", label: "Open Source" },
  { id: "contact", label: "Contact" },
];

function Index() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav active={active} />
      <Hero />
      <Team />
      <Skills />
      <Learning />
      <Workflow />
      <OpenSource />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav({ active }: { active: string }) {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-semibold tracking-tight">jsa</span>
          <span className="text-muted-foreground">/team</span>
        </a>
        <nav className="hidden gap-6 font-mono text-xs uppercase tracking-widest md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`transition-colors hover:text-foreground ${active === n.id ? "text-foreground" : "text-muted-foreground"}`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden font-mono text-xs uppercase tracking-widest md:inline-block">
          <span className="border-b border-accent pb-0.5 text-accent">say hi →</span>
        </a>
      </div>
    </header>
  );
}

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <div className="mb-12 flex items-baseline gap-4">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">{label}</span>
        <div className="h-px flex-1 bg-border" />
      </div>
      {children}
    </section>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 grain opacity-60" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          [ Team 04 — Onboarding Cohort 2026 ]
        </p>
        <h1 className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl lg:text-9xl">
          We are <span className="italic text-accent">Team JSA</span>.<br />
          Three students,<br />
          one feedback loop.
        </h1>
        <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
          A team of three from BITS Pilani Hyderabad. We work across machine learning,
          quantitative systems, and applied engineering. We are here to ship things,
          break things, and learn out loud.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 font-mono text-sm md:grid-cols-4">
          <Stat k="members" v="03" />
          <Stat k="campus" v="BITS HYD" />
          <Stat k="focus" v="ML · QUANT · SYS" />
          <Stat k="status" v="shipping" />
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        scroll ↓
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{k}</div>
      <div className="mt-1 text-base font-medium text-foreground">{v}</div>
    </div>
  );
}

function Team() {
  return (
    <Section id="team" label="01 / team">
      <div className="mb-12 grid gap-8 md:grid-cols-2">
        <h2 className="font-display text-4xl leading-tight md:text-5xl">
          Three initials, one team.
        </h2>
        <div className="space-y-4 text-sm text-muted-foreground md:text-base">
          <p>
            <span className="font-mono text-xs uppercase tracking-widest text-foreground">why the name —</span>{" "}
            JSA stands for the initials of our three members: Jayaditya, Shreyas, and Arrya. No cipher needed — just three people who work better together.
          </p>
          <p>
            <span className="font-mono text-xs uppercase tracking-widest text-foreground">fun fact —</span>{" "}
            our combined caffeine intake during exam week could power a small server rack.
          </p>
        </div>
      </div>

      <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
        {MEMBERS.map((m) => (
          <article key={m.name} className="group bg-background p-8 transition-colors hover:bg-surface">
            <div className="mb-6 flex h-20 w-20 items-center justify-center border border-foreground font-mono text-xl">
              {m.initials}
            </div>
            <h3 className="font-display text-2xl">{m.name}</h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {m.college}
            </p>
            <div className="mt-6 space-y-4 text-sm">
              <Field k="focus" v={m.focus} />
              <Field k="wants to learn" v={m.learn} />
              <Field k="off-screen" v={m.hobbies} />
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {m.stack.map((s) => (
                <span key={s} className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider">
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
      <div className="mt-1 text-foreground">{v}</div>
    </div>
  );
}

function Skills() {
  const skills = [
    { name: "Machine Learning", level: 3, members: "Arrya, Jayaditya, Shreyas" },
    { name: "Backend / Systems", level: 2, members: "Jayaditya, Arrya" },
    { name: "Quantitative & Math", level: 2, members: "Jayaditya, Arrya" },
    { name: "Computer Vision", level: 1, members: "Arrya" },
    { name: "Embedded / Hardware", level: 1, members: "Shreyas" },
    { name: "Simulation & Modeling", level: 2, members: "Shreyas, Arrya" },
    { name: "Frontend", level: 1, members: "learning together" },
    { name: "DevOps / Docker", level: 1, members: "Jayaditya" },
  ];
  return (
    <Section id="skills" label="02 / skills map">
      <div className="mb-12 grid gap-8 md:grid-cols-2">
        <h2 className="font-display text-4xl leading-tight md:text-5xl">
          What we already bring to the table.
        </h2>
        <p className="text-sm text-muted-foreground md:text-base">
          A snapshot of our current coverage. Bars show how many of us actively work in each area —
          gaps are exactly where we plan to grow during the internship.
        </p>
      </div>
      <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
        {skills.map((s) => (
          <div key={s.name} className="bg-background p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="font-mono text-sm font-medium">{s.name}</h3>
              <span className="font-mono text-xs text-muted-foreground">{s.level}/3</span>
            </div>
            <div className="mt-3 flex gap-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 ${i <= s.level ? "bg-accent" : "bg-muted"}`}
                />
              ))}
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {s.members}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Learning() {
  return (
    <Section id="learning" label="03 / learning goals">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            What we want to walk out knowing.
          </h2>
        </div>
        <div className="space-y-10 md:col-span-7">
          <Block n="01" title="Technologies to explore">
            Production ML pipelines, agentic frameworks (LangGraph, MCP), modern backend stacks,
            cloud deployment (AWS, GCP), and the React + TypeScript side of the web we keep
            avoiding.
          </Block>
          <Block n="02" title="Problems that excite us">
            Autonomous decision-making under uncertainty, market microstructure & anomaly
            detection, and the boring-but-hard problem of making research code actually run in
            production.
          </Block>
          <Block n="03" title="What we hope to leave with">
            A shared sense of how real teams ship software — version control discipline, code
            review reflexes, writing intent before writing code, and shipping something we'd
            put our name on without a disclaimer.
          </Block>
        </div>
      </div>
    </Section>
  );
}

function Block({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-l border-border pl-6">
      <div className="font-mono text-xs text-accent">{n}</div>
      <h3 className="mt-2 font-display text-2xl">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground md:text-base">{children}</p>
    </div>
  );
}

function Workflow() {
  const items = [
    { t: "Async stand-ups", d: "Short written update every morning. No 9am meetings, no theater." },
    { t: "Weekly demo", d: "Friday — each of us shows working code or a written breakdown. No slides." },
    { t: "Pair programming", d: "Whenever someone is stuck for more than 30 minutes. Switch driver every 25." },
    { t: "Code review on every PR", d: "At least one approval. Comments are about the code, never the person." },
    { t: "Decisions in writing", d: "Anything bigger than a small fix gets a short doc before the code." },
    { t: "Blocked? Ship a draft", d: "Default to opening a draft PR with the problem rather than waiting." },
  ];
  return (
    <Section id="workflow" label="04 / how we work">
      <h2 className="mb-12 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        Lightweight process. Heavy on shipping.
      </h2>
      <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
        {items.map((i, idx) => (
          <div key={i.t} className="bg-background p-6">
            <div className="mb-3 font-mono text-xs text-muted-foreground">
              [{String(idx + 1).padStart(2, "0")}]
            </div>
            <h3 className="font-display text-xl">{i.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function OpenSource() {
  const projects = [
    { name: "PyTorch", why: "Honest defaults, readable internals." },
    { name: "FastAPI", why: "The standard for shipping Python APIs without ceremony." },
    { name: "LangChain / LangGraph", why: "Where agentic patterns are being figured out in public." },
    { name: "Polars", why: "What pandas would be if rewritten today." },
    { name: "Hugging Face", why: "The community we want to contribute models and datasets to." },
  ];
  return (
    <Section id="opensource" label="05 / open source">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            The repos we read on weekends.
          </h2>
          <p className="mt-6 text-sm text-muted-foreground md:text-base">
            We want to move from consumers to contributors this year — starting with good
            first issues, docs, and small bug fixes before working up to features.
          </p>
          <div className="mt-8 border border-border p-6">
            <div className="font-mono text-xs uppercase tracking-widest text-accent">
              problems we want to solve
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>— Making research-grade ML usable by non-ML teams.</li>
              <li>— Better tooling for reproducible quantitative backtests.</li>
              <li>— Reducing the gap between agent prototypes and production agents.</li>
            </ul>
          </div>
        </div>
        <ul className="space-y-px border border-border bg-border">
          {projects.map((p) => (
            <li key={p.name} className="flex items-baseline justify-between bg-background p-5">
              <div>
                <div className="font-mono text-sm font-medium">{p.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.why}</div>
              </div>
              <span className="font-mono text-xs text-muted-foreground">↗</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" label="06 / contact">
      <div className="grid gap-12 md:grid-cols-2">
        <h2 className="font-display text-5xl leading-tight md:text-7xl">
          Want to <span className="italic text-accent">build</span> something together?
        </h2>
        <div className="space-y-6 font-mono text-sm">
          <Contact1 k="Arrya Sridhar" v="—" />
          <Contact1 k="Jayaditya Kushwah" v="kushwahjayaditya@gmail.com" href="mailto:kushwahjayaditya@gmail.com" />
          <Contact1 k="Shreyas Ghosh" v="f20240826@hyderabad.bits-pilani.ac.in" href="mailto:f20240826@hyderabad.bits-pilani.ac.in" />
        </div>
      </div>
    </Section>
  );
}

function Contact1({ k, v, href }: { k: string; v: string; href?: string }) {
  return (
    <div className="border-b border-border pb-4">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{k}</div>
      {href ? (
        <a href={href} className="mt-1 block text-foreground hover:text-accent">{v}</a>
      ) : (
        <div className="mt-1 text-foreground">{v}</div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          jsa · onboarding cohort 2026
        </div>
        <div>BITS Pilani, Hyderabad Campus</div>
      </div>
    </footer>
  );
}
