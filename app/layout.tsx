import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'NextJS Practice',
  description: 'NextJS Practice',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    
    <html lang="en">
      <body>
      <div className='navbar'>
        <Link href='/'>홈</Link>
        <Link href='/list'>목록</Link>
      </div>
        {children}
      </body>
    </html>
  )
}
