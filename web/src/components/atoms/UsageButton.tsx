import { FC } from 'react';

const UsageButton: FC = () => {
  return (
    <button className='w-full h-44 bg-[#FFFAE3] rounded-2xl'>
      <div className='h-1/2 flex justify-center items-center'>
        保護者様は<br />こちら
      </div>
      <div className='h-1/2 flex justify-center items-end'>
        <div className='w-20 h-20 rounded-xl bg-gray-400'></div>
      </div>
    </button>
  );
}

export default UsageButton;