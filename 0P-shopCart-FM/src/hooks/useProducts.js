import { CartContext } from "../context/cartContext"
import { useContext } from "react";

export const useProducts = () =>{
    const {products, cart, addToCart, deleteFromCart, handleIncreaseQuantity, handleDecreaseQuantity} = useContext(CartContext);

    return {products,cart, addToCart, deleteFromCart, handleIncreaseQuantity, handleDecreaseQuantity}
}