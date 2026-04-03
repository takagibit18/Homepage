import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitHub Homepage",
  description: "Personal GitHub homepage with glassmorphism design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen overflow-hidden">
          {/* Decorative floating orbs */}
          <div
            className="absolute top-[-20%] left-[-10%] w-96 h-96 rounded-full opacity-20 animate-float"
            style={{
              background:
                "radial-gradient(circle, rgba(88,166,255,0.4) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15 animate-float-slow"
            style={{
              background:
                "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
