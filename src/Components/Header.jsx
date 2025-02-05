import React from 'react'
import { Link } from 'react-scroll'
import '../index.css'

function Header() {
  return (
    <div className="fixed top-3 left-1/2 transform -translate-x-1/2 flex justify-center w-max z-50">
      <nav className="flex gap-2 p-0.5 md:p-2 border border-white/15 rounded-full backdrop-blur-md bg-white/10">
        <Link to="home" spy={true} smooth duration={600} className="nav-items">
          Home
        </Link>
        <Link to="about" smooth duration={600} className="nav-items">
          About
        </Link>
        {/* <Link to="experience" smooth duration={600} className="nav-items">
        Experience
      </Link> */}
        <Link to="projects" smooth duration={600} className="nav-items">
          Projects
        </Link>
        <Link
          to="contact"
          smooth duration={600}
          className="nav-items "
        >
          Contact
        </Link>
      </nav>
    </div>
  );

}

export default Header