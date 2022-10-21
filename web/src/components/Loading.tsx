import { FC } from 'react';
import Hiyoko from '../assets/hiyoko.svg';
import Logo from '../assets/loadingLogo.svg';

const Loading: FC = () => {
  return (
    <div className='loading bg-[#FBD579] h-screen w-full fixed top-0 left-0 z-50'>
      <div className='h-1/6' />
      <div className='h-1/6 w-full flex items-center justify-center'>
        <img src={Logo} alt='logo' className='w-72' />
      </div>
      <div className='h-1/6' />
      <div className='h-1/6 w-full flex justify-center items-center'>
        <img src={Hiyoko} alt='hiyoko' className='pt-4 h-full' />
      </div>
      <div className='h-2/6' />
    </div>
  );
};

export default Loading;
