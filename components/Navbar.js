import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'
import { useState } from 'react'
import NavItems from './NavItems'

const Navbar = () => {

  const router = useRouter()

  const [show, setShow] = useState(false)

  return (
    <nav style={{ backgroundColor: show ? '#0F3041' : '#FFFFFF' }} className={styles.navbar}>
      <div className={styles.navBrand}>
        <Link href="/">
          <a><Image
          src="/logo.svg"
          height={60}
          width={150}
          /></a>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/" >
          <a className={router.pathname == '/' ? styles.active : ''}>home</a>
        </Link>
        <Link href="/services">
          <a className={router.pathname == '/services' ? styles.active : ''}>services</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname == '/about' ? styles.active : ''}>about Us</a>
        </Link>
        <Link href="/portfolio">
          <a className={router.pathname == '/portfolio' ? styles.active : ''}>portfolio</a>
        </Link>
        <Link href="/blog">
          <a className={router.pathname == '/blog' ? styles.active : ''}>blog</a>
        </Link>
        <Link href="/careers">
          <a className={router.pathname == '/careers' ? styles.active : ''}>careers</a>
        </Link> 
      </div>
      <div style={{ color: show && '#FFFFFF' }} className={styles.menu} onClick={() => setShow(!show)}>
        <i className={show ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}></i>
      </div>
      { show ? <NavItems setShow={setShow} /> : '' }
    </nav>
  )
}

export default Navbar
