import { ButtonLink } from "../common/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import DotPattern from "@/components/common/Background";

const Hero = () => {
  const heroRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      "h1",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.4,
        ease: "power2.inOut",
      },
    );
  });
  return (
    <>
      <section
        id="home"
        className="hero px-10 h-screen sticky top-0 border z-0"
        ref={heroRef}
      >
        <DotPattern />
        <div className="text-center mt-20 relative pointer-events-none">
          <h1
            className="mt-3 lg:p-3 text-[1.7rem] md:text-6xl lg:text-7xl font-bold
    bg-linear-to-r from-blue-800 to-blue-300 bg-clip-text text-transparent"
          >
            Bringing ideas to life
          </h1>

          <h1
            className="mt-3 lg:p-3 text-[1.7rem] md:text-6xl lg:text-7xl font-bold
    bg-linear-to-r from-blue-800 to-blue-300 bg-clip-text text-transparent"
          >
            through clean and
          </h1>

          <h1
            className="mt-3 lg:p-3 text-[1.7rem] md:text-6xl lg:text-7xl font-bold
    bg-linear-to-r from-blue-800 to-blue-300 bg-clip-text text-transparent"
          >
            scalable code.
          </h1>
        </div>

        <div className="flex justify-center">
          <ButtonLink
            text="See My Project"
            href="#projects"
            className="mt-10 md:mt-15 p-3"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
