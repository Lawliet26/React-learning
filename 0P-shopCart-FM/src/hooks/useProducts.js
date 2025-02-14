import { CartContext } from "../context/cartContext"
import { useContext } from "react";

export const useProducts = () =>{
    return useContext(CartContext)
}