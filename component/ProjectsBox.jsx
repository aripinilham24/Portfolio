import { motion } from "motion/react";

const ProjectsBox = ({ img, title, desc, link }) => {
    return (
        <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            className="card p-5 bg-gray-900/50 rounded text-white shadow-xl relative hover:shadow-xl hover:shadow-blue-300 transition-shadow"
            href={link}
            target="blank"
        >
            <img
                src={img}
                className="w-full object-cover rounded shadow-xl mb-3"
                alt="thumbnail projetc"
            />
            <div className="card-body">
                <h5 className="text-xl md:text-2xl font-bold mb-3">{title}</h5>
                <p>{desc}</p>
                {/* <a href={link} className="btn btn-primary">
                    Check
                </a> */}
            </div>
        </motion.a>
    );
};

export default ProjectsBox;
