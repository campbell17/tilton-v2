import React from "react";
import { projectData } from '../components/gallery/gallery-data';

const ProjectDetail = ({ projectId }) => {
  const project = projectData.find((project) => project.id === projectId);

  // Check if the project is found
  if (!project) {
    return <div>Project not found</div>;
  }

  // const tracklist = projectData.map((project) => {
  //   if (project.songsdata) {
  //     return <div key={project.songsdata}>
  //       {project.songsdata.map((song) => (
  //         <TrackListItem key={song.url} title={song.title} url={song.url} trackClickHandler={props.trackClickHandler} />
  //       ))}
  //     </div>
  //   } else {
  //     return [];
  // }});  


  const tracklist = project.songsdata.map((song) => {
    if (project.songsdata) {

      return <li key={song.url}>
        {song.title} - <a href={song.url}>Play</a>
      </li>
    } else {
      return [];
  }});

  return (
    <div>
      <h2>{project.project}</h2>
      <ul>{tracklist}</ul>
    </div>
  );
};

export default ProjectDetail;