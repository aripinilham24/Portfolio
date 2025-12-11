import { motion } from "framer-motion";
import { useState } from "react";
const ContactMe = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // cegah refresh

    const formData = new FormData(e.target);
    formData.append("_captcha", "false");
    formData.append("_subject", "Pesan dari portfolio site!");

    try {
      const res = await fetch("https://formsubmit.co/muhamadarifinilham24@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      setStatus("⚠️ Something went wrong.");
    }
  };
  return (
    <section className="section bg-gray-950 lg:grid grid-cols-2" id="contact">
      <div className="title flex flex-col items-center self-start lg:items-start">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-5"
        >
          Contact Me
        </motion.h1>

        <h2 className="text-center text-3xl font-bold mb-3">Ready to launch your vision online?</h2>
        <p>Let’s craft a stunning, high-performance website that turns your ideas into reality. Reach out and let’s make it happen!</p>
      </div>
        <div className="w-full">
          <form onSubmit={handleSubmit} className="flex flex-col relative text-blue-300">
      <label className="mt-5" htmlFor="name">Email</label>
      <input
        className="border border-blue-300 bg-gray-900 rounded p-2"
        type="email"
        name="email"
        id="email"
        placeholder="Input your email..."
        required
      />

      <label className="mt-5" htmlFor="name">Name</label>
      <input
        className="border border-blue-300 bg-gray-900 rounded p-2"
        type="text"
        name="name"
        id="name"
        placeholder="Input your name..."
        required
      />

      <label className="mt-5" htmlFor="message">Message</label>
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
      >
        <span className="relative z-10">Send Email</span>
        <span className="absolute -left-1 top-0 h-full w-0 bg-gradient-to-r from-blue-800 to-blue-300 transition-all duration-600 group-hover:w-180 group-active:w-xl -skew-x-6" />
      </button>

      {status && <p className="mt-3 text-sm">{status}</p>}
    </form>
        </div>
    </section>
  );
};

export default ContactMe;
