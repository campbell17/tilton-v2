import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Music', href: '/music', current: false },
  { name: 'Representation', href: '/representation', current: false },
  { name: 'Recent Work', href: 'recent-work', current: false },
  { name: 'Get In Touch', href: '/get-in-touch', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout( {children} ) {
  const router = useRouter();

  return (
    <>
      <div className="min-h-full">
        <div 
          style={{
            background: 'rgb(77,13,45)',
            background: 'linear-gradient(171deg, rgba(77,13,45,1) 0%, rgba(17,17,70,1) 36%, rgba(11,92,136,1) 100%)'
          }} 
          className="bg-gray-800 pb-32">
          <Disclosure as="nav" className="bg-gray-800 border-b border-cyan-900">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                  <div>
                    <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0 h-7 w-[9.25rem] relative">
                          <Image                            
                            src="/images/tilton-logo.png"
                            alt="Chris Tilton"
                            layout='fill'
                            objectFit='cover'
                          />
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                              <Link key={item.name} href={item.href}>
                                <a                                
                                  className={classNames(
                                    router.asPath == (item.href)
                                      ? 'bg-gray-900 text-white'
                                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'px-3 py-2 rounded-md text-sm font-medium'
                                  )}
                                  aria-current={item.current ? 'page' : undefined}
                                >
                                  {item.name}
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                          ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                  <div className="space-y-1 px-2 py-3 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          router.asPath.includes(item.href) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>

                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {navigation.map((item) => (
              router.asPath == (item.href) && <h1 key={item.name} className="text-3xl font-bold tracking-tight text-white">{item.name}</h1>              
            ))}
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
              {children}
            </div>            
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  )
}
