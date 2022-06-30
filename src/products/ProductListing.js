import products from '../products/products.json'
import styles from './ProductListing.module.scss'
import Product from './Product'

function ProductListing(props) {
  return (
    <ul className={styles.products}>
      {products.map((product, idx) => (
        <li key={idx} >
          <Product productData={product} addToCart={props.addToCart} />
        </li>)
      )}
    </ul>
  )
}
export default ProductListing