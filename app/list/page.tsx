import Link from "next/link"

export default function List() {
  const subListLink: string = '/list/subList'

  let goods: string[] = ['에그타르트', '티라미수', '치즈케이크']

  return (
    <div>
      <div>
        <h4 className="title">목록</h4>
      </div>

      <div>
        <h4 className="food">에그타르트</h4>
      </div>

      <Link href={subListLink}>링크</Link>
    </div>
  )
}
