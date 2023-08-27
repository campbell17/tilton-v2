import React from 'react';
import TrackListItem from './track-list-item';

export default function TrackList(props) {
  const projectArray = props.projectItems;
  
  if (props.customTracks) {
    return props.customTracks.map((track, index) => (
      <TrackListItem
        key={track.url}
        gallery={props.gallery}
        title={track.title}
        url={track.url}
        image={track.image}
        project={track.project}
        index={index}
        trackClickHandler={props.trackClickHandler}
      />
    ));
  } else {
      if (props.album.songs) {
        return props.album.songs.map((song, index) => (
          <TrackListItem
            key={song.url}
            gallery={props.gallery}
            title={song.title}
            url={song.url}
            index={index}
            trackClickHandler={props.trackClickHandler}
          />
        ));
      } else {
        return [];
      }
  }
} 