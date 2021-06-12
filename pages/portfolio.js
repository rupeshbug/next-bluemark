import Image from 'next/image'
import styles from '../styles/Portfolio.module.css'
import Button from '../components/Button'
import btnStyles from '../styles/Button.module.css'

const portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.portfolio}>
        <div className={styles.portfolioDetails}>
          <span>android</span>
          <span>ios</span>
          <h2>trivia day</h2>
          <p>Trivia Day is a competitive trivia game where teams, families, and friends can get together for a few brief rounds of challenging trivia that leads to a ton of fun.</p>
          <Button 
            className={btnStyles.btnContained} 
            text="VIEW CASE STUDY" 
            contained={false}
          />
        </div>
        <div className={styles.portfolioImg}>
          <Image
            src="/trivia-day.png"
            height={300}
            width={400}
          />
        </div>
      </div>
    </div>
  )
}

export default portfolio
