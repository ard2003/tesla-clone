"use client";

import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiCircleQuestion } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import { NavbarItems } from "@/constants/models";
import Image from "next/image";
import { useAppContext } from "@/context";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isHover, setIsHover] = useAppContext();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hideTimeOut,setHideTimeOut]=useState<NodeJS.Timeout | null>(null)


  const onToggleMenu = (e: any) => {
    setIsMenuOpen(!isMenuOpen);
    e.name = e.name === "menu" ? "close" : "menu";
  };

  const handleMouseEnter = (title: string) => {
    setIsHover(true);
    if(hideTimeOut){
      clearTimeout(hideTimeOut);
      setHideTimeOut(null)
    }
    
    setHoveredItem(title);
  };

  const handleMouseLeave = () => {
    const timeOut=setTimeout(()=>{
      setIsHover(false);
    setHoveredItem(null);

    },200)
    setHideTimeOut(hideTimeOut)
  };

  return (
    <>
    <nav className="w-full h-auto bg-transparent flex justify-between py-5 px-5 z-20 absolute">
      <div className="w-28">
        <svg viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
            fill="currentColor"
            className=""
          ></path>
        </svg>
      </div>
      <ul className="space-x-1 bg-transparent font-medium text-sm xl:grid grid-cols-5 gap-4 hidden z-40">
        {NavbarItems.map((mains) => (
          <li
            key={mains.id}
            className="hover:bg-gray-300 rounded-sm text-center"
            onMouseEnter={() => handleMouseEnter(mains.title)}
            // onMouseLeave={handleMouseLeave}
          >
            <h3>{mains.title}</h3>
          </li>
        ))}
      </ul>
      <div className="xl:flex flex-wrap space-x-3 font-light hidden">
        <div>
          <TbWorld className="text-2xl" />
        </div>
        <div>
          <CgProfile className="text-2xl" />
        </div>
        <div>
          <CiCircleQuestion className="text-2xl" />
        </div>
      </div>
      <button
        className={`text-sm font-semibold bg-[#0000000d] p-2 rounded-md xl:hidden ${
          !isMenuOpen ? "flex" : "hidden"
        }`}
        name="menu"
        onClick={onToggleMenu}
      >
        Menu
      </button>

      {isMenuOpen && (
        <div className="xl:hidden flex flex-wrap justify-end">
          <IoIosClose
            className={`absolute size-10 ${!isMenuOpen ? "hidden" : "flex"} xl:hidden z-10`}
            name="close"
            onClick={onToggleMenu}
          />
          <div className="fixed inset-0 bg-white flex flex-col align-top">
            <ul className="text-black text-start absolute text-lg font-semibold p-10">
              <li className="w-screen py-5">
                <p>Vehicles</p>
              </li>
              <li className="py-5">
                <p>Energy</p>
              </li>
              <li className="py-5">
                <p>Charging</p>
              </li>
              <li className="py-5">
                <p>Discover</p>
              </li>
              <li className="py-5">
                <p>Shop</p>
              </li>
            </ul>
          </div>
        </div>
      )}

      
    </nav>

    {isHover &&
        NavbarItems.map(
          (item) =>
            item.title === hoveredItem && (
              <div
                key={item.title}
                className="w-full bg-white z-10 absolute p-14 h-auto flex flex-row rounded-b-md  animate-fade-in-down"
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-3/4 flex justify-start flex-wrap ">
                  <h4 className="font-semibold text-base">{item.title}</h4>
                  {item.items.map((dtls) => (
                    <div key={dtls.id} className="flex flex-wrap p-5 flex-col text-center items-center">
                      <Image src={dtls.src} alt={dtls.name} width={200} />
                      <h3 className=" text-base font-semibold">{dtls.name}</h3>
                      <div className=" flex flex-wrap space-x-2 text-center text-sm font-normal"><h4 >learn</h4>    <h4 >Order</h4></div>
                    </div>
                  ))}
                </div>
                
                  <div  className=" w-1/4 ">{item.additonal.map((dtls)=>(
                    <div key={dtls.id} className=" flex flex-col text-base font-medium  space-y-4"><h4 >{dtls.title}</h4></div> ))}
                  </div>
               
              </div>
            )
        )}
    </>
  );
};

export default Navbar;
