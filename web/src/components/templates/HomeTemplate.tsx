import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import Header from '../organisms/Header';
import Background from '../organisms/Background';
import FormText from '../atoms/FormText';
import BusButton from '../atoms/BusButton';

import Pluss from '../../assets/button/pluss.svg';

interface Props {
  addBusFlag: boolean;
  busName: string;
  setBusName: (value: string) => void;
  setAddBusFlag: (value: boolean) => void;
  addBus: () => void;

  data: any;
}

const HomeTemplate: FC<Props> = ({
  addBusFlag, busName, setBusName, setAddBusFlag, addBus,
  data
}) => {
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
                  onClick={() => {setAddBusFlag(!addBusFlag)}}
                >
                  キャンセル
                </button>
                <button className=' h-12 w-4/12 bg-[#ED6D47] text-white rounded-xl' onClick={addBus}>
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
                -- {data.group ? data.group.displayname : '未所属'} --
              </div>
            </div>
            <div className='flex justify-center'>
              {data.group &&
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
                        onClick={() => {setAddBusFlag(!addBusFlag)}}
                      >
                        <img src={Pluss} alt='pluss' />
                      </button>
                    </div>
                  )}
                </div>
              }
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default HomeTemplate;
