import Image from 'next/image'
import styles from '../styles/Home.module.css'

const HomeBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerImg}>
        <Image
          src='/banner.png'
          height={300}
          width={300}
        />
      </div>
      <div className={styles.bannerContent}>
        <h1>What Use Is Creativity If It Doesn’t Bring Business?</h1>
        <p>
          Organization’s today operate in a highly competitive, global environment, making creativity crucial. Creativity is what fuels big ideas, challenges employees’ way of thinking, and opens the door to new business opportunities. Companies that actively foster creative thinking outperform their rivals in revenue growth, market share and competitive leadership. Our web Design & SEO experts focus on semantic and well-structured Google-friendly coding, responsive web design and implementation for maximum outputs.  We pride ourselves in  highly responsive and cooperative team approach to tailored customer service. Creative team with innovative approach for SEO and Web Design in Nepal.
        </p>  
     </div>
    </div>
  )
}

export default HomeBanner
