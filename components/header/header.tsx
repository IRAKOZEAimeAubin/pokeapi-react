'use client'

import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <header className='text-center mb-4'>
        <Link href='/'>
          <h1 className='text-4xl font-bold text-white cursor-pointer'>
            Pokédex
          </h1>
        </Link>
      </header>
    </header>
  )
}
