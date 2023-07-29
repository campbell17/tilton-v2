import Layout from '../components/layout'
import Gallery from '../components/gallery/gallery'
import DarkFeature from '../components/dark-feature'
import Hero from '../components/hero'
import Album from '../components/album'
import LogoCloud from '../components/logo-cloud'

export default function Home() {
  const customTracks = [
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
    {
      "title": "A New Day in the Old Town [Excerpt]",
      "project": "Fringe (TV Series)",
      "url": "/music/christilton_fringe_01_a-new-day-in-the-old-town_excerpt.mp3",
      "image": "/images/cover-art/fringe-season-4.jpg", 
    },
    {
      "title": "Lion Attack",
      "url": "/music/christilton_zoo_02_lion-attack.mp3",
      "project": "Zoo (TV Series)",
      "image": "/images/cover-art/zoo.jpg", 
    },
    {
      "title": "Divide Main Theme",
      "url": "/music/christilton_divide_01_divide-main-theme.mp3",
      "project": "Divide (Video Game)",
      "image": "/images/cover-art/divide.jpg", 
    },
    {
      "title": "The Adventures of Moxie",
      "project": "Moxie (Robot Companion)",
      "url": "/music/christilton_moxie_01_the-adventures-of-moxie.mp3",
      "image": "/images/cover-art/moxie.jpg", 
    },
    {
      "title": "Funeral Pyre Straits [Excerpt]",
      "url": "/music/christilton_fringe_05_funeral-pyre-straits_excerpt.mp3",
      "project": "Fringe (TV Series)",
      "image": "/images/cover-art/fringe-season-4.jpg", 
    },
    {
      "title": "The Last Monarch [Excerpt]",
      "url": "/music/christilton_zoo_03_the-last-monarch.mp3",
      "project": "Zoo (TV Series)",
      "image": "/images/cover-art/zoo.jpg", 
    },
    {
      "title": "Ocillating Rift",
      "url": "/music/christilton_ctoriginal_02_oscillating-rift.mp3",
      "project": "Personal Project",
      "image": "/images/cover-art/tilton-i-selections.jpg", 
    },    
  ];

  return (
    <Layout>
        <Hero 
          darkBG
          // videoSource1="/images/vid-example.webm"
          // videoSourceType1="video/webm"
          // videoSource2="/images/vid-example.mp4"
          // videoSourceType2="video/mp4"
          heroBGStyles="bg-blue-800 py-12 bg-cover bg-right bg-[url('/images/hero.jpg')]"
          announcementUrl="https://press.epix.com/mgm-renews-sci-fi-horror-series-from-for-season-three/" 
          announcementLinktext="Read more" 
          announcementContent="MGM+ Renews Sci-Fi Horror Series FROM for Season Three"
          heading="Chris Tilton" 
          subheading="Composer. Los Angeles, CA."
          // ctaPrimaryUrl="#" ctaPrimaryText="Get started" 
          // ctaSecondaryUrl="#" ctaSecondaryText="Learn more"
        />
        <div className="m-8">
          <Album mappedSongUrl={customTracks[0].url} mappedSongProject={customTracks[0].project} mappedSongImage={customTracks[0].image} mappedSongTitle={customTracks[0].title} customTracks={customTracks} />        
        </div>
        <LogoCloud />
        <div className="m-8">
          <Gallery gallery isHomepage={true} />        
        </div>
        <DarkFeature />
    </Layout>
  )
}
