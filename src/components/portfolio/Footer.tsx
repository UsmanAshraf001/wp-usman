import { Github, Linkedin, Mail, Star } from "lucide-react";
import { CONTACT, NAV } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2/40 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-lg bg-gradient-brand font-display text-sm font-bold text-brand-foreground">
            MU
          </span>
          <span className="text-sm font-semibold">
            Muhammad Usman — WordPress Developer
          </span>
        </a>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {[
            { href: CONTACT.fiverr, label: "Fiverr", node: <Star className="size-4" /> },
            { href: CONTACT.linkedin, label: "LinkedIn", node: <Linkedin className="size-4" /> },
            { href: CONTACT.github, label: "GitHub", node: <Github className="size-4" /> },
            { href: `mailto:${CONTACT.email}`, label: "Email", node: <Mail className="size-4" /> },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer noopener"
              className="grid size-9 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:border-brand hover:text-brand"
            >
              {s.node}
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Muhammad Usman. Custom WordPress development,
          security and performance.
        </p>
      </div>
    </footer>
  );
}
