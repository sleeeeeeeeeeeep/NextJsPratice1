import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let strWow: string = '와우'
  const homeLink: string = '/'
  const listLink: string = '/list'

  return (
    <div>
      <h4 className='title'>메인</h4>
      <p className='sub-title'>NextJS 찍먹 {strWow}</p>
    </div>
  )
}
