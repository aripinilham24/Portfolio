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
            className="card p-5 bg-[#CC66DA] rounded text-yellow shadow-xl relative"
        >
            <img
                src={img}
                className=" md:w-100 object-cover rounded shadow-xl"
                alt="thumbnail projetc"
            />
            <div className="card-body">
                <h5 className="text-3xl font-bold">{title}</h5>
                <p>{desc}</p>
                {/* <a href={link} className="btn btn-primary">
                    Check
                </a> */}
            </div>
        </motion.div>
    );
};

export default CertificatesBox;
