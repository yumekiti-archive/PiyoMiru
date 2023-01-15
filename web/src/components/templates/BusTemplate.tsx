import { FC } from 'react';
import { Link } from 'react-router-dom';

import Bus from '../../assets/bus.svg';
import BusRun from '../../assets/busRun.svg';
import TulipTag from '../../assets/button/tulipTag.svg';
import ChickTag from '../../assets/button/chickTag.svg';
import ChickBeginner from '../../assets/button/chickBeginner.svg';

import Header from '../organisms/Header';
import Background from '../organisms/Background';

interface Props {
  data: any;
  user: any;
  onClickStart: () => void;
}

const BusTemplate: FC<Props> = ({ data, user, onClickStart }) => {
  return (
    user &&
    data && (
      <>
        <Header title='乗車中園児 一覧' />
        {data.attributes.status && <Background type='bus' />}
        <div className='bg-sora h-screen'>
          <div className='h-2/6 flex items-end justify-center'>
            <div className='text-4xl font-bold'>
              {data.attributes.name}
              {data.attributes.status ? '運行中...' : '停車中'}
            </div>
          </div>
          <div className='h-2/6 flex items-center justify-center'>
            {data.attributes.status ? (
              <img src={BusRun} alt='bus' className='w-80' />
            ) : (
              <img src={Bus} alt='bus' className='w-80' />
            )}
          </div>
          <div className='h-2/6 flex items-center justify-center'>
            {user.driver ? (
              <>
                <button
                  className={`w-8/12 h-16 ${
                    !data.attributes.status ? 'bg-[#ED6D47] text-white' : 'bg-[#90D7EC] text-[#666666]'
                  } rounded-2xl text-4xl flex items-center justify-center relative relative`}
                  onClick={onClickStart}
                >
                  {!data.attributes.status ? '運転開始' : '運転終了'}
                  <div
                    className={`w-full h-16 ${
                      !data.attributes.status ? 'bg-[#DC3C14]' : 'bg-[#6EC5CA]'
                    } rounded-2xl -z-10 absolute top-4 left-0`}
                  />
                  <img
                    src={ChickBeginner}
                    alt='ChickBeginner'
                    style={{ height: '60%' }}
                    className='absolute -top-8 right-2'
                  />
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default BusTemplate;
