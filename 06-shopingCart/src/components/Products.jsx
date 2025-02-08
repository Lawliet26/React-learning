import { useCart } from '../hooks/useCart';
import { AddToCartIcon } from './icons';
import "./Products.css";

function Products({ products }) {

    const{addToCart, cart}=useCart();

    const checkProductsInCart = (product) => {
        return(
            cart.some(item => item.id === product.id)
        )
    }

    return (
        <main className='products'>
            <ul >
                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />

                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button onClick={()=>addToCart(product)}>
                                <AddToCartIcon></AddToCartIcon>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Products