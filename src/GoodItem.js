import React from 'react'

const GoodItem = ({item, addBasket}) => {
  return (
    <div className='GoodItem'>
       <img src={item.image}/>
       <h1>{item.title}</h1>
       <h3>{item.price} AMD</h3>
       <button onClick={() => addBasket(item)} className = "btn">Add To Basket</button>
    </div>
  )
}

export default GoodItem