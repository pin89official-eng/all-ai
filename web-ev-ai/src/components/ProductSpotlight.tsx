import { Droplets, Gauge, ShieldCheck, Cable, Volume2, LayoutGrid } from "lucide-react";

const FEATURES = [
  {
    icon: Gauge,
    title: "กำลังชาร์จสูงสุด 720kW",
    desc: "ระบบจ่ายไฟกำลังสูงระดับ Ultra-Fast Charging ลดเวลารอคอยของผู้ใช้รถ EV ได้อย่างมาก",
  },
  {
    icon: Droplets,
    title: "Fully Liquid-Cooled",
    desc: "ระบายความร้อนด้วยของเหลวเต็มระบบ ทั้งตัวเครื่องและสายชาร์จ ลดความร้อนสะสม เพิ่มความเสถียรและอายุการใช้งาน",
  },
  {
    icon: LayoutGrid,
    title: "ออกแบบแบบโมดูลาร์",
    desc: "จัดสรรกำลังไฟแบบยืดหยุ่นให้หลายหัวชาร์จพร้อมกัน รองรับการขยายสถานีในอนาคตได้ง่าย",
  },
  {
    icon: Volume2,
    title: "เสียงรบกวนต่ำ",
    desc: "ระบบระบายความร้อนของเหลวช่วยลดเสียงพัดลมเมื่อเทียบกับเครื่องชาร์จระบายความร้อนด้วยอากาศทั่วไป",
  },
  {
    icon: Cable,
    title: "สายชาร์จบางเบา ใช้งานง่าย",
    desc: "หัวชาร์จระบายความร้อนด้วยของเหลว ทำให้สายชาร์จมีขนาดเล็กลง จับถือสะดวก ลดความเมื่อยล้าของผู้ใช้",
  },
  {
    icon: ShieldCheck,
    title: "มาตรฐานความปลอดภัยสูง",
    desc: "ระบบตรวจสอบและป้องกันไฟเกิน ลัดวงจร และความร้อนเกิน เพื่อความปลอดภัยของรถและผู้ใช้งาน",
  },
];

export default function ProductSpotlight() {
  return (
    <section id="product" className="border-b border-white/5 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            หัวใจของสถานีชาร์จ
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Huawei FusionCharge
            <br />
            <span className="text-gradient">Fully Liquid-Cooled Ultra-Fast 720kW</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            เทคโนโลยีชาร์จเร็วระดับแนวหน้า ระบายความร้อนด้วยของเหลวเต็มระบบ
            ให้ประสิทธิภาพ เสถียรภาพ และความปลอดภัยสูงสุด
            เหมาะสำหรับสถานีชาร์จเชิงพาณิชย์ที่ต้องการรองรับผู้ใช้จำนวนมากในเวลาอันสั้น
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-colors hover:border-brand-green/30 hover:bg-white/[0.05]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green/15 to-brand-cyan/15 text-brand-green">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[11px] text-zinc-600">
          *ข้อมูลจำเพาะอ้างอิงจากผู้ผลิต Huawei FusionCharge
          รายละเอียดสเปกและรุ่นที่แนะนำอาจแตกต่างกันตามหน้างานจริง
          สอบถามรายละเอียดเพิ่มเติมได้ทาง LINE
        </p>
      </div>
    </section>
  );
}
