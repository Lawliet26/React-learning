import { useProducts } from '../hooks/useProducts';
import "../components/ConfirmationSection.css";
import { useEffect } from 'react';

export default function ConfirmationSection() {

    const {cart, totalCart,restartCart} = useProducts();

    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }, []);


  return (
    <div className='confirmation-container'>
      <div className='confirmation-section'>
        <img className='confirmation-icon' src="/src/assets/icon-order-confirmed.svg" alt="Order confirmed icon" />
        <h1 className='section-title'>Order Confirmed</h1>
        <span className='section-mesage'>We hope you enjoy your food!</span>
        <ul className='order-list'>
          {
              cart.map((item, index)=>{
                  return(
                      <li className='list-item-confirmed' key={index}>
                          <img className='item-image' src={item.thumbnail} alt="thumbnail-img" />
                          <div className='item-info'>
                            <strong className='item-name'>{item.name}</strong>
                            <span className='item-quantity'>{item.quantity}x</span>
                            <span className='item-price'>@ ${(item.price).toFixed(2)}</span>
                          </div>
                          <strong className='item-price-total'>${(item.price * item.quantity).toFixed(2)}</strong>
                      </li>
                  )
                })
              }
        <div className='total-cart'>Order Total <strong>${totalCart}</strong></div>
        </ul>
        <button className='new-order-button' onClick={()=>restartCart()}>Start New Order</button>
      </div>
    </div>
  )
}


