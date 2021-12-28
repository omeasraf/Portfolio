import React from 'react'
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="pt-12 font-mono">
            <footer id="footer" className="relative z-50 pt-0 mx-12">
                <div className="py-16 flex flex-col justify-center items-center">
                    
                    <div className='md:hidden py-5 flex flex-row justify-center items-center mt-0 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50 animated animatedFadeInUp fadeInUp animation-delay-700'>
                        <p>Find me on </p>
                        <a href='https://github.com/omeasraf' target="_blank" rel="noreferrer" className='floating-buttton'>
                            <FiGithub className='mx-2' style={{display: "inline-block"}} />
                        </a>
                        <a href='https://www.linkedin.com/in/omeasraf' target="_blank" rel="noreferrer" className='floating-buttton'>
                            <FiLinkedin className='mx-2' style={{display: "inline-block"}} />
                        </a>
                        <a href='https://www.instagram.com/omeklts' target="_blank" rel="noreferrer" className='floating-buttton'>
                            <FiInstagram className='mx-2' style={{display: "inline-block"}} />
                        </a>
                        <a href='https://twitter.com/omeasraf' target="_blank" rel="noreferrer" className='floating-buttton'>
                            <FiTwitter className='mx-2' style={{display: "inline-block"}} />
                        </a>
 
                    </div>
                    <div className='mr-3 flex flex-row justify-center items-center mt-0 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50 animated animatedFadeInUp fadeInUp animation-delay-750'>
                    <p>Fork on</p>
                    <a href='https://github.com/omeasraf/Portfolio' target="_blank" rel="noreferrer" className='floating-buttton'>
                            <FiGithub className='mx-2' style={{display: "inline-block"}} />Github
                        </a>
                    </div>
                  
                </div>
            </footer>
        </div>
    )
}

export default Footer
