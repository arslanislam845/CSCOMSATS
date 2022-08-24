import React from 'react'
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import Navbar2 from './Navbar2';
const people = [
    {
        course:"https://www.youtube.com/playlist?list=PLJ_unegzlQ0_0O0j9owUeTiRAGrmUNO69",
        name: 'Amina Ali Kamal',
        title: 'Creative Writing ',
        role: 'Admin',
        imageUrl:'https://tse3.mm.bing.net/th?id=OIP.aGvPTJDeaFo4A7mkxmbWvQHaEJ&pid=Api&P=0&w=283&h=158'
    },
    {
        course:"https://youtu.be/3Kq1MIfTWCEhttps://youtu.be/3Kq1MIfTWCE",
        name: 'Cyber Mentor',
        title: 'Ethical Hacking',
        role: 'Admin',
        imageUrl:
            'https://tse4.mm.bing.net/th?id=OIP.X25WOAN0GOPP_4o0GbsgWgHaE8&pid=Api&P=0&w=244&h=162',
    },
    {
        course:"https://www.youtube.com/playlist?list=PLXsIxn5bxGcRL-Hdn2Ayt5j1-3Ja6tvDl",
        name: 'Dankash Academy',
        title: 'Graphic Design',
        role: 'Admin',
        imageUrl:
            'https://tse4.mm.bing.net/th?id=OIP.JlnZ4Qa2tI6CKwg70qHnuwHaHa&pid=Api&P=0&w=174&h=174',
    },
    {
        course:"https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n",
        name: 'Apna College Academy',
        title: 'Web Development',
        role: 'Admin',
        imageUrl:
            'https://tse3.mm.bing.net/th?id=OIP.8R2Szu6wOEOXkz_RFq6KbgHaEK&pid=Api&P=0&w=316&h=177',
    },

    {
        course:"https://www.youtube.com/playlist?list=PLJ_unegzlQ09gdCDQrjPFCDy_OcidTpmo",
        name: 'Hisham Server',
        title: 'Freelancer Course ',
        role: 'Admin',
        imageUrl:
            'https://tse2.mm.bing.net/th?id=OIP.3kQmyLZ5eGobeudQC2ontwHaFW&pid=Api&P=0&w=238&h=172',
    },
    {
        course:"https://youtu.be/gdw4ZfDgiCo",
        name: 'Syed Usman',
        title: 'Digital Marketing',
        role: 'Admin',
        imageUrl:
            'https://tse3.mm.bing.net/th?id=OIP.qlhI-7HBV-K__aGE_sdJWgHaEK&pid=Api&P=0&w=308&h=173',
    },
   
    // More people...
]
const Courses = () => {
   
    return (
        <div>
            <Navbar2 />
        <div className='mx-10 my-10'>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {people.map((person) => (
                    <li
                        key={person.email}
                        className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-lg border-2 divide-y divide-gray-200"
                    >
                        <a href={person.course} target="_blank">
                        <div className="flex-1 flex flex-col p-8">
                            <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={person.imageUrl} alt="" />
                            <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.name}</h3>
                            <dl className="mt-1 flex-grow flex flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <dd className="text-gray-500 text-sm">{person.title}</dd>
                                <dt className="sr-only">Role</dt>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                        {person.role}
                                    </span>
                                </dd>
                            </dl>
                        </div>
                        </a>
                      
                    </li>
                ))}
            </ul>
        </div>
        </div>
    )
}



export default Courses