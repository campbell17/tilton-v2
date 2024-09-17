import { useState, useEffect } from 'react';
import Layout from '../components/layout'
import AudioPlayer from '../components/player/audio-player'
import sanity from '../sanity/lib/sanity'
import { fringeFridayQuery } from '../sanity/lib/sanity.queries'

export default function FringeFriday({ fringeFridayData }) {
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    const selectTrackForWeek = () => {
      const now = new Date();
      const fridayMidnight = new Date(now);
      fridayMidnight.setDate(fridayMidnight.getDate() + (5 + 7 - fridayMidnight.getDay()) % 7);
      fridayMidnight.setHours(0, 0, 0, 0);

      let newTrack;
      // Check if there's a manually selected track in Sanity
      if (fringeFridayData.currentTrack !== undefined && fringeFridayData.songs[fringeFridayData.currentTrack]) {
        newTrack = fringeFridayData.songs[fringeFridayData.currentTrack];
      } else {
        // If no manual selection, check localStorage
        const storedTrack = localStorage.getItem('fringeFridayTrack');
        const storedExpiry = localStorage.getItem('fringeFridayExpiry');

        if (storedTrack && storedExpiry && new Date(storedExpiry) > now) {
          // Use the stored track if it's still valid
          newTrack = JSON.parse(storedTrack);
        } else {
          // Select a random track
          const newTrackIndex = Math.floor(Math.random() * fringeFridayData.songs.length);
          newTrack = fringeFridayData.songs[newTrackIndex];
        }
      }

      setSelectedTrack(newTrack);

      // Always update localStorage with the current selection
      localStorage.setItem('fringeFridayTrack', JSON.stringify(newTrack));
      localStorage.setItem('fringeFridayExpiry', fridayMidnight.toISOString());
    };

    selectTrackForWeek();
    // Set up an interval to check every hour if we need to update the track
    const interval = setInterval(selectTrackForWeek, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [fringeFridayData]);

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
    revalidate: 60 * 60, // Revalidate every hour
  };
}
