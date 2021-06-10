import HomeIntro from '../components/HomeIntro'
import HomeBanner from '../components/HomeBanner'
import TechStack from '../components/TechStack'
import Customers from '../components/Customers'
import Services from '../components/Services'
import Blog from '../components/Blog'

const IndexPage = () => {
  return ( 
    <>
      <HomeIntro />
      <HomeBanner />
      <TechStack />
      <Customers />
      <Services />
      <Blog />
    </>
   )
}
 
export default IndexPage