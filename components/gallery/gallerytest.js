import { useState } from 'react';
import GallerySlideover from './gallery-slideover'
import GalleryItem from './gallery-item'
import Image from 'next/image';
import { projectData } from './gallery-data';

export default function Gallerytest(props) {
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

  const dataArray = props.projectItems;

  return (
    <>
      <GalleryItem onCoverClick={onCoverClick} projectItems={props.projectItems} isHomepage={props.isHomepage} />
      <GallerySlideover 
        gallery={props.gallery}
        open={open} 
        items={props.projectItems} 
        setOpen={setOpen} 
        project={project} 
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
      {/* <Image
        src={props.projectItems[0].cover.url}
        alt="consoles"
        width={1080}
        height={720}
        className="w-[36rem] max-w-none shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem] md:-ml-4 lg:-ml-0 relative object-cover rounded-2xl"
      /> */}
      {dataArray.map((item) => (
        <div key={item._id}>
        <h2>{item.project}</h2>
        <h3>{item.year}</h3>
        </div>
      ))}
    </>
  )
}
