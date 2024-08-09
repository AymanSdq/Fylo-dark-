import React from 'react'

function NewsLetter() {

    return (
        
        <section className='w-full flex justify-center items-center sm:h-[184px] h-[200px] bg-darkBlueBg relative '>

            <div className='sm:w-[50%] w-[90%] py-10 px-8 gap-6 bg-[#1c2230] rounded-md flex flex-col justify-center items-center absolute bottom-[-117px]'>

                <h1 className='text-white text-xl sm:text-4xl font-bold text-center'>Get early access today</h1>

                <p className='text-white text-center'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                questions, our support team would be happy to help you.</p>

                <div className='flex  justify-center max-sm:flex-col w-full items-center gap-10'>
                    
                    <input placeholder='example@example.com' className='py-2 px-4 rounded-full w-[100%] sm:w-[50%]' type="text" />

                    <button className='py-2 px-4 rounded-full bg-colorBlue text-white w-[100%] sm:w-[30%]'>Get Started For Free</button>
                </div>

            </div>

        </section>

    )

}

export default NewsLetter