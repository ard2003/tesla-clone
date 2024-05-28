import React from "react";
import hero from "@/public/images/model-s/Model-S-Main-Hero-Desktop-v3.jpeg";
import hero2 from "@/public/images/model-s/Model-S-Interior-Desktop.jpeg";
import herosub from "@/public/images/model-s/MS-Interior-Grid-D-Desktop.jpeg";
import herosub1 from "@/public/images/model-s/Model-S-Interior-Grid-A-DMT.jpeg";
import hero3 from "@/public/images/model-s/Model-S-Performance-Desktop.jpeg";
import herosubmotor from "@/public/images/model-s/Model-S-Dual-Motor-Powertrain-Carousel-Desktop.jpeg";
import heroextrior from "@/public/images/model-s/Model-S-Exterior-Hero-Desktop-Global.jpeg";


import Image from "next/image";

const ModelSPage = () => {
  return (
    <main className=" grid grid-rows-8 gap-4 bg-black">
      <div className=" w-screen">
        <Image src={hero} alt="hero" />
      </div>
      <div className=" w-screen">
        <Image src={hero2} alt="hero2" />
      </div>
      <div className=" w-screen items-center">
        <video
          autoPlay
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/Model-S-Interior-Carousel-2-Yoke-Steering-Desktop.mp4"
        />
      </div>
      <div className="  w-screen flex justify-center items-center">
        {" "}
        <div className=" w-5/6 grid grid-cols-2">
          <Image src={herosub} alt="grid a" className=" w-full" />
          <div className=" w-full bg-white">butifull interiar</div>
          <div className=" bg-yellow-400">hey gayz</div>
          <Image src={herosub1} alt=" grid d" />
          <Image src={hero} alt="grid e" />
          <div className=" bg-white"></div>
        </div>
      </div>
      <div className=" w-screen h-2/4">
        <Image src={hero3} alt="hero3" />
        <div className=" w-full h-1/4 bg-white"></div>
      </div>
      <div className=" bg-gray-400 w-screen items-center flex justify-center">
        <Image src={herosubmotor} alt="motor" className=" w-3/4" />
      </div>
      <div className=" w-full"> <Image src={heroextrior} alt="extirior" className=" w-full "/>
      <div className="  bg-white ">arshad</div>
      <div className=" grid grid-rows-2 grid-cols-2 w-full h-full">
        <div className=" bg-orange-400">gag</div>
        <div className=" bg-yellow-200">hsah</div>
        <div className=" bg-white">ahda</div>
        <div className=" bg-slate-400">aia</div>
        </div></div>
    </main>
  );
};

export default ModelSPage;
