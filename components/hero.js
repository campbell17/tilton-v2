import Announcement from "./announcement"
import { useRouter } from 'next/router'

const content = {
  homepage: {
    darkBG: true,
    videoSource1: null,
    videoSourceType1: null,
    videoSource2: null,
    videoSourceType2: null,
    heroBGStyles: "bg-blue-800 py-12 bg-cover bg-right bg-[url('/images/hero.jpg')]",
    announcementUrl: "https://press.epix.com/mgm-renews-sci-fi-horror-series-from-for-season-three/",
    announcementLinktext: "Read more",
    announcementContent: "MGM+ Renews Sci-Fi Horror Series FROM for Season Three",
    heading: "Chris Tilton",
    subheading: "Composer for television, film, and video games. Based in Los Angeles, CA.",
    ctaPrimaryUrl: null,
    ctaSecondaryUrl: null,
    // EXAMPLE
    // videoSource1: "/images/vid-example.webm",
    // videoSourceType1: "video/webm",
    // videoSource2: "/images/vid-example.mp4",
    // videoSourceType2: "video/mp4",
    // EXAMPLE
    // ctaPrimaryUrl: "#" ctaPrimaryText="Get started",
    // ctaSecondaryUrl: "#" ctaSecondaryText="Learn more",
  },
  music: {
    darkBG: true,
    videoSource1: null,
    videoSourceType1: null,
    videoSource2: null,
    videoSourceType2: null,
    heroBGStyles: "bg-blue-800 py-12 bg-cover bg-right bg-[url('/images/hero-sheet.jpg')]",
    announcementUrl: null,
    announcementLinktext: null,
    announcementContent: null,
    heading: "Music",
    subheading: "The full catalog.",
    ctaPrimaryUrl: null,
    ctaSecondaryUrl: null,
    // EXAMPLE
    // videoSource1: "/images/vid-example.webm",
    // videoSourceType1: "video/webm",
    // videoSource2: "/images/vid-example.mp4",
    // videoSourceType2: "video/mp4",
    // EXAMPLE
    // announcementUrl: "https://press.epix.com/mgm-renews-sci-fi-horror-series-from-for-season-three/",
    // announcementLinktext: "Read more",
    // announcementContent: "MGM+ Renews Sci-Fi Horror Series FROM for Season Three",
    // EXAMPLE
    // ctaPrimaryUrl: "#" ctaPrimaryText="Get started",
    // ctaSecondaryUrl: "#" ctaSecondaryText="Learn more",
  },
  about: {
    darkBG: true,
    videoSource1: null,
    videoSourceType1: null,
    videoSource2: null,
    videoSourceType2: null,
    heroBGStyles: "bg-blue-800 py-12 bg-cover bg-right bg-[url('/images/hero-desk.jpg')]",
    announcementUrl: null,
    announcementLinktext: null,
    announcementContent: null,
    heading: "About",
    subheading: "I write music. Currently: 'From' on MGM+ | Upcoming: Assassin's Creed Nexus VR | Previously: Fringe | Assassin's Creed Unity | SimCity | Zoo",
    ctaPrimaryUrl: null,
    ctaSecondaryUrl: null,
    // EXAMPLE
    // videoSource1: "/images/vid-example.webm",
    // videoSourceType1: "video/webm",
    // videoSource2: "/images/vid-example.mp4",
    // videoSourceType2: "video/mp4",
    // EXAMPLE
    // announcementUrl: "https://press.epix.com/mgm-renews-sci-fi-horror-series-from-for-season-three/",
    // announcementLinktext: "Read more",
    // announcementContent: "MGM+ Renews Sci-Fi Horror Series FROM for Season Three",
    // EXAMPLE
    // ctaPrimaryUrl: "#" ctaPrimaryText="Get started",
    // ctaSecondaryUrl: "#" ctaSecondaryText="Learn more",
  },  
}

const homepage = content.homepage;
const musicpage = content.music;
const aboutpage = content.about;


// I want the return statement to say currentContent.{currentPage}.contentthing

export default function Hero({announcementData}) {
  const router = useRouter();

  const currentContent =
  router.pathname === "/"
    ? homepage
    : router.pathname === "/music"
    ? musicpage
    : router.pathname === "/about"
    ? aboutpage
    : null; // Provide a default value if none of the conditions match
  
  return (
    <div className={`${currentContent.videoSource1 ? "relative py-12 overflow-hidden" : currentContent.heroBGStyles}`}> {/* BG image and styles are declared as props */}
      {/* Video BG if applicable */}
      {currentContent.videoSource1 ?
        <video className="absolute top-0 left-0 object-cover w-screen h-screen" autoPlay muted loop id="bgvid">
          <source src={currentContent.videoSource1} type={currentContent.videoSourceType1} />
          <source src={currentContent.videoSource2} type={currentContent.videoSourceType2} />
        </video> : null }

        {/* Text container */}
        <div className="relative isolate px-6 lg:px-8">
          {/* Inner text container */}
          <div className="mx-auto max-w-2xl py-32 sm:py-24">
            {/* Announcement if applicable */}
            {announcementData.show === true && 
              <div className="hidden sm:mb-4 sm:flex sm:justify-center">
                <div className={"transition-all duration-300 relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20" + `${currentContent.darkBG && " text-white ring-gray-100/10 hover:ring-gray-100/20 bg-black/30 hover:bg-black/50"}` }>
                  {announcementData.content}{' '}
                  <a href={announcementData.url} target="_blank" rel="noreferrer" className={"font-semibold text-indigo-600" + `${currentContent.darkBG && " text-indigo-300 hover:text-indigo-400 mix-blend-difference"}` }>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {announcementData.urltext} <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            }
            {/* Heading */}
            <div className="text-center">
              <h1 className={"text-5xl font-bold tracking-tight sm:text-8xl text-gray-900" + `${currentContent.darkBG && " text-white"}` }>
                {currentContent.heading}
              </h1>
              {/* Subheading */}
              <p className={"mt-6 text-lg leading-8 text-gray-600" + `${currentContent.darkBG && " text-white"}` }>
                {currentContent.subheading}
              </p>
              {/* CTA if applicable */}
              {currentContent.ctaPrimaryUrl != null ? 
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href={currentContent.ctaPrimaryUrl}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {currentContent.ctaPrimaryText}
                </a>
                {currentContent.ctaSecondaryUrl && <a href={currentContent.ctaSecondaryUrl} className={"text-sm font-semibold leading-6 text-gray-900" + `${currentContent.darkBG && " text-white"}` }>
                  {currentContent.ctaSecondaryText} <span aria-hidden="true">→</span>
                </a>}
              </div>
              : null}
            </div>
          </div>
        </div>
      </div>
  )
}