import styles from './CartItem.module.css'
import { toCurrencyFormat } from '../utils/format-utils'

function CartItem(props) {
  return (
    <li className={styles.cartItem}>
      <img className={styles.cartItemImage} src={require(`../images/${props.cartItem.image}`)} alt="" />
      <div className={styles.cartItemDetails}>
        <div className={styles.title}>{props.cartItem.name}</div>
        <div className={styles.price}>{toCurrencyFormat(props.cartItem.price)}</div>
      </div>
    </li>
  )
}

export default CartItem