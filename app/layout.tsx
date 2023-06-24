import "./globals.css";
import { Roboto } from "next/font/google";

// Components
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "LinkedIn Indonesia: Login atau Mendaftar",
  description:
    "750+ juta anggota | Kelola identitas profesional Anda. Bangun dan kenali jaringan profesional Anda. Akses berita, pengetahuan, dan peluang.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
