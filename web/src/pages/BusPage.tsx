import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Bus from '../assets/bus.svg';
import BusRun from '../assets/busRun.svg';
import TulipTag from '../assets/button/tulipTag.svg';
import ChickTag from '../assets/button/chickTag.svg';

import Header from '../components/organisms/Header';
import Background from '../components/organisms/Background';

import { useBusesFindOne } from '../libs/buses';
import { userState } from '../recoil/userState';

const BusPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useBusesFindOne(id);
  const user = useRecoilValue(userState);

  console.log(user);

  return (
    data && (
      <>
        <Header title='乗車中園児 一覧' />
        <Background type='bus' />
        <div className='bg-sora h-screen'>
          <div className='h-2/6 flex items-end justify-center'>
            <div className='text-4xl font-bold'>
              {data.data.attributes.name}
              {data.data.attributes.status ? '運行中' : '停車中'}
            </div>
          </div>
          <div className='h-2/6 flex items-center justify-center'>
            {data.data.attributes.status ? (
              <img src={BusRun} alt='bus' className='w-80' />
            ) : (
              <img src={Bus} alt='bus' className='w-80' />
            )}
          </div>
          <div className='h-2/6 flex items-center justify-center'>
            <Link
              className='w-4/12 h-24 bg-[#FBD579] rounded-2xl text-sm font-bold flex flex-col items-center justify-center relative mr-10'
              to='/list'
            >
              <p className='mt-2'>乗車中園児確認</p>
              <img src={TulipTag} alt='tulip' className='w-10 h-10 mt-2 ml-1' />
              <div className='w-full h-16 bg-[#DAB357] rounded-2xl -z-10 absolute top-10 left-0' />
            </Link>
            <Link
              className='w-4/12 h-24 bg-[#FBD579] rounded-2xl text-sm font-bold flex flex-col items-center justify-center relative'
              to='/list'
            >
              <p className='mt-2'>NFCスキャナー</p>
              <img src={ChickTag} alt='tulip' className='w-10 h-10 mt-2 ml-1' />
              <div className='w-full h-16 bg-[#DAB357] rounded-2xl -z-10 absolute top-10 left-0' />
            </Link>

            {/* <Link
              className='w-11/12 h-16 bg-[#FBD579] rounded-2xl text-4xl flex items-center justify-center relative'
              to='/list'
            >
              乗車中園児確認
              <img src={Tulip} alt='tulip' className='w-10 h-10 mt-2 ml-1' />
              <div className='w-full h-16 bg-[#DAB357] rounded-2xl -z-10 absolute top-4 left-0' />
            </Link> */}
          </div>
        </div>
      </>
    )
  );
};

export default BusPage;
