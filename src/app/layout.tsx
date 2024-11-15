import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Medical Patient Dashboard",
  description: "A responsive web application for displaying essential patient health data, including basic information and MRI brain scan images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
