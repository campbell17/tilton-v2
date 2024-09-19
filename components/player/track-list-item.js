import React from 'react';
import Image from "next/legacy/image";

export default function TrackListItem(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.trackClickHandler({
      url: props.url,
      title: props.title,
      project: props.project,
      image: props.image,
      index: props.index,
      shouldPlay: true
    });
  };

  return (
    <button
      type="button"
      className={`border-b border-gray-700 pr-4 text-white text-xs flex text-left items-center w-full gap-1 shadow-sm bg-gray-800 hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${props.image ? "" : "p-3"} ${props.gallery === true ? "px-6" : ""}`}
      onClick={handleClick}
    >
      {props.image && 
        <span className="flex relative mr-2 p-2 pl-4">
          <Image
            src={props.image}
            alt={props.title}
            width={48}
            height={48}
            className="rounded-md border border-black"
          />
        </span>
      }
      <span className="flex items-center w-full">
        <span className="flex flex-1">{props.title}</span>
        {props.project && <span className="text-indigo-400 text-right pointer-events-none">{props.project}</span>}
      </span>
    </button>
  );
}
