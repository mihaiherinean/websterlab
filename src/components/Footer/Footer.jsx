import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { IoLogoWebComponent } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className="w-[100%] h-[100%] bg-[#10091c] text-white p-8">
        <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between w-[80%] m-auto">
        <NavLink to="/"><p className="flex justify-center items-center text-[25px] gap-2 md:min-w-[200px]"><IoLogoWebComponent size={30}/>Webster Lab</p></NavLink>
        <ul className="w-[100%] text-[14px] flex justify-around md:justify-end md:text-[20px] font-kanit gap-4 border-b-2 pb-8 md:border-none md:pb-0 hover:[&>*]:scale-105 hover:[&>*]:ease-in-out hover:[&>*]:duration-300">
               <NavLink to="/"> <li> Home </li> </NavLink>
               <NavLink to="/services"> <li> Services </li></NavLink>
               <NavLink to="/contact"><li> Contact </li> </NavLink>
               <NavLink to="/about"><li> About us </li></NavLink>
            </ul>
          </div>
        <div className="w-[50%] md:w-[100%] m-auto mt-4 flex flex-col gap-4">
          <div className='flex justify-between items-center md:justify-center md:gap-8'>
         <a href="https://www.facebook.com/"> <BsFacebook size={35} className="hover:scale-110 ease-in-out duration-100"/> </a>
         <a href="https://www.instagram.com/"><BsInstagram size={35} className="hover:scale-110 ease-in-out duration-100"/></a>
         <a href="https://www.twitter.com/"><BsTwitter size={35} className="hover:scale-110 ease-in-out duration-100"/></a>
          </div>
          <p className="italic font-kanit text-center text-[12px] sm:text-[15px] md:text-[20px]">Copyright 2022 Webster Lab</p>
        </div>
    </div>
  )
}

export default Footer