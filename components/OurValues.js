import styles from '../styles/About.module.css'

const OurValues = () => {
  return (
    <div className={styles.valuesContainer}>
      <div className={styles.description}>
        <h1>Values</h1>
        <p>Here are our company values. They are a core part of what makes us unique.</p>
      </div>
      <div className={styles.values}>
        
        <div className={styles.value}>
          <div><i className="fas fa-users fa-3x"></i></div>
          <h2>Team</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam consectetur adipiscing elit</p>
        </div>

        <div className={styles.value}>
          <div><i className="fas fa-cogs fa-3x"></i></div>
          <h2>Expertise</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam consectetur adipiscing elit</p>
        </div>

        <div className={styles.value}>
          <div><i className="fas fa-user-edit fa-3x"></i></div>
          <h2>Creativity</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam consectetur adipiscing elit</p>
        </div>

        <div className={styles.value}>
          <div><i className="fas fa-shield-alt fa-3x"></i></div>
          <h2>Trust</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam consectetur adipiscing elit</p>
        </div>

        <div className={styles.value}>
          <div><i className="far fa-hand-rock fa-3x"></i></div>
          <h2>Integrity</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam consectetur adipiscing elit</p>
        </div>

        <div className={styles.value}>
          <div><i className="fas fa-hands fa-3x"></i></div>
          <h2>Accountability</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam consectetur adipiscing elit</p>
        </div>

      </div>
    </div>
  )
}

export default OurValues
