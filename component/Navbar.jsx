import { useState } from "react";
import { navLink } from "../dataKomponen";
import BurgerButton from "./BurgerButton";
import { motion, AnimatePresence } from "motion/react";
import { ButtonNav } from "./Button";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="rounded-full border border-gray-100 bg-gray-200/20 backdrop-blur-sm mt-5 mx-20">
                <div className="flex justify-around lg:justify-around items-center p-4">
                    <a
                        href="#home"
                        className="nav-link text-xl font-bold hover:scale-105 transition-all duration-200"
                    >
                        Ilham Dev
                    </a>
                    <div className="hidden lg:flex gap-5 justify-center">
                        {navLink.map((nav, index) => (
                            <a
                                key={index}
                                className="nav-link text-yellow relative group"
                                href={nav.link}
                            >
                                <span>{nav.text}</span>
                                <span className="underline" />
                            </a>
                        ))}
                    </div>
                    <ButtonNav />
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
                        className="bg-gray-900/30 backdrop-blur-lg border border-gray-100 rounded mt-3 w-50 lg:hidden pb-4 flex flex-col gap-3 fixed left-35"
                    >
                        {navLink.map((nav, index) => (
                            <a
                                key={index}
                                
                                className="list-link text-yellow relative group"
                                href={nav.link}
                            >
                                <span>{nav.text}</span>
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
