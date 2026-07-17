import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "P.INNOVATION89 | รับสร้างสถานีชาร์จ EV ภาคอีสาน",
  description:
    "P.INNOVATION89 รับออกแบบและติดตั้งสถานีชาร์จรถยนต์ไฟฟ้าครบวงจร ภาคอีสาน ใช้เครื่องชาร์จ Huawei FusionCharge Fully Liquid-Cooled Ultra-Fast 720kW ชาร์จเร็วที่สุดในตลาด ลงทุนวันนี้ คืนทุนเร็ว โอกาสทอง",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${prompt.variable} antialiased`}>
      <body className="bg-[#05070a] text-zinc-100">{children}</body>
    </html>
  );
}
