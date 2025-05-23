import React, { useState } from 'react'
import pic from "../../public/photo.avif"
import {Link} from "react-scroll"
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { GiCrossedSwords } from "react-icons/gi";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const navitems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Portfolio" },
        { id: 4, text: "Experience" },  
        { id: 5, text: "Contact" }
    ];

    return (
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
            <div className='flex justify-between items-center h-16'>
                <div className="flex space-x-2">
                    <img src={pic} className="h-12 w-12 rounded-full" alt="" />
                    <h1 className="font-semibold text-xl">
                        Go<span className='text-green-500 text-2xl'>w</span>ri
                        <p className='text-sm'>Full Stack developer,Coder</p>
                    </h1>  
                </div>
                <div>
                    <ul className='hidden md:flex space-x-8'>
                        {navitems.map(({ id, text }) => (
                            <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                                <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active'>
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div onClick={() => setMenu(!menu)} className='md:hidden'>
                        {menu ? <GiCrossedSwords size={24} /> : <AiOutlineMenuUnfold size={24} />}
                    </div>
                </div>
            </div>
            {/* Mobile navbar */}
            {menu && (
                <div className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-2xl bg-white'>
                    <ul>
                        {navitems.map(({ id, text }) => (
                            <li className='hover:scale-105 duration-200 cursor-pointer font-semibold' key={id}>
                                <Link to={text} smooth={true} duration={500} offset={-70} onClick={() => setMenu(false)}>
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar;
