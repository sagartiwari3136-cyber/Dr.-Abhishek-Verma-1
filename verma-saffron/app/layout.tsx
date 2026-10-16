import type { Metadata } from "next";
import { Anton, Mukta } from "next/font/google";
import "./globals.css";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" });
const mukta = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["400", "600", "800"],
  variable: "--font-mukta",
});

export const metadata: Metadata = {
  title: "Dr. Abhishek Verma — सेवा • संकल्प • समर्पण",
  description:
    "Dr. Abhishek Verma — Chief National Coordinator, NDA Alliance & Elections. Journey, speeches, honours and legacy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${mukta.variable}`}>{children}</body>
    </html>
  );
}
