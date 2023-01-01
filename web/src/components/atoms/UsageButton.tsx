import { FC, useState } from 'react';

interface Props {
  toggle: boolean;
  text: string;
  img: string;
  onClick?: () => void;
}

const UsageButton: FC<Props> = ({ toggle, text, img, onClick }) => {
  return (
    <button
      className={'w-full h-44 bg-[#FFFAE3] rounded-2xl' + (toggle ? ' border-4 border-[#90D7EC]' : '')}
      onClick={onClick}
    >
      <div className='h-1/2 flex justify-center items-center pt-4'>
        {text}
        <br />
        こちら
      </div>
      <div className='h-1/2 flex justify-center items-end'>
        <img src={img} alt='icon' />
      </div>
    </button>
  );
};

export default UsageButton;
