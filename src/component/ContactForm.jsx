import { useState } from "react";

const ContactForm = () => {
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
    <form onSubmit={handleSubmit} className="flex flex-col relative text-blue-300">
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
        <span className="absolute -left-1 top-0 h-full w-0 bg-gradient-to-r from-blue-800 to-blue-300 transition-all duration-600 group-hover:w-xl -skew-x-6" />
      </button>

      {status && <p className="mt-3 text-sm">{status}</p>}
    </form>
  );
};

export default ContactForm;
