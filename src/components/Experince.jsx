import React from 'react'
import react from "../../public/reactjs.png"
import javascript from "../../public/javascript.png"
import css from "../../public/css.svg"
import html from "../../public/html.png"
import cpp from  "../../public/cpp.png"
const Experince = () => {
    const cardItem = [
        {
          id: 1,
          logo: css,
          name: "Css",
        },
        {
          id: 2,
          logo: html,
          name: "Html",
        },
        {
          id: 3,
          logo: react,
          name: "ReactJS",
        },
        {
          id: 4,
          logo: cpp,
          name: "cpp",
        },
        {
            id:5,
            logo:javascript,
            name:"JavaScript",
        }
    ]
    return (
        <div
          id="Experience"
          className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
        >
          <div>
            <h1 className="text-3xl font-bold mb-5">Experience</h1>
            <p className="py-12">
              I've more than 2 years of experiance in below technologies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
              {cardItem.map(({ id, logo, name }) => (
                <div
                  className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
                  key={id}
                >
                  <img src={logo} className="w-[80px] rounded-full" alt="" />
                  <div>
                    <div className="">{name}</div>
                  </div>
                </div>
              ))}
            </div> 
          </div>
        </div>
      );
}

export default Experince
