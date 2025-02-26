'use client'

import Discover from '@/components/Discover'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import { useEffect, useState } from "react";
import Testimonial from "@/components/Testimonials";
import { TestimonialType } from "@/types/types";
import FAQ from '@/components/Faq'
import Explore from '@/components/Explore'
import Footer from '@/components/Footer'


function HomePage() {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]); // ✅ Explicitly typed

  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((response) => response.json())
      .then((data: TestimonialType[]) => setTestimonials(data)); // ✅ Type assertion
  }, []);


  return (
    <div>
      <Navbar />
      <Hero />
      <Discover />
      <div className="flex flex-col items-center space-y-10">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
      <FAQ />
      <Explore />
      <Footer />
    </div>
  )
}

export default HomePage
