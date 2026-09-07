
import firstProjectImage from "@/assets/first.jpg";
import usmans from "@/assets/usman-headshot.jpg";

export const CONTACT = {
  name: "Muhammad Usman",
  role: "WordPress Developer",
  email: "usmanmuhammadashraf@gmail.com", // EDIT: your real email
  phone: "+92 304 8162410", // EDIT: WhatsApp / phone
  location: "Pakistan — working with clients worldwide",
  fiverr: "https://www.fiverr.com/", // EDIT: your Fiverr profile URL
  linkedin: "https://www.linkedin.com/in/usmanashraf001/", // EDIT
  github: "https://github.com/UsmanAshraf001", // EDIT
  upwork: "https://www.upwork.com/", // EDIT
  resume: "/resume.pdf", // EDIT: drop your CV at public/resume.pdf
  calendly: "https://calendly.com/", // EDIT: consultation booking link
};

export const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export const TAGLINES = [
  "WordPress Developer",
  "Custom Theme & Plugin Developer",
  "WordPress Security Specialist",
  "Speed & Performance Engineer",
];

export const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "100+", label: "Websites Delivered" },
  { value: "40+", label: "Foreign Clients Served" },
  { value: "5.0", label: "Average Client Rating" },
];

export type SkillGroup = {
  key: string;
  label: string;
  blurb: string;
  items: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    key: "development",
    label: "Development",
    blurb: "Hand-coded themes, plugins and WooCommerce builds.",
    items: [
      "Custom theme development (Figma/PSD to WordPress)",
      "Custom plugin development (CPTs, meta boxes, admin UI)",
      "Elementor, Divi, WPBakery & Gutenberg custom blocks",
      "WooCommerce setup, payment gateways, checkout customization",
      "Theme customization & child themes",
      "ACF for dynamic, editor-friendly content",
    ],
  },
  {
    key: "security",
    label: "Security",
    blurb: "Cleaning hacked sites and hardening them so it never happens twice.",
    items: [
      "Malware removal & full site hardening",
      "Wordfence, Sucuri & iThemes Security configuration",
      "Firewall setup, login protection, brute-force prevention",
      "Automated backups & disaster recovery",
      "SSL configuration & HTTPS migration",
      "Vulnerability audits and hacked-site recovery",
    ],
  },
  {
    key: "performance",
    label: "Server & Performance",
    blurb: "Hosting, migrations and Core Web Vitals work.",
    items: [
      "Server management: cPanel, Plesk, VPS",
      "LAMP / LEMP stack familiarity",
      "Migrations: domain-to-domain and host-to-host",
      "Speed optimization: caching, Cloudflare CDN, image & DB cleanup",
      "DNS, domain and hosting configuration",
      "PHP / MySQL debugging in WordPress environments",
    ],
  },
  {
    key: "tools",
    label: "Tools & Soft Skills",
    blurb: "The craft around the code.",
    items: [
      "HTML, CSS, JavaScript, PHP",
      "Git version control",
      "Cross-browser & responsive design fixes",
      "SEO basics: Yoast / RankMath, on-page SEO",
      "Deep problem solving & debugging for client issues",
      "Clear communication with international clients",
    ],
  },
];

export type Project = {
  image?: string;
  name: string;
  url: string;
  description: string;
  tags: string[];
  categories: string[];
  accent: string;
};

export const PROJECT_FILTERS = [
  { key: "all", label: "All" },
  { key: "themes", label: "Custom Themes" },
  { key: "woocommerce", label: "WooCommerce" },
  { key: "security", label: "Security & Maintenance" },
  { key: "international", label: "International Clients" },
];

export const PROJECTS: Project[] = [
  {
    image: firstProjectImage,
    name: "Dependable IT Services",
    url: "http://dependableitservices.com/",
    description: "IT support & managed services company website.",
    tags: ["Custom Theme", "Speed Optimization", "Security Hardening"],
    categories: ["themes", "security", "international"],
    accent: "from-brand/30 to-brand-2/20",
  },
  {
    image: usmans,
    name: "Nurse First Aesthetics",
    url: "https://nursefirst-aesthetics.co.uk/",
    description: "Healthcare & aesthetics clinic site with treatment booking.",
    tags: ["Elementor", "ACF", "On-page SEO"],
    categories: ["themes", "international"],
    accent: "from-brand-2/30 to-brand/20",
  },
  {
    image: firstProjectImage,
    name: "Aesthetics Business Coach",
    url: "https://aestheticsbusinesscoach-ydy.co.uk/",
    description: "Coaching brand site with course & lead funnels.",
    tags: ["Custom Theme", "WooCommerce", "Conversion Design"],
    categories: ["themes", "woocommerce", "international"],
    accent: "from-brand/25 to-brand-2/25",
  },
  {
    image: firstProjectImage,
    name: "Klinikk",
    url: "https://klinikk.co.uk/",
    description: "Medical clinic website with service directory.",
    tags: ["Gutenberg Blocks", "Performance", "Maintenance"],
    categories: ["themes", "security", "international"],
    accent: "from-brand-2/25 to-brand/25",
  },
  {
    image: firstProjectImage,
    name: "Bresco Properties",
    url: "https://brescoproperties.com/",
    description: "Property management & real estate listings site.",
    tags: ["Custom Post Types", "Search Filters", "Custom Theme"],
    categories: ["themes", "international"],
    accent: "from-brand/30 to-brand-2/10",
  },
  {
    image: firstProjectImage,
    name: "MM Advisors",
    url: "https://mmadvisors.ie/",
    description: "Financial advisory firm site built for trust and clarity.",
    tags: ["Custom Theme", "Security Hardening", "SEO"],
    categories: ["themes", "security", "international"],
    accent: "from-brand-2/30 to-brand/15",
  },
  {
    image: firstProjectImage,
    name: "AVDC Help",
    url: "https://avdchelp.com/",
    description: "Support & help-desk platform for a service business.",
    tags: ["Custom Plugin", "Forms", "PHP Debugging"],
    categories: ["themes", "security", "international"],
    accent: "from-brand/20 to-brand-2/30",
  },
  {
    image: firstProjectImage,
    name: "WP Demo Site",
    url: "https://e241m8w8mr.wpdns.site/",
    description: "Staging/demo build used for client prototyping.",
    tags: ["Prototype", "Child Theme", "Migration"],
    categories: ["themes"],
    accent: "from-brand-2/20 to-brand/30",
  },
  {
    image: firstProjectImage,
    name: "NCQC",
    url: "https://ncqc.pk/",
    description: "Certification & quality-council institutional website.",
    tags: ["Custom Theme", "ACF", "Maintenance"],
    categories: ["themes", "security"],
    accent: "from-brand/25 to-brand-2/20",
  },
];

