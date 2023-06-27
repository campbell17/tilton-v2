import { useState } from 'react';
import GallerySlideover from './gallery-slideover'
import GalleryItem from './gallery-item'
import { projectData } from './gallery-data';

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [project, setProject] = useState();
  const [src, setSrc] = useState();
  const [ctalink, setCtalink] = useState();
  const [company, setCompany] = useState();
  const [alt, setAlt] = useState();
  const [color, setColor] = useState();
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [cta, setCta] = useState();
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
    setId(cover.id)
    setSrc(cover.src)
    setCtalink(cover.ctalink)
    setCompany(cover.company)
    setAlt(cover.alt)
    setColor(cover.color)
    setTitle(cover.title)
    setSubtitle(cover.subtitle)
    setCta(cover.cta)
    setCtaicon(cover.ctaicon)
    setYear(cover.year)
    setDesc(cover.desc)
    setMappedSongTitle(cover.mappedSongTitle)
    setMappedSongUrl(cover.mappedSongUrl)
  };
  return (
    <>
      <GalleryItem onCoverClick={onCoverClick} />
      <GallerySlideover 
        open={open} 
        items={projectData} 
        setOpen={setOpen} 
        project={project} 
        id={id}
        key={id} 
        src={src} 
        ctalink={ctalink} 
        company={company} 
        alt={alt}  
        color={color}
        title={title}
        subtitle={subtitle}
        cta={cta}
        ctaicon={ctaicon}
        year={year}
        desc={desc}
        mappedSongTitle={mappedSongTitle}
        mappedSongUrl={mappedSongUrl}
      />
    </>
  )
}