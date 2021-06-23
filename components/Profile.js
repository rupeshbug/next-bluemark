import styles from '../styles/Profile.module.css'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Profile = () => {

  const [ref, inView] = useInView();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <h2>Get <span className={styles.highlighter}>insights</span> that help your business grow.</h2>
          <p>Discover the benefits of data analysis ad make better decision regarding Discover the benefits of data analysis ad make better decision regarding revenue, customer, experience, and overall efficiency.</p>
          <div className={styles.cardData} ref={ref}>
            <div>
              <CountUp end={inView ? 100 : 0} duration={3}></CountUp> +
              <p>companies</p>
            </div>
            <div>
              <CountUp end={inView ? 250 : 0} duration={3}></CountUp> +
              <p>templates</p>
            </div>
          </div>
        </div>
        <div className={styles.cardMedia}>
          <img className={styles.image} src="/profile-card.jpg" alt="card-image" />
          <div className={styles.overlay} />
        </div>
      </div>
    </div>
  )
}

export default Profile
