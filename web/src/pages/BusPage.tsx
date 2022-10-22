import { FC } from 'react';
import { Link } from 'react-router-dom';

import Bus from '../assets/bus.svg';
import Tulip from '../assets/button/tulip.svg';

import Header from '../components/Header';
import Background from '../components/organisms/Background';

const BusPage: FC = () => {
  return (
    <>
      <Header title='乗車中園児 一覧' />
      <Background type='bus' />
      <div className='bg-sora h-screen'>
        <div className='h-2/6 flex items-end justify-center'>
          <div className='text-4xl font-bold'>バス運行中. . .</div>
        </div>
        <div className='h-2/6 flex items-center justify-center'>
          <img src={Bus} alt='bus' className='w-80' />
        </div>
        <div className='h-2/6 flex items-center justify-center'>
          <Link
            className='w-11/12 h-16 bg-[#FBD579] rounded-2xl text-4xl flex items-center justify-center relative'
            to='/list'
          >
            乗車中園児確認
            <img src={Tulip} alt='tulip' className='w-10 h-10 mt-2 ml-1' />
            <div className='w-full h-16 bg-[#DAB357] rounded-2xl -z-10 absolute top-4 left-0' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BusPage;
