import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let strWow: string = '와우'
  const link: string = 'http://google.com'
  return (
    <div>
      <h4 className='title'>메인</h4>
      <p className='sub-title'>NextJS 찍먹 {strWow}</p>
      <a href={link}>구글 링크</a>
    </div>
  )
}
