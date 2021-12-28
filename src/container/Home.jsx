import React from 'react'

import Navbar from '../components/Navbar'
import Overview from '../components/Overview'
import { FloatingSocial, FloatingEmail } from '../components/FloatingSocial'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='p-2 sm:p-10'>
            <FloatingSocial />
            <FloatingEmail />

            <Navbar />
            <div className='px-4 max-w-4xl mx-auto md:p-10'>
                <Overview />
                <section id='about' className='h-fit'>
                    <About />
                </section>
                <section id='projects' className='h-fit'>
                    <Projects />
                </section>
                <section id='contact'>
                    <Contact />
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Home
