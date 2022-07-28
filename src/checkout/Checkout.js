import React, { useState } from 'react'

import Cart from '../cart/Cart'
import Address from './Address/Address'
import styles from './Checkout.module.css'
import products from '../products/products.json'

function Checkout() {
  let emptyAddress = { name: '', address: '', city: '', state: '', postalCode: '' }
  let [addresses, setAddresses] = useState(
    {
      shippingAddress: Object.assign({}, emptyAddress),
      billingAddress: Object.assign({}, emptyAddress)
    }
  )

  function updateShippingAddress(shippingAddress) {
    setAddresses(Object.assign({}, addresses, { shippingAddress: shippingAddress }))
  }

  function updateBillingAddress(billingAddress) {
    setAddresses(Object.assign({}, addresses, { billingAddress }))
  }

  return (
    <div className={styles.checkout}>
      <h1 className={`section-header ${styles.sectionHeader}`}>Checkout</h1>
      <Cart cart={[products[0], products[1]]} />
      <h2 className={`section-header ${styles.sectionHeader}`}>Shipping Address</h2>
      <Address address={addresses.shippingAddress} onAddressUpdated={updateShippingAddress} />
      <h2 className={`section-header ${styles.sectionHeader}`}>Billing Address</h2>
      <Address address={addresses.billingAddress} billing="billing" onAddressUpdated={updateBillingAddress} />
    </div>
  )
}

export default Checkout