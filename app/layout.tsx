import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "KONKORD | UAE Industrial Trade",
    template: "%s | KONKORD",
  },
  description:
    "From the UAE we manage international trade and brokerage services across regions where speed, negotiation accuracy and reliable coordination define success.",
  openGraph: {
    title: "KONKORD HOLDING OÜ",
    description:
      "Positioned at the intersection of global markets, we support clients with supply routes and deal structures designed for long-term success.",
    url: "https://konkordholding.ee",
    siteName: "KONKORD",
    images: ["/og-konkord.jpg"],
    emails: ["order@konkordholding.ee"],
  },
};

export const viewport: Viewport = {
  themeColor: "#dc2626", // Deep crimson red
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
