import styles from './Address.module.css'
import formStyles from './FormStyles.module.css'

function Address(props) {
  return (
    <div className={styles.address}>
      <div>
        <div className={formStyles.inputGroup}>
          <label htmlFor="name">Name:</label>
          <input name="name" />
        </div>
        <div className={formStyles.inputGroup}>
          <label htmlFor="address">Address:</label>
          <input name="address" />
        </div>
        <div className={formStyles.inputGroup}>
          <label htmlFor="city">City:</label>
          <input name="city" />
        </div>
        <div className={formStyles.inputGroup}>
          <label htmlFor="state">State/Province:</label>
          <input name="state" />
        </div>
        <div className={formStyles.inputGroup}>
          <label htmlFor="postalCode">Postal Code:</label>
          <input name="postalCode" />
        </div>
      </div>
    </div>
  )
}

export default Address