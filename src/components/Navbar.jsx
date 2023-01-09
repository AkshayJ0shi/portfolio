import React from 'react'
import "../index.css"
import download from "../data/images/download.png"

const Navbar = () => {
  return (
    <header className='header' >
      <div className="container">
          <div className="navbar">
          <div className="logo">Portfolio</div>

          <div className="nav-links">
              
              <a href="https://github.com/AkshayJ0shi?tab=repositories" className="nav-link">Github</a>
              <a download={""} className="nav-link">Resume
                <img src={download} alt="" />
              </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar






