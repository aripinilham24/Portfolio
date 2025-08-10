import { skillIcon } from "../dataKomponen";
import {motion} from "motion/react";
const About = () => {
    return (
        <section id="about" className="section">
            <div className="title">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    
                >
                    About Me
                </motion.h1>
                <h2>Crafting Code, Creating Impact</h2>
            </div>
            <p className="md:text-xl">
                Hi there! I’m Ilham, a passionate freelance full-stack
                web developer dedicated to helping businesses and individuals
                build fast, secure, and user-friendly websites.I work with
                modern technologies like React, Node.js, CodeIgniter, Tailwind
                CSS, and have experience integrating third-party services such
                as Midtrans, WhatsApp API, and more. Whether you need a landing
                page, a full-featured e-commerce site, or a custom admin
                dashboard, I can help you bring your ideas to life—efficiently
                and on time.
            </p>
            <div className="skills mt-10 flex flex-wrap justify-center gap-10 text-blue-300">
                {skillIcon.map((skill, index)=>(
                    <div key={index} className="flex flex-col justify-center items-center">
                        <img className="h-10 md:h-13" src={skill.link} alt={skill.name} />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default About;
