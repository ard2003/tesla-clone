import Image from "next/image";
import heropic from "../../public/images/images/tesla models and prodects19.jpg";
import { Vehicles } from "@/utils/models";



export default function Home() {

  return (
    <main className="flex min-h-screen  flex-col items-center justify-between  h-full  align-middle  ">
      
     <div>
     <Image className=" w-full " alt="tesla models and prodects20" src={heropic}/>
     
     </div>
     
    
    </main>
  );
}
