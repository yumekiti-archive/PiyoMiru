import { FC } from 'react';

import Header from '../organisms/Header';
import Background from '../organisms/Background';
import AddBus from '../organisms/AddBus';
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

const HomeTemplate: FC<Props> = ({ addBusFlag, busName, setBusName, setAddBusFlag, addBus, data }) => {
  return (
    data && (
      <>
        <Background type='home' />
        <Header title='' />
        {addBusFlag && (
          <AddBus
            addBusFlag={addBusFlag}
            busName={busName}
            setBusName={setBusName}
            setAddBusFlag={setAddBusFlag}
            addBus={addBus}
          />
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
              {data.group && (
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
                        onClick={() => {
                          setAddBusFlag(!addBusFlag);
                        }}
                      >
                        <img src={Pluss} alt='pluss' />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default HomeTemplate;
