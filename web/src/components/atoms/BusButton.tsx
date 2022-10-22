import { FC } from 'react';
import { Link } from 'react-router-dom';

import Bus from '../../assets/bus.svg';
import BusRun from '../../assets/busRun.svg';
import Label from '../../assets/button/label.svg';

interface Props {
  to: string;
  name: string;
  drive: boolean;
}

const BusButton: FC<Props> = ({ to, name, drive }) => {
  return (
    <Link to={to} className='w-10/12 h-28 rounded-xl bg-[#FFE39E] relative'>
      <div className='pl-2 text-sm font-bold w-full h-2/6 flex justify-start items-center'>{name}</div>
      <div className='w-full pb-2 h-4/6 flex justify-center items-end'>
        {drive ? (
          <img src={BusRun} alt='label' className='h-full w-10/12' />
        ) : (
          <img src={Bus} alt='bus' className='h-full w-10/12' />
        )}
      </div>
      {drive && (
        <div className='z-10 top-4 right-0 absolute'>
          <img src={Label} alt='label' />
        </div>
      )}
    </Link>
  );
};

export default BusButton;
