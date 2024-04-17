import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/app/providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Damien Foo",
  description: "About Damien Foo"
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body>
      <Providers>
        {children}
      </Providers>
      </body>
      </html>
  );
}