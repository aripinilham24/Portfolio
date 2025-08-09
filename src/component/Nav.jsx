import { navLink } from "../dataKomponen";
import BurgerButton from "./BurgerButton";
import Button, { ButtonNav } from "./Button";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { slideFromTop} from "../dataKomponen/animation";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                <BurgerButton
                    className="burgerBtn"
                    onClick={() => setIsOpen(!isOpen)}
                    isOpen={isOpen}
                />
                <div className="hidden md:flex gap-5 ms-5">
                    {navLink.map((nav, i) => (
                        <a key={i} href={nav.link} className="relative group">
                            <span>{nav.text}</span>
                            <span className="underline" />
                        </a>
                    ))}
                </div>

                <a href="#home" className="brand">
                    <strong>Ilham</strong>Dev
                </a>
                <ButtonNav className="buttonTC" />
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        {...slideFromTop}
                        className={`${
                            isOpen ? "flex" : "hidden"
                        } text-white flex-col gap-3 ms-5 absolute -bottom-45 border w-xs px-5 bg-gray-900/20 backdrop-blur-lg rounded-lg ms-10`}
                    >
                        {navLink.map((nav, i) => (
                            <a key={i} href={nav.link} className="transform hover:bg-gray-950 active:bg-gray-800 rounded p-1">
                                {nav.text}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
export default Nav;
