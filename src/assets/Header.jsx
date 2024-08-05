import React from 'react'

function Header() {
    return (
        
        <header className='w-full flex items-center justify-around py-12'>
            
            <img src="/images/logo.svg" alt="Logo Pagee" className='w-[100px]' />

            <menu className=' text-white flex gap-12'>

                <a href="#">Features</a>
                <a href="#">Term</a>
                <a href="#">Sign In</a>

            </menu>

        </header>

    )
}

export default Header