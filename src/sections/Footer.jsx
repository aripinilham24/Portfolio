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
            className="bg-[#9929EA] mt-20"
        >
            <p className="text-yellow text-xl font-bold text-center">
                &copy; 2025 Ilham Dev. All rights reserved.
            </p>
        </motion.footer>
    );
};

export default Footer;
