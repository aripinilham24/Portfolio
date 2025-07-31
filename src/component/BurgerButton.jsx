import { motion } from "motion/react";

const BurgerButton = ({ isOpen, onClick }) => {
    return (
        <button className="block lg:hidden" onClick={onClick}>
            <div className="flex-col-center gap-1">
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-7 h-1 bg-[#FAEB92]"
                />
                <motion.span
                    animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? -20 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-7 h-1 bg-[#FAEB92]"
                />
                <motion.span
                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-7 h-1 bg-[#FAEB92]"
                />
            </div>
        </button>
    );
};

export default BurgerButton;
