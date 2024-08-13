import { useState } from 'react';
import GallerySlideover from './gallery-slideover'
import GalleryItem from './gallery-item'

export default function Gallery(props) {
  const projectArray = props.projectItems;

  const [open, setOpen] = useState(false);
  const [album, setAlbum] = useState();
  const [id, setId] = useState(props.projectItems[0]._id);
  const [project, setProject] = useState(props.projectItems[0].project);
  const [type, setType] = useState();
  const [src, setSrc] = useState();
  const [ctalink, setCtalink] = useState();
  const [company, setCompany] = useState();
  const [hero, setHero] = useState(props.projectItems[0].hero.url);
  const [cover, setCover] = useState(props.projectItems[0].cover.url);
  const [alt, setAlt] = useState();
  const [color, setColor] = useState();
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [cta, setCta] = useState();
  const [ctabrand, setCtabrand] = useState();
  const [credits, setCredits] = useState();
  const [ctaicon, setCtaicon] = useState();
  const [buttontype, setButtontype] = useState();
  const [year, setYear] = useState();
  const [desc, setDesc] = useState();
  const [songs, setSongs] = useState();
  const [mappedSongTitle, setMappedSongTitle] = useState();
  const [mappedSongUrl, setMappedSongUrl] = useState();

  const onCoverClick = (data) => {
    setOpen(true);
  
    // Find the clicked project item in the projectArray
    const clickedProjectItem = projectArray.find(item => item._id === data._id);

    // Set the states based on the clicked project item
    if (clickedProjectItem) {
      setProject(clickedProjectItem.project);
      setAlbum(clickedProjectItem.album);
      setType(clickedProjectItem.type);
      setId(clickedProjectItem._id);
      setSrc(clickedProjectItem.src);
      setCtalink(clickedProjectItem.ctalink);
      setCompany(clickedProjectItem.company);
      setHero(clickedProjectItem.hero);
      setCover(clickedProjectItem.cover);
      setAlt(clickedProjectItem.alt);
      setColor(clickedProjectItem.color);
      setTitle(clickedProjectItem.title);
      setButtontype(clickedProjectItem.buttontype);
      setSubtitle(clickedProjectItem.subtitle);
      setCta(clickedProjectItem.cta);
      setCtabrand(clickedProjectItem.ctabrand);
      setCredits(clickedProjectItem.credits);
      setCtaicon(clickedProjectItem.ctaicon);
      setYear(clickedProjectItem.year);
      setDesc(clickedProjectItem.desc);
      setSongs([clickedProjectItem.album]); // Set only the clicked album in the songs state
      setMappedSongTitle(clickedProjectItem.album.songs[0].title);
      setMappedSongUrl(clickedProjectItem.album.songs[0].url);
    }
  };
  
  return (
    <>
      <GalleryItem onCoverClick={onCoverClick} projectItems={projectArray} isHomepage={props.isHomepage} />
      <GallerySlideover 
        gallery={props.gallery}
        open={open} 
        setOpen={setOpen} 
        project={project} 
        projectItems={projectArray}
        type={type}
        id={id}
        key={id} 
        src={src} 
        cover={cover}
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
        buttontype={buttontype}
        year={year}
        desc={desc}
        album={album}
        songs={songs}
        mappedSongTitle={mappedSongTitle}
        mappedSongUrl={mappedSongUrl}
      />
    </>
  )
}