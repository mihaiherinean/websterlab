import React from 'react'
import { useNavigate } from 'react-router-dom';
import {TbPlayerTrackNext} from 'react-icons/tb';
import Header from '../../components/Header/Header';
function Home() {
    const videosrc = "https://assets.mixkit.co/videos/preview/mixkit-touring-a-symbolic-digital-world-of-artificial-intelligence-and-information-12765-large.mp4";
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/services');
    }
    return (
        <>
        <Header/>
    <div className="w-[100%] h-[100vh] relative">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.6)]"></div>
        <video className="w-[100%] h-[100%] object-cover" src={videosrc}  autoPlay loop muted playBackRate={0.9}/>
        <div className="w-[100%] h-[400px] md:h-[500px] absolute top-0 ease-in-out duration-300 flex justify-center items-center">
        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_es4p9zph.json"  background="transparent"  speed="1" className="w-[80%] h-[100%]"  loop  autoplay></lottie-player>
        </div>
        <div className="absolute w-[100%] h-[80%] top-0 flex flex-col justify-end items-center gap-4 text-center text-white font-kanit">
            <h1 className="text-[45px]">Welcome to Webster Lab!</h1>
            <p className="text-[20px] italic">Web Development and Design Agency </p>
            <button className="px-4 py-2 rounded-3xl flex justify-center items-center gap-4 border-2 hover:scale-110 ease-in-out duration-300" onClick={handleOnClick}><TbPlayerTrackNext size={20}/>Get Started</button>
        </div>
    </div>
    </>
  )
}

export default Home