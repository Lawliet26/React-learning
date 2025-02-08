import { createContext, useState } from "react";

export const CartContext = createContext()


export default function CartProvider({children}) {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        //Primero checkear si el producto ya esta en el carrito
        const productInCartIndex = cart.findIndex(item => item.id === product.id);

        if(productInCartIndex >= 0){
            //el 0 es una posicion no una cantidad
            //Si la funcion findIndex si entrega un indice del arreglo entonces si existe en el carrito
            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity+=1;
            return(setCart(newCart));
        }

        //Producto no está en el carrito
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1,
            }
        ]))
    }

    const clearCart = () => {
        setCart([])
    }

  return (
    <CartContext.Provider value={{
        cart, 
        addToCart, 
        clearCart,
        }}>
        {children}
    </CartContext.Provider>
  )
}
