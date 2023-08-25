import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, PlayCircleIcon, ArrowDownTrayIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { SiSpotify } from "@icons-pack/react-simple-icons"
import Image from "next/legacy/image"
import Hero from '../hero'
import Album from '../../components/album'

export default function GallerySlideoverItem(props) {

  const buttonColors = `${props.ctaicon === 'Spotify' ? 'bg-[#1DB954]' : props.company === 'MGM+' ? 'bg-[#c7a338]' : props.company === 'Paramount+' ? 'bg-[#0164FF]' : 'bg-indigo-600'}`;

  return (
    <Transition.Root show={props.open} appear={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full sm:pl-16">
              <Transition.Child                
                as={Fragment}
                enter="transform transition ease-in-out duration-200"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-200"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                  <div className="flex h-full flex-col relative overflow-y-scroll shadow-xl">
                      {/* Hero BG */}
                      <div className={`absolute -z-[1] w-full h-96 py-12 bg-cover bg-right ${props.color} ${props.hero}`}>
                        <div className="relative isolate px-6 lg:px-8">
                          <div className="mx-auto max-w-2xl py-32 sm:py-24 lg:py-12"></div>
                        </div>
                      </div>
                      {/* Header & Close button */}
                      <div className="px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900"></Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md text-gray-400 hover:text-gray-500 outline-none"
                              onClick={() => props.setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Top Content */}

                      <div className="pb-10 sm:pb-6">

                        <div className="mt-10 sm:mt-14 flex flex-col items-center sm:flex-row px-6">
                          
                          {/* Album Cover Image */}
                          <div className="inline-flex overflow-hidden rounded-lg border-4 border-white relative flex-shrink-0 -mt-20 sm:mt-0 h-40 w-40 lg:h-48 lg:w-48">
                            <ImageLoader src={props.src} alt={props.alt} />
                          </div>

                          <div className="sm:ml-6 mt-4 sm:mt-0 text-white flex flex-col">

                            <div className="text-center sm:text-left flex flex-col">
                              {/* Project title */}
                              <h3 className="text-xl font-bold sm:text-2xl">{props.project}</h3>

                              {/* Project subtitle & year */}
                              <p className="text-sm text-gray-400">{props.subtitle ? props.subtitle + " " + "(" + props.year + ")" : props.year}</p>
                            </div>
                            
                            {/* Project CTA */}
                            {props.cta &&
                            <div className="mt-5 flex justify-center sm:justify-start flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                              <a
                                href={props.ctalink}
                                target="_blank noreferrer"
                                className={`cursor-pointer flex items-center justify-center rounded-md border border-transparent px-4 py-2 ${props.ctaicon && "pl-2"} text-sm font-medium text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-100 ${buttonColors}`}
                              >
                                {/* {props.ctaicon != "none" ?
                                  props.cta === "Listen on Spotify" ? <SiSpotify className="h-4 w-4 mr-2 ml-1" color="#ffffff" /> : <PlayCircleIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                                  : null  
                                } */}
                                {props.ctaicon === "Spotify" && <SiSpotify className="h-4 w-4 mr-2 ml-1" color="#ffffff" />}
                                {props.ctaicon === "Play" && <PlayCircleIcon className="h-6 w-6 mr-2" aria-hidden="true" />}
                                {props.ctaicon === "Download" && <ArrowDownTrayIcon className="h-4 w-4 mr-2" aria-hidden="true" />}
                                {props.ctaicon === "Learn" && <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2 ml-1" aria-hidden="true" />}
                                {props.cta}
                              </a>

                            </div>}
                          </div>
                        </div>
                      </div>
                    {/* Body Content */}
                    <div className="flex h-auto bg-white">
                      <div className="px-0 py-0 bg-white w-full flex">
                        <dl className="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 w-full">
                          <Album gallery notpinned={props.notpinned} className="rounded-none" id={props.id} initialSrc={props.songsdata} selectedIds={props.selectedIds} mappedSongUrl={props.mappedSongUrl} mappedSongTitle={props.mappedSongTitle} />
                          <div className="px-6 py-2 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                              Genre
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-1">
                              {props.type}
                            </dd>
                          </div>
                          <div className="px-6 py-2 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                              Description
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-1">
                              {props.desc}
                            </dd>
                          </div>
                          {props.company &&
                          <div className="px-6 py-2 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                              Company
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-1">
                              {props.company}
                            </dd>
                          </div>}
                          {props.type === "Short Film" &&
                            <div className="px-6 py-2 sm:py-5">
                              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                Director
                              </dt>
                              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-1">
                                {props.credits}
                              </dd>
                            </div>
                          }
                          {(props.credits && props.type != "Short Film") &&
                          <div className="px-6 py-2 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                              Credits
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-1">
                              {props.credits}
                            </dd>
                          </div>}
                          <div className={`sm:px-6 sm:py-3 shadow-inner shadow-indigo-900 bg-gradient-to-r from-violet-900 via-indigo-900 to-blue-700 ${props.color}`}></div>
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
  )
}
export function ImageLoader(props) {
  const [isLoading, setLoading] = useState(true)

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }  

  return (
    <Image
    className={
      isLoading
        ? 'flex-shrink-0 h-40 w-40 lg:h-48 lg:w-48 transitioning'
        : 'flex-shrink-0 h-40 w-40 lg:h-48 lg:w-48 transitioned'
    }
    onLoadingComplete={() => setLoading(false)}
    src={props.src}
    alt={props.alt}
    layout="fill"
    objectFit='cover'
  />    
  )
}