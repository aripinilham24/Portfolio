import { motion } from "motion/react";
const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            className="bg-gray-900 text-white flex flex-col items-center gap-5 p-5"
        >
            <div className=" flex gap-5 text-2xl md:text-4xl">
                <a href="https://github.com/aripinilham24"><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/aripin-ilham-37a443246/"><i class="bi bi-linkedin"></i></a>
                <a href="https://www.instagram.com/muhamadarifinilham24"><i class="bi bi-instagram"></i></a>
            </div>
            <p className="md:text-xl">
                &copy; 2025 Ilham Dev. All rights reserved.
            </p>
        </motion.footer>
    );
};

export default Footer;
