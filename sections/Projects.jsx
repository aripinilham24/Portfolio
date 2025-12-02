import ProjectsBox from "../component/ProjectsBox";
import { dataProjects } from "../dataKomponen";
import { motion } from "motion/react";

const Projects = () => {
    return (
        <section id="projects" className="section bg-gray-950">
            <div className="title">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    
                >
                    My Projects
                </motion.h1>
                <h2>Turning Ideas into Digital Reality</h2>
                <p>Explore the work I’ve brought to life from concept to launch.
Each project is a story of collaboration, creativity, and problem-solving.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-start content-stretch gap-10 mt-10">
                {dataProjects.map((project, index) => (
                    <ProjectsBox key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
