import React, { useEffect, useState, useRef } from 'react';
import AudioPlayer from './player/audio-player';
import TrackList from './player/track-list';
import { projectData } from '../components/gallery/gallery-data';

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
    <div className={`${props.gallery ? "mx-2" : ""}`}>
      <div className="flex items-stretch flex-col">
        <TrackList customTracks={props.customTracks} id={props.id} selectedIds={props.selectedIds} trackClickHandler={trackClickHandler} />
      </div>
      <AudioPlayer forwardRef={audioPlayer} key={track} project={project} image={image} trackName={title} trackSource={track}  />
    </div>
  )
}

// todo - make CustomAlbum, CustomTrackList, and CustomTrackListItem components to be able to do 1-off albums &shrug;