import React, { useEffect, useState } from 'react';
import AudioPlayer from './player/audio-player';
import TrackList from './player/track-list';
import { projectData } from '../components/gallery/gallery-data';

export default function Album(props) {    
  const [track, setTrack] = useState(props.mappedSongUrl);
  const [title, setTitle] = useState(props.mappedSongTitle);

  const trackClickHandler = (event) => {    
    event.preventDefault();
    const trackData = {
      track: event.target.getAttribute('url'),
      title: event.target.getAttribute('title'),
    };
    onTrackClick(trackData);
  } 
  const onTrackClick = (clickedTrack) => {
    const trackinfo = {
      ...clickedTrack,
    };
    setTrack(trackinfo.track)
    setTitle(trackinfo.title)
  };
  
  return (
    <>
      <TrackList id={props.id} trackClickHandler={trackClickHandler} />
      <AudioPlayer key={track} trackName={title} trackSource={track}  />
    </>
  )
}
