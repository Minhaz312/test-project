import React from 'react'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <>
        <header>
            <NavigationBar />
        </header>
        <main>
          <div className='xl:w-8/12 xl:10/12 w-full mx-auto px-3 sm:px-0'>
            {children}
          </div>
        </main>
        <footer className='bg-[#f2ebd9]'>
          <Footer />
        </footer>
    </>
  )
}
