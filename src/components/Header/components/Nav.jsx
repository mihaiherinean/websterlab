import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoLogoWebComponent} from 'react-icons/io5'
import {AiOutlineClose} from 'react-icons/ai'
function Nav() {
    const [opened, setOpened] = useState(false);
    console.log(opened);
  return (
    <>
    <div className="w-[100%] h-[50px] bg-[#10091c] flex justify-center items-center text-white">
        <nav className="flex justify-between w-[95%] m-auto items-center font-kanit z-50">
            <NavLink to="/"><p className="min-w-[300px] flex justify-start items-center gap-4  w-[100%] font-bold text-[25px] md:text-[30px] tracking-wide"><IoLogoWebComponent size={30}/>Webster Lab</p></NavLink>
            <ul className="hidden md:flex md:justify-evenly md:items-center max-w-[400px] min-w-[250px] w-[100%] h-[100%] font-bold [&>*]:text-[20px] hover:[&>*]:border-b-2 [&>*]:tracking-wide">
               <NavLink to="/"> <li> Home </li> </NavLink>
               <NavLink to="/services"> <li> Services </li></NavLink>
               <NavLink to="/contact"><li> Contact </li> </NavLink>
               <NavLink to="/about"><li> About </li></NavLink>
            </ul>
               {!opened ? <GiHamburgerMenu size={35} className="block md:hidden" onClick={()=> setOpened(!opened)}/> : <AiOutlineClose size={35} className="block md:hidden" onClick={()=> setOpened(!opened)}/>}  
        </nav>
    </div>
    
    <div className={opened ? "w-[100%] h-full bg-[#10091c] fixed right-0 z-50 ease-in-out duration-500 md:hidden" : "w-[100%] z-50 h-full bg-[#10091c] fixed right-[-100%] opacity-50 ease-in-out duration-500" } > 
    <ul className="flex flex-col justify-center text-white items-center text-center font-bold [&>*]:text-[25px] [&>*]:tracking-wide [&>*]:w-full hover:[&>*]:bg-[#1c122c] font-kanit">
               <NavLink to="/" onClick={() => setOpened(false)}> <li> Home </li> </NavLink>
               <NavLink to="/services" onClick={() => setOpened(false)}> <li> Services </li></NavLink>
               <NavLink to="/contact" onClick={() => setOpened(false)}><li> Contact </li> </NavLink>
               <NavLink to="/about" onClick={() => setOpened(false)}><li> About us </li></NavLink>
            </ul>
    </div>
    </>
  )
}

export default Nav