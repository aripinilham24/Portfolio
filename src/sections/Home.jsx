import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../component/Button";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
    const btnRef = useRef();
    const imgRef = useRef();
    useGSAP(() => {
        ScrollTrigger.matchMedia({
            "(max-width: 767px)": function () {
                gsap.fromTo(
                    imgRef.current,
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1,
                        ease: "power2.inOut",
                    }
                );
            },
            "(min-width:768px)": () => {
                gsap.fromTo(
                    imgRef.current,
                    { x: 300, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1.4,
                        ease: "power2.inOut",
                    }
                );
            },
        });
        gsap.fromTo(
            ".description h1",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1.4,
                ease: "power2.inOut",
            }
        );

        gsap.fromTo(
            btnRef.current,
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 2,
                ease: "power2.inOut",
            }
        );
    });
    return (
        <section
            id="home"
            className="section w-full h-screen flex flex-col-reverse
 justify-evenly items-center gap-4 md:flex-row md:gap-0 relative"
        >
            <div className="w-full mx-auto p-4 description text-yellow">
                <h1 className="text-3xl md:text-5xl font-bold">
                    <span className="bg-[#CC66DA] rounded">Ilham Dev</span>:
                    Code. Build. Deliver
                </h1>
                <h1 className="text-3xl md:text-5xl font-bold">Bringing ideas to life </h1>
                <h1 className="text-3xl md:text-5xl font-bold">through clean and </h1>
                <h1 className="text-3xl md:text-5xl font-bold">scalable code.</h1>

                {/* <div className="contact d-flex gap-3">
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/m-aripin-ilham-37a443246/"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/muhamadarifinilham24/"
                    >
                        <i className="fa-brands fa-square-instagram"></i>
                    </a>
                    <a href="mailto:muhamadarifinilham24@gmail.com">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    <a href="https://github.com/aripinilham24" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="http://wa.me/623896794622"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-square-whatsapp"></i>
                    </a>
                </div> */}

                <Button
                    className="button absolute bottom-[-20px] md:bottom-25"
                    href="#projects"
                    text="See my Projects"
                    ref={btnRef}
                />
            </div>
            <div className="w-full center">
                <img
                    ref={imgRef}
                    src="img/profile/profilepic1.jpg"
                    alt="profile picture"
                    className="object-cover h-70 w-60 blok mx-auto rounded"
                />
            </div>
        </section>
    );
};

export default Home;
