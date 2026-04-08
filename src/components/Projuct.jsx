import barber from '../assets/barber.png';
import Tukaan from '../assets/Tukaan.png';
import gym from '../assets/GYM.png';

const projects = [
  {
    title: "Gym Website",
    desc: "Responsive gym website",
    image: gym,
    live: "https://training-studio-orpin.vercel.app/",
    github: "https://github.com/salahsharafdin/TRAINING-STUDIO",
  },
  {
    title: "e-Commerce ",
    desc: "e-Commerce  web page",
    image: Tukaan,
    live: "https://xamar.vercel.app/",
    github: 'https://github.com/salahsharafdin/E-Commerce',
  },

   {
    title: "barber shop",
    desc: "barber shop web page",
    image: barber,
    live: "https://barasho.vercel.app/",
    github: 'https://github.com/salahsharafdin/barber',
  },
  
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        My Projects
      </h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img src={project.image} alt="" className="w-full h-40 object-cover" />

            <div className="p-4">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-gray-400 text-sm mt-2">
                {project.desc}
              </p>

              <div className="flex gap-3 mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 px-4 py-1 rounded hover:bg-gray-700"
                >
                  live web
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 px-4 py-1 rounded hover:bg-gray-700"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}