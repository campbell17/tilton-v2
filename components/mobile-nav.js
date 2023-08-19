import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Music', href: '/music', current: false },
  { name: 'Representation', href: '/representation', current: false },
  { name: 'About', href: '/about', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MobileNav() {
  const router = useRouter();
  return (
    <Popover>
      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 z-10 mt-2 flex w-full sm:w-1/2 px-0 sm:px-4">
          <div className="w-full flex-auto overflow-hidden sm:rounded-lg bg-indigo-950/[.95] text-md text-white leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link legacyBehavior key={item.name} href={item.href}>
                <a                                
                  className={classNames(
                    router.asPath == (item.href)
                      ? 'text-indigo-400'
                      : 'hover:text-white',
                    'font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <div className="p-4 cursor-pointer hover:bg-white/10">{item.name}</div>
                  </a>
                </Link>
                
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
