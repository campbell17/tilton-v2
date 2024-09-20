import Image from "next/legacy/image"
import chrisStudioPic from '../public/images/about/chris-studio.jpg'
import chrisDinerSmPic from '../public/images/about/chris-diner-sm.png'
import chrisConferencePic from '../public/images/about/chris-conference.jpg'
import chrisWelcomePic from '../public/images/about/chris-welcome.jpg'
import chrisPianoPic from '../public/images/about/chris-piano.jpg'
import chrisTestPic from '../public/images/about/chris-test.png'
export default function AboutStart() {
  return (
    <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Chris.</h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Chris Tilton is a Los Angeles based composer for television, film, and video games. Chris got his start in the industry working as an apprentice for composer Michael Giacchino in 2001.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Since then, Chris has taken his experience and passion for storytelling and gone on to write music for several TV series (Fringe, Zoo) and video games (Assassin's Creed: Unity, SimCity).
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Most recently, you can hear Chris's music in the MGM+ series, From, and the Ubisoft video game, Assassin's Creed Nexus.
            </p>
            <div className="mt-10 flex">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Chris <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <div className="relative aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50">
                <Image
                  src={chrisDinerSmPic}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <div className="relative aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50">
                  <Image
                    src={chrisWelcomePic}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    className="rounded-2xl"
                  />
                </div>
              </div>
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <div className="relative aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50">
                  <Image
                    src={chrisConferencePic}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    className="rounded-2xl"
                  />
                </div>
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <div className="relative aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50">
                  <Image
                    src={chrisTestPic}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
