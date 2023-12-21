import Image from "next/legacy/image";

export default function LogoCloud() {
  return (
    <div className="bg-white py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-lg  items-center justify-items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-1 md:grid-cols-5 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:mr-14">
          <div className="relative col-span-2 object-contain lg:col-span-1">
            <Image              
              src="/images/logos/logo-ea.png"
              alt="Lucasfilm Games"
              width={64}
              height={64}
            />
          </div>
          <div className="relative col-span-2 object-contain lg:col-span-1">
            <Image              
              src="/images/logos/logo-lucasfilm.png"
              alt="Lucasfilm Games"
              width={158}
              height={48}
            />
          </div>
          <div className="relative col-span-2 object-contain lg:col-span-1">
            <Image
              src="/images/logos/logo-badrobot.png"
              alt="BadRobot"
              width={64}
              height={64}
              />
          </div>
          <div className="relative col-span-2 object-contain lg:col-span-1">
            <Image              
              src="/images/logos/logo-mgm.png"
              alt="MGM Plus"
              width={114}
              height={48}
            />
          </div>
          <div className="relative col-span-2 object-contain lg:col-span-1">
            <Image
              src="/images/logos/logo-paramount.png"
              alt="Parmount Plus"
              width={102}
              height={64}
              />
          </div>
          <div className="relative col-span-2 object-contain lg:col-span-2">
            <Image
              src="/images/logos/logo-cbs.png"
              alt="CBS"
              width={158}
              height={48}
            />
          </div>
          <div className="relative col-span-2 object-contain lg:col-span-1">
            <Image
              src="/images/logos/logo-wb.png"
              alt="WB"
              width={64}
              height={64}
            />
          </div>
          <div className="relative col-span-2 object-contain lg:col-span-2">
            <Image
              src="/images/logos/logo-ubisoft.png"
              alt="Ubisoft"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
