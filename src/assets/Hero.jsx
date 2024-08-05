import React from 'react'

function Hero() {

    return (
        
        <section className='w-full h-screen flex justify-center items-center flex-col gap-10 relative'>


                <img className='z-50' src="/images/illustration-intro.png" alt="Illustration"  />

                <h1 className='text-3xl z-50 mt-4 text-white w-[30%] text-center'>All your files in one secure location, accessible anywhere.</h1>

                <p className='text-white z-50 w-[30%] text-center text-lg'> Fylo stores all your most important files in one secure location. Access them wherever 
                you need, share and collaborate with friends family, and co-workers.</p>

                <button className='bg-colorCyan z-50 text-xl  text-white rounded-full py-3 w-[180px]'>Get Started</button>

                <img src="/images/bg-curvy-desktop.svg" alt="Bottom image" className='absolute bottom-0 w-full z-0' />


        </section>

    )

}

export default Hero