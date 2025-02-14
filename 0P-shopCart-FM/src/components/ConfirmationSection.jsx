import React from 'react'
import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';

export default function ConfirmationSection() {

    // const [newOrder, setNewOrder] = useState(false);
    const {cart, totalCart,restartCart} = useProducts();


  return (
    <div>
      <img src="/src/assets/icon-order-confirmed.svg" alt="Order confirmed icon" />
      <h1>Order Confirmed</h1>
      <span>We hope you enjoy your food</span>
      <ul>
        {
            cart.map((item, index)=>{
                return(
                    <li key={index}>
                        <img src={item.thumbnail} alt="thumbnail-img" />
                        <strong>{item.name}</strong>
                        <span>{item.quantity}x</span>
                        <span>@ ${item.price}</span>
                        <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                        <div>Order Total ${totalCart}</div>
                        <button onClick={()=>restartCart()}>Start New Order</button>
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}
