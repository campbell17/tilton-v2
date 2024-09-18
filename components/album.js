import React, { useEffect, useState, useRef } from 'react';
import AudioPlayer from './player/audio-player';
import TrackList from './player/track-list';

export default function Album(props) {    
  const [track, setTrack] = useState(props.mappedSongUrl);
  const [title, setTitle] = useState(props.mappedSongTitle);
  const [project, setProject] = useState(props.mappedSongProject);
  const [image, setImage] = useState(props.mappedSongImage);
  const [shouldPlay, setShouldPlay] = useState(false);
  const audioPlayer = useRef(null);

  const projectArray = props.projectItems;
  
  const trackClickHandler = (trackData) => {        
    setTrack(trackData.url);
    setTitle(trackData.title);
    setImage(trackData.image);
    setProject(trackData.project);
    setShouldPlay(trackData.shouldPlay);
  } 

  return (
    <div>
      <AudioPlayer 
        gallery={props.gallery} 
        className={props.className} 
        notpinned={props.notpinned} 
        forwardRef={audioPlayer} 
        key={track} 
        project={project} 
        image={image} 
        trackName={title} 
        trackSource={track}
        shouldPlay={shouldPlay}
      />
      <div className={`flex items-stretch flex-col ${props.gallery ? "" : "rounded-b-md"} overflow-hidden`}>
        <TrackList 
          album={props.album} 
          projectItems={projectArray} 
          gallery={props.gallery} 
          customTracks={props.customTracks} 
          id={props.id} 
          selectedIds={props.selectedIds} 
          trackClickHandler={trackClickHandler} 
        />
      </div>
    </div>
  )
}