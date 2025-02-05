import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className=" min-h-screen flex items-center justify-center ">

      <div className="flex flex-col items-center justify-center  bg-gray-900 text-white p-6 w-1/2" >
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}

        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        >
          Feel free to reach out for collaborations or just a friendly chat!
        </motion.p>

        <motion.form
          className="w-full max-w-lg flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          action="https://formspree.io/f/mgvoygbb"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            rows="5"
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <motion.button
            type="submit"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
