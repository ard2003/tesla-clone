import Image from 'next/image';
import { Heromodel, Vehicles } from '@/constants/models';


const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col  justify-between h-full align-middle ">
      {Heromodel.map((item) => (
        <div key={item.id} className=' relative flex justify-center items-center'>
          <Image src={item.src} alt={item.name}  objectFit="cover" className=' h-3/4 w-screen'/>
          <div className=' flex  flex-col text-start absolute justify-center  text-white '><h1 className=' text-5xl font-semibold '>{item.name}</h1>
          <p>starting $10000</p></div>       
        </div>
      ))}
       
    </main>
  );
};

export default Home;
