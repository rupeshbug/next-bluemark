import styles from '../styles/Customers.module.css'
import ImageSlider from './ImageSlider'

const Customers = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h4>about our services</h4>
        <h2>from our customers</h2>
      </div>
      <ImageSlider />
    </section>
  )
}

export default Customers
