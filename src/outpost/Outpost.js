import { useState } from 'react'

import styles from './Outpost.module.scss'
import ProductListing from '../products/ProductListing'
import Cart from '../cart/Cart'

export default function Outpost() {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart([...cart, product])
  }

  return (
    <>
      <div className={styles.mainLeft}>
        <h1 className="section-header">Outpost</h1>
        <ProductListing addToCart={addToCart} />
      </div>
      <div className={styles.rightSidebar}>
        <h2 className="section-header">Cart</h2>
        <Cart cart={cart} />
      </div>
    </>
  );
}
