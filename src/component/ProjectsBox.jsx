const ProjectsBox = ({img, title, stacks, link}) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img
                    src={img}
                    className="card-img-top"
                    alt="thumbnail projetc"
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <ul>
                        {stacks.map((item, index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <a
                        href={link}
                        className="btn btn-primary"
                    >
                        Check
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsBox;
