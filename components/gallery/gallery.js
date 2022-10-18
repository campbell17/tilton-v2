import { useState } from 'react';
import GallerySlideover from './gallery-slideover'
import GalleryItem from './gallery-item'


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

  const projectData = [
    { 
      id: 0,
      link: "/projects/fulcrum", 
      project: "From", 
      company: "Epix",
      src: "/images/cover-art/from.jpg", 
      title: "", 
      color: "bg-[#192427]", 
      subtitle: "", 
      cta: "Watch Now", 
      ctaicon: "", 
      year: "2022", 
      desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu.", 
      trackname1: "From Main Theme (from the TV series 'From')", 
      trackname2: "Driving in Circles (from the TV series 'From')", 
      trackname3: "Stone in the Cellar (from the TV series 'From')", 
      trackname4: "Pray with Me (from the TV series 'From')", 
      trackname5: "Messages in the Bottles (from the TV series 'From')", 
      tracksource1: "/assets/files/music/christilton_from_01_from-main-theme.mp3", 
      tracksource2: "/assets/files/music/christilton_from_02_driving-in-circles.mp3", 
      tracksource3: "/assets/files/music/christilton_from_03_stone-in-the-cellar.mp3", 
      tracksource4: "/assets/files/music/christilton_from_04_pray-with-me.mp3", 
      tracksource5: "/assets/files/music/christilton_from_05_messages-in-the-bottles.mp3", 
    },
    { id: 1, link: "/projects/fulcrum", project: "Assassin's Creed Unity", company:'', src: "/images/cover-art/assassins-creed-unity.jpg", title: "", color: "bg-[#849CA8]", subtitle: "", cta: "Listen on Spotify", ctaIcon: "", year: "2021-2022", desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent.", tracknames: [ "track1b", "track2", "track3", "track4", "track5" ], trackSources: [ '', '', '', '', '' ], trackLinks: ['', '', '', '', '']},
    { id: 2, link: "/projects/fulcrum", project: "Fringe", company:'', src: "/images/cover-art/fringe-season-4.jpg", title: "", color: "", subtitle: "", cta: "Listen on Spotify", ctaIcon: "", year: "2020", desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent.", tracknames: [ "track1c", "track2", "track3", "track4", "track5" ], trackSources: [ '', '', '', '', '' ], trackLinks: ['', '', '', '', '']},
    { id: 3, link: "/projects/fulcrum", project: "Sim City", company:'', src: "/images/cover-art/sim-city.jpg", title: "", color: "", subtitle: "", cta: "Listen on Spotify", ctaIcon: "", year: "2019", desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent.", tracknames: [ "track1d", "track2", "track3", "track4", "track5" ], trackSources: [ '', '', '', '', '' ], trackLinks: ['', '', '', '', '']},
    { id: 4, link: "/projects/fulcrum", project: "Zoo", company:'', src: "/images/cover-art/zoo.jpg", title: "", color: "", subtitle: "", cta: "", ctaIcon: "Watch Now", year: "2018", desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent.", tracknames: [ "track1e", "track2", "track3", "track4", "track5" ], trackSources: [ '', '', '', '', '' ], trackLinks: ['', '', '', '', '']},
    { id: 5, link: "/projects/fulcrum", project: "Black", company:'last item', src: "/images/cover-art/black.jpg", title: "", color: "", subtitle: "", cta: "Listen on Spotify", ctaIcon: "", year: "2017", desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent.", tracknames: [ "track1f", "track2", "track3", "track4", "track5" ], trackSources: [ '', '', '', '', '' ], trackLinks: ['', '', '', '', '']},
  ]
  
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
  
    console.log(cover)
    console.log(cover.project)
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