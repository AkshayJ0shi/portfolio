import React from 'react'
import "../index.css"

const Navbar = () => {
  return (
    <header className='header'>
      <div className="container">
          <div className="navbar">
          <div className="logo">Portfolio</div>

          <div className="nav-links">
              <a href="#projects" className="nav-link">Projects</a>
              <a href="https://github.com/AkshayJ0shi?tab=repositories" className="nav-link">Github</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar