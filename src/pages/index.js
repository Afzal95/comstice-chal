import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import Advantage from "@/components/Advantage";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Herosection />
      <Advantage />
      <Footer />
    </main>
  );
}
