import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <Navbar />
      <Hero />
      <div className="container mt-32 px-8 py-6 mx-auto">
        <About />
        <Roadmap />
      </div>
      <Footer />
    </main>
  );
}
