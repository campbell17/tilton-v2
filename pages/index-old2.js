import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'
import GallerySlideover from '../components/gallery-slideover-old'
import { files } from '../components/gallery-slideover'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {  
  const [open, setOpen] = useState(true)
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [color, setColor] = useState('')

  const coverClickHandler = (event) => {
    event.preventDefault();

    const project = event.target.getAttribute('project');
    const company = event.target.getAttribute('company');
    const colorUpdate = event.target.getAttribute('color');
    const year = event.target.getAttribute('year');
    const cta = event.target.getAttribute('cta');
    const ctaicon = event.target.getAttribute('ctaIcon');
    const desc = event.target.getAttribute('desc');
    const trackname1 = event.target.getAttribute('trackname1');
    const trackname2 = event.target.getAttribute('trackname2');
    const trackname3 = event.target.getAttribute('trackname3');
    const trackname4 = event.target.getAttribute('trackname4');
    const trackname5 = event.target.getAttribute('trackname5');
    const tracksource1 = event.target.getAttribute('tracksource1');
    const tracksource2 = event.target.getAttribute('tracksource2');
    const tracksource3 = event.target.getAttribute('tracksource3');
    const tracksource4 = event.target.getAttribute('tracksource4');
    const tracksource5 = event.target.getAttribute('tracksource5');

    setOpen(true);
    setColor(colorUpdate);
    setTitle(project);
    console.log(event);
  }

  return (
    <Layout>
      <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {files.map((file) => (
          <li key={file.src} className="relative hover:shadow-lg transition-shadow">
            <div style={{ background: 'linear-gradient(171deg, rgba(31,41,55,1) 0%, rgba(0,0,0,1) 36%, rgba(51,65,85,1) 100%)' }} className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-900 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <Link href="#">
                <a className="blurOnHover" key={file.project} onClick={coverClickHandler}>
                  <BlurImage 
                    src={file.src} 
                    link={file.link} 
                    company={file.company} 
                    project={file.project} 
                    alt={file.alt}  
                    color={file.color}
                    title={file.title}
                    subtitle={file.subtitle}
                    cta={file.cta}
                    ctaicon={file.ctaIcon}
                    year={file.year}
                    desc={file.desc}
                    trackname1={file.trackname1}
                    trackname2={file.trackname2}
                    trackname3={file.trackname3}
                    trackname4={file.trackname4}
                    trackname5={file.trackname5}
                    tracksource1={file.tracksource1}
                    tracksource2={file.tracksource2}
                    tracksource3={file.tracksource3}
                    tracksource4={file.tracksource4}
                    tracksource5={file.tracksource5}
                  />
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ul>      
        <GallerySlideover key={files.project} />
    </Layout>
  )
}
function BlurImage(file) {
  const [isLoading, setLoading] = useState(true)
  
  return (
        <div style={{ aspectRatio: '1', overflow: 'hidden', borderRadius: 8, position: "relative" }}>
          <Image
            src={file.src} 
            link={file.link} 
            company={file.company} 
            project={file.project} 
            alt={file.alt}  
            color={file.color}
            title={file.title}
            subtitle={file.subtitle}
            cta={file.cta}
            ctaicon={file.ctaIcon}
            year={file.year}
            desc={file.desc}
            trackname1={file.trackname1}
            trackname2={file.trackname2}
            trackname3={file.trackname3}
            trackname4={file.trackname4}
            trackname5={file.trackname5}
            tracksource1={file.tracksource1}
            tracksource2={file.tracksource2}
            tracksource3={file.tracksource3}
            tracksource4={file.tracksource4}
            tracksource5={file.tracksource5}
            layout='responsive'
            width={100}
            height={100}
            objectFit="cover"
            className={
              isLoading
                ? 'gallery-image transitioning'
                : 'gallery-image transitioned'
            }
            onLoadingComplete={() => setLoading(false)}
          />
          <h3 style={{ 
              position: "absolute", 
              width: "100%", 
              height: "100%", 
              top: "calc(50% - 1.2em)", 
              textAlign: "center", 
              zIndex: 0 
            }} 
              className={classNames(
              isLoading ? 'h5 tile-title transitioning'
                        : 'h5 tile-title transitioned',
                        'text-white font-bold uppercase'
            )}>
            {file.project}
          </h3>
        </div>
  )
}