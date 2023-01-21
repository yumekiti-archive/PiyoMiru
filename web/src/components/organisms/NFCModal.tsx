import { FC, useState } from "react";

import Button from "../atoms/Button";

import Anzen from '../../assets/anzen.svg';

interface Props {
  text: string;
  view: boolean;
  onClick: () => void;
}

const Modal: FC<Props> = ({ text, view, onClick }) => {
  return (
    <>
      {view && (
        <div className='fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <div
            className='bg-white w-10/12 h-48 rounded-2xl flex flex-col items-center justify-center relative'
            onClick={onClick}
          >
            <div className='w-5/6 h-1/2 flex items-center justify-center flex-col'>
              <p className='text-2xl text-center mb-8 mt-4'>{text}</p>
              <div className='p-2 flex items-center justify-center bg-[#E3EEF9] rounded-xl'>
                <Button
                  text='キャンセル'
                  onClick={onClick}
                  bgColor='bg-[#E3EEF9]'
                  color='text-[#666666]'
                  size='text-2xl'
                />
              </div>
            </div>
            <img src={Anzen} alt='anzen' className='w-20 absolute left-0 -top-10' />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;