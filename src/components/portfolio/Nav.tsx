import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT, NAV } from "./data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-lg bg-gradient-brand font-display text-sm font-bold text-brand-foreground">
            MU
          </span>
          <span className="hidden text-sm font-semibold sm:block">
            Muhammad Usman
            <span className="block font-mono text-[10px] font-normal uppercase tracking-[0.18em] text-muted-foreground">
              WordPress Developer
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                active === item.id && "text-foreground",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-brand transition-transform duration-300",
                  active === item.id ? "scale-x-100" : "scale-x-0",
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="grid size-9 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <a
            href={CONTACT.fiverr}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden rounded-lg bg-gradient-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:block"
          >
            Hire Me
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid size-9 place-items-center rounded-lg border border-border bg-surface lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background/95 px-5 py-3 backdrop-blur-xl lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2.5 text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
