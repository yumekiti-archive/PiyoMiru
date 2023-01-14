import { FC, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';

import Bus from '../assets/bus.svg';
import BusRun from '../assets/busRun.svg';
import TulipTag from '../assets/button/tulipTag.svg';
import ChickTag from '../assets/button/chickTag.svg';
import ChickBeginner from '../assets/button/chickBeginner.svg';

import Header from '../components/organisms/Header';
import Background from '../components/organisms/Background';

import { useBusesFindOne, useBusesUpdate } from '../libs/buses';
import { userState, busState } from '../recoil/atoms';

const BusPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useBusesFindOne(id);
  const [bus, setBus] = useRecoilState(busState);
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (!user) navigate('/');
    if (!data) return;
    setBus(data.data);
  }, [data]);

  const HandleStart = () => {
    const body = {
      data: {
        status: !bus.attributes.status,
      },
    };

    useBusesUpdate(bus.id, body).then((res) => {
      setBus(res.data.data);
    });
  };

  return (
    user &&
    bus && (
      <>
        <Header title='乗車中園児 一覧' />
        {bus.attributes.status && <Background type='bus' />}
        <div className='bg-sora h-screen'>
          <div className='h-2/6 flex items-end justify-center'>
            <div className='text-4xl font-bold'>
              {bus.attributes.name}
              {bus.attributes.status ? '運行中...' : '停車中'}
            </div>
          </div>
          <div className='h-2/6 flex items-center justify-center'>
            {bus.attributes.status ? (
              <img src={BusRun} alt='bus' className='w-80' />
            ) : (
              <img src={Bus} alt='bus' className='w-80' />
            )}
          </div>
          <div className='h-2/6 flex items-center justify-center'>
            {user.manager ? (
              <>
                <button
                  className={`w-8/12 h-16 ${
                    !bus.attributes.status ? 'bg-[#ED6D47] text-white' : 'bg-[#90D7EC] text-[#666666]'
                  } rounded-2xl text-4xl flex items-center justify-center relative relative`}
                  onClick={HandleStart}
                >
                  {!bus.attributes.status ? '運転開始' : '運転終了'}
                  <div
                    className={`w-full h-16 ${
                      !bus.attributes.status ? 'bg-[#DC3C14]' : 'bg-[#6EC5CA]'
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

export default BusPage;
