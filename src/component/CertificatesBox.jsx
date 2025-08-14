import { motion } from "motion/react";

const CertificatesBox = ({ img, title, desc }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            className="card p-5 bg-gray-950/50 rounded text-white shadow-xl relative"
        >
            <img
                src={img}
                className="w-full object-cover rounded shadow-x mb-3"
                alt="thumbnail projetc"
            />
            <div className="card-body">
                <h3 className="text-xl md:text-2xl font-bold mb-3">{title}</h3>
                <p>{desc}</p>
                {/* <a href={link} className="btn btn-primary">
                    Check
                </a> */}
            </div>
        </motion.div>
    );
};

export default CertificatesBox;
