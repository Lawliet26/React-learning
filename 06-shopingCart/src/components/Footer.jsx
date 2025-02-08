import {useFilters} from "/src/hooks/useFilters.js"
import { useCart } from "../hooks/useCart";
import "./Footer.css"

export default function Footer() {

  const {cart} = useCart();

  const {filters} = useFilters()

  return (
    <footer className='footer'>
      {
        JSON.stringify(cart, null, 2)
      }
      {/* <h4>Prueva técnica de react - <span>@Lawliet</span></h4> */}
      {/* <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  )
}
