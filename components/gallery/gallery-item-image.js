import { useState } from 'react'
import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BlurImage(props) {
  const [isLoading, setLoading] = useState(true)
  
  return (
        <div style={{ aspectRatio: '1', overflow: 'hidden', borderRadius: 8, position: "relative" }}>
          <Image
            src={props.src} 
            ctalink={props.ctalink} 
            company={props.company} 
            project={props.project} 
            alt={props.alt}  
            color={props.color}
            title={props.title}
            subtitle={props.subtitle}
            cta={props.cta}
            ctaicon={props.ctaicon}
            year={props.year}
            desc={props.desc}
            trackname1={props.trackname1}
            trackname2={props.trackname2}
            trackname3={props.trackname3}
            trackname4={props.trackname4}
            trackname5={props.trackname5}
            tracksource1={props.tracksource1}
            tracksource2={props.tracksource2}
            tracksource3={props.tracksource3}
            tracksource4={props.tracksource4}
            tracksource5={props.tracksource5}
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
            {props.project}
          </h3>
        </div>
  )
}