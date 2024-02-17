
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import MainLayout from "@/components/layout/MainLayout";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "دنت دنت",
  description: "ابزار تخصصی دندانپزشکی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fa-IR" dir="rtl">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={vazirmatn.className}>
        <MantineProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
