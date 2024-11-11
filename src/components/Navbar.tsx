import React from 'react'
import { NavigationMenu } from './Nav/NavigationMenu'
import SocialLinks from './Nav/SocialLinks'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center gap-x-5 w-full border-b px-2'>
      <SocialLinks/>
      <p className='font-bold text-xl text-sky-600 '>Blog Personal</p>
      <NavigationMenu/>
    </nav>
  )
}
