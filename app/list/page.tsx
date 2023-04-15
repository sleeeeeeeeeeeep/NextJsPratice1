import Image, { StaticImageData } from "next/image"
import ImgEggtart from '/public/에그타르트.jpg'
import ImgTiramisu from '/public/티라미수.jpg'
import ImgCheeseCake from '/public/치즈케이크.jpg'
import Link from "next/link"

export default function List() {
  const subListLink: string = '/list/subList'
  
  let imgPath: StaticImageData[] = [ImgEggtart, ImgTiramisu, ImgCheeseCake]
  let goods: string[] = ['에그타르트', '티라미수', '치즈케이크']

  return (
    <div>
      <div>
        <h4 className="title">목록</h4>
      </div>

      {
        goods.map((good, index) => {
          return (
            <div className="goods" key={index}>
              <Image src={imgPath[index]} className="goods-img" alt="이미지"/>
              <h4 >{good}</h4>
            </div>
          )
        })
      }

      <Link href={subListLink}>링크</Link>
    </div>
  )
}
