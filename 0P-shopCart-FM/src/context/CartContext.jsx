import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();


export default function CartProvider({children}){

    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    function addToCart (product) {
        const productInCartIndex = cart.findIndex(item => item.name === product.name);

        if (productInCartIndex >= 0){
            const newCart = [...cart];
            newCart[productInCartIndex].quantity += 1;
            setCart(newCart);
        } else {
            const newCart = [...cart,{ ...product, quantity: 1}]
            setCart(newCart)
        }
    }

    function deleteFromCart(product){
        const productInCartIndex = cart.findIndex(item => item.name === product.name);

        if(productInCartIndex >= 0 ){
            const newCart = [...cart];
            newCart.splice(productInCartIndex,1);
            setCart(newCart)
        }
    }

    function handleIncreaseQuantity(product){
        const productInCartIndex = cart.findIndex(item => item.name === product.name);

        const newCart=[...cart];
        newCart[productInCartIndex].quantity += 1

        setCart(newCart);
    }

    function handleDecreaseQuantity(product){
        const productInCartIndex = cart.findIndex(item => item.name === product.name);

        const newCart=[...cart];

        if(cart[productInCartIndex].quantity > 1){
            newCart[productInCartIndex].quantity -= 1
        }else if(cart[productInCartIndex].quantity == 1){
            deleteFromCart(product);
            return;
        }
        setCart(newCart);
    }




    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("/src/data.json");
                const dataProducts = await response.json();
                const mapedProducts = dataProducts.map(product=>({
                    thumbnail: product.image.thumbnail,
                    mobile: product.image.mobile,
                    tablet: product.image.tablet,
                    desktop: product.image.desktop,
                    name: product.name,
                    category: product.category,
                    price: product.price,
                    quantity: 0,
                }));
                setProducts(mapedProducts);
            } catch (error) {
                console.error("Error fetching products data");
            } 
        }

        fetchProducts();
    }, []);
    

    return(
        <CartContext.Provider value={{
            products, 
            cart, 
            addToCart, 
            deleteFromCart,
            handleDecreaseQuantity,
            handleIncreaseQuantity,
            }}>
            {children}
        </CartContext.Provider>
    );
    
}