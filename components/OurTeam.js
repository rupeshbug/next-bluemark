import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/About.module.css'

const OurTeam = () => {
  return (
    <div className={styles.teamContainer}>
      <h1>Our Team</h1>
      <div className={styles.ourTeam}>
        
        <div className={styles.member}>
          <div>
            <Image src="/team/member1.jpg" height={300} width={300} />
          </div>
          <div className={styles.intro}>
            <h3>Ram Doe</h3>
            <p>Web Developer</p>
            <div className={styles.socialLinks}>
              <Link href="/"><i className="fab fa-facebook-f"></i></Link>
              <Link href="/"><i className="fab fa-instagram"></i></Link>
            </div>
          </div>
        </div>

        <div className={styles.member}>
          <div>
            <Image src="/team/member2.jpg" height={300} width={300} />
          </div>
          <div className={styles.intro}>
            <h3>Hari Doe</h3>
            <p>Web Developer</p>
            <div className={styles.socialLinks}>
              <Link href="/"><i className="fab fa-facebook-f"></i></Link>
              <Link href="/"><i className="fab fa-instagram"></i></Link>
            </div>
          </div>
        </div>

        <div className={styles.member}>
          <div>
            <Image src="/team/member3.jpg" height={300} width={300} />
          </div>
          <div className={styles.intro}>
            <h3>Krishna Doe</h3>
            <p>Web Developer</p>
            <div className={styles.socialLinks}>
              <Link href="/"><i className="fab fa-facebook-f"></i></Link>
              <Link href="/"><i className="fab fa-instagram"></i></Link>
            </div>
          </div>
        </div>

        <div className={styles.member}>
          <div>
            <Image src="/team/member1.jpg" height={300} width={300} />
          </div>
          <div className={styles.intro}>
            <h3>Shyam Doe</h3>
            <p>Web Developer</p>
            <div className={styles.socialLinks}>
              <Link href="/"><i className="fab fa-facebook-f"></i></Link>
              <Link href="/"><i className="fab fa-instagram"></i></Link>
            </div>
          </div>
        </div>

        <div className={styles.member}>
          <div>
            <Image src="/team/member2.jpg" height={300} width={300} />
          </div>
          <div className={styles.intro}>
            <h3>Gopal Doe</h3>
            <p>Web Developer</p>
            <div className={styles.socialLinks}>
              <Link href="/"><i className="fab fa-facebook-f"></i></Link>
              <Link href="/"><i className="fab fa-instagram"></i></Link>
            </div>
          </div>
        </div>

        <div className={styles.member}>
          <div>
            <Image src="/team/member3.jpg" height={300} width={300} />
          </div>
          <div className={styles.intro}>
            <h3>Mukunda Doe</h3>
            <p>Web Developer</p>
            <div className={styles.socialLinks}>
              <Link href="/"><i className="fab fa-facebook-f"></i></Link>
              <Link href="/"><i className="fab fa-instagram"></i></Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OurTeam
