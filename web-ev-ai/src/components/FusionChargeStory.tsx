import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";

const LINE_URL = "https://line.me/ti/p/@pin89";

const STORY_SECTIONS = [
  {
    eyebrow: "Excellent Experience",
    title: "ประสบการณ์เหนือระดับ",
    stat: <Counter target={200} suffix="+ กม." />,
    statLabel: "ระยะทางที่ชาร์จได้ ภายใน 5 นาที[1]",
    body: [
      {
        subtitle: "ความเร็วระดับสุดยอด",
        text: "หัวจ่ายชาร์จ Liquid-Cooled จ่ายกระแสไฟสูงสุดถึง 800A ให้การชาร์จที่รวดเร็วกว่าเครื่องชาร์จทั่วไปอย่างชัดเจน",
      },
      {
        subtitle: "เงียบกว่าที่คิด",
        text: "ประสบการณ์ชาร์จที่เงียบสงบ ระดับเสียงต่ำกว่า 55dB(A)[3] ผู้ใช้งานสามารถรอชาร์จได้อย่างสบายใจ",
      },
    ],
    media: [
      { src: "/huawei/excellent-experience-1.mp4", poster: "/huawei/excellent-experience-1-poster.jpg" },
      { src: "/huawei/excellent-experience-2.mp4", poster: "/huawei/excellent-experience-2-poster.jpg" },
    ],
  },
  {
    eyebrow: "Superior Quality",
    title: "คุณภาพเหนือชั้น",
    stat: <Counter target={10} suffix=" ปี" />,
    statLabel: "อายุการใช้งาน[2]",
    body: [
      {
        text: "ระบบชาร์จเร็ว Liquid-Cooled ออกแบบมาให้ใช้งานได้อย่างต่อเนื่องอย่างน้อย 10 ปี[4] อัตราความเสียหายของโมดูลต่ำกว่า 0.5% พร้อมระบบป้องกันไฟเกิน ลัดวงจร ไฟรั่ว และความร้อนเกินในตัว",
      },
    ],
    image: "/huawei/superior-quality.jpg",
  },
  {
    eyebrow: "High Utilization",
    title: "ใช้งานคุ้มค่าสูงสุด",
    stat: "96%",
    statLabel: "ประสิทธิภาพ Power Sharing Matrix[5]",
    body: [
      {
        text: "สถาปัตยกรรม DC Bus จัดสรรกำลังไฟระหว่างหัวชาร์จได้อย่างยืดหยุ่น ลดภาระโหลดไฟฟ้าของระบบไฟฟ้าโดยรวม เพิ่มประสิทธิภาพการใช้พลังงานให้คุ้มค่าที่สุดสำหรับผู้ประกอบการ",
      },
    ],
    image: "/huawei/high-utilization.jpg",
  },
  {
    eyebrow: "Long-Term Evolution",
    title: "พร้อมรับอนาคต",
    stat: "DC Bus",
    statLabel: "รองรับการอัปเกรดในอนาคต",
    body: [
      {
        text: "พาวเวอร์ยูนิตสำรอง DC Bus ไว้สำหรับเชื่อมต่อกับระบบกักเก็บพลังงาน (ESS) รองรับการบริหารจัดการโหลดไฟฟ้าอัจฉริยะ พร้อมขยายเชื่อมต่อโซลาร์เซลล์ (PV) และ ESS ได้ในอนาคตโดยไม่ต้องเปลี่ยนอุปกรณ์หลัก",
      },
    ],
    image: "/huawei/long-term-evolution.jpg",
  },
];

export default function FusionChargeStory() {
  return (
    <>
      {/* full-bleed hero banner */}
      <section className="relative overflow-hidden border-b border-black/5">
        <video
          className="aspect-[16/9] w-full object-cover sm:aspect-[21/9]"
          muted
          autoPlay
          loop
          playsInline
          poster="/huawei/hero-poster.jpg"
        >
          <source src="/huawei/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-end px-5 pb-10 text-center sm:pb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              Huawei FusionCharge · Fully Liquid-Cooled
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              ชาร์จเร็วพิเศษ ระบายความร้อนด้วยของเหลวเต็มระบบ
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-xl text-sm text-white/85 sm:text-base">
              โครงสร้างพื้นฐานพลังงานยุคใหม่ สำหรับยานยนต์ไฟฟ้า
            </p>
          </Reveal>
        </div>
      </section>

      {/* alternating story sections */}
      {STORY_SECTIONS.map((section, i) => (
        <section key={section.eyebrow} className="border-b border-black/5 px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                  {section.eyebrow}
                </span>
                <h2 className="mt-3 text-2xl font-bold text-zinc-900 sm:text-3xl">{section.title}</h2>

                <div className="mt-5">
                  <div className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">{section.stat}</div>
                  <div className="mt-1 text-sm text-zinc-500">{section.statLabel}</div>
                </div>

                <div className="mt-6 space-y-4">
                  {section.body.map((b) => (
                    <div key={b.text}>
                      {"subtitle" in b && (
                        <h3 className="text-sm font-semibold text-zinc-900">{b.subtitle}</h3>
                      )}
                      <p className="mt-1 text-sm leading-relaxed text-zinc-600 sm:text-base">{b.text}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={120}>
                {section.media ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {section.media.map((v) => (
                      <div key={v.src} className="overflow-hidden rounded-2xl border border-black/5">
                        <video className="aspect-video w-full object-cover" controls poster={v.poster}>
                          <source src={v.src} type="video/mp4" />
                        </video>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-video">
                    <Image
                      src={section.image!}
                      alt={section.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* footnotes */}
      <section className="border-b border-black/5 px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-1.5 text-[11px] leading-relaxed text-zinc-400">
          <p>
            [1][2][4][5] ข้อมูลเป็นค่าทางทฤษฎีจากการทดสอบภายในห้องปฏิบัติการของ Huawei
            ภายใต้เงื่อนไขเฉพาะ ผลการใช้งานจริงอาจแตกต่างกันไปตามรุ่นรถ ซอฟต์แวร์ และสภาพการใช้งาน
          </p>
          <p>[3] ระดับเสียงของหัวจ่ายชาร์จต่ำกว่า 55dB(A) ที่อุณหภูมิ 25°C ระยะห่าง 1 เมตร</p>
          <p>
            วิดีโอและภาพประกอบเป็นสื่อทางการจาก Huawei Digital Power (digitalpower.huawei.com)
            ใช้เพื่อประกอบการนำเสนอผลิตภัณฑ์ โดย P.INNOVATION89 ในฐานะตัวแทนติดตั้งอย่างเป็นทางการ
          </p>
        </div>
      </section>

      {/* bridge back to consultation */}
      <section className="border-b border-black/5 px-5 py-14 text-center sm:px-8">
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-red to-brand-red-dark px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-red/20 transition-transform hover:scale-105 active:scale-95"
        >
          <MessageCircle size={18} />
          ปรึกษาการติดตั้งฟรีทาง LINE @pin89
          <ArrowRight size={16} />
        </a>
      </section>
    </>
  );
}
