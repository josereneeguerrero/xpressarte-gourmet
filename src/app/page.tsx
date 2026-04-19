import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Especialidades from "@/components/Especialidades";
import Galeria from "@/components/Galeria";
import Nosotros from "@/components/Nosotros";
import Testimonios from "@/components/Testimonios";
import Reservar from "@/components/Reservar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Especialidades />
        <Galeria />
        <Nosotros />
        <Testimonios />
        <Reservar />
      </main>
      <Footer />
    </>
  );
}
