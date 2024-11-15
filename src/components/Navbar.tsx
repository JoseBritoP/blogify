import React from 'react'
import { NavigationMenu } from './Nav/NavigationMenu'
import SocialLinks from './Nav/SocialLinks'
import { MobileNavMenu } from './Nav/MobileNav'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center gap-x-2 lg:gap-x-5 w-full border-b px-2 pb-2'>
      <SocialLinks/>
      <p className='font-bold text-lg md:text-xl lg:text-2xl text-sky-600 '>Personal Blog</p>
      <NavigationMenu/>
      <MobileNavMenu/>
    </nav>
  )
}
