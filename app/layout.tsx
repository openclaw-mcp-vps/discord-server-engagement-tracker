import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Engagement Tracker — Know Which Channels Actually Matter",
  description: "Analyze Discord server activity, identify top-performing channels, and track member retention. Built for community managers who want real insights."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="162e38b7-8099-4b17-8bfd-95a6e33f0b79"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
