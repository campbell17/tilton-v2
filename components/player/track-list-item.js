import React from 'react';
import Image from "next/legacy/image";

export default function TrackListItem(props) {
  // const { index } = props;
  // console.log(index)
  return (
    <button
      index={props.index}
      key={props.url}
      url={props.url}
      title={props.title}     
      project={props.project} 
      image={props.image}  
      type="button"
      className={`border-b border-gray-700 pr-4 text-white text-xs flex text-left items-center w-full gap-1 shadow-sm bg-gray-800 hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${props.image ? "" : "p-3"} ${props.gallery === true ? "px-6" : ""}`}
      onClick={props.trackClickHandler}
    >
    {props.image ? 
      <span className="flex relative mr-2 p-2 pl-4">
        <Image onClick={props.trackClickHandler} url={props.url} title={props.title}       
          src={props.image}
          alt={props.image}
          width={48}
          height={48}
          className="rounded-md border border-black"
        />
      </span> : null}
      <span onClick={props.trackClickHandler} url={props.url} title={props.title} project={props.project} image={props.image} className="flex items-center w-full">
        <span onClick={props.trackClickHandler} url={props.url} title={props.title} project={props.project} image={props.image} className="flex flex-1">{props.title}</span>
        {props.project ? <span onClick={props.trackClickHandler} project={props.project} image={props.image} className="text-indigo-400 text-right pointer-events-none">{props.project}</span> : null}
      </span>
    </button>
  );
}
