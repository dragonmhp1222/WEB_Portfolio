import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

/** 美容・ライフスタイル系ケーススタディの見出し用 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Web制作ポートフォリオ | ランディングページ・コーポレートサイト",
    template: "%s | Web制作ポートフォリオ",
  },
  description:
    "ランディングページ・ブランドサイトの制作を行っています。美容・SaaS・飲食などのサンプル実績と、要件整理から実装・公開までの対応が可能です。",
  openGraph: {
    locale: "ja_JP",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJp.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
