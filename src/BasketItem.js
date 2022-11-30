import React from 'react'

const BasketItem = ({item, incQuantity, decQuantity, removeFromBasket}) => {
  return (
    <div className='BasketItem'>
        <div className='basket'>
          <span className='title'>{item.title}</span>
          <span onClick={() => decQuantity(item.id)} className = "decquantity">-</span>
          <span className='quantity'>{item.quantity}</span>
          <span onClick={() => incQuantity(item.id) } className = "incquantity">+</span>
          = <span className='price'>{item.price * item.quantity}<span className='amd'>AMD</span></span>
        </div>
        <span onClick={() => removeFromBasket(item.id)}>&times;</span>
    </div>
  )
}

export default BasketItem