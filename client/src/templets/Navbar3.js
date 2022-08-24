// /*
//   This example requires Tailwind CSS v2.0+ 

//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */
// import { Fragment, useState } from 'react'
 import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { SearchIcon } from '@heroicons/react/solid'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
// import SearchItems from './SearchItems';
// import { Link } from "react-router-dom";
// import Vedio from './Posts';
// import Signup from './Signup';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }


// export default function Navbar3() {
//   const [search, setSearch] = useState("");
//   const [searchLength, setSearchLength] = useState(false)

//   const SearchContent = (e) => {
//     e.preventDefault();
//     setSearchLength(true)
//   }
//   return (
//     <>
//       <Disclosure as="nav" className="bg-[black]">
//         {({ open }) => (
//           <>
//             <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
//               <div className="relative flex items-center justify-between h-16">
//                 <div className="flex items-center px-2 lg:px-0">
//                   <div className="flex-shrink-0">
//                     <Link to={{ pathname: "/" }} >

//                       <img
//                         className="lg:block h-16 w-auto"
//                         src="https://bit.ly/3Q16gG1"
//                         alt="CSComsats Logo"
//                       />

//                     </Link>
//                   </div>
//                   <div className="hidden lg:block lg:ml-6">
//                     <div className="flex space-x-4">
//                       {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
//                       <Link
//                         to={{ pathname: "/" }}
//                       >
//                         <a className="bg-gray-800 text-white px-3 py-2 rounded-md text-[10] font-medium">
//                           Home
//                         </a>
//                       </Link>
//                       <Link
//                         to={{ pathname: "/books" }}
//                       >
//                         <a
//                           className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-[10] font-medium"
//                         >
//                           Books
//                         </a>
//                       </Link>
//                       <Link
//                         to={{ pathname: "/course" }}
//                       >
//                         <a

//                           className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-[10] font-medium"
//                         >
//                           Courses
//                         </a>
//                       </Link>
//                       <Link
//                         to={{ pathname: "/privacy" }}
//                       >
//                         <a

//                           className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-[10] font-medium"
//                         >
//                           Privacy Policy
//                         </a>
//                       </Link>

//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
//                   <div className="max-w-lg w-full lg:max-w-xs">
//                     <label htmlFor="search" className="sr-only">
//                       Search
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                       </div>
//                       <input
//                         id="search"
//                         name="search"
//                         className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
//                         placeholder="Search"
//                         type="search"
//                         onChange={e => setSearch(e.target.value)}
//                       />
//                     </div>





//                   </div>

//                   <div className='ml-3 '>

//                     <Menu as="div" className="ml-3 relative">
//                     <Link
//                           to={{ pathname: "/Signup" }}
//                         >
//                       <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//                         <span className="sr-only">Open user menu</span>

//                           <img
//                             className="h-8 w-8 rounded-full"
//                             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                             alt=""
//                           />

//                       </Menu.Button>
//                       </Link>
//                     </Menu>

//                   </div>

//                 </div>

//                 <div className="flex lg:hidden">
//                   {/* Mobile menu button */}
//                   <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                     <span className="sr-only">Open main menu</span>
//                     {open ? (
//                       <XIcon className="block h-6 w-6" aria-hidden="true" />
//                     ) : (
//                       <MenuIcon className="block h-6 w-6" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>
//                 </div>

//               </div>
//             </div>

//             <Disclosure.Panel className="lg:hidden">
//               <div className="px-2 pt-2 pb-3 space-y-1">
//                 {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
//                 <Link
//                   to={{ pathname: "/" }}
//                 >
//                   <Disclosure.Button

//                     className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
//                   >
//                     Home
//                   </Disclosure.Button>
//                 </Link>
//                 <Link
//                   to={{ pathname: "/books" }}
//                 >
//                   <Disclosure.Button

//                     className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                   >
//                     Books
//                   </Disclosure.Button>
//                 </Link>
//                 <Link
//                   to={{ pathname: "/course" }}  >
//                   <Disclosure.Button

//                     className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                   >
//                     Courses
//                   </Disclosure.Button></Link>
//                 <Link
//                   to={{ pathname: "/privacy" }}
//                 >
//                   <Disclosure.Button

//                     className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                   >
//                     Privacy Policy
//                   </Disclosure.Button></Link>
//               </div>

//             </Disclosure.Panel>
//           </>
//         )}
//       </Disclosure>
//       <div>
//         {
//           searchLength ? <SearchItems search={search} /> : <Vedio />
//         }
//       </div>
//     </>

//   )
// }





//////////////////////////////////////


import React, { useState } from 'react'

import { SearchIcon } from '@heroicons/react/solid'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";
import SearchItems from './SearchItems';
import Vedio from './Posts';

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [searchLength, setSearchLength] = useState(false)

  const SearchContent = (e) => {
    e.preventDefault();
    setSearchLength(true)
  }

  return (
    <div>
      <Disclosure as="nav" className="bg-[black]">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:pr-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex items-center pr-2 lg:px-0">
                  <div className="flex flex-shrink-0">
                    <Link
                      to={{ pathname: "/" }}
                    >
                      <a>
                        <img
                          className="lg:block h-16 w-auto"
                          src="https://www.resizepixel.com/Image/n8ay5kpxj7/Preview/CSLOGO.png?v=340b4762-4774-487f-b02f-795562dd2dc2"
                        
                          alt="CSComsats Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="hidden lg:block lg:ml-6">
                    <div className="flex space-x-4">
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
                <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">

                  <div className="max-w-lg w-full lg:max-w-xs">
                    <form action="#" method="GET" onSubmit={SearchContent}>

                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>

                        <input
                          id="search"
                          name="search"
                          className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                          placeholder="Search"
                          type="search"
                          onChange={e => setSearch(e.target.value)}
                        />

                      </div>
                    </form>
                  </div>


                  <div className='ml-3 '>

                    <Menu as="div" className="ml-3 relative">
                      <Link
                        to={{ pathname: "/Signup" }}
                      >
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>

                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />

                        </Menu.Button>
                      </Link>
                    </Menu>

                  </div>

                </div>
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 ">
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

          </>
        )}

      </Disclosure>
      <div>
        {
          searchLength ? <SearchItems search={search} /> : <Vedio />
        }
      </div>
    </div>
  )
}