import { useState } from "react";
import {
  CalendarCheck,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Star,
} from "lucide-react";
import { CONTACT } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

// EDIT: paste your Formspree form ID (https://formspree.io) to receive emails.
// While it stays "your-form-id", the form falls back to opening your mail client.
const FORMSPREE_ID = "your-form-id";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "");

    if (FORMSPREE_ID === "your-form-id") {
      const body = `Name: ${get("name")}\nEmail: ${get("email")}\n\n${get("message")}`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        get("subject") || "Project enquiry",
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand";

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="text-gradient">solid</span>
            </>
          }
          subtitle="Tell me about your site, the problem you're hitting, or the build you need. I reply within one business day."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="panel p-6 sm:p-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Your name" className={field} />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className={field}
                />
              </div>
              <input name="subject" placeholder="Subject" className={field} />
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Project details — what's the site, what needs doing, any deadline?"
                className={field}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                {status === "sending" ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
                Send Message
              </button>
              {status === "sent" ? (
                <p className="text-sm text-brand">
                  Thanks — your message is on its way. I'll be in touch shortly.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm text-destructive">
                  Something went wrong. Email me directly at {CONTACT.email}.
                </p>
              ) : null}
            </form>
          </Reveal>

          <div className="space-y-4">
            <Reveal className="panel space-y-4 p-6">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-brand"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-surface-2">
                  <Mail className="size-4 text-brand" />
                </span>
                {CONTACT.email}
              </a>
              <a
                href={`https://wa.me/${CONTACT.phone.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-sm transition-colors hover:text-brand"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-surface-2">
                  <Phone className="size-4 text-brand" />
                </span>
                {CONTACT.phone} · WhatsApp
              </a>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="grid size-10 place-items-center rounded-xl bg-surface-2">
                  <MapPin className="size-4 text-brand" />
                </span>
                {CONTACT.location}
              </p>
            </Reveal>

            <Reveal delay={90} className="panel p-6">
              <a
                href={CONTACT.fiverr}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <Star className="size-4" />
                Hire Me on Fiverr
              </a>
              <a
                href={CONTACT.calendly}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface-2 px-5 py-3 text-sm font-semibold transition-colors hover:bg-surface"
              >
                <CalendarCheck className="size-4 text-brand" />
                Book a free consultation call
              </a>
              <div className="mt-5 flex justify-center gap-3">
                {[
                  { href: CONTACT.linkedin, label: "LinkedIn", node: <Linkedin className="size-4" /> },
                  { href: CONTACT.github, label: "GitHub", node: <Github className="size-4" /> },
                  {
                    href: CONTACT.upwork,
                    label: "Upwork",
                    node: <span className="font-display text-xs font-bold">Up</span>,
                  },
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
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
