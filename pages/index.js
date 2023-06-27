import Layout from '../components/layout'
import Gallery from '../components/gallery/gallery'
import DarkFeature from '../components/dark-feature'
import Hero from '../components/hero'

export default function Home() {
  return (
    <Layout>
        <Hero 
          announcement announcementUrl="#" announcementLinktext="Read more" announcementContent="Watch season two of From, out now."
          heading="Chris Tilton" subheading="Composer. Los Angeles, CA."
          // cta ctaPrimaryUrl="#" ctaPrimaryText="Get started" ctaSecondaryUrl="#" ctaSecondaryText="Learn more"
        />
        <DarkFeature />
        <div className="m-8">
          <Gallery />        
        </div>
    </Layout>
  )
}
