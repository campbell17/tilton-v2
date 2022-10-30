import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import { PlayIcon, MusicalNoteIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Audio from '../audio'
import Link from 'next/link'

export default function GallerySlideoverItem(props) {
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
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
                        <Dialog.Title className="text-lg font-medium text-gray-900">{props.project}</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-indigo-500"
                            onClick={() => props.setOpen(false)}
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
                        <div className="lg:-mt-15 -mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6">
                          <div>
                            <div className="-m-1 flex">
                              <div className="inline-flex overflow-hidden rounded-lg border-4 border-white relative h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48">
                                <ImageLoader src={props.src} alt={props.alt} />
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 sm:ml-6 sm:flex-1">
                            <div>
                              <div className="flex items-center">
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{props.project}</h3>
                              </div>
                              <p className="text-sm text-gray-500">{props.year}</p>
                            </div>
                            <div className="mt-5 flex-none flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                              <Link
                                href={props.ctalink}                                
                              >
                                <div className="cursor-pointer flex max-w-fit items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 pl-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                  <PlayCircleIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                                  {props.cta}
                                </div>
                              </Link>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-5 sm:px-0 sm:py-0">
                        <dl className="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                          <div className="sm:flex sm:px-6 sm:py-5">
                            <p className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{props.desc}</p>
                          </div>
                          <Audio tracksource={props.tracksource1} title={props.trackname1} />
                          <Audio tracksource={props.tracksource2} title={props.trackname2}/>
                          <Audio tracksource={props.tracksource3} title={props.trackname3}/>
                          <Audio tracksource={props.tracksource4} title={props.trackname4}/>
                          <Audio tracksource={props.tracksource5} title={props.trackname5}/>
                          <div className="sm:flex sm:px-6 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                              Company
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
        ? 'h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48 transitioning'
        : 'h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48 transitioned'
    }
    onLoadingComplete={() => setLoading(false)}
    src={props.src}
    alt={props.alt}
    layout="fill"
    objectFit='cover'
  />    
  )
}