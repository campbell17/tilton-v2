import React, { useEffect, useState } from 'react';
import Layout from '../components/layout'
import { AudioPlayer } from '../components/player/audio-player'
import { songsdata } from '../components/player/audios'
import TrackList from '../components/player/track-list';

export default function Music(props) {    
  const [track, setTrack] = useState();
  const [title, setTitle] = useState();

  console.log(songsdata)

  const trackClickHandler = (event) => {
    event.preventDefault();
    const trackData = {
      track: event.target.getAttribute('url'),
      title: event.target.getAttribute('title'),
    };
    onTrackClick(trackData);
    console.log(event)
  } 
  const onTrackClick = (clickedTrack) => {
    const trackinfo = {
      ...clickedTrack,
    };
    setTrack(trackinfo.track)
    setTitle(trackinfo.title)
  };
  return (
    <Layout>
      <AudioPlayer key={track} trackName={title} trackSource={track}  />
      {songsdata.map((song) => (
        <button
          key={song.url}
          url={song.url}
          title={song.title}
          type="button"
          className="rounded-full border border-indigo-600 p-2 text-white text-xs flex items-center gap-1 shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={trackClickHandler}
        >
          load {song.title}
        </button>
      ))}

      <TrackList />
    </Layout>
  )
}
