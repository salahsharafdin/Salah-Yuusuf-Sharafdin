import React from "react";
import { FaWhatsapp, FaGithub, FaArrowCircleDown,} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-16">
      <div className="bg-gray-800 text-white rounded-3xl shadow-2xl w-full max-w-3xl p-10 md:p-16 text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Get in Touch</h1>
        <p className="text-gray-400 mb-10">
          if you are satisfied with her work, contact me here!
        </p>
        <div className="flex justify-center mb-3 text-2xl">
          <FaArrowCircleDown />
        </div>

        <div className="flex justify-center mb-6">
          <a
            href="https://wa.me/252617621631"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        <div className="flex justify-center gap-6 text-3xl text-gray-300 hover:text-white transition">
          <a href="https://github.com/salahsharafdin" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;