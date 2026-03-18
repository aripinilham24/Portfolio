"use client";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Certificates from "@/sections/Certificates";
import Projects from "@/sections/Projects";
import ContactMe from "@/sections/ContactMe";
import Footer from "@/sections/Footer";

export default function Page() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
