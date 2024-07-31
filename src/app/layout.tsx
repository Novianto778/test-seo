import Navbar from "@/components/common/Navbar";
import RQProvider from "@/components/providers/RQProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Page Done",
  description: "The new standard for Modern investor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RQProvider>
          {/* <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${"GTM-N2KPGC54"}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            ></iframe>
          </noscript> */}
          <NextTopLoader />
          <Navbar />
          <div className="lg:pt-24 pt-8">{children}</div>
        </RQProvider>
      </body>
    </html>
  );
}
