import { FaWhatsapp, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-400 py-10">
      <div className="max-w-4xl mx-auto text-center px-4">

        {/* Logo / Name */}
        <h2 className="text-2xl font-bold text-white mb-3">
          salah yuusuf sharafdin
        </h2>

       
        <p className="text-sm mb-6">
          We build modern, user-friendly websites. If you need a website, visit us at <a className='text-[rgb(58_204_105)] ' href="https://www.goobolabs.so/" target="_blank">Goobo labs</a>
        </p>

        <div className="flex justify-center space-x-5 mb-6 text-2xl">

          <a className="text-green-600" href="https://wa.me/252619708582" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>


          <a href="https://github.com/orgs/goobolabs/projects?query=is%3Aopen" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

        </div>

     

        {/* Bottom */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} salah yuusuf sharafdin. All rights reserved.
          <p>Designed and developed by Sharafdin Yusuf.</p>
        </p>

      </div>
    </footer>
  );
}