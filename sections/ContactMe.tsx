import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";

const ContactMe = () => {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmit(true);

    const formData = new FormData(e.target);
    formData.append("_captcha", "false");
    formData.append("_subject", "Pesan dari portfolio site!");

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    try {
      const res = await fetch(
        "https://formsubmit.co/muhamadarifinilham24@gmail.com",
        {
          method: "POST",
          body: formData,
        },
      );

      if (res.ok) {
        Toast.fire({
          icon: "success",
          title: "Message sent successfully!",
        });
        e.target.reset();
      } else {
        Toast.fire({
          icon: "success",
          title: "Failed to send message.",
        });
      }
    } catch (error) {
      Toast.fire({
        icon: "success",
        title: "Something went wrong.",
      });
    } finally {
      setSubmit(false);
    }
  };
  return (
    <section className="section bg-gray-950 lg:grid grid-cols-2" id="contact">
      <div className="title flex flex-col items-center self-start lg:items-start">
        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          Contact Me
        </motion.h1>

        <h2 className="text-center text-3xl font-bold mb-3">
          Ready to launch your vision online?
        </h2>
        <p className="lg:pe-10">
          Let’s craft a stunning, high-performance website that turns your ideas
          into reality. Reach out and let’s make it happen!
        </p>
        <div className="mt-10 flex justify-center gap-5 text-2xl md:text-4xl">
          <a
            className="hover:text-blue-300"
            href="https://github.com/aripinilham24"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            className="hover:text-blue-300"
            href="https://www.linkedin.com/in/aripin-ilham-37a443246/"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            className="hover:text-blue-300"
            href="https://www.instagram.com/muhamadarifinilham24"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col relative text-blue-300"
        >
          <label className="mt-5" htmlFor="name">
            Email
          </label>
          <input
            className="border border-blue-300 bg-gray-900 rounded p-2"
            type="email"
            name="email"
            id="email"
            placeholder="Input your email..."
            required
          />

          <label className="mt-5" htmlFor="name">
            Name
          </label>
          <input
            className="border border-blue-300 bg-gray-900 rounded p-2"
            type="text"
            name="name"
            id="name"
            placeholder="Input your name..."
            required
          />

          <label className="mt-5" htmlFor="message">
            Message
          </label>
          <textarea
            className="h-32 border border-blue-300 bg-gray-900 rounded p-2 resize-none"
            name="message"
            id="message"
            placeholder="Type your message here..."
            required
          ></textarea>

          <button
            type="submit"
            className="mt-5 p-2 rounded relative overflow-hidden group border border-gray-100 text-gray-100 transition-all duration-300"
            disabled={submit}
          >
            <span className="relative z-10">
              {submit ? "Process..." : "Send Email"}
            </span>
            <span className="absolute -left-1 top-0 h-full w-0 bg-linear-to-r from-blue-800 to-blue-300 transition-all duration-600 group-hover:w-190 -skew-x-6" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
