"use client";
import Image from 'next/image';
import { Heromodel} from '@/constants/models';
import Link from 'next/link';
import { useAppContext } from '@/context';


const Home: React.FC = () => {

  const [isHover,setIsHover]=useAppContext()
  
  return (
    <main className={`flex min-h-screen flex-col  justify-between h-full align-middle ${isHover&&('blur-sm')}`}>
      {Heromodel.map((item) => (
        <div key={item.id} className=' relative flex justify-center '>
          <Image src={item.src} alt={item.alt}  objectFit="cover"  layout="responsive" className=' h-full w-screen'/>
          <div className={` flex  flex-col  text-center absolute  mt-52 text-${item.color} `}>
          {item.check===true? <h1 className=' text-5xl font-semibold '>{item.name}</h1> :<Image src={item.font} alt={item.alt} className=' w-96'/>}
          <p className=' font-medium'>from{item.price} </p>
          <p className='text-sm font-light'>After Est. Savings</p>
          <div className=' flex flex-wrap space-x-3  mt-80 font-medium'><button className=' bg-[#f4f4f4] size-40 rounded-sm border-1 h-8 text-center text-md text-black'><Link href={item.link}>Order Now</Link></button>
          <button className=' bg-black size-40 rounded-sm border-1 h-8 text-center text-md text-white '><Link href={item.link}>Learn more</Link></button></div>
           </div>       
        </div>
      ))}
       
    </main>
  );
};

export default Home;
