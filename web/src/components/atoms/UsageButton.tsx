import { FC } from 'react';
import Parents from '../../assets/parents.svg';
import Driver from '../../assets/driver.svg';

interface Props {
  text: string;
  driver: boolean;
  onClick?: () => void;
}

const UsageButton: FC<Props> = ({ text, driver, onClick }) => {
  return (
    <button className='w-full h-44 bg-[#FFFAE3] rounded-2xl' onClick={onClick}>
      <div className='h-1/2 flex justify-center items-center pt-4'>
        {text}
        <br />
        こちら
      </div>
      <div className='h-1/2 flex justify-center items-end'>
        <img src={driver ? Driver : Parents} alt='icon' />
      </div>
    </button>
  );
};

export default UsageButton;
