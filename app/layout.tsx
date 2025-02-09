import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils/tailwindMerge/tailwindMerge";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seu passaporte para sua saúde",
  description:
    "Organize e acesse facilmente seu histórico de consultas, exames e cirurgias com o Histórico de Saúde, disponível offline e com armazenamento seguro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", roboto.className)}>{children}</body>
    </html>
  );
}
