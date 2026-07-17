import Image from "next/image";
import { Droplets, Gauge, ShieldCheck, Network, Volume2, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";
import SpecTable from "./SpecTable";

const FEATURES = [
  {
    icon: Gauge,
    title: "ชาร์จเร็ว 200+ กม. ใน 5 นาที*",
    desc: "พาวเวอร์ยูนิตรุ่น 600kW(AC/DC)+720kW(DC/DC) หัวจ่ายกระแสสูงสุดถึง 800A* ให้ระยะทางเพิ่มกว่า 200 กม. ภายใน 5 นาที รองรับสูงสุด 8 หัวชาร์จพร้อมกัน",
  },
  {
    icon: Droplets,
    title: "Fully Liquid-Cooled",
    desc: "ระบายความร้อนด้วยของเหลวทั้งพาวเวอร์ยูนิตและสายชาร์จ ประสิทธิภาพสูงสุด 96% ทำงานได้ในช่วงอุณหภูมิ -35°C ถึง +50°C",
  },
  {
    icon: Network,
    title: "Power Sharing Matrix ประสิทธิภาพ 96%*",
    desc: "สถาปัตยกรรม DC Bus จัดสรรกำลังไฟระหว่างหัวชาร์จได้อย่างยืดหยุ่น ลดภาระโหลดไฟฟ้า เพิ่มประสิทธิภาพการชาร์จสูงสุดถึง 96%* รองรับเชื่อมต่อโซลาร์และแบตเตอรี่กักเก็บพลังงาน (ESS) ในอนาคต",
  },
  {
    icon: Volume2,
    title: "Unparalleled Silence เงียบกว่าที่คิด",
    desc: "ระดับเสียงต่ำกว่า 55dB(A)* ที่ระยะ 1 เมตร (หัวจ่ายบางรุ่นต่ำถึง 50dB(A)) เงียบกว่าเครื่องชาร์จระบายความร้อนด้วยอากาศทั่วไปอย่างชัดเจน",
  },
  {
    icon: ShieldCheck,
    title: "อายุการใช้งานยาว 10 ปี*",
    desc: "ออกแบบให้ใช้งานได้อย่างน้อย 10 ปี* อัตราความเสียหายของโมดูลต่ำกว่า 0.5%* พร้อมระบบป้องกันไฟเกิน ลัดวงจร ไฟรั่ว ความร้อนเกิน และตรวจจับการเปิดตู้",
  },
  {
    icon: BadgeCheck,
    title: "มาตรฐานสากล IP55",
    desc: "กันฝุ่นกันน้ำระดับ IP55 ผ่านมาตรฐาน IEC 61851, IEC 62196, ISO15118 พร้อมรองรับ OCPP เชื่อมต่อแพลตฟอร์มบริหารจัดการ",
  },
];

export default function ProductSpotlight() {
  return (
    <section id="product" className="border-b border-black/5 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            หัวใจของสถานีชาร์จ
          </span>
          <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
            Huawei FusionCharge
            <br />
            <span className="text-gradient">Fully Liquid-Cooled Ultra-Fast 720kW</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
            เทคโนโลยีชาร์จเร็วระดับแนวหน้า ระบายความร้อนด้วยของเหลวเต็มระบบ
            ให้ประสิทธิภาพ เสถียรภาพ และความปลอดภัยสูงสุด
            เหมาะสำหรับสถานีชาร์จเชิงพาณิชย์ที่ต้องการรองรับผู้ใช้จำนวนมากในเวลาอันสั้น
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/8 bg-surface px-4 py-2">
            <span className="text-xs text-zinc-500">ตัวแทนติดตั้งอย่างเป็นทางการของ</span>
            <Image src="/huawei/huawei-logo.png" alt="Huawei" width={90} height={20} className="h-5 w-auto" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-black/8 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:bg-brand-red/[0.03] hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red transition-transform duration-300 group-hover:scale-110">
                  <f.icon size={22} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-zinc-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <SpecTable />
        </div>
      </div>
    </section>
  );
}
