import React from 'react'
import { Link } from 'react-router-dom'

import { FaLinkedin } from 'react-icons/fa';


const About = () => {
    return (
        <div className='lg:px-8 mt-52 font-sans h-screen'>
            <h5 className='text-cyan-300 animate-fade-in-up animation-delay-100'>
                Hi, my name is
            </h5>
            <h2 class="big-heading animate-fade-in-up animation-delay-200">Ome Asraf.</h2>
            <div className=' animate-fade-in-up animation-delay-300'>
                <h2 class="text-[#444f5e] big-heading">I like to build things.</h2>
            </div>
            <div class="max-w-[540px] text-[#8892b0] mt-10 animate-fade-in-up animation-delay-400">
                <p>An aspiring Software Engineer dedicated to improving skills through hands-on learning and development experience. Proficient in mobile and desktop development environments. Skillful at writing code in Java, Python, C#, C++, and other programming languages and can produce clean code. Well-organized and collaborative team player with solid communication and problem-solving ability.</p >
            </div >

            <div className='max-w-[540px] text-cyan-300 mt-10 animate-fade-in-up animation-delay-500'>
                <a href='https://www.linkedin.com/in/omeasraf/' target="_blank">
                    <button className='outline outline-offset-2 px-10 py-2 rounded-sm outline-2 flex items-center'><FaLinkedin className='mx-2' />LinkedIn</button>
                </a>
            </div>
        </div >
    )
}

export default About


// https://brittanychiang.com/#about