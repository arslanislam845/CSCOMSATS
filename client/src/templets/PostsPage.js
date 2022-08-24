import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "../styles/post.css"
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/getPosts'
import Navbar2 from './Navbar2';

const PostsPage = ({ match }) => {
    const posts = useSelector((state) => state.getPosts);
    const dispatch = useDispatch();

    // for simplest files in output..
    const size = 7
    const items = posts.slice(0, size)


    useEffect(() => {
        dispatch(getPosts());
    }, [posts])
   
    return (
        <div>
        <Navbar2 />
       
        <div className='flex flex-col md:flex-row' >
            {posts.map((file) =>
                file.heading === match.params.movieName ?
                    (
                        <div className='md:ml-12 md:pr-10 pt-10 lg:justify-evenly w-full h-full'>
                            <div className="m-4 justify-center text-center  ">
                                <img src={file.source} className="w-full h-full" alt="" 
                                   // alt="" className="md:ml-20 ml-1 mr-2 lg:mt-4 md:img-width h-44 lg:h-60 " ml-20 lg:ml-3 lg:mt-4 md:ml-4 sm:ml-44 img-width lg:h-60
                                   //md:ml-20 ml-1 mr-2 lg:mt-4 md:img-width h-40 lg:h-60

                                   //m-4 justify-center text-center img-width
                                   />
                            </div>
                            <div className='m-4 w-full md:mt-7 lg:pl-2 lg:pt-10 lg:text-xl pt-1 mt-1 md:w-1/2 lg:w-full'>
                                <p className="text-xl md:text-3xl lg:text-3xl font-bold text-gray-900">{file.title}</p>
                            </div>

                            <div className="mt-8 md:mx-10 flex flex-col">
                                <div className="-my-2 md:-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                        <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-300">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-xl font-bold text-gray-900 sm:pl-6">
                                                            Title
                                                        </th>
                                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-xl font-bold text-gray-900 sm:pl-6">
                                                            Link

                                                        </th>


                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white">
                                                    <tr className="bg-white">
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3  text-lg font-semibold text-gray-900 sm:pl-6">
                                                            Course Content
                                                        </td>

                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 underline text-lg font-normal text-cyan-500 sm:pl-6">
                                                            <a target="_blank" href={file.course_content}>Course Content</a>
                                                        </td>

                                                    </tr>
                                                    <tr className='bg-gray-50'>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3  text-lg font-semibold text-gray-900 sm:pl-6">
                                                            Book
                                                        </td>

                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 underline text-lg font-normal text-cyan-500 sm:pl-6">
                                                            <a target="_blank" href={file.books}>Book</a>
                                                        </td>

                                                    </tr>

                                                    <tr className="bg-white">
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3  text-lg font-semibold text-gray-900 sm:pl-6">
                                                            Slides
                                                        </td>

                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 underline text-lg font-normal text-cyan-500 sm:pl-6">
                                                            <a target="_blank" href={file.slides}>Slides</a>
                                                        </td>

                                                    </tr>

                                                    <tr className='bg-gray-50'>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg font-semibold text-gray-900 sm:pl-6">
                                                            Past Papers
                                                        </td>

                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 underline text-lg font-normal text-cyan-500 sm:pl-6">
                                                            <a target="_blank" href={file.past_papers} >Papers</a>
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    : (
                        <></>
                    )
            )
            }

            <div className='md:m-10 m-2 mt-4 md:ml-0'>
                <ul role="list" className="pl-5 mt-3">
                    {items.map((file) => (
                        <li key={file.source} className=" mt-1 flex relative hover:text-red-900">
                            <Link
                                to={`${file.heading}`}
                                key={file.heading}

                            >
                                <div className=" bg-gray-100  w-40 lg:w-40 lg:h-24 h-32 overflow-hidden ">
                                    <img src={file.source} alt="" className="mt-1 pointer-events-none lg:w-40 w-40 lg:h-24 md:h-60 h-32 group-hover:opacity-75" />
                                    <button type="button" className="absolute inset-0 focus:outline-none">
                                        <span className="sr-only">View details for {file.title}</span>
                                    </button>
                                </div>
                            </Link>
                            <p className="mt-2 p-2 block md:text-sm text-sm font-medium  text-gray-900 ">{file.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
       
    )
}

export default PostsPage
