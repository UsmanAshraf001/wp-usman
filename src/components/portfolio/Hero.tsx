import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, ShieldCheck, Star } from "lucide-react";
import headshot from "@/assets/usman-headshot.jpg";
import { CONTACT, TAGLINES } from "./data";

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    const done = text === word;
    const delay = deleting ? 40 : done ? 1600 : 70;

    const t = setTimeout(() => {
      if (!deleting && !done) setText(word.slice(0, text.length + 1));
      else if (!deleting && done) setDeleting(true);
      else if (deleting && text.length > 0) setText(word.slice(0, text.length - 1));
      else {
        setDeleting(false);
        setIndex((i) => i + 1);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(TAGLINES);

  return (
    <section id="top" className="glow-halo relative overflow-hidden pt-28 pb-20 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-lines" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-brand" />
            Available for freelance projects
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">
            Muhammad Usman
          </h1>

          <p className="mt-4 font-mono text-lg text-brand sm:text-2xl" aria-live="polite">
            {typed}
            <span className="caret ml-1 h-[1.1em] align-[-0.15em]" />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            2+ years building, securing and speeding up WordPress sites for clients
            around the world. 100+ websites delivered — custom themes, plugins,
            WooCommerce stores, and rescued sites that other developers gave up on.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={CONTACT.fiverr}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:bg-surface-2"
            >
              <Star className="size-4 text-brand" />
              Hire Me on Fiverr
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { href: CONTACT.fiverr, label: "Fiverr", node: <span className="font-display text-xs font-bold">fi</span> },
              { href: CONTACT.linkedin, label: "LinkedIn", node: <Linkedin className="size-4" /> },
              { href: CONTACT.github, label: "GitHub", node: <Github className="size-4" /> },
              { href: CONTACT.upwork, label: "Upwork", node: <span className="font-display text-xs font-bold">Up</span> },
              { href: `mailto:${CONTACT.email}`, label: "Email", node: <Mail className="size-4" /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="grid size-10 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              >
                {s.node}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-brand opacity-20 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-card">
            {/* EDIT: replace src/assets/usman-headshot.jpg with your real photo */}
            <img
              src={headshot}
              width={912}
              height={912}
              alt="Muhammad Usman, WordPress developer"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="float-slow absolute -bottom-5 -left-5 flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-xs shadow-card">
            <ShieldCheck className="size-4 text-brand" />
            Security-first builds
          </div>
          <div className="absolute -top-4 -right-3 flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-2 text-xs shadow-card">
            <Star className="size-3.5 fill-brand text-brand" />
            5.0 · 100+ projects
          </div>
        </div>
      </div>
    </section>
  );
}
