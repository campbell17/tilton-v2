import Layout from '../components/layout'
import AudioPlayer from '../components/player/audio-player'
import Hero from '../components/hero'

export default function FringeFriday() {
  return (
    <Layout>
      <Hero 
        darkBG
        heroBGStyles="bg-blue-800 py-12 bg-cover bg-top bg-[url('/images/hero-fringe-friday.jpg')]"
        heading="Fringe Friday" 
        subheading="Take a listen to the Other Side every Friday."
      />
      <AudioPlayer fringe notpinned="true" className="rounded-b-lg" project="Project Name" image="/images/cover-art/fringe-season-4.jpg" trackName="Newton's Last Mission" trackSource="/music/christilton_fringe_04_newtons-last-mission_excerpt.mp3"  />
    </Layout>
  )
}
