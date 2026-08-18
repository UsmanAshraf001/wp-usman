import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SKILL_GROUPS } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

export function Skills() {
  const [active, setActive] = useState(SKILL_GROUPS[0]!.key);
  const group = SKILL_GROUPS.find((g) => g.key === active)!;

  return (
    <section id="skills" className="scroll-mt-24 border-t border-border bg-surface-2/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills & Stack"
          title={
            <>
              What I actually <span className="text-gradient">do</span>
            </>
          }
          subtitle="Four areas of depth — development, security, servers and the tooling around them."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {SKILL_GROUPS.map((g) => (
            <button
              key={g.key}
              onClick={() => setActive(g.key)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                active === g.key
                  ? "border-transparent bg-gradient-brand text-brand-foreground shadow-glow"
                  : "border-border bg-surface text-muted-foreground hover:text-foreground",
              )}
            >
              {g.label}
            </button>
          ))}
        </Reveal>

        <Reveal className="mt-4 text-center text-sm text-muted-foreground">{group.blurb}</Reveal>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {group.items.map((item, i) => (
            <Reveal
              as="li"
              key={item}
              delay={i * 60}
              className="panel flex items-start gap-3 p-5 transition-all hover:-translate-y-1 hover:border-brand/50"
            >
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md bg-gradient-brand">
                <Check className="size-3.5 text-brand-foreground" />
              </span>
              <span className="text-sm leading-relaxed">{item}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
