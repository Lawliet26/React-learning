import ProductCard from './components/ProductCard';
import CartProvider from './context/cartContext';
import './App.css';

function App() {


  return (
    <CartProvider>
      <h1>Desserts</h1>
      <ProductCard></ProductCard>
    </CartProvider>
  )
}

export default App
