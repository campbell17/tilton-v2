import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Music', href: '/music', current: false },
  { name: 'Representation', href: '/representation', current: false },
  { name: 'About', href: '/about', current: false },
]

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navtest() {
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
        <Popover.Panel className="absolute right-0 z-10 mt-5 flex w-screen max-w-max px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-lg bg-white text-md leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4 py-6 flex flex-col gap-6 ">
              {navigation.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}                   
                  aria-current={item.current ? 'page' : undefined}
                
                  >
                  {item.name}
                </Link>
                
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
