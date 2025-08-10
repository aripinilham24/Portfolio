import { ButtonLink } from "../component/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const Hero = ()=>{
    useGSAP(()=>{
        gsap.fromTo(
            "h1",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1.4,
                ease: "power2.inOut",
            }
        );
    })
    return (
        <section id="home" className="hero h-screen sticky top-0 border z-0">
            <div className="text-white text-center mt-20">
                <h1 className="text-4xl mt-3 md:text-7xl font-bold">
                    Bringing ideas to life{" "}
                </h1>
                <h1 className="text-4xl mt-3 md:text-7xl font-bold">
                    through clean and{" "}
                </h1>
                <h1 className="text-4xl mt-3 md:text-7xl font-bold">
                    scalable code.
                </h1>
            </div>
            <div className="flex justify-center">
                <ButtonLink text="See My Project" href="#projects"
                className="mt-10 md:mt-15 p-3" />
            </div>
        </section>
    )
}

export default Hero;