import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I'M <span className="text-indigo-400">Salah yuusuf sharafdin</span>
        </h1>
        <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
          I build modern, responsive, and user-friendly websites using React and Tailwind CSS.
          I love turning ideas into real digital products that solve problems.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/MySkillesPage" className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-semibold transition">
            View Skills
          </Link>
          <Link to="/AboutPage" className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-semibold transition">
            About Me
          </Link>

          <Link to="/Projucts" className="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-xl font-semibold transition">
            Projects
          </Link>

        </div>

        <div className="mt-12 flex justify-center gap-4 text-sm text-gray-400">
          <span>React</span>
          <span>Tailwind</span>
          <span>JavaScript</span>
          <span>html</span>
          <span>css</span>
          <span>git and github</span>
        </div>
      </div>
      <div className="text-center mt-6">
      </div>
    </div>
  );
}


export default HomePage