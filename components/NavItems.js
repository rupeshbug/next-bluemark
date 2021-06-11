import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'

const NavItems = ({ setShow }) => {

  const router = useRouter()

  const handleClick = () => {
    setShow(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.navLinksSm}>
        <Link href="/">
          <a onClick={handleClick} className={router.pathname == '/' ? styles.active : ''}>home</a>
        </Link>
        <Link href="/services">
          <a onClick={handleClick} className={router.pathname == '/services' ? styles.active : ''}>services</a>
        </Link>
        <Link href="/about">
          <a onClick={handleClick} className={router.pathname == '/about' ? styles.active : ''}>about Us</a>
        </Link>
        <Link href="/portfolio">
          <a onClick={handleClick} className={router.pathname == '/portfolio' ? styles.active : ''}>portfolio</a>
        </Link>
        <Link href="/blog">
          <a onClick={handleClick} className={router.pathname == '/blog' ? styles.active : ''}>blog</a>
        </Link>
        <Link href="/careers">
          <a onClick={handleClick} className={router.pathname == '/careers' ? styles.active : ''}>careers</a>
        </Link> 
      </div>
      <div className={styles.socialLinks}>
        <h3>Find Us:</h3>
        <Link href="/"><i onClick={handleClick} className="fab fa-facebook fa-2x"></i></Link>
        <Link href="/"><i onClick={handleClick} className="fab fa-instagram-square fa-2x"></i></Link>
        <Link href="/"><i onClick={handleClick} className="fab fa-linkedin fa-2x"></i></Link>
      </div>
    </div>
  )
}

export default NavItems
