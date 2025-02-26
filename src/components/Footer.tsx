'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

export default function Footer() {
  return (
    <footer className="py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo and Links */}
        <div className="flex items-center gap-2">
          <Image 
          src="/images/Bitmap.png" 
          alt="Bike Bliss" 
          className="h-6 w-10"
          height={50}
          width={50}
          />
          <span className="text-white font-semibold">Bike Bliss</span>
        </div>

        <nav className="flex gap-6 mt-4 md:mt-0">
          <Link href="#features" className="hover:text-white">Features</Link>
          <Link href="#testimonials" className="hover:text-white">Testimonials</Link>
          <Link href="#faqs" className="hover:text-white">Faqs</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-8 md:gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:underline"><FaFacebookF /></Link>
          <Link href="#" className="hover:underline"><FaInstagram /></Link>
          <Link href="#" className="hover:underline"><FaLinkedin /></Link>
          <button className="hover:text-white"><RxCross2 /></button>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="#" className="hover:underline text-gray-400 text-sm">Privacy Policy</Link>
          <Link href="#" className="hover:underline text-gray-400 text-sm">Terms of Service</Link>
          <Link href="#" className="hover:underline text-gray-400 text-sm">Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
}
