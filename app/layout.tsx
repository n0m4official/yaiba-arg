import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YAIBA ARCHIVE NETWORK",
  description: "Secure Access Terminal"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-[#0aff9d] font-mono">
        <div className="min-h-screen p-6">{children}</div>
      </body>
    </html>
  );
}
