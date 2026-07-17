import type { Metadata } from "next";
import Header from "@/components/Header";
import FusionChargeStory from "@/components/FusionChargeStory";
import SpecTable from "@/components/SpecTable";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import StickyContact from "@/components/StickyContact";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Huawei FusionCharge 720kW Fully Liquid-Cooled | P.INNOVATION89",
  description:
    "รายละเอียดเต็มรูปแบบของเครื่องชาร์จ Huawei FusionCharge Fully Liquid-Cooled Ultra-Fast 720kW ที่ P.INNOVATION89 ใช้ติดตั้งในสถานีชาร์จ EV ทั่วภาคอีสาน",
};

export default function FusionChargePage() {
  return (
    <>
      <Header />
      <main>
        <FusionChargeStory />
        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                สเปกเต็มรูปแบบ
              </span>
              <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
                ข้อมูลจำเพาะทางเทคนิค
              </h2>
            </Reveal>
            <div className="mt-14">
              <SpecTable />
            </div>
          </div>
        </section>
        <CtaBanner />
      </main>
      <Footer />
      <BackToTop />
      <StickyContact />
    </>
  );
}
