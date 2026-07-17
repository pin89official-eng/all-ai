"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const LINE_URL = "https://line.me/ti/p/@pin89";

export default function StickyContact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-red to-brand-red-dark px-6 py-3.5 text-sm font-bold text-white shadow-xl transition-all duration-300 sm:hidden ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-20 opacity-0"
      }`}
    >
      <MessageCircle size={18} />
      แอด LINE @pin89 ปรึกษาฟรี
    </a>
  );
}
