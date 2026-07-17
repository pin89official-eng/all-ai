import { Droplets, Gauge, ShieldCheck, Network, Volume2, BadgeCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Gauge,
    title: "จ่ายไฟสูงสุด 720kW",
    desc: "พาวเวอร์ยูนิตรุ่น 600kW(AC/DC)+720kW(DC/DC) จ่ายกระแสได้สูงสุด 500A ต่อหัวชาร์จ รองรับสูงสุด 8 หัวชาร์จพร้อมกัน",
  },
  {
    icon: Droplets,
    title: "Fully Liquid-Cooled",
    desc: "ระบายความร้อนด้วยของเหลวทั้งพาวเวอร์ยูนิตและสายชาร์จ ประสิทธิภาพสูงสุด 96% ทำงานได้ในช่วงอุณหภูมิ -35°C ถึง +50°C",
  },
  {
    icon: Network,
    title: "Power Sharing Matrix + DC Bus",
    desc: "สถาปัตยกรรม DC Bus จัดสรรกำลังไฟระหว่างหัวชาร์จได้อย่างยืดหยุ่น รองรับเชื่อมต่อระบบโซลาร์และแบตเตอรี่กักเก็บพลังงาน (ESS) ในอนาคต",
  },
  {
    icon: Volume2,
    title: "เสียงเงียบ ≤50dB(A)",
    desc: "หัวจ่ายมีระดับเสียงไม่เกิน 50dB(A) ที่ระยะ 1 เมตร (25°C) เงียบกว่าเครื่องชาร์จระบายความร้อนด้วยอากาศทั่วไป",
  },
  {
    icon: ShieldCheck,
    title: "อายุการใช้งานยาว 10 ปี*",
    desc: "อัตราความเสียหายของโมดูลต่ำกว่า 0.5%* พร้อมระบบป้องกันไฟเกิน ลัดวงจร ไฟรั่ว ความร้อนเกิน และตรวจจับการเปิดตู้",
  },
  {
    icon: BadgeCheck,
    title: "มาตรฐานสากล IP55",
    desc: "กันฝุ่นกันน้ำระดับ IP55 ผ่านมาตรฐาน IEC 61851, IEC 62196, ISO15118 พร้อมรองรับ OCPP เชื่อมต่อแพลตฟอร์มบริหารจัดการ",
  },
];

const SPEC_GROUPS = [
  {
    title: "พาวเวอร์ยูนิต (DS720-720LEUA2)",
    rows: [
      ["กำลังไฟ (AC/DC + DC/DC)", "600kW + 720kW"],
      ["ขนาด (กว้าง×ลึก×สูง)", "800 × 1700 × 2150 มม."],
      ["ประสิทธิภาพ (โหลดเต็ม / สูงสุด)", "94.7% / 96%*"],
      ["ระบบระบายความร้อน", "Liquid Cooling"],
      ["ระดับป้องกันฝุ่น/น้ำ", "IP55"],
      ["จำนวนหัวชาร์จสูงสุด", "12 หัว (สูงสุด 8 × 500A)"],
      ["เสียงรบกวน", "≤55dB(A) โหมดเงียบ / ≤60dB(A) โหลดเต็ม@1m"],
    ],
  },
  {
    title: "หัวจ่ายชาร์จ (DT500L1-EUA1 Liquid-Cooled)",
    rows: [
      ["กำลังจ่ายสูงสุดต่อหัว", "480kW"],
      ["กระแสไฟฟ้าออก", "425A ต่อเนื่อง / สูงสุด 500A (30 นาที@25°C)"],
      ["หัวชาร์จ", "1 × CCS2"],
      ["ความยาวสายชาร์จ", "≥ 5 เมตร"],
      ["ระดับป้องกันฝุ่น/น้ำ", "IP55"],
      ["เสียงรบกวน", "≤50dB(A) @25°C (1m)"],
    ],
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

        {/* spec table */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {SPEC_GROUPS.map((group) => (
            <div
              key={group.title}
              className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]"
            >
              <div className="border-b border-white/8 bg-white/[0.03] px-5 py-3.5">
                <h3 className="text-sm font-semibold text-white">{group.title}</h3>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {group.rows.map(([label, value], i) => (
                    <tr
                      key={label}
                      className={i % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"}
                    >
                      <td className="px-5 py-3 text-zinc-400">{label}</td>
                      <td className="px-5 py-3 text-right font-medium text-white">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[11px] text-zinc-600">
          ข้อมูลจำเพาะอ้างอิงจากเอกสาร &quot;Huawei FusionCharge Fully Liquid-Cooled
          Ultra-Fast Charging&quot; โดย Huawei Digital Power (2024) *ค่าประสิทธิภาพและอายุการใช้งานเป็นค่าทางทฤษฎีจากห้องทดลอง
          รุ่นและสเปกที่แนะนำอาจแตกต่างกันตามหน้างานจริง สอบถามรายละเอียดเพิ่มเติมได้ทาง LINE
        </p>
      </div>
    </section>
  );
}
