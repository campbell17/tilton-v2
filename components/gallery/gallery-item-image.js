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
            hero={props.hero}
            id={props.id} 
            project={props.project} 
            type={props.type} 
            alt={props.alt}  
            color={props.color}
            title={props.title}
            subtitle={props.subtitle}
            cta={props.cta}
            ctabrand={props.ctabrand}
            credits={props.credits}
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
            className={`
              ${isLoading
                ? 'gallery-image'
                : 'gallery-image'}
            `}
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
              isLoading ? 'h5 tile-title'
                        : 'h5 tile-title',
                        'text-white font-bold uppercase'
            )}>
            {props.project}
          </h3>
        </div>
  )
}