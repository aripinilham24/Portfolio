import Header from "./sections/header.jsx";
import Home from "./sections/Home.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Certificates from "./sections/Certificates.jsx";
import Projects from "./sections/Projects.jsx";

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
        </>
    );
};

export default App;
