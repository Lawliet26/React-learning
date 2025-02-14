import{CartIcon, ClearCartIcon} from "./icons";
import  {useCart}  from "../hooks/useCart";
import { useId } from "react";
import "./Cart.css";

function CartItem({thumbnail, price, title, quantity, addToCart}){
    return(
        <li>
        <img src={thumbnail} alt={title} />
        
        <div>
            <strong>{title}</strong>- {price}
        </div>
        <footer>
            <small>
               Qty: {quantity}
            </small>
            <button onClick={addToCart}>+</button>
        </footer>
    </li>
    )
}


export default function Cart() {

    const CartCheckboxId = useId();
    const {cart, clearCart, addToCart} = useCart();

  return (
    <div>
        <label className="cart-button" htmlFor={CartCheckboxId}>
            <CartIcon></CartIcon>
        </label>
        <input type="checkbox" id={CartCheckboxId} hidden/>
        <aside className="cart">
            <ul>
                {
                    cart.map(product => (
                        <CartItem key={product.id} {...product} addToCart={()=>addToCart(product)}></CartItem>
                    ))
                }
            </ul>
            <button onClick={clearCart}>
                <ClearCartIcon></ClearCartIcon>
            </button>
        </aside>
    </div>
  )
}
