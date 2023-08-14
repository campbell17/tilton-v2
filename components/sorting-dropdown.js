import React, { useRef, useState } from 'react'
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";


export default function SortMenu(props) {

  return (
    <Menu as="div" className="relative inline-block text-left">
  <div>
    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
      Sort by {props.sortOption} {props.sortOrder === "ascending" ? "↑" : "↓"}
      <ChevronDownIcon
        className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
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
    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1">
        <Menu.Item>
          {({ active }) => (
            <button
              onClick={() => {
                props.setSortOption("project");
                props.setSortOrder("ascending");
              }}
              className={`${
                active ? "bg-gray-100 text-gray-900" : "text-gray-700"
              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
            >
              Project Name ↑
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              onClick={() => {
                props.setSortOption("project");
                props.setSortOrder("descending");
              }}
              className={`${
                active ? "bg-gray-100 text-gray-900" : "text-gray-700"
              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
            >
              Project Name ↓
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              onClick={() => {
                props.setSortOption("year");
                props.setSortOrder("descending");
              }}
              className={`${
                active ? "bg-gray-100 text-gray-900" : "text-gray-700"
              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
            >
              Date ↓
            </button>
          )}
        </Menu.Item>      
      </div>
    </Menu.Items>
  </Transition>
</Menu>

  );
}
