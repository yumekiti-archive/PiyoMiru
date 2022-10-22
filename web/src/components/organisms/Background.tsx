import { FC } from 'react';

import Home from '../../assets/background/home.svg';
import Kumo from '../../assets/background/kumo.svg';
import Sora from '../../assets/background/sora.svg';

interface Props {
  type: string;
}

const Background: FC<Props> = ({ type }) => {
  if (type === 'home') {
    return <img src={Home} alt='home' className='w-full object-cover absolute bottom-0 left-0 -z-20' />;
  }

  if (type === 'bus') {
    return (
      <>
        <img src={Sora} alt='home' className='w-full h-screen bg-red-50 object-cover absolute top-0 left-0 -z-20' />
        <div className='-z-10 overflow-hidden h-screen w-full absolute top-0 left-0'>
          <img src={Kumo} alt='kumo' className='w-36 h-1/6 absolute top-20 -left-8 -z-10 overflow-hidden' />
          <img src={Kumo} alt='kumo' className='w-36 h-1/6 absolute top-0 -right-10 -z-10 overflow-hidden' />
          <img src={Kumo} alt='kumo' className='w-36 h-1/6 absolute top-32 -right-11 -z-10 overflow-hidden' />
        </div>
      </>
    );
  }

  return <></>;
};

export default Background;
