import styles from './Product.module.scss'
import { toCurrencyFormat } from '../utils/format-utils'

function Product({ productData }) {
  return (
    <>
      <div className={styles.productImage}>
        <img src={require(`../images/${productData.image}`)} alt="" />
      </div>
      <div className={styles.productDetails}>
        <div className={styles.title}>{productData.name}</div>
        <div className={styles.price}>{toCurrencyFormat(productData.price)}</div>
      </div>
    </>
  )
}

export default Product
