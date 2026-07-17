import { Landmark, Building2, Handshake, Store } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";

const LINE_URL = "https://line.me/ti/p/@pin89";

const INVESTOR_PROFILES = [
  {
    icon: Landmark,
    title: "มีที่ดินอยู่แล้ว",
    desc: "มีทำเลแต่ยังไม่รู้จะเริ่มอย่างไร ให้ทีมงานช่วยประเมินความเหมาะสมของพื้นที่และวางแผนการลงทุนให้",
  },
  {
    icon: Building2,
    title: "อยากเป็นเจ้าของสถานีชาร์จ",
    desc: "ต้องการลงทุนสร้างสถานีชาร์จ EV เต็มรูปแบบ ให้เราดูแลตั้งแต่สำรวจจนถึงเปิดให้บริการ",
  },
  {
    icon: Handshake,
    title: "มองหาพาร์ทเนอร์ร่วมทุน",
    desc: "ต้องการร่วมลงทุนกับทีมที่มีประสบการณ์ตรงด้านสถานีชาร์จ EV ในภาคอีสาน",
  },
  {
    icon: Store,
    title: "สนใจเป็นตัวแทนติดตั้ง",
    desc: "ต้องการต่อยอดธุรกิจในพื้นที่ของคุณ ในฐานะตัวแทนติดตั้งเครื่องชาร์จ Huawei FusionCharge",
  },
];

const INVESTMENT_CASE = [
  { value: <Counter target={10} suffix="+ ปี" />, label: "อายุการใช้งานเครื่องชาร์จ ลดรอบการลงทุนซ้ำ" },
  { value: "< 0.5%", label: "อัตราความเสียหายของโมดูล ลดค่าซ่อมบำรุง" },
  { value: <Counter target={96} suffix="%" />, label: "ประสิทธิภาพสูงสุด ลดการสูญเสียพลังงาน" },
];

export default function InvestmentOpportunity() {
  return (
    <section className="border-b border-black/5 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            โอกาสการลงทุน
          </span>
          <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
            ตลาดรถ EV ในไทยกำลังเติบโต
            <br />
            <span className="text-gradient">ยิ่งเริ่มก่อน ยิ่งได้เปรียบ</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
            จำนวนรถยนต์ไฟฟ้าเพิ่มขึ้นต่อเนื่อง แต่สถานีชาร์จเร็วในหลายพื้นที่ยังตามไม่ทัน
            การลงทุนวันนี้คือการจับจองทำเลและกลุ่มลูกค้าก่อนคู่แข่ง
            ไม่ว่าคุณจะเริ่มต้นจากจุดไหน เรามีรูปแบบความร่วมมือที่เหมาะกับคุณ
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INVESTOR_PROFILES.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-black/8 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:bg-brand-red/[0.03] hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red transition-transform duration-300 group-hover:scale-110">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-zinc-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a0000] to-[#3a0000] p-8 sm:p-10">
            <h3 className="text-center text-lg font-bold text-white sm:text-xl">
              ฮาร์ดแวร์ Huawei FusionCharge คือการลงทุนที่คุ้มค่าในระยะยาว
            </h3>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {INVESTMENT_CASE.map((c) => (
                <div key={c.label} className="text-center">
                  <div className="text-3xl font-extrabold text-brand-gold sm:text-4xl">{c.value}</div>
                  <div className="mt-2 text-xs text-zinc-300 sm:text-sm">{c.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-9 flex justify-center">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-gold to-amber-500 px-7 py-3.5 text-sm font-bold text-[#1a0000] transition-transform hover:scale-105 active:scale-95"
              >
                ปรึกษาแผนการลงทุนฟรีทาง LINE @pin89
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
