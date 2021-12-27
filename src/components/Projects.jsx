import React from 'react'

import projects from '../assets/projects.json';

var count = 700;
const Projects = () => {
    return (
        <div className='lg:px-8 mt-52 font-sans text-[#a8b2d1] '>
            <div className='flex flex-row items-center space-x-4 animated animatedFadeInUp fadeInUp animation-delay-600'>
                <h2 className='text-cyan-300 text-[30px]'>
                    02.
                </h2>
                <h2 className='font-bold font-sans text-[36px]'>
                    Projects
                </h2>
                <div className='w-[25%] h-[1px] bg-[#a8b2d1] rounded-lg opacity-40'></div>
            </div>
            <div className='flex items-center justify-center pt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 lg:gap-16' style={{
                    justifyItems: "center",
                    justifyContent: "center"
                }}>
                    {
                        projects.projects.map((project) => {

                            var widget = (
                                <div className='h-auto w-[85%] sm:w-[250px] rounded-md p-[12px] animated animatedFadeInUp fadeInUp'
                                    style={
                                        {
                                            backgroundColor: project.colors.background,
                                            boxShadow: " 0 10px 30px -15px rgba(2, 12, 27, 0.7)",
                                            animationDelay: `${count}ms`
                                        }
                                    }
                                >
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                        <div className='h-auto text-center' style={{ color: project.colors.border }}>
                                            <img style={{ borderColor: project.colors.border }} className='border border-solid rounded-md p-[5px] sm:h-[215px] h-[100%] w-[100%]' src={"https://omeasraf.com/" + project.image} alt={project.imageDescription} />
                                            <h3 className='font-mono my-5 text-[1.5em] sm:text-[1.17em]' style={{ color: project.colors.border }}>
                                                {project.title + " " + count}
                                            </h3>
                                            <p className='font-mono text-[15px] sm:text-[13px]' >
                                                {project.description}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            );

                            count += 150;
                            return widget;
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default Projects
