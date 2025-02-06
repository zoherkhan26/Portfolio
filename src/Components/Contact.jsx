import React, { useState } from "react";
import { motion } from "framer-motion";
import { alterHsl } from "@tsparticles/engine";

const Contact = () => {
  const [formData, setformData] = useState(
    {
      name: "",
      email: "",
      message: "",
    }
  )
  const [errors, seterrors] = useState(
    {
      name: "",
      email: "",
      message: ""
    }
  )

  const [isSubmitting, setisSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const validate = () => {
    let isValid = true;
    const newErrors = {}

    if (!formData.name) {
      newErrors.name = "Name Required";
      isValid = false
    }

    if (!formData.email) {
      newErrors.email = "Email Required";
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid.";
      isValid = false;
    }

    if (!formData.message) {
      newErrors.message = "Message is required.";
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      isValid = false;
    }
    seterrors(newErrors)

    return isValid

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setisSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mgvoygbb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        alert("Message sent successfully! ")
        setformData({ name: "", email: "", message: "" })
      } else {
        alert("There was an error sending your message. Please try again.")
      }
    } catch (error) {
      alert("Error:", error.message)
    } finally {
      setisSubmitting(false)
    }
  }




  return (
    <section id="contact" className=" min-h-screen flex items-center justify-center px-4 ">

      <div className="flex flex-col items-center justify-center  bg-gray-900 text-white p-6 w-full max-w-lg sm:w-3/4 lg:w-1/2 rounded-lg shadow-lg" >
        <motion.h2
          className="text-3xl sm:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}


        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-gray-300 mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        // viewport={{ once: false }} 
        >
          Feel free to reach out for collaborations or just a friendly chat!
        </motion.p>

        <motion.form
          className="w-full max-w-lg flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          // action="https://formspree.io/f/mgvoygbb"
          // method="POST"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

          <textarea
            placeholder="Your Message"
            name="message"
            rows="5"
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

          <motion.button
            type="submit"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-semibold w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >

            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
