const projects = [
  {
    title: "Gym Website",
    desc: "Responsive gym website with Tailwind",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww",
    live: "https://training-studio-orpin.vercel.app/",
    github: "https://github.com/salahsharafdin/TRAINING-STUDIO",
  },
  {
    title: "e-Commerce ",
    desc: "e-Commerce  web page",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    live: "https://xamar.vercel.app/",
    github: 'https://github.com/salahsharafdin/E-Commerce',
  },
  
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        My Projects
      </h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
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