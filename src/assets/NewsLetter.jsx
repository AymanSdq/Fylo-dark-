import React from 'react'

function NewsLetter() {

    return (
        
        <section className='w-full hidden sm:flex justify-center items-center h-[184px] bg-darkBlueBg relative '>

            <div className='w-[50%] py-10 px-8 gap-6 bg-[#1c2230] flex flex-col justify-center items-center absolute bottom-[-117px]'>

                <h1 className='text-white text-4xl font-bold'>Get early access today</h1>

                <p className='text-white text-center'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                questions, our support team would be happy to help you.</p>

                <div className='flex justify-center w-full items-center gap-10'>
                    
                    <input placeholder='example@example.com' className='py-2 px-4 rounded-full w-[50%]' type="text" />

                    <button className='py-2 px-4 rounded-full bg-colorBlue text-white'>Get Started For Free</button>
                </div>

            </div>

        </section>

    )

}

export default NewsLetter