import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getPosts} from '../actions/getPosts'
import "../styles/post.css"
import { Link } from 'react-router-dom';
 
const SearchItems = (props) => {
    
    const posts = useSelector((state) => state.getPosts);
    //let date = new Date("2020-04-10T17:14:00" );
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getPosts());   
    
    }, [])

    var searchTerm=props.search;
    console.log(searchTerm)
    const filteredData = posts.filter((el) => {
        //if no input the return the original
        if (searchTerm === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.heading.toLowerCase().includes(searchTerm)
        }
    })
   
    return (
        <div className='m-10'>
                <ul role="list" className=" ml-10 pt-5 grid grid-cols-2 gap-x-2 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                    {filteredData.slice(0).reverse().map((file) => (
                        <li key={file.source} className="shadow-lg relative  w-[95%]">
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

       
    )
}

export default SearchItems