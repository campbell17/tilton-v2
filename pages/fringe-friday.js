import { useState, useEffect } from 'react';
import Layout from '../components/layout'
import AudioPlayer from '../components/player/audio-player'
import Hero from '../components/hero'
import fringeTracks from '../components/fringe-tracks'

export default function FringeFriday() {
  const getRandomTrack = () => {
    const randomIndex = Math.floor(Math.random() * fringeTracks.length);
    return fringeTracks[randomIndex];
  };
  
  // State to hold the selected track
  const [selectedTrack, setSelectedTrack] = useState(getRandomTrack());
  
  // Function to update the selected track every Friday
  const updateTrackOnFriday = () => {
    const today = new Date();
    const isFriday = today.getDay() === 5; // Friday is represented by the number 5 in JavaScript's Date object
    
    if (isFriday) {
      setSelectedTrack(getRandomTrack());
    }
  };
  
  // useEffect hook to run the update function when the component mounts and every day at midnight
  useEffect(() => {
    updateTrackOnFriday();
    const interval = setInterval(updateTrackOnFriday, 24 * 60 * 60 * 1000); // 24 hours interval
    return () => clearInterval(interval);
  });
  

  return (
    <Layout>
      <Hero 
        darkBG
        heroBGStyles="bg-blue-800 py-12 bg-cover bg-top bg-[url('/images/hero-fringe-friday.jpg')]"
        heading="Fringe Friday" 
        subheading="Take a listen to the Other Side every Friday."
      />
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
