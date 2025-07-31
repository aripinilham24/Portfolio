const ProjectsBox = ({ img, title, desc }) => {
    return (
        <div className="card p-5 bg-[#CC66DA] rounded text-yellow shadow-xl">
            <img src={img} className=" md:h-50 object-cover rounded shadow-xl" alt="thumbnail projetc" />
            <div className="card-body">
                <h5 className="text-3xl font-bold">{title}</h5>
                <p>
                    {desc}
                </p>
                {/* <a href={link} className="btn btn-primary">
                    Check
                </a> */}
            </div>
        </div>
    );
};

export default ProjectsBox;
