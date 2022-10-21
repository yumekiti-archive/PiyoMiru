import { FC } from 'react';

import Kumo from '../../assets/kumo.svg';
import Sora from '../../assets/sora.svg';

const Background: FC = () => {
  return (
    <>
      <img src={Sora} alt='sora' className='w-full h-screen bg-red-50 object-cover absolute top-0 left-0 -z-20' />
      <div className='-z-10 overflow-hidden h-screen w-full absolute top-0 left-0'>
        <img src={Kumo} alt='kumo' className='w-36 h-1/6 absolute top-20 -left-8 -z-10 overflow-hidden' />
        <img src={Kumo} alt='kumo' className='w-36 h-1/6 absolute top-0 -right-10 -z-10 overflow-hidden' />
        <img src={Kumo} alt='kumo' className='w-36 h-1/6 absolute top-32 -right-11 -z-10 overflow-hidden' />
      </div>
    </>
  );
};

export default Background;
