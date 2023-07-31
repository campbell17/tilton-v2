import { useRef, useState } from 'react'
import Link from 'next/link'
import { projectData } from './gallery-data'
import BlurImage from './gallery-item-image'

export default function GalleryItem(props) {
  const refId = useRef(0);
  // const mappedProject = projectData.map((data) => (data.songsdata[0]).title);
  // const mappedSongTitle = Array.from(mappedProject)[1];
  
  // console.log(mappedProject);
  // console.log(mappedSongTitle);
  

  const coverClickHandler = (event) => {
    event.preventDefault();
    const mappedProject = projectData.map((data) => (data.songsdata[0]).title);
    const mappedUrl = projectData.map((data) => (data.songsdata[0]).url);

    const allData = {
      src: event.target.getAttribute('src'),
      company: event.target.getAttribute('company'),
      hero: event.target.getAttribute('hero'),
      id: event.target.getAttribute('id'),
      project: event.target.getAttribute('project'),
      alt: event.target.getAttribute('alt'),
      color: event.target.getAttribute('color'),
      title: event.target.getAttribute('title'),
      subtitle: event.target.getAttribute('subtitle'),
      cta: event.target.getAttribute('cta'),
      ctabrand: event.target.getAttribute('ctabrand'),
      ctabrandhover: event.target.getAttribute('ctabrandhover'),
      ctaicon: event.target.getAttribute('ctaicon'),
      ctalink: event.target.getAttribute('ctalink'),
      year: event.target.getAttribute('year'),
      desc: event.target.getAttribute('desc'),      
      mappedSongTitle: Array.from(mappedProject)[event.target.getAttribute('id')],
      mappedSongUrl: Array.from(mappedUrl)[event.target.getAttribute('id')],
    };

    props.onCoverClick(allData);
    refId.current = allData.id;
    console.log(allData.id);
  }  

  let filteredProjectData;

  if (props.isHomepage) {
    filteredProjectData = projectData.filter((data) => data.homepage);
  } else {
    filteredProjectData = projectData.filter((data) => !data.homepageonly);
  }

  return (
    <ul role="list" ref={refId} className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
    {filteredProjectData.map((data) => (
      <li key={data.src} className="relative hover:shadow-lg transition-shadow">
        <div style={{ background: 'linear-gradient(171deg, rgba(31,41,55,1) 0%, rgba(0,0,0,1) 36%, rgba(51,65,85,1) 100%)' }} className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-900 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <Link href={`${data.hyperlink ? data.hyperlinkurl : "#"}`}>
            <a className="blurOnHover" key={data.id} onClick={!data.hyperlink ? coverClickHandler : undefined }>
              <BlurImage                 
                src={data.src} 
                company={data.company} 
                hero={data.hero}
                id={data.id}
                project={data.project} 
                alt={data.alt}  
                color={data.color}
                title={data.title}
                subtitle={data.subtitle}
                cta={data.cta}
                ctabrand={data.ctabrand}
                ctabrandhover={data.ctabrandhover}
                ctaicon={data.ctaicon}
                ctalink={data.ctalink} 
                year={data.year}
                desc={data.desc}
                mappedSongTitle={data.mappedSongTitle}
                mappedSongUrl={data.mappedSongUrl}
              />
            </a>
          </Link>
        </div>
      </li>
    ))}
  </ul>    
  )
}