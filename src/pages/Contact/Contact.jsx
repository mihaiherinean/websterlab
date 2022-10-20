import React from 'react'

function Contact() {
  return (
    <div className="w-[100%] h-[100%] md:flex">
        <div className="w-[100%] h-[50vh] md:w-[50%] md:h-[100vh]  bg-white flex justify-center items-center">
        <iframe src="https://embed.lottiefiles.com/animation/89604" title="contactform" className="w-[100%] h-[70%]"></iframe>
        </div>
        <div className="w-[100%] md:w-[50%] md:h-[100vh] min-h-[50vh] bg-[#10091c]">
        <h1 className="text-center w-[100%] text-white font-kanit text-[30px] md:text-[45px] mt-8">Contact us!</h1>
        <form className="[&>input]:block [&>input]:w-[75%] [&>input]:md:w-[70%] [&>input]:lg:w-[50%] [&>input]:rounded-3xl md:[&>input]:p-3 [&>input]:p-2 w-[80%] m-auto h-[80%] flex flex-col justify-center gap-4 items-center">
          <input type="text" placeholder="Name" required/>
          <input type="text" placeholder="Email" required/>
          <input type="text" placeholder="Subject" required/>
          <textarea placeholder="Message" required className="p-3 rounded-3xl w-[95%]  min-h-[200px] max-h-[350px] md:max-h-[350px]"/>
          <div className="w-full flex justify-center mt-4">
          <button className="rounded-3xl p-2 border-2 text-white font-kanit w-[120px] hover:scale-105 ease-in-out duration-300 hover:bg-white hover:text-black">Submit</button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default Contact