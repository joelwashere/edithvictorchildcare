import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { About } from '@/components/about'
import { Landing } from '@/components/landing'
import { ContactUs } from '@/components/contactus'
import { Testimonials } from '@/components/testimonials'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <About/>
      {/*<Testimonials/>*/}
      <ContactUs/>
    </div>
  )
}
