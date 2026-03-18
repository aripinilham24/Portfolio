import { motion } from "motion/react";

interface props {
  isOpen: boolean;
  onClick: () => void;
  className: string;
}

const BurgerButton = ({ isOpen, onClick, className }: props) => {
  return (
    <button className={`${className} block lg:hidden`} onClick={onClick}>
      <div className="flex-col-center gap-1">
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6.2 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-0.5 bg-white rounded"
        />
        <motion.span
          animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? -20 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-0.5 bg-white rounded"
        />
        <motion.span
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6.2 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-0.5 bg-white rounded"
        />
      </div>
    </button>
  );
};

export default BurgerButton;
