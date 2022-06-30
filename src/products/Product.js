import styles from './Product.module.scss'
import { toCurrencyFormat } from '../utils/format-utils'

function Product() {
  const product = {
    "name": "Warp Engine",
    "price": 1529995,
    "image": "warp-engine.png"
  }

  return (
    <>
      <div className={styles.productImage}>
        <img src={require(`../images/${product.image}`)} alt="" />
      </div>
      <div className={styles.productDetails}>
        <div className={styles.title}>{product.name}</div>
        <div className={styles.price}>{toCurrencyFormat(product.price)}</div>
      </div>
    </>
  )
}

export default Product
