import Reveal from "./Reveal";
import Counter from "./Counter";

const HIGHLIGHTS = [
  {
    title: "ประสบการณ์เหนือระดับ",
    value: <Counter target={200} prefix="" suffix="+ กม." />,
    desc: "ชาร์จเพียง 5 นาที*",
  },
  {
    title: "คุณภาพเหนือชั้น",
    value: <Counter target={10} suffix=" ปี" />,
    desc: "อายุการใช้งาน*",
  },
  {
    title: "ใช้งานคุ้มค่าสูงสุด",
    value: "Power Sharing",
    desc: "เพิ่มประสิทธิภาพการใช้พลังงาน",
  },
  {
    title: "พร้อมรับอนาคต",
    value: "DC Bus",
    desc: "อัปเกรดรองรับโซลาร์ & ESS",
  },
];

const VIDEO_SLIDES = [
  {
    src: "https://digitalpower.huawei.com/admin/asset/v1/pro/view/d72801ced6764f0cb2eb00a5bedf4ee3.mp4",
    poster:
      "https://digitalpower.huawei.com/admin/asset/v1/pro/view/22cf37bc838546ecbbdf6955cf954252.jpg",
    caption: "ตัวเครื่องและหัวจ่ายชาร์จ Liquid-Cooled",
  },
  {
    src: "https://digitalpower.huawei.com/admin/asset/v1/pro/view/258bd5578a134945aab1df9f5fcb182a.mp4",
    poster:
      "https://digitalpower.huawei.com/admin/asset/v1/pro/view/a68c09765d6b4d38bc26748424a6c3dc.jpg",
    caption: "การใช้งานจริงหน้าสถานีชาร์จ",
  },
];

export default function Showcase() {
  return (
    <section className="border-b border-black/5 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        {/* banner video */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl">
            <video
              className="aspect-video w-full object-cover"
              muted
              autoPlay
              loop
              playsInline
              poster="https://digitalpower.huawei.com/admin/asset/v1/pro/view/17698018a83540a79e1fad1d3ddf657c.jpg"
            >
              <source
                src="https://digitalpower.huawei.com/admin/asset/v1/pro/view/77b2644e666641f5868371f57c654cf3.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </Reveal>

        {/* highlight stats */}
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/5 bg-black/5 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 100} className="bg-white">
              <div className="group h-full px-5 py-6 text-center transition-colors hover:bg-brand-red/[0.03] sm:text-left">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-red">
                  {h.title}
                </div>
                <div className="mt-2 text-2xl font-extrabold text-zinc-900 transition-transform duration-300 group-hover:scale-105 sm:text-3xl">
                  {h.value}
                </div>
                <div className="mt-1 text-xs text-zinc-500">{h.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* video slides */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {VIDEO_SLIDES.map((v, i) => (
            <Reveal key={v.src} delay={i * 120}>
              <div className="overflow-hidden rounded-2xl border border-black/5 transition-shadow hover:shadow-lg">
                <video className="aspect-video w-full object-cover" controls poster={v.poster}>
                  <source src={v.src} type="video/mp4" />
                </video>
                <div className="bg-white px-4 py-3 text-xs text-zinc-500">{v.caption}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-[11px] text-zinc-400">
          *ตัวเลขเป็นค่าทางทฤษฎีจากห้องปฏิบัติการภายใต้เงื่อนไขเฉพาะ ผลจริงขึ้นอยู่กับรุ่นรถและสภาพการใช้งาน
          — วิดีโอและภาพประกอบเป็นสื่อทางการจาก Huawei Digital Power
          (digitalpower.huawei.com) ใช้เพื่อประกอบการนำเสนอผลิตภัณฑ์
        </p>
      </div>
    </section>
  );
}
