import Announcement from "./announcement"

export default function Hero(props) {

  return (
    <div className="overflow-hidden rounded-t-lg">
      <div className={`${props.videoSource1 ? "relative py-12" : props.heroBGStyles}`}> {/* BG image and styles are declared as props */}
        {props.videoSource1 ?
          <video className="absolute top-0 left-0 object-cover w-screen h-screen" autoPlay muted loop id="bgvid">
            <source src={props.videoSource1} type={props.videoSourceType1} />
            <source src={props.videoSource2} type={props.videoSourceType2} />
          </video> : null }
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-24 lg:py-12">
            {props.announcementContent != null ? 
              <div className="hidden sm:mb-4 sm:flex sm:justify-center">
                <div className={"transition-all duration-300 relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20" + `${props.darkBG && " text-white ring-gray-100/10 hover:ring-gray-100/20 bg-black/30 hover:bg-black/50"}` }>
                  {props.announcementContent}{' '}
                  <a href={props.announcementUrl} target="_blank" rel="noreferrer" className={"font-semibold text-indigo-600" + `${props.darkBG && " text-indigo-300 hover:text-indigo-400 mix-blend-difference"}` }>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {props.announcementLinktext} <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            : null
            }
            <div className="text-center">
              <h1 className={"text-5xl font-bold tracking-tight sm:text-6xl text-gray-900" + `${props.darkBG && " text-white"}` }>
                {props.heading}
              </h1>
              <p className={"mt-6 text-lg leading-8 text-gray-600" + `${props.darkBG && " text-white"}` }>
                {props.subheading}
              </p>
              {props.ctaPrimaryUrl != null ? 
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href={props.ctaPrimaryUrl}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {props.ctaPrimaryText}
                </a>
                {props.ctaSecondaryUrl && <a href={props.ctaSecondaryUrl} className={"text-sm font-semibold leading-6 text-gray-900" + `${props.darkBG && " text-white"}` }>
                  {props.ctaSecondaryText} <span aria-hidden="true">→</span>
                </a>}
              </div>
              : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}