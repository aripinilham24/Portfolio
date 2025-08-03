import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <section className="section text-yellow" id="contact">
      <div className="title text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-yellow text-4xl"
        >
          Contact Me
        </motion.h1>
      </div>

      <div className="flex justify-center items-center mt-5 gap-6">
        {/* Kontak Sosial */}
        <div className="flex flex-col w-80 gap-4 text-lg">
          <a href="mailto:muhamadarifinilham24@gmail.com" className="hover:text-purple-300" target="_blank" rel="noopener noreferrer">
            📧 Email
          </a>
          <a href="https://wa.me/6283896794622" className="hover:text-purple-300" target="_blank" rel="noopener noreferrer">
            📱 WhatsApp
          </a>
          <a href="https://linkedin.com/in/nama-kamu" className="hover:text-purple-300" target="_blank" rel="noopener noreferrer">
            💼 LinkedIn
          </a>
          <a href="https://instagram.com/nama_ig" className="hover:text-purple-300" target="_blank" rel="noopener noreferrer">
            📷 Instagram
          </a>
        </div>

        {/* Form Kirim ke Email */}
        <div className="w-full">
          <form
            action="https://formsubmit.co/muhamadarifinilham24@gmail.com" // Ganti dengan email kamu
            method="POST"
            className="flex flex-col relative"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Pesan dari portfolio site!" />
            <label className="mt-5" htmlFor="name">Name</label>
            <input
              className="border-2 border-[#FAEB92] bg-[#CC66DA] rounded p-2"
              type="text"
              name="name"
              id="name"
              placeholder="Input your name..."
              required
            />
            <label className="mt-5" htmlFor="message">Message</label>
            <textarea
              className="h-32 border-2 border-[#FAEB92] bg-[#CC66DA] rounded p-2 resize-none"
              name="message"
              id="message"
              placeholder="Type your message here..."
              required
            ></textarea>
            <button type="submit" className="mt-5 bg-[#FAEB92] text-black font-bold py-2 px-4 rounded hover:bg-yellow-300 active:bg-yellow-300 transition">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
