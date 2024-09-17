import { useState, useEffect } from 'react';
import Layout from '../components/layout'
import AudioPlayer from '../components/player/audio-player'
import sanity from '../sanity/lib/sanity'
import { fringeFridayQuery } from '../sanity/lib/sanity.queries'

export default function FringeFriday({ fringeFridayData }) {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const getRandomTrack = () => {
    const randomIndex = Math.floor(Math.random() * fringeFridayData.songs.length);
    return fringeFridayData.songs[randomIndex];
  };

  const updateTrackOnFriday = () => {
    const today = new Date();
    const isFriday = today.getDay() === 5;
    
    if (isFriday || !selectedTrack) {
      setSelectedTrack(getRandomTrack());
    }
  };

  useEffect(() => {
    updateTrackOnFriday();
    const interval = setInterval(updateTrackOnFriday, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (!selectedTrack) {
    return <Layout><div>Loading...</div></Layout>;
  }

  return (
    <Layout>
      <div className="bg-blue-800 py-12 bg-cover bg-top bg-[url('/images/hero-fringe-friday.jpg')] rounded-t-lg">
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-24 lg:py-12">
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-white">Fringe Friday</h1>
              <p className="mt-6 text-lg leading-8 text-white">Take a listen to the Other Side every Friday.</p>
            </div>
          </div>
        </div>
      </div>

      <AudioPlayer
        fringe
        notpinned="true"
        className="rounded-b-lg"
        image="/images/cover-art/fringe-season-4.jpg"
        trackName={selectedTrack.trackName}
        trackSource={selectedTrack.trackSource}
      />    
    </Layout>
  )
}

export async function getStaticProps() {
  const fringeFridayData = await sanity.fetch(fringeFridayQuery);
  return {
    props: { fringeFridayData },
    revalidate: 60 * 60 * 24, // Revalidate once per day
  };
}
