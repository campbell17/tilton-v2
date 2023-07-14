import React, { useEffect, useState, useRef } from 'react';
import AudioPlayer from './player/audio-player';
import TrackList from './player/track-list';
import { projectData } from '../components/gallery/gallery-data';

export default function Album(props) {    
  const [track, setTrack] = useState(props.mappedSongUrl);
  const [title, setTitle] = useState(props.mappedSongTitle);
  const audioPlayer = useRef(null);

  const trackClickHandler = (event) => {    
    if (event.target !== event.currentTarget) {
      // The event originated from a child element
      return;
    }
    console.log("clicked!")
    props.isPlaying === true ? audioPlayer.current.pause() : null
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
  console.log(onTrackClick);
  return (
    <div className={`${props.gallery ? "mx-2" : ""}`}>
      <div className="flex items-stretch flex-col">
        <TrackList customTracks={props.customTracks} id={props.id} selectedIds={props.selectedIds} trackClickHandler={trackClickHandler} />
      </div>
      <AudioPlayer forwardRef={audioPlayer} key={track} trackName={title} trackSource={track}  />
    </div>
  )
}

// todo - make CustomAlbum, CustomTrackList, and CustomTrackListItem components to be able to do 1-off albums &shrug;