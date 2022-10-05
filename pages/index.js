import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="flex items-center flex-col lg:flex-row">
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
      </div>
    </Layout>
  )
}
