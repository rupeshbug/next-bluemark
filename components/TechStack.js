import Image from 'next/image'
import styles from '../styles/TechStack.module.css'

const TechStack = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>have a look at</h4>
        <h2>our technology stack</h2>
      </div>
      <div className={styles.techStack}>
        <div className={styles.img}>
          <Image 
            src="/node.png"
            height={90}
            width={90}
          />
        </div>
        <div className={styles.img}>
          <Image 
            src="/react.png"
            height={90}
            width={90}
          />
        </div>
        <div className={styles.img}>
          <Image 
            src="/node.png"
            height={90}
            width={90}
          />
        </div>
        <div className={styles.img}>
          <Image 
            src="/react.png"
            height={90}
            width={90}
          />
        </div>
      </div>
    </div>
  )
}

export default TechStack
