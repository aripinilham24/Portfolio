import ProjectsBox from "../component/ProjectsBox";
import { dataProjects } from "../dataKomponen";

const Projects = () => {
    return (
        <section id="projects" className="p-3">
            <div className="title">
                <h1 className="fw-bold text-center">PROJECTS</h1>
            </div>
            <div className="card-group-projects row row-cols-1 row-cols-md-3 g-4">
                {dataProjects.map((project, index)=>(
                    <ProjectsBox key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;