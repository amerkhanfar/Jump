import React from 'react'

const About = ({ children }) => {
    return (
        <section class="home bd-grid" id="home">
            <div class="home__data">
                <h1 class="home__title">
                    <span class="home__title-color">
                        <br />
                        Jump Properties</span
                    ><br />
                    Real
                </h1>

                <a href="assets/pdf/Amer-cv1.pdf" class="button" target="_blank"
                >Download CV</a
                >
            </div>

            <div class="home__social">
                <a
                    href="https://www.linkedin.com/in/amerkhanfar/"
                    class="home__social-icon"
                ><i class="bx bxl-linkedin"></i
                ></a>
                <a href="https://github.com/amerkhanfar" class="home__social-icon"
                ><i class="bx bxl-github"></i
                ></a>
            </div>

            <div class="home__img">

                {children}

            </div >
        </section >
    )
}

export default About