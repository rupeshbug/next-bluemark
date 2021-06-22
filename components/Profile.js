import styles from '../styles/Profile.module.css'
import CountUp from 'react-countup'

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <h2>Get <span className={styles.highlighter}>insights</span> that help your business grow.</h2>
          <p>Discover the benefits of data analysis ad make better decision regarding Discover the benefits of data analysis ad make better decision regarding revenue, customer, experience, and overall efficiency.</p>
          <div className={styles.cardData}>
            <div>
              <CountUp start={0} end={100} duration={2}></CountUp> +
              <p>companies</p>
            </div>
            <div>
              <CountUp start={0} end={250} duration={2}></CountUp> +
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
