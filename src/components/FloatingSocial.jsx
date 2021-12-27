import React from 'react'


import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

const FloatingSocial = () => {
    return (
        <div className='hidden fixed md:flex flex-col lg:inset-x-10 md:inset-x-6 bottom-0 text-[#a8b2d1] text-[20px]  w-10 items-center animated animatedFadeInUp fadeInUp animation-delay-700'>
            <a href='https://github.com/omeasraf' target="_blank" className='floating-buttton text-[#a8b2d1]' rel="noreferrer">
                <FiGithub />
            </a>
            <a href='https://www.linkedin.com/in/omeasraf/' target="_blank" className='floating-buttton text-[#a8b2d1]' rel="noreferrer">
                <FiLinkedin />
            </a>
            <a href='https://www.instagram.com/omeklts/' target="_blank" className='floating-buttton text-[#a8b2d1]' rel="noreferrer">
                <FiInstagram />
            </a>
            <a href='https://twitter.com/omeasraf' target="_blank" className='floating-buttton text-[#a8b2d1]' rel="noreferrer">
                <FiTwitter />
            </a>
            <div className='h-20 w-[1px] rounded-lg bg-[#a8b2d1]'>

            </div>
        </div>
    )
}

const FloatingEmail = () => {
    return (
        <div className='hidden fixed md:flex flex-col  bottom-0 right-6 text-[#a8b2d1] text-[20px]  w-10 items-center animated animatedFadeInUp fadeInUp animation-delay-700'>
            <div className='vertical floating-buttton font-mono'>
                <a href='mailto:omeasraf@gmail.com' target="_blank" className='text-[#a8b2d1] hover:text-cyan-300' rel="noreferrer">
                    omeasraf@gmail.com
                </a>
            </div>

            <div className='h-20 w-[1px] rounded-lg bg-[#a8b2d1]'>

            </div>
        </div>
    );
}

export { FloatingSocial, FloatingEmail }

