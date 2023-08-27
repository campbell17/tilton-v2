import GallerySlideoverItem from "./gallery-slideover-item"

export default function GallerySlideover(props, {data}) {
  // const projectArray = props.projectItems;
  const projectArray = props.projectItems;

  console.log(props.album);

  return (
    <GallerySlideoverItem
    {...props}
    {...data}
    key={props.id}
    projectItems={projectArray}
    />
  )
}