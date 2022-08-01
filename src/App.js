import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useState } from 'react'

import Outpost from './outpost/Outpost'
import Checkout from './checkout/Checkout'
import ProductDetails from './products/ProductDetails'
import Header from './header/Header'
import styles from './App.module.css'

function App() {
  const [cart, setCart] = useState([])

  return (
    <BrowserRouter>
      <Header />
      <div className={styles.content}>
        <Routes>
          <Route path="/outpost" element={<Outpost cart={cart} setCart={setCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/product-details/:slug" element={<ProductDetails />} />
          <Route path="/" element={<Navigate to="/outpost" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
