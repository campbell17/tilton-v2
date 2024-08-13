import Image from "next/legacy/image"
import chrisStudioPic from '../public/images/about/chris-studio.jpg'
import chrisDinerPic from '../public/images/about/chris-diner.jpg'
import chrisConferencePic from '../public/images/about/chris-conference.jpg'
import chrisPianoPic from '../public/images/about/chris-piano.jpg'
import chrisTestPic from '../public/images/about/chris-test.png'
import chrisChristmasPic from '../public/images/about/chris-christmas.jpg'

export default function AboutStart() {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="w-full max-w-lg lg:shrink-0 xl:max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Meet Chris.
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-lg">
              Chris Tilton is a Los Angeles based composer for television, film, and video games. Chris got his start in the industry working as an apprentice for composer Michael Giacchino in 2001. Since then, Chris has taken his experience and passion for storytelling and gone on to write music for several TV series (Fringe, Zoo, Alcatraz) and video games (Assassin&rsquo;s Creed: Unity, SimCity, Mercenaries).
            </p>
          </div>
          <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <div className="aspect-[2/3] w-full relative">
                <Image
                  src={chrisDinerPic}
                  alt=""
                  layout="fill"
                  placeholder="blur"
                  className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="aspect-[2/3] w-full relative">
                <Image
                  src={chrisPianoPic}
                  alt=""
                  layout="fill"
                  placeholder="blur"
                  className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="aspect-[2/3] w-full relative">
                <Image
                  src={chrisConferencePic}
                  alt=""
                  layout="fill"
                  placeholder="blur"
                  className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div className="aspect-[2/3] w-full relative">
                <Image
                  src={chrisTestPic}
                  alt=""
                  layout="fill"
                  placeholder="blur"
                  className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="aspect-[2/3] w-full relative">
                <Image
                  src={chrisStudioPic}
                  alt=""
                  layout="fill"
                  placeholder="blur"
                  className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </div>
        </div>
        <div className="aspect-[5/2] w-full mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8 relative">
          <Image
            src={chrisChristmasPic}
            alt=""
            layout="fill"
            placeholder="blur"
            className="object-cover xl:rounded-3xl"
          />
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-gray-900/10" />
        </div>    

      </div>
    </div>
  )
}