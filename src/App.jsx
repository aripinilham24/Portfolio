import { useState, useEffect } from "react";
import Loading from "./component/Loading.jsx";
import Header from "./sections/Header.jsx";
import Home from "./sections/Home.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Certificates from "./sections/Certificates.jsx";
import Projects from "./sections/Projects.jsx";
import ContactMe from "./sections/ContactMe.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
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
                    <Header />
                    <main>
                        <Home />
                        <AboutMe />
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

export default App;
