import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main className='wrapper page'>
      <Header title='All Videos' subHeader='Public Library'/>
      <Link href='/' className='text-2xl'>Welcome to loom clone</Link>
    </main>
  )
}

export default Page