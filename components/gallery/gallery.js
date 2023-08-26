import { useState } from 'react';
import GallerySlideover from './gallery-slideover'
import GalleryItem from './gallery-item'
import { projectData } from './gallery-data';

export default function Gallery(props) {
  const projectArray = props.projectItems;

  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [project, setProject] = useState();
  const [type, setType] = useState();
  const [src, setSrc] = useState();
  const [ctalink, setCtalink] = useState();
  const [company, setCompany] = useState();
  const [hero, setHero] = useState();
  const [alt, setAlt] = useState();
  const [color, setColor] = useState();
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [cta, setCta] = useState();
  const [ctabrand, setCtabrand] = useState();
  const [credits, setCredits] = useState();
  const [ctaicon, setCtaicon] = useState();
  const [year, setYear] = useState();
  const [desc, setDesc] = useState();
  const [mappedSongTitle, setMappedSongTitle] = useState();
  const [mappedSongUrl, setMappedSongUrl] = useState();

  const onCoverClick = (clickedCover) => {
    const cover = {
      ...clickedCover,
    };
    setOpen(true)
    setProject(cover.project)
    setType(cover.type)
    setId(cover.id)
    setSrc(cover.src)
    setCtalink(cover.ctalink)
    setCompany(cover.company)
    setHero(cover.hero)
    setAlt(cover.alt)
    setColor(cover.color)
    setTitle(cover.title)
    setSubtitle(cover.subtitle)
    setCta(cover.cta)
    setCtabrand(cover.ctabrand)
    setCredits(cover.credits)
    setCtaicon(cover.ctaicon)
    setYear(cover.year)
    setDesc(cover.desc)
    setMappedSongTitle(cover.mappedSongTitle)
    setMappedSongUrl(cover.mappedSongUrl)
  };
  return (
    <>
      <GalleryItem onCoverClick={onCoverClick} projectItems={projectArray} isHomepage={props.isHomepage} />
      <GallerySlideover 
        gallery={props.gallery}
        open={open} 
        items={props.projectItems} 
        setOpen={setOpen} 
        project={project} 
        projectItems={projectArray}
        type={type}
        id={id}
        key={id} 
        src={src} 
        ctalink={ctalink} 
        company={company} 
        hero={hero} 
        alt={alt}  
        color={color}
        title={title}
        subtitle={subtitle}
        cta={cta}
        ctabrand={ctabrand}
        credits={credits}
        ctaicon={ctaicon}
        year={year}
        desc={desc}
        mappedSongTitle={mappedSongTitle}
        mappedSongUrl={mappedSongUrl}
      />
    </>
  )
}