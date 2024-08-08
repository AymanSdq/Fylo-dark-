import React from 'react'

function Header() {
    return (
        
        <header className='w-full flex items-center justify-around  py-12'>
            
            <img src="/images/logo.svg" alt="Logo Pagee" className='sm:w-[100px] w-[70px]' />

            <menu className=' text-white flex sm:gap-12 gap-4 sm:text-[18px] text-[14px]'>

                <a href="#">Features</a>
                <a href="#">Term</a>
                <a href="#">Sign In</a>

            </menu>

        </header>

    )
}

export default Header