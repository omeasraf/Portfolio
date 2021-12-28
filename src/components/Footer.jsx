import React from 'react'
import { FiGithub } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="pt-12 font-mono">
            <footer id="footer" className="relative z-50 pt-0 mx-12">
                <div className="py-16 flex flex-col justify-center items-center">
                    <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
                        Fork on
                        <div>

                        </div>
                        <a href='https://github.com/omeasraf/Portfolio' target="_blank" rel="noreferrer">
                            <button className='outline-none px-0 py-0 outline-0 hover:bg-transparent floating-buttton' style={{ paddingTop: "0px", paddingBottom: "0px" }}><FiGithub className='mx-2' />Github</button>
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
