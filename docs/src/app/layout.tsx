import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gram',
  description: 'Lodash, but without dependencies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="border-b">
          <div className="flex h-16 items-center px-4 justify-center">
            <div className='flex flex-grow max-w-[1200px]'>
              <Navigation />
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-center'>
          <div className='flex flex-col flex-grow max-w-[1200px]'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
