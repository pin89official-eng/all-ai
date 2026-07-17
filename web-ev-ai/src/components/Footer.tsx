import { MapPin, MessageCircle } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
            รับสร้างสถานีชาร์จรถยนต์ไฟฟ้าครบวงจร ด้วยเครื่องชาร์จ
            Huawei FusionCharge Fully Liquid-Cooled Ultra-Fast 720kW
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 text-sm text-zinc-600 sm:items-start">
          <a
            href="https://line.me/ti/p/@pin89"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-brand-red"
          >
            <MessageCircle size={16} />
            LINE: @pin89
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} />
            ให้บริการพื้นที่ภาคอีสาน
          </span>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-black/5 pt-6 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} P.INNOVATION89. All rights reserved.
      </div>
    </footer>
  );
}
