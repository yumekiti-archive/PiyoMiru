import { FC } from 'react';
import Hiyoko from '../assets/hiyoko.svg';
import Logo from '../assets/loadingLogo.svg';

const Loading: FC = () => {
  return (
    <div className='loading flex h-screen z-50 bg-[#FBD579] fixed top-0 left-0 w-full items-center flex-col'>
      <div className='w-full h-1/4 flex items-end justify-center'>
        <img src={Logo} alt='logo' className='w-72' />
      </div>
      <div className='h-3/4 w-full flex items-center justify-center'>
        <img src={Hiyoko} alt='hiyoko' className='w-40 h-40' />
      </div>
    </div>
  );
};

export default Loading;
