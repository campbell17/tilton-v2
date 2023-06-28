import React from 'react';
import TrackListItem from './track-list-item';
import { projectData } from '../../components/gallery/gallery-data';

export default function TrackList(props) {
  const tracklist = projectData.map((project) => {
    if (project.songsdata) {
      return (
        <div key={project.songsdata}>
          {project.songsdata.map((song) => (
            <TrackListItem
              key={song.url}
              title={song.title}
              url={song.url}
              trackClickHandler={props.trackClickHandler}
            />
          ))}
        </div>
      );
    } else {
      return [];
    }
  });

  const selectedTracklist = tracklist.slice(parseInt(props.id), parseInt(props.id) + 1);

  return <div>{selectedTracklist}</div>;
}