export const EXPERIENCE = [
  {
    role: "Freelance WordPress Developer",
    org: "Fiverr & Direct Clients",
    period: "2023 — Present",
    points: [
      "Maintained a 5-star rating across a growing international client base.",
      "Deliver full builds end-to-end: discovery, design handoff, development, launch.",
      "Retained monthly maintenance and security clients across the UK, US and Ireland.",
    ],
  },
  {
    role: "WordPress Security & Recovery Specialist",
    org: "Independent Engagements",
    period: "2025",
    points: [
      "Recovered hacked and blacklisted sites, removed malware and restored traffic.",
      "Standardised a hardening checklist: firewall, 2FA, backups, SSL, file permissions.",
      "Ran vulnerability audits with prioritised remediation reports for clients.",
    ],
  },
  {
    role: "Custom Theme & Plugin Developer",
    org: "Agency & Direct Projects",
    period: "2024 — 2025",
    points: [
      "Converted Figma and PSD designs into pixel-accurate custom WordPress themes.",
      "Built functionality plugins with custom post types, meta boxes and admin screens.",
      "Shipped WooCommerce stores with custom product flows and gateway integrations.",
    ],
  },
  {
    role: "Started WordPress Development",
    org: "Learning & First Clients",
    period: "2024",
    points: [
      "Moved from HTML/CSS/PHP fundamentals into the WordPress ecosystem.",
      "Delivered first client sites, page-builder customizations and bug fixes.",
      "Built the debugging habits that now solve issues other developers hand back.",
    ],
  },
];

// EDIT: replace with your real Fiverr / client review text.
export const TESTIMONIALS = [
  {
    quote:
      "Our site was hacked and taken offline. Usman cleaned it, hardened it and had us back up within a day — communication was excellent throughout.",
    name: "Sarah M.",
    role: "Clinic Owner",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
  },
  {
    quote:
      "Turned our Figma design into a fast, pixel-perfect custom theme. He asked the right questions and delivered ahead of schedule.",
    name: "Daniel R.",
    role: "Marketing Director",
    country: "Ireland",
    flag: "🇮🇪",
    rating: 5,
  },
  {
    quote:
      "Two other developers gave up on our WooCommerce checkout bug. Usman found the root cause in hours and documented the fix.",
    name: "Jessica T.",
    role: "eCommerce Manager",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
  },
  {
    quote:
      "Site went from 6 seconds to under 2. Caching, Cloudflare and image work all handled without breaking a thing.",
    name: "Ahmed K.",
    role: "Agency Founder",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    rating: 5,
  },
  {
    quote:
      "Reliable, responsive and honest about timelines. He now handles maintenance for all three of our brand sites.",
    name: "Lena W.",
    role: "Operations Lead",
    country: "Germany",
    flag: "🇩🇪",
    rating: 5,
  },
  {
    quote:
      "Migrated our site to a new host with zero downtime and fixed the email deliverability issues we'd had for months.",
    name: "Michael B.",
    role: "Business Owner",
    country: "Australia",
    flag: "🇦🇺",
    rating: 5,
  },
];

export const SERVICES = [
  {
    icon: "Palette",
    title: "Custom WordPress Theme Development",
    description:
      "Hand-coded, lightweight themes built from your design — no bloated templates.",
  },
  {
    icon: "Puzzle",
    title: "Custom Plugin Development",
    description:
      "Functionality plugins, custom post types and admin tools tailored to your workflow.",
  },
  {
    icon: "ShoppingCart",
    title: "WooCommerce Store Setup",
    description:
      "Products, payment gateways, shipping rules and a checkout tuned to convert.",
  },
  {
    icon: "ShieldCheck",
    title: "Security & Malware Removal",
    description:
      "Clean up hacked sites, remove malware and harden everything against a repeat.",
  },
  {
    icon: "Gauge",
    title: "Website Speed Optimization",
    description:
      "Caching, CDN, image and database work aimed at real Core Web Vitals gains.",
  },
  {
    icon: "Server",
    title: "Migration & Hosting Setup",
    description:
      "Host-to-host or domain-to-domain moves, DNS and SSL — with zero downtime.",
  },
  {
    icon: "Wrench",
    title: "Bug Fixing & Maintenance",
    description:
      "Ongoing updates, monitoring, backups and fast fixes when something breaks.",
  },
  {
    icon: "Search",
    title: "SEO Foundations",
    description:
      "Yoast/RankMath setup, on-page structure and technical fixes search engines reward.",
  },
];
