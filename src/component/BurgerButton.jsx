import { motion } from "motion/react";

const BurgerButton = ({ isOpen, onClick, className }) => {
    return (
        <button className={`${className} block lg:hidden`} onClick={onClick}>
            <div className="flex-col-center gap-1">
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6.2 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-[2px] bg-white rounded"
                />
                <motion.span
                    animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? -20 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-[2px] bg-white rounded"
                />
                <motion.span
                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6.2 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-[2px] bg-white rounded"
                />
            </div>
        </button>
    );
};

export default BurgerButton;
