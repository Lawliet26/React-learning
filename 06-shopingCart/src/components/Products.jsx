import { useCart } from '../hooks/useCart';
import { AddToCartIcon, RemoveFromCartIcon } from './icons';
import "./Products.css";

function Products({ products }) {

    const{addToCart, cart, removeFromCart}=useCart();

    const checkProductsInCart = (product) => {
        return(
            cart.some(item => item.id === product.id)
        )
    }
    

    return (
        <main className='products'>
            <ul >
                {products.map(product => {
                    const isProductInCart = checkProductsInCart(product);

                    return(
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />

                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button onClick={()=>isProductInCart? removeFromCart(product) : addToCart(product) }
                            style={{backgroundColor: isProductInCart? "#09f": null}}>
                                {
                                    isProductInCart? 
                                        <RemoveFromCartIcon></RemoveFromCartIcon>
                                        :<AddToCartIcon></AddToCartIcon>
                                }
                            </button>
                        </div>
                    </li>
                    )

                })}
            </ul>
        </main>
    );
}

export default Products