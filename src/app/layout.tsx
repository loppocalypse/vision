import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vision Custom Build + Remodel | Northern Virginia",
  description: "TOP-RATED for 15+ years, Vision Custom Build + Remodel brings your vision to life with high-quality renovations that transform your space.",
  keywords: "Kitchen remodeling, bathroom remodeling, home addition, basement remodeling, custom home build, Northern Virginia, Fairfax, Arlington, Alexandria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-bg-light text-text-dark">
        {children}
      </body>
    </html>
  );
}
