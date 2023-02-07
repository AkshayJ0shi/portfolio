import React from 'react'
import "../index.css"
import download from "../data/images/download.png"
import letter from "../data/letter.pdf"


const Navbar = () => {
  return (
    <header className='header' >
      <div className="container">
          <div className="navbar">
            <div className="logo">
              <a href="/"> Portfolio</a>
            </div>

            <div className="nav-links">
                
                <a href="https://github.com/AkshayJ0shi?tab=repositories" className="nav-link">Github</a>
                <a  href={letter} download className="nav-link resume-btn">Resume
                  <img src={download} alt="" />
                </a>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar






