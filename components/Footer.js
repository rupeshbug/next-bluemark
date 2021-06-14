import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {

  const currentDate = new Date()

  return (
    <footer className={styles.footer}>
      <section className={styles.footerTop}>
        <div className={styles.navigation}>
          <h2 className={styles.footerHead}>Navigate</h2>
          <div className={styles.links}>
            <div>
              <Link href="/"><a>Home</a></Link>
              <Link href="/"><a>Services</a></Link>
              <Link href="/"><a>About</a></Link>
            </div>
            <div>
              <Link href="/"><a>Portfolio</a></Link>
              <Link href="/"><a>Blog</a></Link>
              <Link href="/"><a>Careers</a></Link>
            </div>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <h2 className={styles.footerHead}>Join Us</h2>
          <Link href="/"><i className="fab fa-facebook fa-2x"></i></Link>
          <Link href="/"><i className="fab fa-instagram-square fa-2x"></i></Link>
          <Link href="/"><i className="fab fa-linkedin fa-2x"></i></Link>
        </div>
        <div className={styles.contactInfo}>
          <h2 className={styles.footerHead}>Contact Us</h2>
          <div>
            <h4>Bluesheep Pvt.Ltd.</h4>
            <p>9812345670</p>
            <p>9876543210</p>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>
      </section>
      <section className={styles.footerBottom}>
        <div>
          <p>&copy; {currentDate.getFullYear()} Bluesheep Nepal Pvt.Ltd.
          <br />All rights reserved</p>
        </div>
        <div className={styles.img}>
          <Link href="/"><a><Image src='/logo.svg' height={60} width={150} /></a></Link>
        </div>
      </section>
    </footer>
  )
}

export default Footer
