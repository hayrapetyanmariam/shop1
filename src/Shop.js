import React, { useEffect, useState } from 'react'
import GoodList from './GoodList';
import BasketList from './BasketList';

const Shop = () => {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false);

    useEffect(()=>{
        fetch('http://localhost:3000/goods')
        .then(response => response.json())
        .then(json => setGoods(json), setLoading(false)
        )
        .catch(err => console.log(err))
    }, []);


    const addBasket = item =>{
        const itemIndex = order.findIndex(
            el => el.id === item.id 
        );

        if(itemIndex < 0){
            const newItem = {
                ...item,
                quantity : 1
            };
            setOrder([...order, newItem]);
        } else{
            const newOrder = order.map((el, index) =>{
                if(index === itemIndex){
                    return {
                        ...el,
                        quantity: el.quantity + 1
                    }
                } else{
                    return el;
                }
            });
            setOrder(newOrder);
        }
    }

    const removeFromBasket = id =>{
        const newOrder = order.filter(el => el.id !== id);
        setOrder(newOrder);
    }

    const handleBasketShow = ()=>{
        setIsBasketShow(!isBasketShow);
    } 

    const incQuantity = id =>{
        const newOrder = order.map(el =>{
            if(el.id === id){
                return {
                    ...el, 
                    quantity: el.quantity + 1
                }
            } else{
                return el;
            }
        });
        setOrder(newOrder);
    }

    const decQuantity = id =>{
        const newOrder = order.map(el =>{
            if(el.id === id){
                return {
                    ...el,
                    quantity: el.quantity > 0 ? el.quantity - 1 : 0
                }
            }else{
                return el;
            }
        })
        setOrder(newOrder);
    }

  return (
    <div className='Shop'>
        <i class="fa-solid fa-cart-shopping" onClick={handleBasketShow}>{order.length}</i>
        {
            isBasketShow && <BasketList 
            order = {order}
            removeFromBasket = {removeFromBasket}
            incQuantity = {incQuantity}
            decQuantity = {decQuantity}
            handleBasketShow = {handleBasketShow}
        />
        }
        {
            loading ? <h1>Loading...</h1> : <GoodList goods = {goods} addBasket = {addBasket}/>
        }
        
    </div>
  )
}

export default Shop