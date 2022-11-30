import React from 'react'
import GoodItem from './GoodItem'

const GoodList = ({goods, addBasket}) => {

    if(!goods.length) return <h3>Noting Here...</h3>

  return (
    <div className='GoodList'>
        {
            goods.map((el, index)=>{
                return <GoodItem key={index} item = {el} addBasket = {addBasket}/>;
            })
        }
    </div>
  )
}

export default GoodList