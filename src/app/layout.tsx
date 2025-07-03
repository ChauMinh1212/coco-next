import type { Metadata } from "next";
import "./globals.css";
import { arimo, bungee, libre, notosan, sriracha,  } from "@/app/font";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://cocogarden.vn'),
  title: "Coco Garden - Khu nghỉ dưỡng thiên nhiên",
  description: "Coco Garden - Trải nghiệm nghỉ dưỡng giữa thiên nhiên, dịch vụ đa dạng, không gian xanh mát.",
  icons: {
    icon: '/coconut.png',
    shortcut: '/coconut.png',
    apple: '/coconut.png',
  },
  keywords: ["coco garden", "homestay", "cát lái homestay", "hồ chí minh homestay", "Khu nghỉ dưỡng thiên nhiên", "Dịch vụ đa dạng", "Không gian xanh mát"],
  openGraph: {
    title: "Coco Garden - Khu nghỉ dưỡng thiên nhiên",
    description: "Coco Garden - Trải nghiệm nghỉ dưỡng giữa thiên nhiên, dịch vụ đa dạng, không gian xanh mát.",
    images: ["/coconut.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${arimo.variable} 
          ${bungee.variable} 
          ${libre.variable} 
          ${sriracha.variable} 
          ${notosan.variable} 
          antialiased
          flex 
          flex-col 
          min-h-screen
          `}
      >
        <Header></Header>
        <main className="flex-1 relative pt-[98px]">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
