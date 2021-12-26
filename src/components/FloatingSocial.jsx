import React from 'react'


import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

const FloatingSocial = () => {
    return (
        <div className='hidden fixed md:flex flex-col lg:inset-x-10 md:inset-x-6 bottom-0 text-[#a8b2d1] text-[20px] space-y-8 w-10 items-center'>
            <a href='https://github.com/omeasraf' target="_blank">
                <FiGithub className='hover:text-cyan-300' />
            </a>
            <a href='https://www.linkedin.com/in/omeasraf/' target="_blank">
                <FiLinkedin className='hover:text-cyan-300' />
            </a>
            <a href='https://www.instagram.com/omeklts/' target="_blank">
                <FiInstagram className='hover:text-cyan-300' />
            </a>
            <a href='https://twitter.com/omeasraf' target="_blank">
                <FiTwitter className='hover:text-cyan-300' />
            </a>
            <div className='h-20 w-[1px] rounded-lg bg-[#a8b2d1]'>

            </div>
        </div>
    )
}

export default FloatingSocial
