import React, { useState } from 'react';

import styles from '../styles/Navbar.module.css';


const Navbar = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <img src='/logos/white.jpg' className='logo' />
            <ul className={` menu ${active ? 'menu-open' : ''}`}>
              <li><a href="">About</a></li>
              <li><a href="">Location</a></li>
              <li><a href="">Contact</a></li>
            </ul>
            <button className='menu-btn' onClick={() => setActive(!active)}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAIpJREFUSEvtlcERgCAMBI9O7ERLsRTtTCvTycOHCsJcMoZH8r8sLOeY4DTJiYsA/2Y+VF+qFwCHoff1uauk2hIqzBenO7Ch5fyqaPWX4knR9L211bkDaJre3OquwKKanU2jmoVmc/E5MTrl/cZKUNXq0m438AxgqNxYfrO3iXIx5aIyoZrSxoTcVJ9x4Qwfdg2vvgAAAABJRU5ErkJggg==" />
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