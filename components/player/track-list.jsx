import React from 'react';
import TrackListItem from './track-list-item';
import { projectData } from '../../components/gallery/gallery-data';

export default function TrackList(props) {
  let tracklist = [];

  if (props.customTracks) {
    return props.customTracks.map((track) => (
      <TrackListItem
        key={track.url}
        title={track.title}
        url={track.url}
        trackClickHandler={props.trackClickHandler}
      />
    ));
  } else {
    tracklist = projectData.map((project) => {
      if (project.songsdata) {
        return project.songsdata.map((song) => (
          <TrackListItem
            key={song.url}
            title={song.title}
            url={song.url}
            trackClickHandler={props.trackClickHandler}
          />
        ));
      } else {
        return [];
      }
    });
  }

  const selectedTracklist = tracklist.slice(parseInt(props.id), parseInt(props.id) + 1);

  return <div>{selectedTracklist}</div>;
}
