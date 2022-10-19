import { useState } from 'react';
import GallerySlideover from './gallery-slideover'
import GalleryItem from './gallery-item'
import { projectData } from './gallery-data';

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [project, setProject] = useState();
  const [src, setSrc] = useState();
  const [link, setLink] = useState();
  const [company, setCompany] = useState();
  const [alt, setAlt] = useState();
  const [color, setColor] = useState();
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [cta, setCta] = useState();
  const [ctaicon, setCtaicon] = useState();
  const [year, setYear] = useState();
  const [desc, setDesc] = useState();
  const [trackname1, setTrackname1] = useState();
  const [trackname2, setTrackname2] = useState();
  const [trackname3, setTrackname3] = useState();
  const [trackname4, setTrackname4] = useState();
  const [trackname5, setTrackname5] = useState();
  const [tracksource1, setTracksource1] = useState();
  const [tracksource2, setTracksource2] = useState();
  const [tracksource3, setTracksource3] = useState();
  const [tracksource4, setTracksource4] = useState();
  const [tracksource5, setTracksource5] = useState();

  const onCoverClick = (clickedCover) => {
    const cover = {
      ...clickedCover,
    };
    setOpen(true)
    setProject(cover.project)
    setId(cover.id)
    setSrc(cover.src)
    setLink(cover.link)
    setCompany(cover.company)
    setAlt(cover.alt)
    setColor(cover.color)
    setTitle(cover.title)
    setSubtitle(cover.subtitle)
    setCta(cover.cta)
    setCtaicon(cover.ctaicon)
    setYear(cover.year)
    setDesc(cover.desc)
    setTrackname1(cover.trackname1)
    setTrackname2(cover.trackname2)
    setTrackname3(cover.trackname3)
    setTrackname4(cover.trackname4)
    setTrackname5(cover.trackname5)
    setTracksource1(cover.tracksource1)
    setTracksource2(cover.tracksource2)
    setTracksource3(cover.tracksource3)
    setTracksource4(cover.tracksource4)
    setTracksource5(cover.tracksource5)
  };

  return (
    <>
      <GalleryItem onCoverClick={onCoverClick} />
      <GallerySlideover 
        open={open} 
        items={projectData} 
        setOpen={setOpen} 
        project={project} 
        key={id} 
        src={src} 
        link={link} 
        company={company} 
        alt={alt}  
        color={color}
        title={title}
        subtitle={subtitle}
        cta={cta}
        ctaicon={ctaicon}
        year={year}
        desc={desc}
        trackname1={trackname1}
        trackname2={trackname2}
        trackname3={trackname3}
        trackname4={trackname4}
        trackname5={trackname5}
        tracksource1={tracksource1}
        tracksource2={tracksource2}
        tracksource3={tracksource3}
        tracksource4={tracksource4}
        tracksource5={tracksource5}  
      />
    </>
  )
}