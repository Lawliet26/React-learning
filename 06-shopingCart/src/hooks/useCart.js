import { CartContext } from "../components/context/CartContext";
import { useContext } from "react";

export const useCart = () =>{
    const cart = useContext(CartContext);

    //Buena practica:  Resivar si el cart es es undefined
    if(cart === undefined){
        throw new Error("No se puede utilizar un contexto sin un provider");
    }

    return cart
}