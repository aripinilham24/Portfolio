"use client";
import { useState, useEffect } from "react";
import Loading from "@/component/Loading.jsx";
import Header from "@/sections/Header.jsx";
import Hero from "@/sections/Hero.jsx";
import About from "@/sections/About.jsx";
import Certificates from "@/sections/Certificates.jsx";
import Projects from "@/sections/Projects.jsx";
import ContactMe from "@/sections/ContactMe.jsx";
import Footer from "@/sections/Footer.jsx";
import Particle from "@/component/Particle.jsx";


export default function Home () {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        // Jika halaman sudah siap sebelum effect dijalankan
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            // Tunggu sampai semua resource selesai dimuat
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Particle />
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
            )}
        </>
    );
};


