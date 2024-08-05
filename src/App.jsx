import { useState } from 'react'
import './App.css'
import Header from './assets/Header'
import Hero from './assets/Hero'
import Access from './assets/Access'

function App() {

  return (
    <>
        <main className='w-full bg-[#1c2230]'>
          
            <Header />  

            <Hero />

            <Access />

        </main>
    </>
  )
}

export default App
