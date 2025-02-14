import  {useProducts}  from '../hooks/useProducts';
import PropTypes from "prop-types";
import "./Cart.css";

export default function Cart() {
    const {cart,deleteFromCart,totalCart , totalQuantity, confirmOrder} = useProducts();

    const CartRender =({cart})=> {
        if(!Array.isArray(cart) || cart.length === 0){

            return(
                <aside className='cart-section-empty'>
                    <h2 className='cart-title'>Your Cart ({cart.length})</h2>
                    <img src="/src/assets/illustration-empty-cart.svg" alt="Empy cart image" />
                    <span>Your added items will appear here</span>
                </aside>
            ) 
        }
        
        return(
            <aside className='cart-section'>
                <h2 className='cart-title'>Your Cart ({totalQuantity})</h2>
                <ul className='cart-list'>
                    {
                        cart.map((item,index) =>{   
                            return(
                                <li key={index}>
                                    <div className='cart-info'>
                                        <h3 className='cart-item-name'>{item.name}</h3>
                                        <span className='cart-item-quantity'>{item.quantity}x</span>
                                        <span className='cart-item-price'>@ ${item.price.toFixed(2)}</span>
                                        <span className='cart-item-total'>${((item.price) * (item.quantity)).toFixed(2)}</span>
                                        <button className='cart-item-delete' onClick={()=>deleteFromCart(item)}><img src="/src/assets/icon-remove-item.svg" alt="Remove icon" />
                                        </button>
                                    </div>
                                </li>
                            )
                        })

                    }
                </ul>
                <div className='cart-total'>Order total <strong>${totalCart}</strong></div>
                <div className='cart-carbon-msj'><img src="/src/assets/icon-carbon-neutral.svg" alt="Carbon-icon" />This is <strong>carbon neutral</strong> delivery</div>
                <button className='cart-confirm-order' onClick={()=>confirmOrder()}>Confirm Order</button>
            </aside>
        )
    }  

    CartRender.propTypes = {
        cart: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                quantity: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                thumbnail: PropTypes.string,
            })
        ).isRequired,
    };
        

  return (
        <CartRender cart={cart}></CartRender>
  )
}
