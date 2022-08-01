import { useSearchParams } from 'react-router-dom'

import products from '../products/products.json'
import styles from './ProductListing.module.scss'
import Product from './Product'

function ProductListing(props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const filter = searchParams.get('filter')

  function setFilter(filter) {
    setSearchParams({ filter })
  }

  return (
    <>
      <div className={styles.filters}>
        <button className="button" onClick={() => setFilter('transport')}>Transport</button>
        <button className="button" onClick={() => setFilter('weapons')}>Weapons</button>
        <button className="button" onClick={() => setFilter('defense')}>Defense</button>
        <button className="button" onClick={() => setFilter('equipment')}>Equipment</button>
        <button className="button" onClick={() => setFilter('')}>All</button>
      </div>
      <ul className={styles.products}>
        {products
          .filter(p => !filter || p.category === filter)
          .map((product, idx) => (
            <li key={idx} >
              <Product productData={product} addToCart={props.addToCart} />
            </li>)
          )}
      </ul>
    </>
  )
}
export default ProductListing