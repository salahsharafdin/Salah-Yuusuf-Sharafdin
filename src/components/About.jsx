import Hello from "../assets/hello.png"

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-4xl bg-gray-800 bg-opacity-70 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        
        <div className="flex-shrink-0">
          <img
            src={Hello}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm salah Yuusuf sharafdin</h1>
          <p className="text-lg mb-4">
            I am a passionate web developer learning React, Tailwind CSS, Next.js, and TypeScript. 
            I love building responsive and beautiful websites that provide great user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;