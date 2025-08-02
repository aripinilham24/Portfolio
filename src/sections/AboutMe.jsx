import { motion } from "motion/react";
const AboutMe = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: {
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
        },
    };
    return (
        <section id="about" className="p-3 mt-20 md:mt-5 text-yellow relative">
            <div className="title text-center mb-3">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-4xl"
                >
                    About Me
                </motion.h1>
            </div>
            <div className="flex flex-col gap-5">
                <motion.div {...fadeInUp}>
                    <p>
                        Hi there! I’m M. Aripin Ilham, a passionate freelance
                        full-stack web developer dedicated to helping businesses
                        and individuals build fast, secure, and user-friendly
                        websites.
                    </p>
                    <p>
                        I work with modern technologies like React, Node.js,
                        CodeIgniter, Tailwind CSS, and have experience
                        integrating third-party services such as Midtrans,
                        WhatsApp API, and more. Whether you need a landing page,
                        a full-featured e-commerce site, or a custom admin
                        dashboard, I can help you bring your ideas to
                        life—efficiently and on time.
                    </p>
                </motion.div>
                <motion.div {...fadeInUp} className="offer">
                    <h2 className="font-bold text-xl">Here’s what I offer:</h2>
                    <ul className="list-disc ms-5">
                        <li>
                            Clean, maintainable code and responsive design for
                            all devices
                        </li>
                        <li>
                            API integration, user authentication, and role-based
                            access systems
                        </li>
                        <li>
                            Fast communication and transparent project progress
                        </li>
                        <li>
                            Flexible collaboration—whether you have a full plan
                            or just an idea
                        </li>
                    </ul>
                </motion.div>
                <motion.div {...fadeInUp}>
                    <ul>
                        <li>💬 Quick to respond and easy to work with</li>
                        <li>
                            🚀 Focused on building solutions that are practical
                            and scalable
                        </li>
                        <li>✅ Open to long-term or one-time projects</li>
                    </ul>
                </motion.div>
                <motion.div {...fadeInUp}>
                    <p>
                        If you're looking for a developer who not only
                        understands code but also understands your goals and
                        your audience, I’d love to connect and discuss how I can
                        help you.
                    </p>
                </motion.div>
                <motion.div {...fadeInUp} className="text-center font-bold text-3xl">
                    Let’s build something great together!
                </motion.div>
            </div>
            <motion.button className="button absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] md:bottom-25 text-yellow">
                <a href="#contact">Contact Me</a>
            </motion.button>
        </section>
    );
};

export default AboutMe;
