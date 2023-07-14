import GallerySlideoverItem from "./gallery-slideover-item"

export default function GallerySlideover(props) {
  return (
    <GallerySlideoverItem
      gallery={props.gallery}
      open={props.open} 
      setOpen={props.setOpen} 
      id={props.id}
      key={props.id} 
      project={props.project} 
      src={props.src} 
      ctalink={props.ctalink} 
      company={props.company} 
      alt={props.alt}  
      color={props.color}
      title={props.title}
      subtitle={props.subtitle}
      cta={props.cta}
      ctaicon={props.ctaicon}
      year={props.year}
      desc={props.desc}
      mappedSongTitle={props.mappedSongTitle}
      mappedSongUrl={props.mappedSongUrl}
    />
  )
}