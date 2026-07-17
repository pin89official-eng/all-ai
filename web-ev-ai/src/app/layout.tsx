import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_URL = "https://web-ev-ai.vercel.app";
const TITLE = "P.INNOVATION89 | รับสร้างสถานีชาร์จ EV ภาคอีสาน";
const DESCRIPTION =
  "P.INNOVATION89 รับออกแบบและติดตั้งสถานีชาร์จรถยนต์ไฟฟ้าครบวงจร ภาคอีสาน ใช้เครื่องชาร์จ Huawei FusionCharge Fully Liquid-Cooled Ultra-Fast 720kW ชาร์จเร็วที่สุดในตลาด ลงทุนวันนี้ คืนทุนเร็ว โอกาสทอง";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "P.INNOVATION89",
    images: [{ url: "/huawei/og-share.jpg", width: 1920, height: 1080 }],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/huawei/og-share.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${prompt.variable} antialiased`}>
      <body className="bg-white text-zinc-900">{children}</body>
    </html>
  );
}
