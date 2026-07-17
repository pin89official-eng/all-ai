import { ArrowRight, MessageCircle, Zap } from "lucide-react";

const LINE_URL = "https://line.me/ti/p/@pin89";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-black/5 bg-surface px-5 pt-16 pb-16 sm:px-8 sm:pt-24 sm:pb-20"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-brand-red/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-red/25 bg-brand-red/5 px-4 py-1.5 text-xs font-medium text-brand-red">
            <Zap size={14} />
            รับสร้างสถานีชาร์จ EV ครบวงจร · ภาคอีสาน
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            ลงทุนวันนี้ <span className="text-gradient">คืนทุนเร็ว</span>
            <br />
            โอกาสทองที่ไม่ควรพลาด
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            P.INNOVATION89 ผู้เชี่ยวชาญด้านสถานีชาร์จรถยนต์ไฟฟ้า ใช้เครื่องชาร์จ{" "}
            <span className="font-semibold text-zinc-900">
              Huawei FusionCharge Fully Liquid-Cooled Ultra-Fast 720kW
            </span>{" "}
            ระบบระบายความร้อนด้วยของเหลวเต็มรูปแบบ ชาร์จเร็วที่สุดในตลาด
            ตอบโจทย์ทั้งนักลงทุนและผู้ใช้รถ EV
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-red to-brand-red-dark px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-red/20 transition-transform hover:scale-105"
            >
              <MessageCircle size={18} />
              ปรึกษาฟรีทาง LINE @pin89
            </a>
            <a
              href="#product"
              className="flex items-center justify-center gap-2 rounded-full border border-black/10 px-7 py-3.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-brand-red/40 hover:text-brand-red"
            >
              ดูสเปกเครื่องชาร์จ
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
