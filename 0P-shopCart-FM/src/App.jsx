import ConfirmationSection from './components/ConfirmationSection';
import ProductCard from './components/ProductCard';
import { useProducts } from './hooks/useProducts';
import Cart from "./components/Cart";
import './App.css';

function App() {

  const {confirmation} = useProducts();

  return (
    <>
      <h1>Desserts</h1>
      <div className='app-container'>
        <ProductCard></ProductCard>
        <Cart></Cart>
        {
          confirmation? <ConfirmationSection></ConfirmationSection> : null
        }
      </div>
    </>
  )
}

export default App
