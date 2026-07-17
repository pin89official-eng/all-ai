import Reveal from "./Reveal";

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

export default function SpecTable() {
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        {SPEC_GROUPS.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 120}>
            <div className="overflow-hidden rounded-2xl border border-black/8">
              <div className="border-b border-black/8 bg-surface px-5 py-3.5">
                <h3 className="text-sm font-semibold text-zinc-900">{group.title}</h3>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {group.rows.map(([label, value], i) => (
                    <tr
                      key={label}
                      className={`transition-colors hover:bg-brand-red/[0.03] ${
                        i % 2 === 0 ? "bg-transparent" : "bg-surface"
                      }`}
                    >
                      <td className="px-5 py-3 text-zinc-500">{label}</td>
                      <td className="px-5 py-3 text-right font-medium text-zinc-900">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-[11px] text-zinc-400">
        ข้อมูลจำเพาะอ้างอิงจากเอกสาร &quot;Huawei FusionCharge Fully Liquid-Cooled
        Ultra-Fast Charging&quot; โดย Huawei Digital Power (2024) และ
        digitalpower.huawei.com/en/smart-charging-network/ultra-fast-charging
        *ตัวเลขที่มีเครื่องหมายดอกจันเป็นค่าทางทฤษฎีจากห้องทดลองภายใต้เงื่อนไขเฉพาะ
        ผลจริงขึ้นอยู่กับรุ่นรถ ซอฟต์แวร์ และสภาพการใช้งาน
        รุ่นและสเปกที่แนะนำอาจแตกต่างกันตามหน้างานจริง สอบถามรายละเอียดเพิ่มเติมได้ทาง LINE
      </p>
    </>
  );
}
