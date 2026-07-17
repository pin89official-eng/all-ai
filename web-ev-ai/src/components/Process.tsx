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
    <section id="process" className="border-b border-white/5 bg-white/[0.015] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            ขั้นตอนการทำงาน
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            เริ่มต้นง่าย <span className="text-gradient">ไม่ยุ่งยาก</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s) => (
            <div key={s.step} className="relative rounded-2xl border border-white/8 bg-[#05070a] p-6">
              <span className="text-3xl font-extrabold text-gradient">{s.step}</span>
              <h3 className="mt-3 text-base font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
