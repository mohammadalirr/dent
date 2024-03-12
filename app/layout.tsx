import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import "@/components/content/content.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import MainLayout from "@/components/layout/MainLayout";
import "@mantine/carousel/styles.css";
import { Providers } from "@/lib/Providers";
import { theme } from "@/mantineTheme";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "دنت دنت",
  description: "ابزار تخصصی دندانپزشکی",
};

export default function RootLayout({
  props,
  children,
}: Readonly<{
  children: React.ReactNode;
  props: React.PropsWithChildren;
}>) {
  return (
    <Providers>
      <html lang="fa-IR" dir="rtl">
        <head>
          <ColorSchemeScript />
        </head>
        <body className={vazirmatn.className}>
          <MantineProvider theme={theme}>
            <MainLayout>{children}</MainLayout>
          </MantineProvider>
        </body>
      </html>
    </Providers>
  );
}
