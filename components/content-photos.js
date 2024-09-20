import Image from "next/legacy/image"
  
export default function ContentPhotos() {
  return (
    <div className="overflow-hidden pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Furthermore.</h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              When working with Giacchino in the 2000s, Chris wrote additional music for the TV series Alias, and also helped arrange & orchestrate various cues for a variety of film and TV projects, including The Imperial Suite for Giacchino's Rogue One: A Star Wars Story score.
            </p>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              When not writing music, Chris can often be found cooking tomato sauce, hanging out with his wife & dog, or tending to his retro video game collection.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <div className="aspect-[7/5] w-[37rem] max-w-none bg-gray-50 relative">
                <Image
                  src="/images/ig-2.jpg"
                  alt="consoles"
                  width={1440}
                  height={1080}
                  className="object-cover rounded-2xl"
                />
              </div>      
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <div className="aspect-[4/3] w-[24rem] max-w-none flex-none bg-gray-50 relative">
                  <Image
                    src="/images/ig-7.jpg"
                    alt="consoles"
                    width={1440}
                    height={1080}
                    className="object-cover rounded-2xl"
                  />

                </div>
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <div className="aspect-[7/5] w-[37rem] max-w-none flex-none bg-gray-50 relative">
                  <Image
                    src="/images/ig-14.jpg"
                    alt="consoles"
                    width={1440}
                    height={1080}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <div className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 relative">
                  <Image
                    src="/images/igpup-2.jpg"
                    alt="consoles"
                    width={1440}
                    height={1080}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}