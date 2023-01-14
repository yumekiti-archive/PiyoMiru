import { FC } from 'react';

import FormText from '../atoms/FormText';

interface Props {
  addBusFlag: boolean;
  busName: string;
  setAddBusFlag: (value: boolean) => void;
  setBusName: (value: string) => void;
  addBus: () => void;
}

const AddBus: FC<Props> = ({ addBusFlag, busName, setAddBusFlag, setBusName, addBus }) => {
  return (
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
          <button className=' h-12 w-4/12 bg-[#ED6D47] text-white rounded-xl' onClick={addBus}>
            追加
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBus;