import React from 'react';
import Image from 'next/image';

export default function TrackListItem(props) {
  const { index } = props;

  return (
    <button
      index={props.index}
      key={props.url}
      url={props.url}
      title={props.title}      
      image={props.image}  
      type="button"
      className={`border-b border-indigo-600 pl-4 text-white text-xs flex items-center gap-1 shadow-sm bg-indigo-800 hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${index === 0 ? "rounded-t-lg overflow-hidden" : ""} ${props.image ? "" : "p-3"}`}
      onClick={props.trackClickHandler}
    >
      <span onClick={props.trackClickHandler} url={props.url} title={props.title} className="flex w-full">
        <span onClick={props.trackClickHandler} url={props.url} title={props.title} className="flex flex-1">{props.title}</span>
        {props.project ? <span className="text-indigo-400 pointer-events-none">{props.project}</span> : null}
      </span>
    {props.image ? 
      <span className="flex relative ml-2 border-l border-indigo-600">
        <Image onClick={props.trackClickHandler} url={props.url} title={props.title}       
          src={props.image}
          alt={props.image}
          width={64}
          height={64}
          className=""
        />
      </span> : null}
    </button>
  );
}
