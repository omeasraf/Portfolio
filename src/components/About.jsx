import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const languages = ["C#", " C++", " Dart", " Java", " JavaScript", " Python", " SQL", " Swift", " XML", " HTML & CSS"];
const technologies = ["Flask", "Django", "Maven", "Flutter", "Bootstrap", "React", "Node.js", "JSON", "Spring Boot", "Matplotlib", "JUnit", "Tailwind CSS", "Sanity"];

const About = () => {
    return (
        <div className='lg:px-8 mt-52 font-sans h-screen text-[#a8b2d1]'>
            <div className='flex flex-row items-center space-x-4'>
                <h2 className='text-cyan-300 animate-fade-in-up animation-delay-100 text-[30px]'>
                    01.
                </h2>
                <h2 className='font-bold font-sans text-[36px]'>
                    About Me
                </h2>
                <div className='w-[25%] h-[1px] bg-[#a8b2d1] rounded-lg opacity-40'></div>
            </div>
            <div className='grid-layout-2 mt-10'>
                <div>
                    <div>
                        Hello! My name is Ome, and I love to code. I've always been that kid who loves taking apart his toys, trying to figure out how it works and if it's possible to modify it. My curiosity has led me to pursue a career in Software Engineering, and now I create things from nothing for a living.
                    </div>
                    <div className='mt-2'>
                        I've worked on multiple open source projects and created a few interesting <AnchorLink href='#projects'>projects</AnchorLink> that have taught me a lot of writing better and optimized codes.
                    </div>
                </div>

                <div className='bottom-corner imageTest'>

                </div>
            </div>
            <div className='mt-5'>
                <h2>
                    Here are a few languages I've worked with before:
                </h2>
                <Languages items={languages} />
            </div>
            <div className='mt-5'>
                <h2>
                    Here are a few technologies  I've worked with recently:
                </h2>
                <Languages items={technologies} />
            </div>
        </div>
    )
}

const Languages = ({ items }) => {
    return (
        <ul className='skills-list'>
            {items.map((lang) => (
                <li>{lang}</li>
            ))}
        </ul>
    );
}

export default About
// object-cover h-[300px] w-[300px] absolute rounded-md 