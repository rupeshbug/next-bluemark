import Image from 'next/image'
import styles from '../styles/ServicesHome.module.css'

const services = [
  {
    img: <Image src='/web-development.png' height={100} width={100} />,
    title: 'web development',
    description: 'Web development is a broad term for the work involved in developing a web site for the internet'
  },
  {
    img: <Image src='/mobile-app.png' height={100} width={100} />,
    title: 'mobile app development',
    description: 'Social Media Marketing in Nepal Social media marketing, or SMM, is a form of internet marketing that implements various social media networks'
  },
  {
    img: <Image src='/web-hosting.png' height={100} width={100} />,
    title: 'web hosting',
    description: 'When a hosting provider allocates space on a web server for a website to store its files, they are hosting a website'
  },
  {
    img: <Image src='/content-creation.jpg' height={100} width={100} />,
    title: 'content creation',
    description: 'Web development is a broad term for the work involved in developing a web site for the internet'
  },
  {
    img: <Image src='/social-marketing.png' height={100} width={100} />,
    title: 'social marketing',
    description: 'Social Media Marketing in Nepal Social media marketing, or SMM, is a form of internet marketing that implements various social media networks'
  },
  {
    img: <Image src='/it-consulting.jpg' height={100} width={100} />,
    title: 'it consulting',
    description: 'When a hosting provider allocates space on a web server for a website to store its files, they are hosting a website'
  }
]

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>we are flexible with</h4>
        <h2>our engagement models</h2>
      </div>
      <div className={styles.services}>
        {services.map((service, index) => (
          <div key={index} className={styles.service}>
            { service.img }
            <h3>{ service.title }</h3>
            <p>{ service.description }</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
