import React from 'react'

import { FaLinkedin } from 'react-icons/fa';


const Overview = () => {
    return (
        <div className='lg:px-8 mt-52 font-sans '>
            <h5 className='text-cyan-300 animated animatedFadeInUp fadeInUp animation-delay-100'>
                Hi, my name is
            </h5>
            <h2 class="big-heading animated animatedFadeInUp fadeInUp animation-delay-200">Ome Asraf.</h2>
            <div className=' animated animatedFadeInUp fadeInUp animation-delay-300'>
                <h2 class="text-[#8892b0] big-heading">I like to build things.</h2>
            </div>
            <div class="max-w-[540px] text-[#8892b0] mt-10 animated animatedFadeInUp fadeInUp animation-delay-400">
                <p>An aspiring Software Engineer dedicated to improving skills through hands-on learning and development experience. Proficient in mobile and desktop development environments. Skillful at writing code in Java, Python, C#, C++, and other programming languages and can produce clean code. <br />Well-organized and collaborative team player with solid communication and problem-solving ability.</p >
            </div >

            <div className='max-w-[540px] text-cyan-300 mt-10 animated animatedFadeInUp fadeInUp animation-delay-500'>
                <a href='https://www.linkedin.com/in/omeasraf/' target="_blank" rel="noreferrer">
                    <button className='outline outline-offset-2 px-10 py-2 rounded-sm outline-2 flex items-center'><FaLinkedin className='mx-2' />LinkedIn</button>
                </a>
            </div>
        </div >
    )
}

export default Overview

