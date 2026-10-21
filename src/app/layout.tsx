import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dubai’s Trusted Luxury Car Repair & Specialist Auto Care Experts | Premium Care for Premium Cars. Excellence in Every Detail",
  description: "Premium detailing & auto care services in Dubai for luxury, American & German cars.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />

        <main className="grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
