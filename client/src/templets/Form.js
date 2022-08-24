import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { createPosts } from '../actions/createPosts';
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import swal from 'sweetalert';
import Navbar2 from './Navbar2';
const Form = () => {
    const [postData, setPostData] = useState({  title:'',heading:'',source:'', course_content:'', books:'', slides:'', past_papers:'' });
    const dispatch = useDispatch();
    const [open, setOpen] = useState(true)

    const clear = () => {
       
        setPostData({ title:'',heading:'',source:'', course_content:'', books:'', slides:'', past_papers:'' });
        //console.log(postData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(postData);
        dispatch(createPosts(postData));
        swal({
            title: "Good job!",
            text: "Your Post Is Added..",
            icon: "success",
            button: "OK",
          }).then(function() {
            window.location = "/admin";
        });
        clear();
      };
    return (
        <div>
            <Navbar2/>
       
        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
  
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
            <div className="bg-white shadow sm:rounded-lg mx-80 my-6">
                <form action="http://localhost:5000/" method="POST" onSubmit={handleSubmit}>
               
                    <div className="flex flex-col border-2 justify-center px-40 py-9">
                         <h1 className='p-3 text-xl font-bold pt-0'>Enter Post Details</h1>
                        <div className="  flex flex-row justify-between ">

                            <label htmlFor="first-name" className=" text-lg font-medium text-gray-700">
                                Heading
                            </label>


                            <input
                                required
                                type="text"
                                name="Heading"
                                autoComplete="given-name"
                                value={postData.heading}
                                placeholder="Enter Heading"
                                className=" mb-4 ml-9 w-72 px-4 py-1 shadow-sm sm:text-sm border-gray-900 border "
                                onChange={(e) => setPostData({ ...postData, heading: e.target.value })}
                            />

                        </div>

                        <div className="flex flex-row justify-between">
                            <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">
                                Title
                            </label>
                            <input
                                required
                                type="text"
                                name="Title"
                                placeholder="Enter Title"
                                autoComplete="given-name"
                                value={postData.title}
                                className=" mb-4 border-gray-900 px-4 py-1 border  block  w-72 shadow-sm sm:text-sm "
                                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                                />
                        </div>
                        <div className=" flex flex-row justify-between ">
                            <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">
                                Image URL
                            </label>
                            <input
                                required
                                type="text"
                                name="Image"
                                id="first-name"
                                placeholder="Enter Image URL"
                                autoComplete="given-name"
                                value={postData.source}
                                className=" mb-4 ml-2 border-gray-900 border  block w-72 shadow-sm sm:text-sm  px-4 py-1"
                                onChange={(e) => setPostData({ ...postData, source: e.target.value })}
                            />
                        </div>

                        <div className=" flex flex-row justify-between">
                            <label htmlFor="first-name" className="m-0 p-0 block text-lg font-medium text-gray-700">
                            Course
                            </label>
                            <input
                            
                                type="text"
                                name="Course_Content"
                                placeholder="Add course outline link "
                                autoComplete="given-name"
                                value={postData.size}
                                className=" mb-4 border-gray-900 border  block  w-72 shadow-sm sm:text-sm  px-4 py-1"
                                onChange={(e) => setPostData({ ...postData, course_content: e.target.value })}
                            />
                        </div>

                       


                        <div className=" flex flex-row justify-between">
                            <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">
                                Book
                            </label>
                            <input

                                type="text"
                                name="Book"
                                placeholder="Enter Book Link"
                                autoComplete="given-name"
                                value={postData.quality}
                                className=" mb-4 border-gray-900 border  block w-72 shadow-sm sm:text-sm  px-4 py-1"
                                onChange={(e) => setPostData({ ...postData, books: e.target.value })}
                            />
                        </div>
                        <div className=" flex flex-row justify-between">
                            <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">
                                Slides
                            </label>
                            <input

                                type="text"
                                name="Slides"
                                placeholder="Enter Slides Link"
                                autoComplete="given-name"
                                value={postData.quality}
                                className=" mb-4 border-gray-900 border  block w-72 shadow-sm sm:text-sm  px-4 py-1"
                                onChange={(e) => setPostData({ ...postData, slides: e.target.value })}
                            />
                        </div>
                        <div className=" flex flex-row justify-between">
                            <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">
                                Past Papers
                            </label>
                            <input

                                type="text"
                                name="Past_Papers"
                                placeholder="Enter Past Papers Link"
                                autoComplete="given-name"
                                value={postData.quality}
                                className=" mb-4 border-gray-900 border  block w-72 shadow-sm sm:text-sm  px-4 py-1"
                                onChange={(e) => setPostData({ ...postData, past_papers: e.target.value })}
                            />
                        </div>
                        <div className='flex justify-center '>
                            <button
                                type="submit"
                                className="inline-flex text-center items-center  px-9 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Send
                            </button>
                        </div>

                    </div>
                </form>
            </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
    )
}

export default Form
