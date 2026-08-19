import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WINPRO TECHNOLOGY",
  description: "Modern digital platforms, cloud solutions and product engineering by WINPRO TECHNOLOGY.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
