const AboutMe = () => {
    return (
        <section id="about" className="p-3">
            <div className="title">
                <h1 className="fw-bold text-center">ABOUT ME</h1>
            </div>
            <div className="summary">
                <h5>PROFESSIONAL SUMMARY</h5>
                <p>
                    A detail-oriented Full-Stack Web Developer with 2+ years of
                    experience in creating user-friendly, scalable web
                    applications. Adept in JavaScript, React, PHP, and AWS with
                    a proven track record of delivering high-quality solutions
                    on time.
                </p>
            </div>

            <div className="skills">
                <h5>SKILL</h5>
                <ul>
                    <li>
                        <strong>Programming Languange:</strong>
                        <span>JavaScript, PHP, Python, Java, C++</span>
                    </li>
                    <li>
                        <strong>Frameworks:</strong>
                        <span>React, Vue, Node.js, Laravel</span>
                    </li>
                    <li>
                        <strong>Tools:</strong>
                        <span>GIT, Docker, Visual Studio Code</span>
                    </li>
                    <li>
                        <strong>Soft Skill:</strong>
                        <span>
                            Communicatioan, Problem-solving, Team Collaboration
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default AboutMe;
