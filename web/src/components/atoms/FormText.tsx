import { FC } from 'react';
import ListIcon from '../../assets/listIcon.svg';

interface Props {
  icon?: boolean;
  label?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormText: FC<Props> = ({ icon, label, value, onChange }) => {
  return (
    <div className='relative w-full'>
      {icon && <img src={ListIcon} alt='listIcon' style={{ height: '60%' }} className='absolute -top-6 right-4' />}
      <input
        type='text'
        id='name'
        className='h-16 pt-2 px-4 bg-[#FFFAE3] rounded-xl text-lg focus:outline-none w-full'
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
