import React from 'react'

function Hero() {

    return (
        
        <section className='w-full h-screen flex justify-center items-center flex-col gap-10'>


                <img src="/public/images/illustration-intro.png" alt="Illustration" />

                <h1 className='text-3xl text-white w-[50%] text-center'>All your files in one secure location, accessible anywhere.</h1>

                <p className='text-white'> Fylo stores all your most important files in one secure location. Access them wherever 
                you need, share and collaborate with friends family, and co-workers.</p>

                <button className='bg-colorCyan text-white rounded-full py-2 w-[140px]'>Get Started</button>


        </section>

    )

}

export default Hero