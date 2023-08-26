import GallerySlideoverItem from "./gallery-slideover-item"

export default function GallerySlideover(props) {
  const projectArray = props.projectItems;

  return (
    <GallerySlideoverItem
    {...props}
    key={props.id}
    projectItems={projectArray}
    />
  )
}