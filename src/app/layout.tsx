import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INNO SUMMER TRIP - Race to Adventure",
  description: "Official portal for energy-filled summer trips for Inno team.",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "INNO SUMMER TRIP - Race to Adventure",
    description: "Official portal for energy-filled summer trips for Inno team.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "INNO SUMMER TRIP",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body>
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
