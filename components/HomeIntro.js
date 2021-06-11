import styles from '../styles/Home.module.css'
import Button from '../components/Button'

const HomeIntro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.heading}>
          Quality Focused Software Development
        </div>
        <div className={styles.description}>
          <p>
            Get ready to take your business to the next level. <span>Blusheep</span> will help 
            you build <span>world class software</span> for your <span>world class business</span>.
          </p>
          <p>
            We love crafting great quality code without losing sight on the 
            importance of business idea validation.
          </p>
        </div>
      </div>
      <div className={styles.introImg} />
      <Button text={'REQUEST A QUOTE'} contained={true} />
      <Button text={'LEARN MORE'} contained={false} />
    </section>
  )
}

export default HomeIntro
