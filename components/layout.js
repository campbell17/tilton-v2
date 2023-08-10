import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import FringeFriday from '../pages/fringe-friday'
import Footer from './footer'
import MobileNav from './mobile-nav'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Music', href: '/music', current: false },
  { name: 'Representation', href: '/representation', current: false },
  { name: 'About', href: '/about', current: false },
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
          className="bg-gray-800 pb-20">
          <Disclosure as="nav" className="bg-gray-900 border-b border-cyan-900">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                  <div>
                    <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0 h-7 w-[9.25rem] relative">
                          <Link href="/">
                            {/* for some reason this image causes the following console error: "Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?"  */}
                            <Image                            
                              src="/images/tilton-logo.png"
                              className="cursor-pointer"
                              alt="Chris Tilton"
                              layout='fill'
                              objectFit='cover'
                            />
                          </Link>
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                              <Link key={item.name} href={item.href}>
                                <a                                
                                  className={classNames(
                                    router.asPath == (item.href)
                                      ? 'bg-gray-800 text-white'
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

                      <div className="flex md:hidden">
                        {/* Mobile menu  */}
                        <MobileNav />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Disclosure>
          <header className="p-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* {navigation.map((item) => (
              router.asPath == (item.href) && router.asPath != "/" && <h1 key={item.name} className="text-3xl font-bold tracking-tight text-white">{item.name}</h1>              
            ))} */}
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className={`${router.pathname === "/fringe-friday" ? "rounded-xl bg-white shadow" : "rounded-xl bg-white shadow pb-6"}`}>
              {children}
            </div>            
            {/* /End replace */}
          </div>
        </main>
      </div>
      {router.pathname === "/fringe-friday" ? <Footer light /> : <Footer />}
    </>
  )
}
