import styles from './Product.module.scss'

function Product() {
  let imageFilename = 'warp-engine.png'

  return (
    <>
      <div className={styles.productImage}>
        <img src={require(`../images/${imageFilename}`)} alt="" />
      </div>
      <div className={styles.productDetails}>
        <div className={styles.title}>Product Name</div>
        <div className={styles.price}>Product Price</div>
      </div>
    </>
  )
}

export default Product
