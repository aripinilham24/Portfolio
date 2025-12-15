import { navLink } from "../dataKomponen";
import BurgerButton from "./BurgerButton";
import { ButtonNav } from "./Button";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { slideFromTop } from "../dataKomponen/animation";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
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
                if (nav.text.toLowerCase() === "home") {
                  e.preventDefault();
                scrollTop();
                }
              }}
              className="relative group"
            >
              <span>{nav.text}</span>
              <span className="underline" />
            </a>
          ))}
        </div>

        <a href="#home" className="brand hover:bg-gradient-to-r from-blue-800 to-blue-300 bg-clip-text hover:text-transparent hover:text-2xl">
          <strong>Ilham</strong>Dev
        </a>
        <ButtonNav className="buttonTC" />
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
          <div onClick={()=>setIsOpen(!isOpen)} className="w-full h-screen inset-0 z-20 fixed"></div>
          <motion.div
            {...slideFromTop}
            className={`${
              isOpen ? "flex" : "hidden"
            } z-30 text-white flex-col gap-3 ms-5 absolute -bottom-45 border w-[17rem] px-5 bg-gray-900/20 backdrop-blur-lg rounded-lg ms-10`}
          >

            {navLink.map((nav, i) => (
            <a
              key={i}
              href={nav.link}
              onClick={(e) => {
                if (nav.text.toLowerCase() === "home") {
                  e.preventDefault();
                scrollTop();
                }
              }}
              className="relative group p-1"
            >
              {nav.text}
            </a>
          ))}
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default Nav;
