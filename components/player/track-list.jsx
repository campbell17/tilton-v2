import React from 'react';
import TrackListItem from './track-list-item';
import { projectData } from '../../components/gallery/gallery-data';

export default function TrackList(props) {
  const projectArray = props.projectItems;
  // console.log(projectArray);

  let tracklist = [];

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
    tracklist = projectArray.map((project) => {
      // console.log(project)
      if (project.songs) {
        return project.songs.map((song, index) => (
          console.log(song),
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
    });
  }

  const selectedTracklist = tracklist.slice(parseInt(props.index), parseInt(props.index) + 1);

  return <>{selectedTracklist}</>;
}
