'use client'
import { num, str } from './data'

export default function Cart() {
  let cartGoods: string[] = ['에그타르트', '티라미수', '치즈케이크']

  return (
    <div>
      <h4 className="title">Cart</h4>
      <p>{num}</p>
      <p>{str}</p>

      {
        cartGoods.map((item, index) => {
          return (
            <CartItem item={item} />
          )
        })
      }

      <Banner content="123" />

    </div>
  )
}

function Banner(props: any) {
  return (
    <h5>배너{props.content}</h5>
  )
}

function CartItem(props: any) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}