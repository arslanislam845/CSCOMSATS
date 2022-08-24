import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getBooks} from '../actions/getBooks'
import Navbar2 from './Navbar2';
const BooksFrame = () => {
    const books = useSelector((state) => state.getBooks);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks());   
     }, [])
    return (
        <div>
        <Navbar2/>

        {books == "" ?
                <div>
                    <div className='text-center md:h-72 h-44 text-3xl font-bold text-gray-900'></div>      
                    <div className='absolute m-auto left-1/2 top-1/3  mb-10 '>
                        <div className="spin" ></div>
                    </div>
                </div>


                :
            <div className='md:m-10 m-2 mt-10'>
            <ul role="list" className="md:mx-10 mx-3 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6">
                {books.map((file) => (
                    <li key={file.id} className="relative ">
               
                    <div className="group block w-full bg-gray-100 overflow-hidden">
                        <img  src={file.img} alt=""  className="pointer-events-none w-72 lg:h-56 md:h-64 h-44 group-hover:opacity-75" />
                       
                    </div>
                   
                    <p className="mt-2 block text-center mb-3 text-sm font-medium text-gray-900">{file.title}</p>
                    <a href={file.source} target="_blank">
                    <button type="button" className="md:ml-10 ml-6 mb-10 text-center px-2 md:px-3 py-2 border-2 hover:bg-black bg-indigo-700 text-white">Read Now</button>
                    </a>   
                     </li>
                ))}
            </ul>
        </div>
         
            
                }
        </div>
    )
}

export default BooksFrame
