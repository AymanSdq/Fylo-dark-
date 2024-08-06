import React from 'react'

function Access() {


    return (


        <section className='w-full py-12 flex flex-col justify-center items-center gap-12 bg-darkBlueBg'>
            
            <div className=' w-[80%] flex justify-around items-center '>

                <div className='w-[450px] py-4 gap-4 flex flex-col justify-center items-center text-center px-4'>

                    <img className='w-24' src="/images/icon-access-anywhere.svg" alt="Access files" />

                    <h1 className='text-xl text-bold text-white'>Access your files, anywhere</h1>

                    <p className='text-md text-white'>The ability to use a smartphone, tablet, or computer to access your account means your  files follow you everywhere.</p>
                </div>

                <div className='w-[450px] py-4 gap-4 flex flex-col justify-center items-center text-center px-4'>

                    <img src="/images/icon-security.svg" alt="Access files" />

                    <h1 className='text-xl text-bold text-white'>Security you can trust</h1>

                    <p className='text-md text-white'>2-factor authentication and user-controlled encryption are just a couple of the security  features we allow to help secure your files.</p>
                </div>

            </div>

            <div className=' w-[80%] flex justify-around items-center '>

                <div className='w-[450px] py-4 gap-4 flex flex-col justify-center items-center text-center px-4'>

                    <img src="/images/icon-collaboration.svg" alt="Access files" />

                    <h1 className='text-xl text-bold text-white'>Real-time collaboration</h1>

                    <p className='text-md text-white'>Securely share files and folders with friends, family and colleagues for live collaboration.  No email attachments required.</p>
                </div>

                <div className='w-[450px] py-4 gap-4 flex flex-col justify-center items-center text-center px-4'>

                    <img src="/images/icon-any-file.svg" alt="Access files" />

                    <h1 className='text-xl text-bold text-white'>Store any type of file</h1>

                    <p className='text-md text-white'>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all  file types to be securely stored and shared.</p>
                </div>

            </div>

        </section>


    )


}

export default Access