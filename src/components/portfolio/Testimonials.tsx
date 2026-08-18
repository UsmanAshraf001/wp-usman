import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Client Reviews"
          title={
            <>
              Trusted by clients <span className="text-gradient">worldwide</span>
            </>
          }
          subtitle="Communication, problem solving and delivering on time — in the clients' own words."
        />

        <Reveal className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-surface px-4 py-2 text-sm">
            <Star className="size-4 fill-brand text-brand" />
            <strong className="font-semibold">5.0 average</strong>
            <span className="text-muted-foreground">· Fiverr &amp; direct clients</span>
          </span>
        </Reveal>

        {/* EDIT: replace with your real review text, names and countries */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 70}
              className="panel flex flex-col p-6 transition-all hover:-translate-y-1 hover:border-brand/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="size-4 fill-brand text-brand" />
                  ))}
                </div>
                <Quote className="size-5 text-brand/40" />
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                “{t.quote}”
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="grid size-9 place-items-center rounded-full bg-surface-2 text-base">
                  {t.flag}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.country}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
