import React from 'react'

function Productiv() {

    return (
        
        <section className='w-full flex py-12 justify-center items-center bg-darkBlueBg'>
            
            <div className='w-[80%] flex gap-6'>

                <div className='w-1/2'>
                    <img src="/images/illustration-stay-productive.png" alt="Illustration" />
                </div>

                <div className='w-1/2  flex flex-col justify-center gap-6'>
                    <h1 className='text-6xl text-white font-bold'>Stay productive, wherever you are</h1>
                    <p className='text-white text-lg'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
                    storage needs.</p>
                    <p className='text-white text-lg'>Securely share files and folders with friends, family and colleagues for live collaboration. No email 
                    attachments required.</p>
                    <a href="#" className='flex items-center gap-4 text-colorCyan border-b border-b-colorCyan w-[194px]'>See how Fylo works <img className='w-8' src="/images/icon-arrow.svg" alt="Arrow" /></a>
                </div>

            </div>

        </section>

    )

}

export default Productiv