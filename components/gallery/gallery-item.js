import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import BlurImage from './gallery-item-image'
import { Menu, Transition } from "@headlessui/react";
import { SortAZ, SortZA } from 'tabler-icons-react';
import { ArrowsUpDownIcon } from "@heroicons/react/20/solid";

export default function GalleryItem(props) {
  const [currentSortOption, setCurrentSortOption] = useState("year"); // Default sorting option
  const [sortOrder, setSortOrder] = useState("descending"); // Default sorting order
  
  const isYearAscending = currentSortOption === "year" && sortOrder === "ascending";
  const isYearDescending = currentSortOption === "year" && sortOrder === "descending";  
  const isProjectAscending = currentSortOption === "project" && sortOrder === "ascending";  
  const isProjectDescending = currentSortOption === "project" && sortOrder === "descending";  
  const router = useRouter();

  const refId = useRef(0);
  const projectArray = props.projectItems;

  const handleActive = () => {
    !active ? null : setActive(!active)
  }

  let filteredProjectData;

  if (props.isHomepage) {
    filteredProjectData = projectArray.filter((data) => data.homepage);
  } else {
    filteredProjectData = projectArray.filter((data) => !data.homepageonly);
  }

  const sortingOptions = {
    project: {
      displayName: "Project Name",
      ascendingDisplayName: "Name A-Z",
      descendingDisplayName: "Name Z-A",
    },
    type: "Type",
    year: {
      displayName: "Year",
      ascendingDisplayName: "Oldest",
      descendingDisplayName: "Newest",
    },
  };
  
  const sortedData = [...filteredProjectData].sort((a, b) => {
    const key = currentSortOption;
    
    if (key === "project" || key === "type") {
      return sortOrder === "ascending"
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    } else if (key === "year") {
      return sortOrder === "ascending"
        ? a[key] - b[key]
        : b[key] - a[key];
    }
    
    return 0; // Default case
  });

  return (
    <div>
      <Menu as="div" className="flex justify-end relative text-left z-10">
        <div className="mb-2">
          <Menu.Button className="flex items-center rounded-md bg-white p-2 mb-2 text-sm font-semibold text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <p className="uppercase text-xs mr-2 font-medium text-slate-500">Sort</p>
            <ArrowsUpDownIcon
              className="w-4 h-4 mx-0 text-slate-400 hover:text-slate-500"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute top-8 right-0 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                  <button
                    onClick={() => {
                      setCurrentSortOption("year");
                      setSortOrder("descending");
                    }}
                    className={`${
                      isYearDescending ? "bg-gray-100 text-indigo-600" : "text-gray-700"
                    } hover:bg-gray-100 hover:text-grey-600 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                  >
                    {sortingOptions.year.descendingDisplayName}
                  </button>
              </Menu.Item>            
              <Menu.Item>
                  <button
                    onClick={() => {
                      setCurrentSortOption("year");
                      setSortOrder("ascending");
                    }}
                    className={`${
                      isYearAscending ? "bg-gray-100 text-indigo-600" : "text-gray-700"
                    } hover:bg-gray-100 hover:text-grey-600 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                  >
                    {sortingOptions.year.ascendingDisplayName}
                  </button>
              </Menu.Item>
              <Menu.Item>
                  <button
                    onClick={() => {
                      setCurrentSortOption("project");
                      setSortOrder("ascending");
                      handleActive;
                    }}
                  className={`${
                    isProjectAscending ? "bg-gray-100 text-indigo-600" : "text-gray-700"
                    } hover:bg-gray-100 hover:text-grey-600 flex items-center justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                  >
                    {sortingOptions.project.displayName}
                    <SortAZ className="w-6 h-6 ml-2 text-slate-400" aria-hidden="true" />
                  </button>
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => {
                      setCurrentSortOption("project");
                      setSortOrder("descending");
                    }}
                    className={`${
                      isProjectDescending ? "bg-gray-100 text-indigo-600" : "text-gray-700"
                    } hover:bg-gray-100 hover:text-grey-600 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                  >
                    {sortingOptions.project.displayName}
                    <SortZA className="w-6 h-6 ml-2 text-slate-400" aria-hidden="true" />
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

    <ul role="list" ref={refId} className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
    {sortedData.map((data) => (
      <li key={data._id} className="relative hover:shadow-lg transition-shadow">
        <div style={{ background: 'linear-gradient(171deg, rgba(31,41,55,1) 0%, rgba(0,0,0,1) 36%, rgba(51,65,85,1) 100%)' }} className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-900 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <Link legacyBehavior href={`"#"`}>
            <a 
              className="blurOnHover" 
              key={data.id} 
              onClick={(e) => {
                e.preventDefault();
                props.onCoverClick(data);
              }}>
              <BlurImage      
                src={data.cover.url} 
                project={data.project}
                year={data.year}
              />
            </a>
          </Link>
        </div>
      </li>
    ))}
     {router.pathname === "/" && <li key="more" className="relative hover:shadow-lg transition-shadow">
        <div style={{ background: 'linear-gradient(171deg, rgba(31,41,55,1) 0%, rgba(0,0,0,1) 36%, rgba(51,65,85,1) 100%)' }} className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-900 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <Link legacyBehavior href="/music">
            <a 
              className="blurOnHover">
              <BlurImage      
                src="/images/ig-10.jpg" 
                project="All Projects"
                year="2003 - Current"
              />
            </a>
          </Link>
        </div>
      </li> }
    </ul>
  </div>    
  )
}