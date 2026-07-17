import Reveal from "./Reveal";

const STEPS = [
  {
    step: "01",
    title: "ทักไลน์ปรึกษา",
    desc: "แอด LINE @pin89 เล่าความต้องการและพื้นที่ที่สนใจติดตั้ง",
  },
  {
    step: "02",
    title: "สำรวจหน้างาน",
    desc: "ทีมงานลงพื้นที่สำรวจระบบไฟฟ้าและประเมินความคุ้มค่าการลงทุน",
  },
  {
    step: "03",
    title: "เสนอแผนและออกแบบ",
    desc: "นำเสนอแผนการติดตั้ง งบประมาณ และระยะเวลาคืนทุนโดยประมาณ",
  },
  {
    step: "04",
    title: "ติดตั้งระบบ",
    desc: "ติดตั้งเครื่องชาร์จ Huawei FusionCharge พร้อมงานระบบไฟฟ้าครบวงจร",
  },
  {
    step: "05",
    title: "ทดสอบและส่งมอบ",
    desc: "ทดสอบระบบ ตรวจสอบความปลอดภัย พร้อมดูแลหลังการขายต่อเนื่อง",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-b border-black/5 bg-surface px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            ขั้นตอนการทำงาน
          </span>
          <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
            เริ่มต้นง่าย <span className="text-gradient">ไม่ยุ่งยาก</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-black/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="text-3xl font-extrabold text-gradient transition-transform duration-300 group-hover:scale-110">
                  {s.step}
                </span>
                <h3 className="mt-3 text-base font-semibold text-zinc-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{s.desc}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-brand-red to-brand-red-dark transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
