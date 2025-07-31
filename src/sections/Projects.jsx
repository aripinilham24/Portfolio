import ProjectsBox from "../component/ProjectsBox";
import { dataProjects } from "../dataKomponen";
import { motion } from "motion/react"

const Projects = () => {
    return (
        <section id="projects" className="p-3 mt-20 md:mt-5">
            <div className="title text-center">
                <motion.h1
                initial= {{opacity: 0, scale: 0.8}} 
                whileInView= {{opacity: 1, scale: 1}}
                viewport={{ once: true }}
                transition={{duration: 1}}
                className="text-yellow text-4xl">My Projects</motion.h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-start content-stretch gap-10 mt-5">
                {dataProjects.map((project, index)=>(
                    <ProjectsBox key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;