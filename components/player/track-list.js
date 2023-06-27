import React, {useState, useRef, useEffect} from 'react';
import TrackListItem from './track-list-item';
import { from, assassins } from './audios';
import { projectData } from '../../components/gallery/gallery-data';

  
export default function TrackList(props) {
//   const project = projectData.find(p => p.id === props.id);
//   const songsdata = project ? project.songsdata : [];

//   return (
//     <>
//       {songsdata.map((song) => (
//         <TrackListItem key={song.url} project={props.project} title={song.title} url={song.url} trackClickHandler={props.trackClickHandler} />
//       ))}
//     </>
//   );
// }
  const tracklist = projectData.map((project) => {
    if (project.songsdata) {
      return <div key={project.songsdata}>
        {project.songsdata.map((song) => (
          <TrackListItem key={song.url} title={song.title} url={song.url} trackClickHandler={props.trackClickHandler} />
          ))}
      </div>
    } else {
      return [];
    }
  });  

  return (
    <div>
      {(() => {
        switch (props.id) {
          case "0":
            return tracklist.slice(0, 1);
          case "1":
            return tracklist.slice(1, 2);
          case "2":
            return tracklist.slice(2, 3);
          case "3":
            return tracklist.slice(3, 4);
          case "4":
            return tracklist.slice(4, 5);
          case "5":
            return tracklist.slice(5, 6);
          case "6":
            return tracklist.slice(6, 7);
          case "7":
            return tracklist.slice(7, 8);
          case "8":
            return tracklist.slice(8, 9);
          case "9":
            return tracklist.slice(9, 10);
          default:
            return [];
        }
      })()}
    </div>
  );
}
    // NOTE for next time: the disconnect is the array doesn't know which album was clicked, therefore doesn't have the ID to target.
    
    //   if (songsdata) {
    //     return <ul key={songsdata}>
    //       {songsdata.slice(0, 5).map((song, index) => (
    //         <li key={index}>
    //           {song.title} - <a href={song.url}>Listen</a>
    //         </li>
    //       ))}
    //     </ul>
    //     } else {
    //       return [];
    //   }
    // };

// note: trying to utilize projectData for this file so I don't have to use 2 separate track title and url sources. 
// Maybe an if statement can help separate the albums from here