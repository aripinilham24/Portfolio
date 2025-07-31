import Header from "./sections/Header.jsx";
import Home from "./sections/Home.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Certificates from "./sections/Certificates.jsx";
import Projects from "./sections/Projects.jsx";
import Footer from "./sections/Footer.jsx"

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Home />
                {/* <AboutMe /> */}
                <Projects />
                <Certificates />
            </main>
            <Footer />
        </>
    );
};

export default App;
