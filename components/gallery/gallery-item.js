import { useState } from 'react'
import Link from 'next/link'
import { projectData } from './gallery-data'
import BlurImage from './gallery-item-image'

export default function GalleryItem(props) {
  
  const coverClickHandler = (event) => {
    event.preventDefault();
    const allData = {
      project: event.target.getAttribute('project'),
      src: event.target.getAttribute('src'),
      company: event.target.getAttribute('company'),
      colorUpdate: event.target.getAttribute('color'),
      year: event.target.getAttribute('year'),
      cta: event.target.getAttribute('cta'),
      ctaicon: event.target.getAttribute('ctaIcon'),
      desc: event.target.getAttribute('desc'),
      trackname1: event.target.getAttribute('trackname1'),
      trackname2: event.target.getAttribute('trackname2'),
      trackname3: event.target.getAttribute('trackname3'),
      trackname4: event.target.getAttribute('trackname4'),
      trackname5: event.target.getAttribute('trackname5'),
      tracksource1: event.target.getAttribute('tracksource1'),
      tracksource2: event.target.getAttribute('tracksource2'),
      tracksource3: event.target.getAttribute('tracksource3'),
      tracksource4: event.target.getAttribute('tracksource4'),
      tracksource5: event.target.getAttribute('tracksource5'),
    };
    props.onCoverClick(allData);
    console.log(event)
  }  
  return (
    <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
    {projectData.map((data) => (
      <li key={data.src} className="relative hover:shadow-lg transition-shadow">
        <div style={{ background: 'linear-gradient(171deg, rgba(31,41,55,1) 0%, rgba(0,0,0,1) 36%, rgba(51,65,85,1) 100%)' }} className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-900 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <Link href="#">
            <a className="blurOnHover" key={data.project} onClick={coverClickHandler}>
              <BlurImage 
                src={data.src} 
                link={data.link} 
                company={data.company} 
                project={data.project} 
                alt={data.alt}  
                color={data.color}
                title={data.title}
                subtitle={data.subtitle}
                cta={data.cta}
                ctaicon={data.ctaIcon}
                year={data.year}
                desc={data.desc}
                trackname1={data.trackname1}
                trackname2={data.trackname2}
                trackname3={data.trackname3}
                trackname4={data.trackname4}
                trackname5={data.trackname5}
                tracksource1={data.tracksource1}
                tracksource2={data.tracksource2}
                tracksource3={data.tracksource3}
                tracksource4={data.tracksource4}
                tracksource5={data.tracksource5}
              />
            </a>
          </Link>
        </div>
      </li>
    ))}
  </ul>    
  )
}