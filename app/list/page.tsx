'use client'

import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import ImgEggtart from '/public/에그타르트.jpg'
import ImgCheeseCake from '/public/치즈케이크.jpg'
import ImgTiramisu from '/public/티라미수.jpg'
import { useState } from "react"

export default function List() {
  const subListLink: string = '/list/subList'

  let imgPath: StaticImageData[] = [ImgEggtart, ImgTiramisu, ImgCheeseCake]
  let goods: string[] = ['에그타르트', '티라미수', '치즈케이크']
  let [count, setCount] = useState([0, 0, 0])

  return (
    <div>
      <div>
        <h4 className="title">목록</h4>
      </div>

      {
        goods.map((good, i) => {
          return (
            <div className="goods" key={i}>
              <Image src={imgPath[i]} className="goods-img" alt="이미지" />
              <h4 >{good}</h4>
              <span> {count[i]} </span>
              <button onClick={() => clickButton(i)}> +</button>
            </div>
          )
        })
      }

      <Link href={subListLink}>링크</Link>
    </div>
  )

  function clickButton(index: number) {
    let tempCount: number[] = [...count]
    tempCount[index]++
    setCount(tempCount)
  }
}