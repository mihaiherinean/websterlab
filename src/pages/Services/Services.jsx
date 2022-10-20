import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
function Services() {
  return (
    <div className="w-[100%] h-[100%]">
      <div className="w-[100%] h-[100vh]">
        <img
          className="w-[100%] h-[100%] object-cover relative"
          src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80"
          alt="servicesphoto"
        />
        <div className="w-[100%] h-[100%] absolute top-0 flex flex-col justify-evenly items-center md:flex-row md:justify-around">
          <div className="w-[100%] h-[100%] max-w-[300px] max-h-[250px] md:max-w-[350px] lg:max-w-[500px] rounded-2xl bg-[#10091c97] p-4 hover:bg-[#10091cd8] ease-in-out duration-300">
            <p className="text-white text-[30px] font-kanit text-center font-extrabold border-b-2">
              Web Development
            </p>
            <ul className="w-[80%] lg:w-[50%] h-[70%] m-auto flex flex-col justify-around items-baseline text-white font-kanit text-[20px] [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:ease-in-out [&>*]:duration-300 hover:[&>*]:translate-x-4">
              <li>
                <BsArrowRightShort size={20} />
                Website Development
              </li>
              <li>
                <BsArrowRightShort size={20} />
                Corporate Website
              </li>
              <li>
                <BsArrowRightShort size={20} />
                Startup Websites
              </li>
              <li>
                <BsArrowRightShort size={20} />
                E-commerce
              </li>
            </ul>
          </div>
          <div className="w-[100%] h-[100%] max-w-[300px] max-h-[250px] md:max-w-[350px] lg:max-w-[500px]  rounded-2xl bg-[#10091c97]  p-4 hover:bg-[#10091cd8] ease-in-out duration-300">
            <p className="text-white text-[30px] font-kanit text-center font-extrabold border-b-2">
              Design
            </p>
            <ul className="w-[80%] lg:w-[50%] h-[70%] m-auto flex flex-col justify-around items-baseline text-white font-kanit text-[20px] [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:ease-in-out [&>*]:duration-300 hover:[&>*]:translate-x-4">
              <li>
                <BsArrowRightShort size={20} />
                Web design
              </li>
              <li>
                <BsArrowRightShort size={20} />
                UX, UI Design
              </li>
              <li>
                <BsArrowRightShort size={20} />
                Logo Design
              </li>
              <li>
                <BsArrowRightShort size={20} />
                Brand Identity
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
