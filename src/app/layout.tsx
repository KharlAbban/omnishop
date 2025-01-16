import type { Metadata } from "next";
import "./globals.css";
import { APP_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: {
    default: APP_TITLE,
    template: `%s | ${APP_TITLE}`,
  },
  description: "OmniShop - One-stop-shop for all frozen meat products",
  icons: [{ rel: "icon", url: "/omnishop-logo.jpeg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body
          className="antialiased bg-gray-50 text-theme-black selection:bg-theme-yellow"
        >
          {children}
        </body>
      </html>
  );
}
