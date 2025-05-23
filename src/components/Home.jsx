import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin, FaYoutube, FaReact, FaNodeJs } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from "../../public/1000047117.jpg";

const Home = () => {
  return (
    <>
      <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2 mt-12 md:mt-24 space-y-4 order-2'>
            <span className='text-2xl'>Welcome In My Feed</span>
            <div className='flex space-x-1 text-3xl md:text-5xl font-semibold'> 
              <h1>Hello I'm a </h1>
              <ReactTyped
                className='text-red-700 font-bold pl-2'
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={50}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className='text-md md:text-lg text-justify leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odit nemo pariatur distinctio
              nostrum aliquid dolor enim eveniet atque veritatis tempore, obcaecati itaque unde consectetur 
              dignissimos libero impedit ex. Corporis.
            </p>
            {/* social media icons */}
            <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
              <div className='space-y-2'>
                <h1 className='font-bold text-xl text-center'>Available on</h1>
                <ul className='flex space-x-5'>
                  <li><a href='https://www.facebook.com/' target='_blank'><FaFacebook className='text-3xl cursor-pointer'/></a></li>
                  <li><a href='https://www.linkedin.com/' target='_blank'><FaLinkedin className='text-3xl cursor-pointer'/></a></li>
                  <li><a href='https://www.youtube.com/' target='_blank'><FaYoutube className='text-3xl cursor-pointer'/></a></li>
                  <li><a href='https://t.me/' target='_blank'><FaTelegram className='text-3xl cursor-pointer'/></a></li>
                </ul>
              </div>
              <div className='space-y-2'>
                <h1 className='font-bold text-xl'>Currently Working On</h1>
                <div className='flex space-x-5'>
                  <SiMongodb className='text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                  <SiExpress className='text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                  <FaReact className='text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                  <FaNodeJs className='text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                </div>
              </div>
            </div>
          </div>

          <div className='md:w-1/2 md:ml-48 md:mt-16 mt-8 order-1 md:order-2 flex justify-center'>
            <img
              src={pic}
              alt="Profile"
              className='w-[450px] h-[550px] object-contain rounded-full'
            />
          </div>
        </div>
      </div> 
      <hr/>
    </>
  )
}

export default Home;
