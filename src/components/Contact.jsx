import React from 'react'

const Contact = () => {
    return (
        <div className='lg:px-8 font-sans h-screen text-[#a8b2d1] flex items-center justify-center text-center'>
            <div className='w-[70%]'>
                <h5 className='text-cyan-300 animated animatedFadeInUp fadeInUp animation-delay-700 text-[20px]'>
                    03. What's Next?
                </h5>
                <h2 className='animated animatedFadeInUp fadeInUp animation-delay-750 text-[36px]'>
                    Get In Touch
                </h2>
                <p className='animated animatedFadeInUp fadeInUp animation-delay-800'>
                    I am openly looking for a new job, so please do get in touch with me to discuss any opportunites you have to offer.
                </p>

                <a href="mailto:omeasraf@gmail.com">
                    <button className='mt-10 animated animatedFadeInUp fadeInUp animation-delay-850' style={{ display: "initial" }}>Say Hello</button>
                </a>
            </div>



        </div>
    )
}

export default Contact
