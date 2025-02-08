import{CartIcon, ClearCartIcon, RemoveFromCartIcon} from "./icons";
import { useId } from "react";
import "./Cart.css";

export default function Cart() {

    const CartCheckboxId = useId();

  return (
    <div>
        <label className="cart-button" htmlFor={CartCheckboxId}>
            <CartIcon></CartIcon>
        </label>
        <input type="checkbox" id={CartCheckboxId} hidden/>
        <aside className="cart">
            <ul>
                <li>
                    <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" alt="Essence Mascara Lash Princess" />
                </li>
                <div>
                    <strong>Essence Mascara Lash Princess</strong>- 9.99
                </div>
                <footer>
                    <small>
                        Qty: 1
                    </small>
                    <button>+</button>
                </footer>
            </ul>
            <button>
                <ClearCartIcon></ClearCartIcon>
            </button>
        </aside>
    </div>
  )
}
