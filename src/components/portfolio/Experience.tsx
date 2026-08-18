import { EXPERIENCE } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border bg-surface-2/40 py-24"
    >
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              The <span className="text-gradient">journey</span> so far
            </>
          }
          subtitle="From first client fixes to security specialisation and a global client base."
        />

        <ol className="relative mt-14 space-y-8 pl-8 sm:pl-12">
          <span
            className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-brand via-brand-2 to-transparent sm:left-[15px]"
            aria-hidden
          />
          {EXPERIENCE.map((e, i) => (
            <Reveal as="li" key={e.role} delay={i * 90} className="relative">
              <span className="absolute top-6 -left-8 grid size-4 place-items-center rounded-full bg-gradient-brand ring-4 ring-background sm:-left-12" />
              <div className="panel p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{e.role}</h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-brand">
                    {e.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
                <ul className="mt-4 space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
