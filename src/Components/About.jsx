import React from "react";

function About() {
  return (
    <section id="about" className="flex flex-col items-center text-center px-6 md:px-16 py-20 backdrop-blur-sm rounded-md h-screen justify-center">
      <div className=" rounded-md ">
        <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
        <p className="mt-4 text-gray-300 max-w-2xl">
          Hi! I'm <span className="text-blue-400 font-semibold">Zoher Khan</span>, a passionate Frontend Developer specializing in
          **React.js, Tailwind CSS, and modern UI/UX**. I love crafting smooth, interactive, and
          user-friendly experiences on the web.
        </p>
        <p className="mt-2 text-gray-400 max-w-2xl">
          My goal is to build high-performance applications with clean and scalable code. In my free time,
          I enjoy trekking and playing cricket.
        </p>

        {/* Skills */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-400">Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <span className="px-3 py-1 bg-gray-800 text-white rounded-md">React.js</span>
            <span className="px-3 py-1 bg-gray-800 text-white rounded-md">Tailwind CSS</span>
            <span className="px-3 py-1 bg-gray-800 text-white rounded-md">JavaScript</span>
            <span className="px-3 py-1 bg-gray-800 text-white rounded-md">HTML & CSS</span>
            <span className="px-3 py-1 bg-gray-800 text-white rounded-md">Framer Motion</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
