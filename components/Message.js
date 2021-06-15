import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/About.module.css'

const Message = () => {
  return (
    <div className={styles.messageContainer}>
      
      <div className={styles.card}>
        <div className={styles.cardMedia}>
          <Image src="/customer1.jpg" height={200} width={200} />
        </div>
        <div className={styles.details}>
          <p>Leo Messi</p>
          <span>Chief Executive Officer</span>
        </div>
        <div className={styles.cardText}>
          <p>“Ideas are easy. Execution is everything”.</p>
          <p>Simple yet forceful words by John Doerr keeps me energized everyday. I try to keep every side of business management well in track for smooth operations to ensure success and achieve goals.</p>
          <p>I’m deeply passionate about building team of loved and trusted people that helps individuals navigate their careers and help our organization attract-and-keep best people. </p>
          <p>My experience as a developer, and executive, helps me collaborate with my development team for on-time, disciplined software development advancing our client’s tech initiatives.</p>
        </div>
        <div className={styles.cardLinks}>
          <Link href="/"><i className="fab fa-instagram-square fa-2x"></i></Link>
          <Link href="/"><i className="fab fa-linkedin fa-2x"></i></Link>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardMedia}>
          <Image src="/customer2.jpg" height={200} width={200} />
        </div>
        <div className={styles.details}>
          <p>Cristiano Ronaldo</p>
          <span>Co-founder</span>
        </div>
        <div className={styles.cardText}>
          <p>Technology is constantly changing, new languages, libraries, platforms and trends need to be researched and understood.</p>
          <p>My job is to know our clients technologies, what they want to achieve and how we can provide the right skilled developers. Developers aren’t created equal, and have all learnt a mix of skills that need to complement your team.</p>
          <p>I can also assist with solution architecture decisions, technology roadmaps and development team leadership.</p>
        </div>
        <div className={styles.cardLinks}>
          <Link href="/"><i className="fab fa-instagram-square fa-2x"></i></Link>
          <Link href="/"><i className="fab fa-linkedin fa-2x"></i></Link>
        </div>
      </div>

    </div>
  )
}

export default Message
