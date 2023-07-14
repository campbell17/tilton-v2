import Layout from '../components/layout'
import Gallery from '../components/gallery/gallery'
import DarkFeature from '../components/dark-feature'
import Hero from '../components/hero'
import Album from '../components/album'

export default function Home() {
  const customTracks = [
    // Define your custom tracks here
    {
      "title": "From Main Theme [Excerpt]",
      "project": "From (TV Series)",
      "url": "/music/christilton_from_01_from-main-theme.mp3",
      "image": "/images/cover-art/from.jpg", 
    },
    {
      "title": "Unity [Excerpt]",
      "url": "/music/christilton_acunity_01_unity_excerpt.mp3",
      "project": "Assassin's Creed Unity (Video Game)",
      "image": "/images/cover-art/assassins-creed-unity.jpg", 
    },
    {
      "title": "Sim City Theme [Excerpt]",
      "url": "/music/christilton_simcity_01_simcity-theme_excerpt.mp3",
      "project": "Sim City (Video Game)",
      "image": "/images/cover-art/sim-city.jpg", 
    },

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
          <Gallery gallery isHomepage={true} />        
        </div>
        <DarkFeature />
    </Layout>
  )
}
