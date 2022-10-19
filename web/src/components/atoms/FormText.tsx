import { FC, useState } from 'react';

interface Props {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormText: FC<Props> = ({ label, value, onChange }) => {
  return (
    <div className='relative w-full'>
      <input
        type='text'
        id='name'
        className='h-16 px-4 bg-[#FFFAE3] rounded-2xl text-2xl focus:outline-none w-full'
        value={value}
        onChange={onChange}
      />
      <label htmlFor='name' className='absolute top-2 left-4 text-xs'>
        {label}
      </label>
    </div>
  );
};

export default FormText;
