import { CheckCircle2, TrendingUp } from "lucide-react";

const REASONS = [
  "ทีมงานเชี่ยวชาญด้านระบบไฟฟ้าและสถานีชาร์จ EV โดยเฉพาะ",
  "ใช้เครื่องชาร์จ Huawei FusionCharge ของแท้ พร้อมการรับประกัน",
  "ดูแลตั้งแต่สำรวจ ออกแบบ ติดตั้ง จนถึงบริการหลังการขาย",
  "วางแผนจุดติดตั้งให้เหมาะกับพฤติกรรมผู้ใช้รถ EV ในพื้นที่",
  "ให้คำปรึกษาด้านการลงทุนและประเมินระยะเวลาคืนทุนอย่างตรงไปตรงมา",
  "ให้บริการครอบคลุมพื้นที่ภาคอีสานทั้งหมด",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="border-b border-white/5 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            ทำไมต้อง P.INNOVATION89
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            พาร์ทเนอร์ที่ไว้ใจได้
            <br />
            สำหรับ<span className="text-gradient">ธุรกิจสถานีชาร์จ EV</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            ตลาดรถยนต์ไฟฟ้าในภาคอีสานกำลังเติบโตอย่างต่อเนื่อง
            การมีสถานีชาร์จเร็วในทำเลที่ใช่คือโอกาสทางธุรกิจที่สำคัญ
            เราพร้อมเป็นพาร์ทเนอร์ที่ดูแลคุณตั้งแต่ต้นจนจบ
          </p>

          <ul className="mt-8 space-y-3.5">
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-green" />
                <span className="text-sm leading-relaxed text-zinc-200 sm:text-base">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glow-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-gold/10 blur-3xl" />
          <TrendingUp size={32} className="text-brand-gold" />
          <h3 className="mt-5 text-2xl font-bold text-white">
            ลงทุนวันนี้ คืนทุนเร็ว
            <br />
            <span className="text-brand-gold">โอกาสทองที่ไม่ควรพลาด</span>
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            ยิ่งเปิดให้บริการเร็ว ยิ่งจับจองกลุ่มผู้ใช้รถ EV
            ในพื้นที่ได้ก่อนคู่แข่ง ปรึกษาทีมงานเพื่อประเมินทำเลและวางแผนการลงทุนที่เหมาะกับคุณ
            ฟรี ไม่มีค่าใช้จ่าย
          </p>
          <a
            href="https://line.me/ti/p/@pin89"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-green to-brand-cyan px-6 py-3 text-sm font-bold text-[#05070a] transition-transform hover:scale-105"
          >
            ขอคำปรึกษาการลงทุน
          </a>
        </div>
      </div>
    </section>
  );
}
