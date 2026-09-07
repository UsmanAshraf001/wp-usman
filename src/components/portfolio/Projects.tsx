import { useState } from "react";
import { ExternalLink, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECTS, PROJECT_FILTERS } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

export function Projects() {
  const [filter, setFilter] = useState("all");
  const list = PROJECTS.filter((p) => filter === "all" || p.categories.includes(filter));

  return (
    <section id="projects" className="scroll-mt-24 border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Live sites I've <span className="text-gradient">delivered</span>
            </>
          }
          subtitle="A selection of real client websites — all live, all built or rescued by me."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                filter === f.key
                  ? "border-transparent bg-gradient-brand text-brand-foreground shadow-glow"
                  : "border-border bg-surface text-muted-foreground hover:text-foreground",
              )}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 70}
              className="panel group flex flex-col overflow-hidden transition-all hover:-translate-y-1.5 hover:border-brand/50"
            >
              <div
                className={cn(
                  "relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br",
                  p.accent,
                )}
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.name} project screenshot`}
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <span className="relative mt-auto mb-3 px-3 font-display text-2xl font-bold text-foreground drop-shadow-lg">
                  {p.name}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold">{p.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm font-semibold transition-colors group-hover:bg-gradient-brand group-hover:text-brand-foreground"
                >
                  Visit Live Site
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {list.length === 0 ? (
          <p className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Globe className="size-4" /> No projects in this category yet.
          </p>
        ) : null}
      </div>
    </section>
  );
}
