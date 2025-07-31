import { useState } from "react";
import BurgerButton from "./BurgerButton";
import { motion, AnimatePresence } from "motion/react";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="bg-[#9929EA] shadow-sm">
                <div className="flex justify-between lg:justify-start p-4">
                    <a
                        href="#"
                        className="nav-link text-xl font-bold hover:scale-105 transition-all duration-200"
                    >
                        Ilham Dev
                    </a>
                    <div className="hidden lg:flex gap-5 w-6xl justify-center">
                        <a className="nav-link text-yellow relative group" href="#">
                            <span>Home</span>
                            <span className="underline" />
                        </a>
                        <a className="nav-link text-yellow relative group" href="#">
                            <span>About</span>
                            <span className="underline" />
                        </a>
                        <a className="nav-link text-yellow relative group" href="#">
                            <span>Projects</span>
                            <span className="underline" />
                        </a>
                        <a className="nav-link text-yellow relative group" href="#">
                            <span>Contact Me</span>
                            <span className="underline" />
                        </a>
                    </div>
                    <BurgerButton
                        isOpen={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                </div>
            </nav>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#9929EA] w-full lg:hidden pb-4 flex flex-col gap-3 fixed"
                    >
                        <a className="list-link text-yellow" href="#">
                            Home
                        </a>
                        <a className="list-link text-yellow" href="#">
                            About
                        </a>
                        <a className="list-link text-yellow" href="#">
                            Project
                        </a>
                        <a className="list-link text-yellow" href="#">
                            Contact Me
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
