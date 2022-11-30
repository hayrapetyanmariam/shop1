import React from 'react'
import BasketItem from './BasketItem'

const BasketList = ({order, incQuantity, decQuantity, removeFromBasket, handleBasketShow}) => {


const totalPrice = order.reduce((sum, el) => el.price * el.quantity + sum, 0)

  return (
    <div className='BasketList'>
       <div className='cart'> 
            <h2>My Orders</h2> 
            <span classname="close" onClick={handleBasketShow}>&times;</span>
       </div>
        {
            order.map((el, index) =>{
                return <BasketItem 
                    key={index} 
                    item = {el} 
                    incQuantity = {incQuantity}
                    decQuantity = {decQuantity}
                    removeFromBasket = {removeFromBasket}
                />
            })
        }
        <h2 className='total'>Total: {totalPrice} <span className='amd'>AMD</span></h2>
    </div>
  )
}

export default BasketList