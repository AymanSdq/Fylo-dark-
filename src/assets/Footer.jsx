import React from 'react'

function Footer() {

    return (
        
        <section className='w-full flex justify-center items-center bg-darkBlueFooter pt-40 pb-20 '>
            
            <div className='w-full flex flex-col justify-start container gap-10 max-sm:px-12'>

                <img className='w-[200px]' src="/images/logo.svg" alt="Logo" />

                <div className='w-full flex max-sm:flex-col sm:justify-between max-sm:gap-10 items-start'>


                    {/* Location */}
                    <div className='flex items-start sm:justify-center justify-start gap-2'>
                        <img src="/images/icon-location.svg" className='sm:w-6 w-4 h-4' alt="Location" />
                        <p className='text-white w-[324px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua</p>
                    </div>

                    {/* Contact and email */}
                    <div className='flex flex-col items-start justify-center gap-2'>
                        <div className='flex gap-2'>
                            <img src="/images/icon-phone.svg" className='sm:w-6 w-4 h-4' alt="Location" />
                            <p className='text-white'>+1-543-123-4567</p>
                        </div>
                        <div className='flex gap-2'>   
                            <img src="/images/icon-email.svg" className='sm:w-6 w-4 h-4' alt="Location" />
                            <p className='text-white'>example@fylo.com</p>
                        </div>
                    </div>

                    {/* Links of the web */}
                    <div className='flex flex-col items-start justify-center gap-2 text-white'>
                        <a href="#">About Us</a>
                        <a href="#">Jobs</a>
                        <a href="#">Press</a>
                        <a href="#">Blog</a>
                    </div>

                    {/* Links of the web */}
                    <div className='flex flex-col items-start justify-center gap-2 text-white'>
                        <a href="#">Contact Us</a>
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                    </div>

                    {/* Social Media */}
                    <div className='flex max-sm:mx-auto  sm:items-start justify-center gap-4 text-white'>
                        <img className='w-8' src="/images/logo-facebook.svg" alt="Facebook" />
                        <img className='w-8' src="/images/logo-instagram.svg" alt="Instagram" />
                        <img className='w-8' src="/images/logo-twitter.svg" alt="Twitter" />
                    </div>

                </div>

            </div>

        </section>

    )

}

export default Footer