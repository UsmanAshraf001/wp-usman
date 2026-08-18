import {
  ArrowUpRight,
  Gauge,
  Palette,
  Puzzle,
  Search,
  Server,
  ShieldCheck,
  ShoppingCart,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  Palette,
  Puzzle,
  ShoppingCart,
  ShieldCheck,
  Gauge,
  Server,
  Wrench,
  Search,
};

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-border bg-surface-2/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              How I can <span className="text-gradient">help</span>
            </>
          }
          subtitle="Fixed-scope projects or ongoing retainers — whichever fits your site."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Wrench;
            return (
              <Reveal
                key={s.title}
                delay={i * 60}
                className="panel group flex flex-col p-6 transition-all hover:-translate-y-1.5 hover:border-brand/50"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                  <Icon className="size-5 text-brand-foreground" />
                </span>
                <h3 className="mt-4 text-base font-semibold leading-snug">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                >
                  Get a Quote
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
