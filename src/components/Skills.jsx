import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaHtml5, FaCss3Alt, FaTypo3 } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiTailwindcss, SiExpress, SiJavascript, SiNextdotjs, SiAxios, SiTypescript, SiReact } from "react-icons/si";


const skills = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", percent: 100, icon: <FaHtml5 /> },
      { name: "CSS", percent: 100, icon: <FaCss3Alt /> },
      { name: "JS", percent: 100, icon: <SiJavascript /> },
      { name: "React", percent: 100, icon: <FaReact /> },
      { name: "Tailwind CSS", percent: 100, icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Next.js", percent: 0, icon: <SiNextdotjs /> },
      { name: "Node.js", percent: 0, icon: <FaNodeJs /> },
      { name: "Typescript", percent: 0, icon: <SiTypescript /> },
      { name: "Vercel", percent: 100, icon: "▲" },
      { name: "Golang", percent: 30, icon: <FaGolang /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", percent: 100, icon: <FaGitAlt /> },
      { name: "Figma", percent: 84, icon: <FaFigma /> },
      { name: "Responsive design", percent: 100, icon: "✨" },
      { name: "UI animation", percent: 50, icon: "⚡" },
      { name: "Axios", percent: 40, icon: <SiAxios /> }
    ],
  },
];

const Skills = () => {
  const [progress, setProgress] = useState(
    skills.map(section => section.items.map(() => 0))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(
        skills.map(section =>
          section.items.map(skill => skill.percent)
        )
      );
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0f0f1a] min-h-screen text-white px-4 py-16">

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
          My Skills
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">        
        {skills.map((section, i) => (
          <div
            key={i}
            className="bg-gradient-to-b from-[#1a1a2e] to-[#111122] p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-bold mb-6">{section.title}</h2>

            {section.items.map((skill, index) => (
              <div key={index} className="mb-5">
                
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {progress[i][index]}%
                  </span>
                </div>

                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-1000 ease-out"
                    style={{ width: `${progress[i][index]}%` }}
                  ></div>
                </div>

              </div>
            ))}
          </div>
        ))}
      </div>

     <p className="text-center mt-12 text-lg md:text-2xl font-semibold italic bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
  I will learn the remaining languages <span className="text-white">INSHA ALLAH</span> <span className="text-yellow-300">💪</span>
</p>

    </div>
  );
};

export default Skills;