import React from 'react'
import { CardEditor } from './cards/CardEditor';
import { blogs } from '@/constants';


export default function BlogsByEditor() {
  return (
    <section className='grid grid-cols-1 gap-y-4'>
      {blogs.map((blog)=>(
        <CardEditor key={blog.category} card={blog}/>
      ))}
    </section>
  )
}
