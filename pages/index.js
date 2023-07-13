import Layout from '../components/layout'
import Gallery from '../components/gallery/gallery'
import DarkFeature from '../components/dark-feature'
import Hero from '../components/hero'
import Album from '../components/album'

export default function Home() {
  const customTracks = [
    // Define your custom tracks here
    { title: 'Custom Track 1', url: 'https://example.com/track1' },
    { title: 'Custom Track 2', url: 'https://example.com/track2' },
  ];

  return (
    <Layout>
        <Hero 
          darkBG
          heroBGStyles="bg-blue-800 py-12 bg-cover bg-right bg-[url('/images/hero.jpg')]"
          announcement 
          announcementUrl="https://press.epix.com/mgm-renews-sci-fi-horror-series-from-for-season-three/" 
          announcementLinktext="Read more" 
          announcementContent="MGM+ Renews Sci-Fi Horror Series FROM for Season Three"
          heading="Chris Tilton" 
          subheading="Composer. Los Angeles, CA."
          // cta ctaPrimaryUrl="#" ctaPrimaryText="Get started" ctaSecondaryUrl="#" ctaSecondaryText="Learn more"
        />
        <div className="m-8">
          <Album mappedSongUrl={customTracks[0].url} mappedSongTitle={customTracks[0].title} customTracks={customTracks} />        
        </div>
        <div className="m-8">
          <Gallery isHomepage={true} />        
        </div>
        <DarkFeature />
    </Layout>
  )
}
