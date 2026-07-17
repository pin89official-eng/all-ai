import Logo from "./Logo";

const LINE_URL = "https://line.me/ti/p/@pin89";

const NAV_LINKS = [
  { href: "#product", label: "เครื่องชาร์จ" },
  { href: "#services", label: "บริการ" },
  { href: "#why-us", label: "ทำไมต้องเรา" },
  { href: "#process", label: "ขั้นตอน" },
  { href: "#contact", label: "ติดต่อ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top">
          <Logo />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-600 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand-red"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-to-r from-brand-red to-brand-red-dark px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          แอด LINE @pin89
        </a>
      </div>
    </header>
  );
}
