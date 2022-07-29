import React from 'react';

import styles from '../styles/Navbar.module.css';


const Navbar = ({ children }) => {
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <img src='/logos/white.jpg' className='logo' />
            <ul className="menu">
              <li><a href="">About</a></li>
              <li><a href="">Location</a></li>
              <li><a href="">Contact</a></li>
            </ul>
            <button className='menu-btn'>
              <span className="material-icons-outlined">
                segment
              </span>
            </button>

          </nav>

          <div className="header-body">
            <div className="slider">
              <div className="decoration-left anim">
                DISCOVER

              </div>
              <div className="decoration-right anim"></div>
              <div className="overlay anim"></div>
              <img src="/build.avif" alt="img" className="slider-img anim" />
            </div>
            <div className="text">
              <div>
                <h1>Jump <br /> - Properties</h1>
                <p>A new real estate brokerage with massive experience, bring value to our customers at every step.</p>
              </div>
            </div>
            <ul className="social">
              <li><a href="">FACEBOOK</a></li>
              <li><a href="">WHATSAPP</a></li>
              <li><a href="">EMAIL</a></li>
            </ul>
          </div>

          <nav className="header-bottom">
            <div className="controls">
              <span className="prev">
                Prev
              </span>
              <span className='next'>Next</span>
            </div>
            <ul className="pagination">
              <li className="pag active"><span>ABOUT</span></li>
              <li className="pag"><span>MAP</span></li>
              <li className="pag"><span>CONATCT</span></li>
            </ul>
            <span>
              Dubai,Uae
            </span>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar