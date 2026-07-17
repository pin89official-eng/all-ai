import { MessageCircle } from "lucide-react";

export default function CtaBanner() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-black/5 bg-surface px-5 py-20 sm:px-8 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/5 blur-[100px]" />
      </div>
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
          พร้อมเปิดสถานีชาร์จ EV
          <br />
          <span className="text-gradient">ของคุณเองแล้วหรือยัง?</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
          ปรึกษาทีมงาน P.INNOVATION89 วันนี้ ประเมินทำเลและแผนการลงทุนฟรี
          ไม่มีค่าใช้จ่าย ให้บริการทั่วภาคอีสาน
        </p>
        <a
          href="https://line.me/ti/p/@pin89"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-red to-brand-red-dark px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-red/20 transition-transform hover:scale-105"
        >
          <MessageCircle size={20} />
          แอด LINE @pin89 เลยตอนนี้
        </a>
      </div>
    </section>
  );
}
