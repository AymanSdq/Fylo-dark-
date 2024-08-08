import { useState } from 'react'
import './App.css'
import Header from './assets/Header'
import Hero from './assets/Hero'
import Access from './assets/Access'
import Productiv from './assets/Productiv'
import Testemonial from './assets/Testemonial'
import Footer from './assets/Footer'
import NewsLetter from './assets/NewsLetter'

function App() {

  return (
    <>
        <main className='w-full bg-[#1c2230]'>
          
            <Header />  

            <Hero />

            <Access />

            <Productiv />

            <Testemonial />

            <NewsLetter />

            <Footer />

        </main>
    </>
  )
}

export default App
