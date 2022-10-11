import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'


const files = [
  { 
    link: "/projects/fulcrum", 
    project: "From", 
    company: "Epix",
    src: "/images/cover-art/from.jpg", 
    title: "", 
    color: "bg-[#192427]", 
    subtitle: "", 
    cta: "Watch Now", 
    ctaIcon: "", 
    year: "2022", 
    desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu.", 
    tracksTitle: [ {
      track1: "From Main Theme (from the TV series 'From')", 
      track2: "Driving in Circles (from the TV series 'From')", 
      track3: "Stone in the Cellar (from the TV series 'From')", 
      track4: "Pray with Me (from the TV series 'From')", 
      track5: "Messages in the Bottles (from the TV series 'From')" 
    }], 
    tracksSrc: [ 
      '/assets/files/music/christilton_from_01_from-main-theme.mp3', 
      '/assets/files/music/christilton_from_02_driving-in-circles.mp3', 
      '/assets/files/music/christilton_from_03_stone-in-the-cellar.mp3', 
      '/assets/files/music/christilton_from_04_pray-with-me.mp3', 
      '/assets/files/music/christilton_from_05_messages-in-the-bottles.mp3' 
    ], 
    tracksLink: [
      '', 
      '', 
      '', 
      '', 
      ''
    ]
  },
  { link: "/projects/fulcrum", project: "Assassin's Creed Unity", company:'', src: "/images/cover-art/assassins-creed-unity.jpg", title: "", color: "bg-[#849CA8]", subtitle: "", cta: "Listen on Spotify", ctaIcon: "", year: "2021-2022", desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent.", tracksTitle: [ "track1b", "track2", "track3", "track4", "track5" ], tracksSrc: [ '', '', '', '', '' ], tracksLink: ['', '', '', '', '']},
  { link: "/projects/fulcrum", project: "Fringe", company:'', src: "/images/cover-art/fringe-season-4.jpg", title: "", color: "", subtitle: "", cta: "Listen on Spotify", ctaIcon: "", year: "2020", desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent.", tracksTitle: [ "track1c", "track2", "track3", "track4", "track5" ], tracksSrc: [ '', '', '', '', '' ], tracksLink: ['', '', '', '', '']},
  { link: "/projects/fulcrum", project: "Sim City", company:'', src: "/images/cover-art/sim-city.jpg", title: "", color: "", subtitle: "", cta: "Listen on Spotify", ctaIcon: "", year: "2019", desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent.", tracksTitle: [ "track1d", "track2", "track3", "track4", "track5" ], tracksSrc: [ '', '', '', '', '' ], tracksLink: ['', '', '', '', '']},
  { link: "/projects/fulcrum", project: "Zoo", company:'', src: "/images/cover-art/zoo.jpg", title: "", color: "", subtitle: "", cta: "", ctaIcon: "Watch Now", year: "2018", desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent.", tracksTitle: [ "track1e", "track2", "track3", "track4", "track5" ], tracksSrc: [ '', '', '', '', '' ], tracksLink: ['', '', '', '', '']},
  { link: "/projects/fulcrum", project: "Black", company:'last item', src: "/images/cover-art/black.jpg", title: "", color: "", subtitle: "", cta: "Listen on Spotify", ctaIcon: "", year: "2017", desc: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent.", tracksTitle: [ "track1f", "track2", "track3", "track4", "track5" ], tracksSrc: [ '', '', '', '', '' ], tracksLink: ['', '', '', '', '']},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Home() {  
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [color, setColor] = useState('')

  const coverClickHandler = (event) => {
    event.preventDefault();

    const project = event.target.getAttribute('project');
    const company = event.target.getAttribute('company');
    const colorUpdate = event.target.getAttribute('color');
    const year = event.target.getAttribute('year');
    const cta = event.target.getAttribute('cta');
    const ctaIcon = event.target.getAttribute('ctaIcon');
    const desc = event.target.getAttribute('desc');
    const tracksTitle = event.target.getAttribute('tracksTitle');
    const tracksSrc = event.target.getAttribute('project');
    const tracksLink = event.target.getAttribute('project');

    setOpen(true);
    setColor(colorUpdate);
    setTitle(project);
    console.log(event);
  }

  return (
    <Layout>
      <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {files.map((file) => (
          <li key={file.src} className="relative hover:shadow-lg transition-shadow">
            <div style={{ background: 'linear-gradient(171deg, rgba(31,41,55,1) 0%, rgba(0,0,0,1) 36%, rgba(51,65,85,1) 100%)' }} className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-900 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <Link href="#">
                <a className="blurOnHover" key={file.project} onClick={coverClickHandler}>
                  <BlurImage 
                    src={file.src} 
                    link={file.link} 
                    company={file.company} 
                    project={file.project} 
                    alt={file.alt}  
                    color={file.color}
                    title={file.title}
                    subtitle={file.subtitle}
                    cta={file.cta}
                    ctaicon={file.ctaIcon}
                    year={file.year}
                    desc={file.desc}
                    trackstitle={file.tracksTitle}
                    trackssrc={file.tracksLink}
                    trackslink={file.tracksLink}
                  />
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ul>      
      {files.map((file) => (
      <Transition.Root show={open} key={file.project} as={Fragment}>
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
                        <Dialog.Title className="text-lg font-medium text-gray-900">{title}</Dialog.Title>
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
                        <div className={"h-24 sm:h-20 lg:h-28 " + color} />
                        {/* <div className="h-24 bg-[#123456] sm:h-20 lg:h-28" /> */}
                        <div className="lg:-mt-15 -mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6">
                          <div>
                            <div className="-m-1 flex">
                              <div className="inline-flex overflow-hidden rounded-lg border-4 border-white relative h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48">
                                <Image
                                  className="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                                  src={file.src}
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
                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{file.project}</h3>
                              </div>
                              <p className="text-sm text-gray-500">{file.year}</p>
                            </div>
                            <div className="mt-5 flex-none flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                              <button
                                type="button"
                                className="max-w-md items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
                              >
                                {file.cta}
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
                              <p>{file.desc}</p>
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
    ))}    
      {/* <div className="flex items-center flex-col lg:flex-row">
        <div className="px-8 py-10 sm:p-16 w-full lg:w-2/3">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block text-gray-800 xl:inline">Chris Tilton</span>
          </h1>
          <p className="mt-3 text-base text-gray-800 sm:mx-auto sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            Chris Tilton is a Los Angeles based composer for television, film, and video games. Chris got his start in the industry working as an apprentice for composer Michael Giacchino in 2001. Since then, Chris has taken his experience and passion for storytelling and gone on to write music for several TV series (Fringe, Zoo, Alcatraz) and video games (Assassin&rsquo;s Creed: Unity, SimCity, Mercenaries).
          </p>
        </div>
        <div className="h-[600px] sm:h-[] md:h-[] lg:h-[500px] w-full lg:w-1/2 relative">
          <Image
            className="lg:rounded-r-lg"
            src={'/images/figure-homepage.jpg'}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div> */}
    </Layout>
  )
}
function BlurImage(file) {
  const [isLoading, setLoading] = useState(true)
  
  return (
        <div style={{ aspectRatio: '1', overflow: 'hidden', borderRadius: 8, position: "relative" }}>
          <Image
            src={file.src} 
            link={file.link} 
            company={file.company} 
            project={file.project} 
            alt={file.alt}  
            color={file.color}
            title={file.title}
            subtitle={file.subtitle}
            cta={file.cta}
            ctaicon={file.ctaIcon}
            year={file.year}
            desc={file.desc}
            trackstitle={file.tracksTitle}
            trackssrc={file.tracksLink}
            trackslink={file.tracksLink}
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
            {file.project}
          </h3>
        </div>
  )
}

// export function SlideOver() {
//   const [open, setOpen] = useState(true)

//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog as="div" className="relative z-10" onClose={setOpen}>
//         <div className="fixed inset-0" />

//         <div className="fixed inset-0 overflow-hidden">
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
//               <Transition.Child
//                 as={Fragment}
//                 enter="transform transition ease-in-out duration-500 sm:duration-700"
//                 enterFrom="translate-x-full"
//                 enterTo="translate-x-0"
//                 leave="transform transition ease-in-out duration-500 sm:duration-700"
//                 leaveFrom="translate-x-0"
//                 leaveTo="translate-x-full"
//               >
//                 <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
//                   <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
//                     <div className="px-4 py-6 sm:px-6">
//                       <div className="flex items-start justify-between">
//                         <Dialog.Title className="text-lg font-medium text-gray-900">Profile</Dialog.Title>
//                         <div className="ml-3 flex h-7 items-center">
//                           <button
//                             type="button"
//                             className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
//                             onClick={() => setOpen(false)}
//                           >
//                             <span className="sr-only">Close panel</span>
//                             <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                     {/* Main */}
//                     <div className="divide-y divide-gray-200">
//                       <div className="pb-6">
//                         <div className="h-24 bg-indigo-700 sm:h-20 lg:h-28" />
//                         <div className="lg:-mt-15 -mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6">
//                           <div>
//                             <div className="-m-1 flex">
//                               <div className="inline-flex overflow-hidden rounded-lg border-4 border-white">
//                                 <img
//                                   className="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
//                                   src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
//                                   alt=""
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                           <div className="mt-6 sm:ml-6 sm:flex-1">
//                             <div>
//                               <div className="flex items-center">
//                                 <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">Ashley Porter</h3>
//                                 <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
//                                   <span className="sr-only">Online</span>
//                                 </span>
//                               </div>
//                               <p className="text-sm text-gray-500">@ashleyporter</p>
//                             </div>
//                             <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
//                               <button
//                                 type="button"
//                                 className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
//                               >
//                                 Message
//                               </button>
//                               <button
//                                 type="button"
//                                 className="inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                               >
//                                 Call
//                               </button>
//                               <div className="ml-3 inline-flex sm:ml-0">
//                                 <Menu as="div" className="relative inline-block text-left">
//                                   <Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                                     <span className="sr-only">Open options menu</span>
//                                     <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
//                                   </Menu.Button>
//                                   <Transition
//                                     as={Fragment}
//                                     enter="transition ease-out duration-100"
//                                     enterFrom="transform opacity-0 scale-95"
//                                     enterTo="transform opacity-100 scale-100"
//                                     leave="transition ease-in duration-75"
//                                     leaveFrom="transform opacity-100 scale-100"
//                                     leaveTo="transform opacity-0 scale-95"
//                                   >
//                                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                                       <div className="py-1">
//                                         <Menu.Item>
//                                           {({ active }) => (
//                                             <a
//                                               href="#"
//                                               className={classNames(
//                                                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                                                 'block px-4 py-2 text-sm'
//                                               )}
//                                             >
//                                               View profile
//                                             </a>
//                                           )}
//                                         </Menu.Item>
//                                         <Menu.Item>
//                                           {({ active }) => (
//                                             <a
//                                               href="#"
//                                               className={classNames(
//                                                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                                                 'block px-4 py-2 text-sm'
//                                               )}
//                                             >
//                                               Copy profile link
//                                             </a>
//                                           )}
//                                         </Menu.Item>
//                                       </div>
//                                     </Menu.Items>
//                                   </Transition>
//                                 </Menu>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="px-4 py-5 sm:px-0 sm:py-0">
//                         <dl className="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200">
//                           <div className="sm:flex sm:px-6 sm:py-5">
//                             <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">Bio</dt>
//                             <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
//                               <p>
//                                 Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus
//                                 feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum
//                                 aenean arcu.
//                               </p>
//                             </dd>
//                           </div>
//                           <div className="sm:flex sm:px-6 sm:py-5">
//                             <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
//                               Location
//                             </dt>
//                             <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
//                               New York, NY, USA
//                             </dd>
//                           </div>
//                           <div className="sm:flex sm:px-6 sm:py-5">
//                             <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
//                               Website
//                             </dt>
//                             <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
//                               ashleyporter.com
//                             </dd>
//                           </div>
//                           <div className="sm:flex sm:px-6 sm:py-5">
//                             <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
//                               Birthday
//                             </dt>
//                             <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
//                               <time dateTime="1982-06-23">June 23, 1982</time>
//                             </dd>
//                           </div>
//                         </dl>
//                       </div>
//                     </div>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   )
// }