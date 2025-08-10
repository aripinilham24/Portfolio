import CertificatesBox from "../component/CertificatesBox";
import { dataCertif } from "../dataKomponen";
import { motion } from "motion/react";

const Certificates = () => {
    return (
        <section id="certificates" className="section">
            <div className="title">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    My Certificates
                </motion.h1>
                <h2>Proof of Skill, Backed by Dedication</h2>
                <p>
                    A showcase of the certifications and achievements that
                    strengthen my craft. Every milestone reflects my drive to
                    learn, grow, and deliver excellence.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-start content-stretch gap-10 mt-10">
                {dataCertif.map((certif, index) => (
                    <CertificatesBox key={index} {...certif} />
                ))}
            </div>
        </section>
    );
};

export default Certificates;
