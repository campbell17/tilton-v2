import React, { useEffect, useState, useRef } from 'react';
import AudioPlayer from './player/audio-player';
import TrackList from './player/track-list';

export default function Album(props) {    
  const [track, setTrack] = useState(props.mappedSongUrl);
  const [title, setTitle] = useState(props.mappedSongTitle);
  const [project, setProject] = useState(props.mappedSongProject);
  const [image, setImage] = useState(props.mappedSongImage);
  const audioPlayer = useRef(null);

  const trackClickHandler = (event) => {        
    event.preventDefault();
    const trackData = {
      track: event.target.getAttribute('url'),
      title: event.target.getAttribute('title'),
      image: event.target.getAttribute('image'),
      project: event.target.getAttribute('project'),
    };
    onTrackClick(trackData);

    if(event.detail == 2){
			console.log("Double Clicked");
		}

  } 
  const onTrackClick = (clickedTrack) => {
    const trackinfo = {
      ...clickedTrack,
    };

    setTrack(trackinfo.track)
    setTitle(trackinfo.title)
    setImage(trackinfo.image)
    setProject(trackinfo.project)
  };
  return (
    <div>
      <AudioPlayer gallery={props.gallery} className={props.className} notpinned={props.notpinned} forwardRef={audioPlayer} key={track} project={project} image={image} trackName={title} trackSource={track}  />
      <div className={`flex items-stretch flex-col ${props.gallery ? "" : "rounded-b-md"} overflow-hidden`}>
        <TrackList gallery={props.gallery} customTracks={props.customTracks} id={props.id} selectedIds={props.selectedIds} trackClickHandler={trackClickHandler} />
      </div>
    </div>
  )
}