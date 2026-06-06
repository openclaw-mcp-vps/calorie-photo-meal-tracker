import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CalSnap – Take a photo, get instant calorie count",
  description: "AI-powered food photo analysis. Instant calorie and macro breakdown for every meal."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f4c8cfc2-8049-4866-9ba8-2e5cab3fe422"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
