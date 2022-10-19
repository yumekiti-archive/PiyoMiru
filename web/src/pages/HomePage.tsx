import { FC } from 'react';
import Sora from '../assets/sora.svg';
import Bus from '../assets/bus.svg';
import Tulip from '../assets/tulip.svg';
import Kumo from '../assets/kumo.svg';

const HomePage: FC = () => {
  return (
    <div className='bg-sora h-screen'>
      <img src={Sora} alt='sora' className='w-full h-screen bg-red-50 object-cover absolute top-0 left-0 -z-20' />
      <div className='-z-10 overflow-hidden h-screen w-full absolute top-0 left-0'>
        <img src={Kumo} alt='kumo' className='w-36 h-1/6 absolute top-20 -left-8 -z-10 overflow-hidden' />
        <img src={Kumo} alt='kumo' className='w-36 h-1/6 absolute top-0 -right-10 -z-10 overflow-hidden' />
        <img src={Kumo} alt='kumo' className='w-36 h-1/6 absolute top-32 -right-11 -z-10 overflow-hidden' />
      </div>
      <div className='h-2/6 flex items-end justify-center'>
        <div className='text-4xl font-bold'>バス運行中. . .</div>
      </div>
      <div className='h-2/6 flex items-center justify-center'>
        <img src={Bus} alt='bus' className='w-80' />
      </div>
      <div className='h-2/6 flex items-center justify-center'>
        <button className='w-11/12 h-16 bg-[#FBD579] rounded-2xl text-4xl flex items-center justify-center relative'>
          乗車中園児確認
          <img src={Tulip} alt='tulip' className='w-10 h-10 mt-2 ml-1' />
          <div className='w-full h-16 bg-[#DAB357] rounded-2xl -z-10 absolute top-4 left-0' />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
