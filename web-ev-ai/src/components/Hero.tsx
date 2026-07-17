import { ArrowRight, MessageCircle, Zap } from "lucide-react";

const LINE_URL = "https://line.me/ti/p/@pin89";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/5 px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-brand-green/10 blur-[120px]" />
        <div className="absolute top-20 right-0 h-[360px] w-[480px] rounded-full bg-brand-cyan/10 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/5 px-4 py-1.5 text-xs font-medium text-brand-green">
            <Zap size={14} />
            รับสร้างสถานีชาร์จ EV ครบวงจร · ภาคอีสาน
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            ลงทุนวันนี้ <span className="text-gradient">คืนทุนเร็ว</span>
            <br />
            โอกาสทองที่ไม่ควรพลาด
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            P.INNOVATION89 ผู้เชี่ยวชาญด้านสถานีชาร์จรถยนต์ไฟฟ้า ใช้เครื่องชาร์จ{" "}
            <span className="font-semibold text-white">
              Huawei FusionCharge Fully Liquid-Cooled Ultra-Fast 720kW
            </span>{" "}
            ระบบระบายความร้อนด้วยของเหลวเต็มรูปแบบ ชาร์จเร็วที่สุดในตลาด
            ตอบโจทย์ทั้งนักลงทุนและผู้ใช้รถ EV
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-brand-cyan px-7 py-3.5 text-sm font-bold text-[#05070a] shadow-lg shadow-brand-green/20 transition-transform hover:scale-105"
            >
              <MessageCircle size={18} />
              ปรึกษาฟรีทาง LINE @pin89
            </a>
            <a
              href="#product"
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan"
            >
              ดูสเปกเครื่องชาร์จ
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* quick stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "720kW", label: "กำลังไฟสูงสุด (DC/DC)" },
            { value: "480kW", label: "สูงสุดต่อหัวชาร์จ" },
            { value: "96%*", label: "ประสิทธิภาพสูงสุด" },
            { value: "ภาคอีสาน", label: "พื้นที่ให้บริการ" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glow-border rounded-2xl bg-white/[0.03] px-4 py-5 text-center backdrop-blur-sm"
            >
              <div className="text-lg font-bold text-white sm:text-xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-[11px] text-zinc-600">
          *ค่าประสิทธิภาพสูงสุดจากการทดสอบในห้องปฏิบัติการ อ้างอิงเอกสาร Huawei
          FusionCharge Fully Liquid-Cooled Ultra-Fast Charging
        </p>
      </div>
    </section>
  );
}
