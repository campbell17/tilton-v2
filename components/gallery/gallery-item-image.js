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
            id={props.id} 
            project={props.project} 
            alt={props.alt}  
            color={props.color}
            title={props.title}
            subtitle={props.subtitle}
            cta={props.cta}
            ctaicon={props.ctaicon}
            year={props.year}
            desc={props.desc}
            songsdata={props.songsdata}
            mappedsongtitle={props.mappedsongtitle}
            mappedsongurl={props.mappedsongurl}
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