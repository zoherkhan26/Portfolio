import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { Link, scroller } from "react-scroll";
import { defaultReduceFactor } from "@tsparticles/engine";

const Hero = () => {
  const [init, setInit] = useState(false);

  // Initialize the particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load slim version of particles
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles Loaded:", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: { value: "#000000" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: false, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.8 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          outModes: { default: "bounce" },
        },
        number: { value: 250, density: { enable: true } },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (

    <section
      id="home"
      className="relative flex items-center justify-center h-screen text-center text-white"
    >

      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} className="absolute top-0 left-0 w-full h-full -z-10" />

      <div className="z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          Hi, I'm <span className="text-blue-400">Zoher Khan</span>
        </motion.h1>


        <motion.p
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        >
          A Frontend Developer | React & Tailwind Enthusiast
        </motion.p>


        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition"
            onClick={(e) => { e.preventDefault(); scroller.scrollTo("projects", { duration: 1100, smooth: true }) }}
          >
            View Projects
          </a>


          <a
            href="#contact"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

    </section>
  )
};

export default Hero;
