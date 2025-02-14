import { useProducts } from "../hooks/useProducts";
import "./ProductCard.css";

export default function ProductCard() {

    const {products, cart, addToCart, handleIncreaseQuantity, handleDecreaseQuantity} = useProducts();


    const checkedProducts = (product) => {
        return(
            cart.some(item => item.name == product.name)
        )
    }

    const getProductQuantity = (product) =>{
        const cartProduct = cart.find(item => item.name == product.name)
        return cartProduct? cartProduct.quantity: 0;
    }
    
    console.log(cart)

    return (
        <div className="product-section">
            {              
                products.map((product, index) =>{

                    {/*Todo: Separar el boton y su logica en otro componente */}
                    const isProductInCart = checkedProducts(product);
                    const productQuantity = getProductQuantity(product);

                    const button = isProductInCart? 
                    <div className="product-card-button-press">
                        <button onClick={()=>handleDecreaseQuantity(product)}><img src="/src/assets/icon-decrement-quantity.svg" alt="Decrement"/></button>
                        {productQuantity}
                        <button onClick={()=>handleIncreaseQuantity(product)}><img src="/src/assets/icon-increment-quantity.svg" alt="Incremenet"/></button>
                    </div> :
                    <button onClick={()=>addToCart(product)} className="product-card-button"><i><img src="/src/assets/icon-add-to-cart.svg" alt={product.name} /></i>Add to Cart</button>
                         
                    return(
                        <div className="product-card-container" key={index}>
                            <img className="product-card-img" src={product.desktop} alt={product.name}/>
                            {button}
                            <span className="product-card-category">{product.category}</span>
                            <h4 className="product-card-name">{product.name}</h4>
                            <strong className="product-card-price">${product.price.toFixed(2)}</strong>
                        </div>
                    )
                })
            }
        </div>
    )
}
