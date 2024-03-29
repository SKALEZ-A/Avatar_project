import Image from "next/image"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Roadmap from "../components/Roadmap2"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <main className="flex flex-col bg-[#0e0e0e73]">
        <Navbar />
        <Hero />
        <div className="container md:mt-32 mt-8 px-8 py-6 mx-auto sm:max-w-4xl md:max-w-5xl">
          {/* <div className="mx-auto sm:max-w-xl md:max-w-5xl lg:max-w-5xl xl:max-w-5xl md:container"> */}
          <About />
          <Roadmap />
        </div>
        <Footer />
      </main>
    </>
  )
}
