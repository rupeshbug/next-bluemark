import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'
import Button from './Button'
import btnStyles from '../styles/Button.module.css'

const blogs = [
  {
    img: <Image src='/blogImg1.jpg' height={200} width={400} />,
    author: 'John Doe',
    date: '2020-01-20',
    tag: 'culture',
    title: 'Aligning Your Employees To Company Goals Using OKR',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
  },
  {
    img: <Image src='/blogImg2.jpg' height={200} width={400} />,
    author: 'John Doe',
    date: '2020-01-20',
    tag: 'startup',
    title: 'How to Keep Investors Happy While Building A Business?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
  },
  {
    img: <Image src='/blogImg1.jpg' height={200} width={400} />,
    author: 'John Doe',
    date: '2020-01-20',
    tag: 'startup',
    title: 'Aligning Your Employees To Company Goals Using OKR',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
  }
]

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>expert opinions</h4>
        <h2>from our blog</h2>
      </div>
      <div className={styles.cardContainer}>
        {blogs.map((blog, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardMedia}>
              { blog.img }
            </div>
            <Link href='/'><a className={styles.tag}>{ blog.tag }</a></Link>
            <div className={styles.authorInfo}>
              <div className={styles.date}>
                <i className="far fa-clock"></i>
                <p>{ blog.date }</p>
              </div>
              <div>
                <i className="fas fa-user"></i>
                <p>{ blog.author }</p>
              </div>
            </div>
            <div className={styles.blogText}>
              <h4>{ blog.title }</h4>
              <p>{ blog.description }</p>
            </div>
            <Link href="/"><a>Read More</a></Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
