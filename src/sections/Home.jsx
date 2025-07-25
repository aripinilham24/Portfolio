const Home = () => {
    return (
        <section id="home" className="row p-3 g-0">
            <div className="col-sm-4 img d-flex justify-content-center align-items-center">
                <img src="img/IMG_3524.JPG" alt="profile picture" />
            </div>
            <div className="col-sm-8 mt-4 mt-sm-0 description d-flex justify-content-center align-items-start flex-column">
                <p className="fw-bold">
                    Hello! I’m Aripin, a full-stack web developer specializing
                    in building websites with React.js and Node.js. With over 2
                    years of experience, and currently i learning about machine
                    learning using python language. I’ve helped businesses
                    across various industries create responsive and reliable
                    digital solutions. I believe technology should simplify, not
                    complicate. If you have an exciting project or idea, let’s
                    connect!
                </p>

                <div className="contact d-flex gap-3">
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/m-aripin-ilham-37a443246/"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/muhamadarifinilham24/"
                    >
                        <i className="fa-brands fa-square-instagram"></i>
                    </a>
                    <a href="mailto:muhamadarifinilham24@gmail.com">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    <a href="https://github.com/aripinilham24" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="http://wa.me/623896794622"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-square-whatsapp"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;