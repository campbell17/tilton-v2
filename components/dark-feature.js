import Image from "next/image"

export default function DarkFeature() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-4 sm:px-6 sm:py-4 md:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-8 shadow-2xl sm:rounded-xl sm:px-16 md:flex md:gap-x-20 md:px-24 md:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center md:mx-0 md:flex-auto md:py-16 md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Representation
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">The Gorfaine/Schwartz Agency, Inc.<br/>Phone: 818.260.8500</p>
            <div className="mt-10 flex items-center justify-center gap-x-6 md:justify-start">
              <a href="https://www.gsamusic.com/contact-us/" className="text-sm font-semibold leading-6 text-white">
                Contact Gorfaine/Schwartz  <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 md:-mt-8">
            <Image
              className="absolute sm:-right-[0rem] md:-right-[20rem] lg:-right-[28rem] top-0 w-[30rem] max-w-none rounded-full bg-white/5 ring-1 ring-white/10"
              src="https://christilton.com/assets/img/global/gsa-logo.png"
              alt="App screenshot"
              width={512}
              height={512}
              layout="fixed"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
