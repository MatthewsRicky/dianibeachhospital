import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import "./globals.css";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Diani Beach Hospital",
  description:
    "Diani Beach Hospital — Professional Healthcare with a Personal Touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
