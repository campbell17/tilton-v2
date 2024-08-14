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
  const [company, setCompany] = useState();
  const [hero, setHero] = useState(props.projectItems[0].hero.url);
  const [cover, setCover] = useState(props.projectItems[0].cover.url);
  const [alt, setAlt] = useState();
  const [color, setColor] = useState();
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [credits, setCredits] = useState();
  const [cta, setCta] = useState();
  const [ctabrand, setCtabrand] = useState();
  const [ctalink, setCtalink] = useState();
  const [ctaicon, setCtaicon] = useState();
  const [buttontype, setButtontype] = useState();
  const [ctaalt, setCtaalt] = useState();
  const [ctabrandalt, setCtabrandalt] = useState();
  const [ctalinkalt, setCtalinkalt] = useState();
  const [ctaiconalt, setCtaiconalt] = useState();
  const [buttontypealt, setButtontypealt] = useState();
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
      setCompany(clickedProjectItem.company);
      setHero(clickedProjectItem.hero);
      setCover(clickedProjectItem.cover);
      setAlt(clickedProjectItem.alt);
      setColor(clickedProjectItem.color);
      setTitle(clickedProjectItem.title);
      setSubtitle(clickedProjectItem.subtitle);
      setCta(clickedProjectItem.cta);
      setCtalink(clickedProjectItem.ctalink);
      setCtabrand(clickedProjectItem.ctabrand);
      setCtaicon(clickedProjectItem.ctaicon);
      setButtontype(clickedProjectItem.buttontype);
      setCtaalt(clickedProjectItem.ctaalt);
      setCtalinkalt(clickedProjectItem.ctalinkalt);
      setCtabrandalt(clickedProjectItem.ctabrandalt);
      setCtaiconalt(clickedProjectItem.ctaiconalt);
      setButtontypealt(clickedProjectItem.buttontypealt);
      setYear(clickedProjectItem.year);
      setCredits(clickedProjectItem.credits);
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
        company={company} 
        hero={hero} 
        alt={alt}  
        color={color}
        title={title}
        subtitle={subtitle}
        cta={cta}
        ctalink={ctalink} 
        ctabrand={ctabrand}
        credits={credits}
        ctaicon={ctaicon}
        buttontype={buttontype}
        ctaalt={ctaalt}
        ctalinkalt={ctalinkalt} 
        ctabrandalt={ctabrandalt}
        ctaiconalt={ctaiconalt}
        buttontypealt={buttontypealt}
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