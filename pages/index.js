import HomeIntro from '../components/HomeIntro'
import HomeBanner from '../components/HomeBanner'
import Profile from '../components/Profile'
import Customers from '../components/Customers'
import Services from '../components/Services'
import Blog from '../components/Blog'

const IndexPage = () => {
  return ( 
    <>
      <HomeIntro />
      <HomeBanner />
      <Profile />
      <Customers />
      <Services />
      <Blog />
    </>
   )
}
 
export default IndexPage