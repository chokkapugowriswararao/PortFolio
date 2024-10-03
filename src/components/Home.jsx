import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped,Typed } from "react-typed";
import pic from "../../public/photo.avif"
const Home = () => {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
     <div className='flex flex-col md:flex-row'>
     <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2'>
     <span className='text-xl'>Welcome In My Feed</span>
      <div className='flex space-x-1 text-2xl md:text-4xl'> 
        <h1>Hello I'm a </h1>
      {/* <span'>Developer</span> */}
      <ReactTyped
       className='text-red-700  font-bold '
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={50}
          backSpeed={50}
          loop={true}
        />
      </div>
      <br/>
     <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odit nemo pariatur distinctio
       nostrum aliquid dolor enim eveniet atque veritatis tempore, obcaecati itaque unde consectetur 
       dignissimos libero impedit ex. Corporis.</p>
       <br/>
       {/* social media icons */}
      <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
       <div className='space-y-2'>
        <h1 className='font-bold text-center'>Available on</h1>
       <ul className='flex space-x-5'>
       <li>
        <a href='https://www.facebook.com/'
        target='_blank'>
        <FaFacebook className='text-2xl cursor-pointer'/>
        </a>
          </li>
        <li>
          <a href='https://www.linkedin.com/' target='_blank'>
        <FaLinkedin  className='text-2xl cursor-pointer'/>
        </a>
        </li>
       
        <li>
        <a href='https://www.youtube.com/' target='_blank'>
          <FaYoutube className='text-2xl cursor-pointer'/>
        </a>
        </li>
       <li>
       <a href='https://t.me/' target='_blank'>
       <FaTelegram className='text-2xl cursor-pointer' />
       </a>
       </li>
       </ul>
       </div>
      <div className='space-y-2'>
       <h1 className='font-bold flex'>Currently Working On</h1>
        <div className='flex space-x-5'>
          <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
       <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
       <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
       <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
       </div>
       </div>
       </div>
     </div>
     <div className='md:w-1/2 md:ml-48 md:mt-16 mt-8 order-1 md:order-2'>
  <img src={pic} className='rounded-full w-[450px] md:h-[450px]'/>
      </div>
     </div>
    </div> 
    <hr/>
    </>
  )
}

export default Home
