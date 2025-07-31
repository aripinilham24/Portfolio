import ProjectsBox from "../component/ProjectsBox";
import { dataProjects } from "../dataKomponen";

const Projects = () => {
    return (
        <section id="projects" className="p-3">
            <div className="title text-center">
                <h1 className="text-yellow text-4xl">My Projects</h1>
            </div>
            <div className="flex flex-col justify-start items-start md:flex-row flex-auto gap-4 mt-5">
                {dataProjects.map((project, index)=>(
                    <ProjectsBox key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;