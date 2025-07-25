import Header from "./sections/header.jsx";
import Home from "./sections/Home.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Certificates from "./sections/Certificates.jsx";
import Projects from "./sections/Projects.jsx";

const App = () => {
    return (
        <>
            <Header />
            <main className="text-light">
                <Home />
                <AboutMe />
                <Certificates />
                <Projects />
            </main>
        </>
    );
};

export default App;
