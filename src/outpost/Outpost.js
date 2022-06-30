import styles from './Outpost.module.scss';
import Product from '../products/Product';

export default function Outpost() {
  return (
    <>
      <div className={styles.mainLeft}>
        <h1 className="section-header">Outpost</h1>
        <Product />
      </div>
      <div className={styles.rightSidebar}><h2 className="section-header">Cart</h2></div>
    </>
  );
}
