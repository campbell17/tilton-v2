import Layout from '../components/layout'
import Feature from '../components/feature'
import ContentPhotos from '../components/content-photos'
import AboutStart from '../components/about-start'
import Testimonial from '../components/testimonial'

export default function About() {
  return (
    <Layout fullbleed>
      <AboutStart />
      <Testimonial />
      <Feature />      
      <ContentPhotos />
    </Layout>
  )
}
