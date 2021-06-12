import Image from 'next/image'
import styles from '../styles/Services.module.css'

const services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.service}>
        <div className={styles.img}> 
          <Image src='/services/web-dev.jpeg' height={400} width={600} />
        </div>
        <div className={styles.contents}>
          <h2 className={styles.header}>web development</h2>
          <p>Your website will make or break your growth. If the layout and messaging of your homepage and product pages aren't done correctly, you'll be losing tens of thousands per month in sales.</p>
          <p>Our team will design a gorgeous, high-converting website that speaks properly to your ideal customer – ultimately leading to increased revenue.</p>
        </div>
      </div>
      <div className={styles.service}>
        <div className={`${styles.contents} ${styles.orderedContents}`}>
          <h2 className={styles.header}>mobile app development</h2>
          <p>Your website will make or break your growth. If the layout and messaging of your homepage and product pages aren't done correctly, you'll be losing tens of thousands per month in sales.</p>
          <p>Our team will design a gorgeous, high-converting website that speaks properly to your ideal customer – ultimately leading to increased revenue.</p>
        </div>
        <div className={styles.img}>
          <Image src='/services/mobile-app.jpeg' height={400} width={600} />
        </div>
      </div>
      <div className={styles.service}>
        <div className={styles.img}>
          <Image src='/services/hosting.jpg' height={400} width={600} />
        </div>
        <div className={styles.contents}>
          <h2 className={styles.header}>web hosting</h2>
          <p>Your website will make or break your growth. If the layout and messaging of your homepage and product pages aren't done correctly, you'll be losing tens of thousands per month in sales.</p>
          <p>Our team will design a gorgeous, high-converting website that speaks properly to your ideal customer – ultimately leading to increased revenue.</p>
        </div>
      </div>
      <div className={styles.service}>
        <div className={`${styles.contents} ${styles.orderedContents}`}>
          <h2 className={styles.header}>content creation</h2>
          <p>Your website will make or break your growth. If the layout and messaging of your homepage and product pages aren't done correctly, you'll be losing tens of thousands per month in sales.</p>
          <p>Our team will design a gorgeous, high-converting website that speaks properly to your ideal customer – ultimately leading to increased revenue.</p>
        </div>
        <div className={styles.img}>
          <Image src='/services/content.jpg' height={400} width={600} />
        </div>
      </div>
      <div className={styles.service}>
        <div className={styles.img}>
          <Image src='/services/marketing.jpg' height={400} width={600} />
        </div>
        <div className={styles.contents}>
          <h2 className={styles.header}>social marketing</h2>
          <p>Your website will make or break your growth. If the layout and messaging of your homepage and product pages aren't done correctly, you'll be losing tens of thousands per month in sales.</p>
          <p>Our team will design a gorgeous, high-converting website that speaks properly to your ideal customer – ultimately leading to increased revenue.</p>
        </div>
      </div>
      <div className={styles.service}>
        <div className={`${styles.contents} ${styles.orderedContents}`}>
          <h2 className={styles.header}>IT Consulting</h2>
          <p>Your website will make or break your growth. If the layout and messaging of your homepage and product pages aren't done correctly, you'll be losing tens of thousands per month in sales.</p>
          <p>Our team will design a gorgeous, high-converting website that speaks properly to your ideal customer – ultimately leading to increased revenue.</p>
        </div>
        <div className={styles.img}>
          <Image src='/services/consulting.jpg' height={400} width={600} />
        </div>
      </div>
    </section>
  )
}

export default services
