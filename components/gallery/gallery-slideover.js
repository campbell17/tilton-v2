import GallerySlideoverItem from "./gallery-slideover-item"

export default function GallerySlideover(props) {
  return (
    <GallerySlideoverItem
      open={props.open} 
      setOpen={props.setOpen} 
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
      trackname1={props.trackname1}
      trackname2={props.trackname2}
      trackname3={props.trackname3}
      trackname4={props.trackname4}
      trackname5={props.trackname5}
      tracksource1={props.tracksource1}
      tracksource2={props.tracksource2}
      tracksource3={props.tracksource3}
      tracksource4={props.tracksource4}
      tracksource5={props.tracksource5}
    />
  )
}