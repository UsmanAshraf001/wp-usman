import { Download, Globe2, Sparkles } from "lucide-react";
import { CONTACT, STATS } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Building sites clients can <span className="text-gradient">trust</span>
            </>
          }
          subtitle="A developer who treats every project like it has to survive real traffic, real customers and real attacks."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {/* EDIT: replace this bio with your own words */}
            <p>
              I started out writing HTML, CSS and PHP, and quickly found that
              WordPress is where those skills create the most value for real
              businesses. Over the last 2+ years I've delivered 100+ websites —
              from small business brochure sites to WooCommerce stores and custom
              plugin work for agencies.
            </p>
            <p>
              A big part of my work is rescue work: hacked sites, malware, broken
              checkouts, slow-loading pages and migrations gone wrong. I clean them
              up, harden them properly, and document what changed so nothing is a
              mystery afterwards.
            </p>
            <p>
              I work mostly with international clients through Fiverr and direct
              referrals — the UK, Ireland, the US, UAE and beyond. Clear
              communication, honest timelines and clean code are the whole pitch.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {/* EDIT: put your CV at public/resume.pdf */}
              <a
                href={CONTACT.resume}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <Download className="size-4" />
                Download Resume (PDF)
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:bg-surface-2"
              >
                Start a project
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 90}
                className="panel p-5 transition-transform hover:-translate-y-1"
              >
                <p className="font-display text-3xl font-bold text-gradient">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </Reveal>
            ))}
            <Reveal delay={360} className="panel col-span-2 flex items-center gap-3 p-5">
              <Globe2 className="size-5 shrink-0 text-brand" />
              <p className="text-sm text-muted-foreground">
                Working across UK, IE, US, UAE and EU time zones — with overlap hours
                that actually suit your team.
              </p>
            </Reveal>
            <Reveal delay={430} className="panel col-span-2 flex items-center gap-3 p-5">
              <Sparkles className="size-5 shrink-0 text-brand" />
              <p className="text-sm text-muted-foreground">
                Every handover includes a hardening checklist, backups and a short
                walkthrough of your site.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
