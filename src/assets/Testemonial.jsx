import React from 'react'

function Testemonial() {

    return (
        
        <section className='hidden sm:flex w-full py-24 justify-center items-center bg-darkBlueBg'>
            
            <div className=' flex gap-10 justify-center items-center'>


                {/* The first profile */}
                <div className='w-[400px]  bg-[#1c2230] rounded-sm relative px-6 py-8 text-white'>
                    <img src="/images/bg-quotes.png" alt="quotes" className='absolute  -top-[45px] -left-[10px]' />

                    <p className=''>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.</p>

                    <div className='flex pt-4 items-center gap-4'>

                        <img src="/images/profile-1.jpg" alt="Profile" className='w-[45px] rounded-full' />

                        <div>
                            <p className=' text-sm'>Satish Patel</p>
                            <small className='text-xs text-gray-400'>Founder & CEO, Huddle</small>
                        </div>

                    </div>

                </div>


                {/* The second profile */}
                <div className='w-[400px]  bg-[#1c2230] rounded-sm relative px-6 py-8 text-white'>

                    <p className=''>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.</p>

                    <div className='flex pt-4 items-center gap-4'>

                        <img src="/images/profile-2.jpg" alt="Profile" className='w-[45px] rounded-full' />

                        <div>
                            <p className=' text-sm'>Bruce McKenzie</p>
                            <small className='text-xs text-gray-400'>Founder & CEO, Huddle</small>
                        </div>

                    </div>

                </div>



                {/* The third profile */}
                <div className='w-[400px]  bg-[#1c2230] rounded-sm relative px-6 py-8 text-white'>
                    
                    <p className=''>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.</p>

                    <div className='flex pt-4 items-center gap-4'>

                        <img src="/images/profile-3.jpg" alt="Profile" className='w-[45px] rounded-full' />

                        <div>
                            <p className=' text-sm'>Iva Boyd</p>
                            <small className='text-xs text-gray-400'>Founder & CEO, Huddle</small>
                        </div>

                    </div>

                </div>

            </div>

        </section>


    )

}

export default Testemonial