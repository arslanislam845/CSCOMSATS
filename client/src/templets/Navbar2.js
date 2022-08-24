/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

import { Link } from "react-router-dom";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar3() {

  return (
    <>
      <Disclosure as="nav" className="bg-[black]">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex items-center px-2 lg:px-0">
                  <div className="flex-shrink-0">
                    <Link to={{ pathname: "/" }} >

                      <img
                        className="lg:block h-16 w-auto"
                        src="https://bit.ly/3Q16gG1"
                        alt="CSComsats Logo"
                      />

                    </Link>
                  </div>
                  <div className="hidden lg:block lg:ml-6">
                    <div className="flex space-x-4">
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <Link
                        to={{ pathname: "/" }}
                      >
                        <a className="bg-gray-800 text-white px-3 py-2 rounded-md text-[10] font-medium">
                          Home
                        </a>
                      </Link>
                      <Link
                        to={{ pathname: "/books" }}
                      >
                        <a
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-[10] font-medium"
                        >
                          Books
                        </a>
                      </Link>
                      <Link
                        to={{ pathname: "/course" }}
                      >
                        <a

                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-[10] font-medium"
                        >
                          Courses
                        </a>
                      </Link>
                      <Link
                        to={{ pathname: "/privacy" }}
                      >
                        <a

                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-[10] font-medium"
                        >
                          Privacy Policy
                        </a>
                      </Link>

                    </div>
                  </div>
                </div>
               

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center">
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link
                  to={{ pathname: "/" }}
                >
                  <Disclosure.Button

                    className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Home
                  </Disclosure.Button>
                </Link>
                <Link
                  to={{ pathname: "/books" }}
                >
                  <Disclosure.Button

                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Books
                  </Disclosure.Button>
                </Link>
                <Link
                  to={{ pathname: "/course" }}  >
                  <Disclosure.Button

                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Courses
                  </Disclosure.Button></Link>
                <Link
                  to={{ pathname: "/privacy" }}
                >
                  <Disclosure.Button

                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Privacy Policy
                  </Disclosure.Button></Link>
              </div>

            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>

  )
}
