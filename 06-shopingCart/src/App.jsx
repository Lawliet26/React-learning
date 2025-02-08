import {products as initialProducts} from "./mocks/products.json";
import CartProvider from "./components/context/CartContext";
import { useFilters } from "./hooks/useFilters";
import Products from './components/Products';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "/src/components/Cart"
import './App.css';

function App() {
  const {filterProducts} = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header></Header>
      <Cart></Cart>
      <Products products={filteredProducts}></Products>
      <Footer></Footer>
    </CartProvider>
  )
}

export default App
