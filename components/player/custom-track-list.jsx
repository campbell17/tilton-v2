import React from 'react';
import TrackListItem from './track-list-item';

export default function CustomTrackList({ tracklistItems }, ...props ) {
  return (
    <div>
      {tracklistItems.map((item) => (
        <TrackListItem
          key={item.url}
          title={item.title}
          url={item.url}
          trackClickHandler={props.trackClickHandler}
        />
      ))}
    </div>
  );
}
