import { navLink } from "../dataKomponen";
import BurgerButton from "./BurgerButton";
import Button, { ButtonNav } from "./Button";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { slideFromTop } from "../dataKomponen/animation";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <nav className="navbar">
                <BurgerButton
                    className="burgerBtn"
                    onClick={() => setIsOpen(!isOpen)}
                    isOpen={isOpen}
                />
                <div className="hidden lg:flex gap-5 ms-5">
                    {navLink.map((nav, i) => (
                        <a
                            key={i}
                            href={nav.link}
                            onClick={(e) => {
                                if (nav.text.toLowerCase() === "#home") {
                                    e.preventDefault();
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }
                            }}
                            className="relative group"
                        >
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
                            <a
                                key={i}
                                href={nav.link}
                                className="transform hover:bg-gradient-to-r from-blue-800 to-blue-300 active:bg-gradient-to-r from-blue-800 to-blue-300 rounded p-1"
                            >
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
