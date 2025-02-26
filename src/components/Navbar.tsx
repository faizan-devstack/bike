import React from 'react'
import { Button } from './ui/button'

function Navbar() {
  return (
    <nav className='flex justify-between items-center h-14 px-6 border-b border-gray-600'>
      <div>Bike Bliss</div>
      <div className='md:block hidden'>
        <ul className='flex gap-5'>
            <li>Features</li>
            <li>Testimonials</li>
            <li>Faq's</li>
        </ul>
      </div>
      <Button variant="custom">
        Contact
      </Button>
    </nav>
  )
}

export default Navbar
