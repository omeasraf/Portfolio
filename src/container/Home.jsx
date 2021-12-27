import React from 'react'

import Navbar from '../components/Navbar'
import Overview from '../components/Overview'
import { FloatingSocial, FloatingEmail } from '../components/FloatingSocial'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <div className='p-2 sm:p-10'>
            <FloatingSocial />
            <FloatingEmail />

            <Navbar />
            <div className='px-4 max-w-4xl mx-auto md:p-10'>
                <Overview />
                <section id='about' className='md-[120vh]'>
                    <About />
                </section>
                <section id='projects'>
                    <Projects />
                </section>
                <section id='contact'>
                    <Contact />
                </section>
            </div>
        </div>
    )
}

export default Home
