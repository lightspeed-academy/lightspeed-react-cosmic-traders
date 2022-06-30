import styles from './Outpost.module.scss'
import ProductListing from '../products/ProductListing'
import Cart from '../cart/Cart'

export default function Outpost() {
  const cart = [{
    "name": "Warp Engine",
    "price": 1529995,
    "image": "warp-engine.png"
  }, {
    "name": "Warp Engine",
    "price": 1529995,
    "image": "warp-engine.png"
  }];

  function addToCart(product) {
    cart.push(product)
    console.log('addToCart', cart)
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
