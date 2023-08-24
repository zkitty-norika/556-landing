export const metadata = {
  title: 'Project 5-56',
  description: "Lubrication for illiquid DEXes.",
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Substack from '@/components/substack'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Zigzag /> */}
      {/* <Testimonials /> */}
      <Substack />
    </>
  )
}
