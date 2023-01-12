import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import Header from '../components/organisms/Header';
import Background from '../components/organisms/Background';
import FormText from '../components/atoms/FormText';
import BusButton from '../components/atoms/BusButton';
import Pluss from '../assets/button/pluss.svg';

import { userState } from '../recoil/atoms';
import { useMe } from '../libs/users';

const HomePage: FC = () => {
  const navigate = useNavigate();
  const [addBusFlag, setAddBusFlag] = useState(false);
  const [busName, setBusName] = useState('');
  const [user, setUser] = useRecoilState(userState);
  const { data, error, isLoading } = useMe();

  const ChangeAddBusFlag = () => {
    setAddBusFlag(!addBusFlag);
  };

  const AddBus = () => {
    console.log('hoge');
  };

  useEffect(() => {
    if (localStorage.getItem('jwt') === null) {
      navigate('/login');
    }
    if (error) localStorage.removeItem('jwt');
    if (!data) return;
    setUser(data);
  }, [data, error]);

  return (
    data && (
      <>
        <Background type='home' />
        <Header title='' />
        {addBusFlag && (
          <div className='fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='w-5/6 h-2/6 bg-white rounded-xl flex justify-start items-center border-2 border-[#FBD579] flex-col'>
              <div className='h-2/6 flex justify-center items-center'>
                <p className='text-xl'>バスの名前を入力してください</p>
              </div>
              <div className='h-2/6 w-5/6 flex justify-center items-center'>
                <FormText value={busName} onChange={(e) => setBusName(e.target.value)} />
              </div>
              <div className='h-2/6 w-full flex justify-center items-center'>
                <button
                  className=' h-12 w-4/12 bg-[#E3EEF9] text-[#666666] rounded-xl mr-16'
                  onClick={() => {
                    setAddBusFlag(!addBusFlag);
                  }}
                >
                  キャンセル
                </button>
                <button className=' h-12 w-4/12 bg-[#ED6D47] text-white rounded-xl' onClick={AddBus}>
                  追加
                </button>
              </div>
            </div>
          </div>
        )}
        <div className='h-screen w-full'>
          <div className='h-1/6' />
          <div className='h-5/6'>
            <div className='flex justify-center items-center'>
              <div className='w-10/12 text-2xl flex items-start justify-center mb-6 pt-8'>
                -- {data.group.displayname} --
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='w-10/12 flex justify-start flex-wrap'>
                {data.group.buses.map((bus: any, index: number) => (
                  <div key={index} className='w-1/2 h-36 flex items-center justify-center'>
                    <BusButton to={`/bus/${bus.id}`} name={bus.name} drive={bus.status} />
                  </div>
                ))}
                {data.driver && (
                  <div className='w-1/2 h-36 flex items-center justify-center'>
                    <button
                      className='w-10/12 h-28 rounded-xl bg-[#FFE39E] flex justify-center items-center'
                      onClick={ChangeAddBusFlag}
                    >
                      <img src={Pluss} alt='pluss' />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default HomePage;
