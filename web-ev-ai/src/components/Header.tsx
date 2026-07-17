"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const LINE_URL = "https://line.me/ti/p/@pin89";

const NAV_LINKS = [
  { href: "/fusioncharge", label: "Huawei FusionCharge" },
  { href: "/#services", label: "บริการ" },
  { href: "/#why-us", label: "ทำไมต้องเรา" },
  { href: "/#process", label: "ขั้นตอน" },
  { href: "/#contact", label: "ติดต่อ" },
];

const hashOf = (href: string) => (href.includes("#") ? href.slice(href.indexOf("#")) : null);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => {
      const hash = hashOf(link.href);
      return hash ? document.querySelector(hash) : null;
    }).filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="/" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-600 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-brand-red ${
                hashOf(link.href) === active ? "font-semibold text-brand-red" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-brand-red to-brand-red-dark px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
          >
            แอด LINE @pin89
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-zinc-700 transition-colors hover:border-brand-red/40 hover:text-brand-red lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <nav
        className={`grid overflow-hidden border-t border-black/5 bg-white transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="flex flex-col gap-1 overflow-hidden px-5 py-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                hashOf(link.href) === active
                  ? "bg-brand-red/5 text-brand-red"
                  : "text-zinc-700 hover:bg-black/[0.03]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
