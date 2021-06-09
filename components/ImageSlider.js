import Image from 'next/image'
import styles from '../styles/ImageSlider.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const images = ["/customer1.jpg", "/customer2.jpg"]

const ImageSlider = () => {
  return (
    <div className={styles.container}>
      <Carousel 
        className={styles.slider}
        showIndicators={false} 
        showThumbs={false}
        swipeable={true}
        showStatus={false}
        autoPlay={true}
        showArrows={false}
        infiniteLoop={true}
        renderArrowPrev={(onClick) => 
          <span onClick={onClick} className={styles.left}>
            <i className="fas fa-arrow-left"></i>
          </span>}
        renderArrowNext={(onClick) =>
          <span onClick={onClick} className={styles.right}>
            <i className="fas fa-arrow-right"></i>
          </span>}
      >
        <div className={styles.customerSection}>
          <Image
            src={images[0]}
            height={300}
            width={320}
          />
          <div className={styles.customerInfo}>
            <h2>Leo Messi</h2>
            <h4>Athelete</h4>
            <p>I just launched my completely revamped website and couldn’t be any happier with the way my website turned out, and our experience working with Truemark Technology. When I met with them to discuss the project, I was very impressed with how easy they are to communicate with. They understood the requirement in short notice .</p>
            <span>
              <i className="fas fa-quote-right fa-2x"></i>
            </span>
          </div>
        </div>
        <div className={styles.customerSection}>
          <Image
            src={images[1]}
            height={300}
            width={320}
          />
          <div className={styles.customerInfo}>
            <h2>Cristiano Ronaldo</h2>
            <h4>Athelete</h4>
            <p>I just launched my completely revamped website and couldn’t be any happier with the way my website turned out, and our experience working with Truemark Technology. When I met with them to discuss the project, I was very impressed with how easy they are to communicate with. They understood the requirement in short notice.</p>
            <span>
              <i className="fas fa-quote-right fa-2x"></i>
            </span>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default ImageSlider
