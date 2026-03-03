import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lic. Gabriela Paré | Backend Engineer",
  description:
    "Backend Engineer especializada en Java y Spring Boot. Diseño de APIs REST, integración de servicios y evolución hacia liderazgo técnico.",
  keywords: [
    "Gabriela Paré",
    "Backend Engineer",
    "Java",
    "Spring Boot",
    "APIs REST",
    "Arquitectura",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}