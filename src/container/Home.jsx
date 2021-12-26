import React from 'react'

import Navbar from '../components/Navbar'
import About from '../components/About'
import FloatingSocial from '../components/FloatingSocial'

const Home = () => {
    return (
        <div className='background p-10'>
            <FloatingSocial />
            <Navbar />
            <div className='px-4 max-w-4xl mx-auto md:p-10'>
                <About />
                <About />
                <About />
                <About />
            </div>
        </div>
    )
}

export default Home
