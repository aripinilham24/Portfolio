"use client";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import About from "@/components/layouts/About";
import Certificates from "@/components/layouts/Certificates";
import Projects from "@/components/layouts/Projects";
import ContactMe from "@/components/layouts/ContactMe";
import Footer from "@/components/layouts/Footer";

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
