import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import './globals.css'
import Provider from '@/util/data-provider'
import {Header} from '@/components/header/header'

const montserrat = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Pokédex',
  description: 'Pokémon App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Provider>
          <main className='mx-auto p-4 min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-600 to-black/100'>
            <Header />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
