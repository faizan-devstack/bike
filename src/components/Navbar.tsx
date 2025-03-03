import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className='flex justify-between items-center h-16 px-6 border-b border-gray-600'>
      <div className="flex items-center gap-2">
        <Image
          src="/images/Bitmap.png"
          alt="Bike Bliss"
          className="h-7 w-12"
          height={50}
          width={50}
        />
        <span className="text-white font-semibold text-xl">Bike Bliss</span>
      </div>
      <div className='md:block hidden pr-8'>
        <ul className='flex gap-5'>
          <li className='cursor-pointer hover:bg-[#534483] transition-colors duration-200 px-2 py-1 rounded-sm'>Features</li>
          <li className='cursor-pointer hover:bg-[#534483] transition-colors duration-200 px-2 py-1 rounded-sm'>Testimonials</li>
          <li className='cursor-pointer hover:bg-[#534483] transition-colors duration-200 px-2 py-1 rounded-sm'>Faq&apos;s</li>
        </ul>
      </div>
      <Button variant="custom">
        Contact
      </Button>
    </nav>
  )
}

export default Navbar
