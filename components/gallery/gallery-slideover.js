import GallerySlideoverItem from "./gallery-slideover-item"

export default function GallerySlideover(props) {
  // const projectArray = props.projectItems;
  const projectArray = props.sharedData;

  // console.log(projectArray);

  return (
    <GallerySlideoverItem
    {...props}
    key={props.id}
    projectItems={projectArray}
    />
  )
}