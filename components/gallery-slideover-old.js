import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'


export const files = [
  { 
    id: 0,
    link: "/projects/fulcrum", 
    project: "From", 
    company: "Epix",
    src: "/images/cover-art/from.jpg", 
    title: "", 
    color: "bg-[#192427]", 
    subtitle: "", 
    cta: "Watch Now", 
    ctaicon: "", 
    year: "2022", 
    desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu.", 
    trackname1: "From Main Theme (from the TV series 'From')", 
    trackname2: "Driving in Circles (from the TV series 'From')", 
    trackname3: "Stone in the Cellar (from the TV series 'From')", 
    trackname4: "Pray with Me (from the TV series 'From')", 
    trackname5: "Messages in the Bottles (from the TV series 'From')", 
    tracksource1: "/assets/files/music/christilton_from_01_from-main-theme.mp3", 
    tracksource2: "/assets/files/music/christilton_from_02_driving-in-circles.mp3", 
    tracksource3: "/assets/files/music/christilton_from_03_stone-in-the-cellar.mp3", 
    tracksource4: "/assets/files/music/christilton_from_04_pray-with-me.mp3", 
    tracksource5: "/assets/files/music/christilton_from_05_messages-in-the-bottles.mp3", 
  },
  { id: 1, link: "/projects/fulcrum", project: "Assassin's Creed Unity", company:'', src: "/images/cover-art/assassins-creed-unity.jpg", title: "", color: "bg-[#849CA8]", subtitle: "", cta: "Listen on Spotify", ctaIcon: "", year: "2021-2022", desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent.", tracknames: [ "track1b", "track2", "track3", "track4", "track5" ], trackSources: [ '', '', '', '', '' ], trackLinks: ['', '', '', '', '']},
  { id: 2, link: "/projects/fulcrum", project: "Fringe", company:'', src: "/images/cover-art/fringe-season-4.jpg", title: "", color: "", subtitle: "", cta: "Listen on Spotify", ctaIcon: "", year: "2020", desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent.", tracknames: [ "track1c", "track2", "track3", "track4", "track5" ], trackSources: [ '', '', '', '', '' ], trackLinks: ['', '', '', '', '']},
  { id: 3, link: "/projects/fulcrum", project: "Sim City", company:'', src: "/images/cover-art/sim-city.jpg", title: "", color: "", subtitle: "", cta: "Listen on Spotify", ctaIcon: "", year: "2019", desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent.", tracknames: [ "track1d", "track2", "track3", "track4", "track5" ], trackSources: [ '', '', '', '', '' ], trackLinks: ['', '', '', '', '']},
  { id: 4, link: "/projects/fulcrum", project: "Zoo", company:'', src: "/images/cover-art/zoo.jpg", title: "", color: "", subtitle: "", cta: "", ctaIcon: "Watch Now", year: "2018", desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent.", tracknames: [ "track1e", "track2", "track3", "track4", "track5" ], trackSources: [ '', '', '', '', '' ], trackLinks: ['', '', '', '', '']},
  { id: 5, link: "/projects/fulcrum", project: "Black", company:'last item', src: "/images/cover-art/black.jpg", title: "", color: "", subtitle: "", cta: "Listen on Spotify", ctaIcon: "", year: "2017", desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent.", tracknames: [ "track1f", "track2", "track3", "track4", "track5" ], trackSources: [ '', '', '', '', '' ], trackLinks: ['', '', '', '', '']},
]


export default function GallerySlideover(props) {
  const [open, setOpen] = useState(true);

  return (
    // <>
    // {files.map((file) => (
  <Transition.Root show={open} key={files.project} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={setOpen}>
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-200"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-200"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">{props.title}</Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-indigo-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Main */}
                  <div className="divide-y divide-gray-200">
                    <div className="pb-6">
                      <div className={"h-24 sm:h-20 lg:h-28 bg-gray-400 " + props.color} />
                      {/* <div className="h-24 bg-[#123456] sm:h-20 lg:h-28" /> */}
                      <div className="lg:-mt-15 -mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6">
                        <div>
                          <div className="-m-1 flex">
                            <div className="inline-flex overflow-hidden rounded-lg border-4 border-white relative h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48">
                              <Image
                                className="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                                src={files.src}
                                alt=""
                                layout="fill"
                                objectFit='cover'
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 sm:ml-6 sm:flex-1">
                          <div>
                            <div className="flex items-center">
                              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{files.project}</h3>
                            </div>
                            <p className="text-sm text-gray-500">{files.year}</p>
                          </div>
                          <div className="mt-5 flex-none flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                            <button
                              type="button"
                              className="max-w-md items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
                            >
                              {files.cta}
                            </button>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-5 sm:px-0 sm:py-0">
                      <dl className="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                        <div className="sm:flex sm:px-6 sm:py-5">
                          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">Summary</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                            <p>{files.desc}</p>
                          </dd>
                        </div>
                        <div className="sm:flex sm:px-6 sm:py-5">
                          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                            Location
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                            New York, NY, USA
                          </dd>
                        </div>
                        <div className="sm:flex sm:px-6 sm:py-5">
                          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                            Website
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                            ashleyporter.com
                          </dd>
                        </div>
                        <div className="sm:flex sm:px-6 sm:py-5">
                          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                            Birthday
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                            <time dateTime="1982-06-23">June 23, 1982</time>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Dialog>
    </Transition.Root>
    // ))}    
    // </>
  )
}