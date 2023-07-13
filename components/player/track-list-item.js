import React from 'react';

export default function TrackListItem(props) {
  return (
    <button
      key={props.url}
      url={props.url}
      title={props.title}        
      type="button"
      className="rounded-full border border-indigo-600 p-2 text-white text-xs flex items-center gap-1 shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={props.trackClickHandler}
    >
      load {props.title}
    </button>
  );
}
