import { ClipboardList, Compass, HardHat, Headset, LineChart, Wrench } from "lucide-react";

const SERVICES = [
  {
    icon: Compass,
    title: "สำรวจหน้างานและให้คำปรึกษา",
    desc: "ลงพื้นที่สำรวจ วิเคราะห์ระบบไฟฟ้า และประเมินความคุ้มค่าการลงทุนก่อนเริ่มโครงการ",
  },
  {
    icon: ClipboardList,
    title: "ออกแบบระบบและขออนุญาต",
    desc: "ออกแบบผังสถานีชาร์จ ระบบไฟฟ้า และดำเนินเรื่องขออนุญาตกับหน่วยงานที่เกี่ยวข้อง",
  },
  {
    icon: HardHat,
    title: "ติดตั้งและก่อสร้างครบวงจร",
    desc: "ทีมช่างผู้ชำนาญติดตั้งเครื่องชาร์จ Huawei FusionCharge พร้อมงานโครงสร้างและระบบไฟฟ้า",
  },
  {
    icon: Wrench,
    title: "ทดสอบระบบและส่งมอบ",
    desc: "ตรวจสอบความปลอดภัยและทดสอบการใช้งานจริงก่อนส่งมอบสถานีให้พร้อมเปิดให้บริการ",
  },
  {
    icon: LineChart,
    title: "ระบบบริหารจัดการสถานี",
    desc: "แนะนำแพลตฟอร์มติดตามการใช้งาน รายได้ และสถานะเครื่องชาร์จแบบเรียลไทม์",
  },
  {
    icon: Headset,
    title: "บริการหลังการขาย",
    desc: "ดูแล บำรุงรักษา และซ่อมบำรุงต่อเนื่องหลังติดตั้ง เพื่อให้สถานีพร้อมใช้งานตลอดเวลา",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-white/5 bg-white/[0.015] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            บริการของเรา
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            ครบทุกขั้นตอน <span className="text-gradient">จบในที่เดียว</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            ตั้งแต่สำรวจหน้างานจนถึงบริการหลังการขาย
            ให้ P.INNOVATION89 ดูแลสถานีชาร์จของคุณแบบครบวงจร
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-white/8 bg-[#05070a] p-6"
            >
              <span className="absolute right-6 top-6 text-2xl font-extrabold text-white/5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green/15 to-brand-cyan/15 text-brand-cyan">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
