import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/getPosts'
import '../styles/post.css'

const Vedio = () => {
    const posts = useSelector((state) => state.getPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());

    }, [])

    return (
        <div>
            {posts == "" ?
                <div>
                    <div className='text-center md:h-72 h-96 text-3xl font-bold text-gray-900'></div>      
                    <div className='absolute m-auto left-1/2 top-1/3  mb-10 '>
                        <div className="spin" ></div>
                    </div>
                </div>


                :
                <div className='m-5 ml-7 md:m-10 '>

                    <ul role="list" className=" md:ml-10 pt-5 grid grid-cols-1 gap-x-1 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                        {posts.slice(0).reverse().map((file) => (
                            <li key={file.id} className="shadow-lg relative  w-[95%]">
                                <Link
                                    to={`post/${file.heading}`}
                                    key={file.heading}
                                >
                                    <div className="group block bg-gray-100 overflow-hidden">
                                        <img src={file.source} alt="" className=" pointer-events-none w-96 lg:h-48 md:h-44 h-44 group-hover:opacity-75" />
                                        <button type="button" className="absolute inset-0 focus:outline-none">
                                            <span className="sr-only">View details for {file.title}</span>
                                        </button>
                                    </div>
                                </Link>
                                <p className="mt-2 px-5 block text-lg font-semibold  text-gray-900" >{file.title}</p>
                                <p className="block px-5 py-2 text-sm font-medium text-gray-500 pointer-events-none">Posted by Admin</p>

                            </li>
                        ))}
                    </ul>
                </div>

            }
        </div>
    )
}

export default Vedio
