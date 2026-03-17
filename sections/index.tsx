"use client";
import { useState, useEffect } from "react";
import Loading from "@/component/Loading";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Certificates from "@/sections/Certificates";
import Projects from "@/sections/Projects";
import ContactMe from "@/sections/ContactMe";
import Footer from "@/sections/Footer";

export default function Page () {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
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


