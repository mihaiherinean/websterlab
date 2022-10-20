import React from 'react'
import { useNavigate } from 'react-router-dom'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {RiMiniProgramLine, RiTeamLine} from 'react-icons/ri'
function About() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');
  }
  return (
    <div className="bg-[#10091c] w-[100%] h-[100%] min-h-[100vh]">
      <img alt="laptopimage" className="w-[100%] h-[100%] object-cover min-h-[95vh] max-h-[100vh]" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"/>
      <div className="w-[100%] h-[100%] absolute z-10 top-0">
          <div className="w-[100%] h-[100%] min-h-[100vh] flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-col gap-4 font-kanit">
            <h1 className="text-white text-[40px] text-center">We solve your challenges</h1>
            <p className="text-white text-[20px] text-center w-[70%] md:w-[60%] lg:w-[70%]">We see the essence and find bright solutions for each project. We are proud of our work and guarantee unrivaled standards in everything we do.</p>
            <button onClick={handleClick} className="w-[120px] p-2 text-white text-[20px] border-2 rounded-3xl hover:text-black hover:scale-105 ease-in-out duration-300 hover:bg-white">Hire us</button>
            </div>
           
          </div>
      </div>
      <div className="w-[100%] h-[100%] min-h-[100vh]">
    <h1 className="text-center text-[45px] text-white font-kanit font-extrabold">About us</h1>
    <div className="w-[100%] h-[100%] grid grid-flow-row md:grid-cols-3 gap-8 md:gap-2 p-4 [&>div]:justify-self-center">
        <div className="w-[70%] md:w-[95%] min-h-[350px] bg-[#7265654f] rounded-2xl hover:bg-[#9e8e8e4f] flex flex-col justify-start items-center gap-4 pb-4">
          <HiOutlineLightBulb size={55} className="mt-2" color='white' />
         <div className="text-white font-kanit text-center">
          <h1 className="text-[35px]">We are creative</h1>
          <p className="w-[75%] m-auto">We are masters in innovative, agile creative approaches in producing websites. Our refreshing way of working brings the best possible results for our clients. We deliver beautifully crafted projects with passion.</p>
         </div> 
        </div>
        <div className="w-[70%] md:w-[95%] min-h-[300px] bg-[#7265654f] rounded-2xl hover:bg-[#9e8e8e4f] flex flex-col justify-start items-center gap-4 pb-4">
          <RiMiniProgramLine size={55} className="mt-2" color='white'/>
          <div className="text-white font-kanit text-center">
          <h1 className="text-[35px]">We use the latest technologies</h1>
          <p className="w-[75%] m-auto">We create highly-usable websites that are powered by an array of technologies and then we analyze performance data to optimize and refine.</p>
         </div> 
        </div>
        <div className="w-[70%] md:w-[95%] min-h-[300px] bg-[#7265654f] rounded-2xl hover:bg-[#9e8e8e4f] flex flex-col justify-start items-center gap-4 pb-4">
        <RiTeamLine size={55} className="mt-2" color='white'/>
          <div className="text-white font-kanit text-center">
          <h1 className="text-[35px]">Best team</h1>
          <p className="w-[75%] m-auto">Our team provides personal, professional and friendly service which carefully considers your business goals and requirements. We transform innovative visions into brilliant realities. Got one? Let’s make outstanding work together!</p>
         </div>
        </div>
       
    </div>
    <div className="flex justify-center items-center w-[100%]">
    <iframe title="coding" className="w-[350px] h-[350px]" src="https://embed.lottiefiles.com/animation/6317"></iframe>
    </div>
    </div>
    
    </div>
  )
}

export default About