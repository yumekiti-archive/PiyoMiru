import { FC } from 'react';

import Icon from '../../assets/icon.svg';

interface Props {
  name: string;
  createdAt: string;
}

const ListCard: FC<Props> = ({ name, createdAt }) => {
  const date = new Date(createdAt);

  return (
    <div className='w-11/12 h-24 bg-white rounded-xl border-2 border-[#FBD579] flex items-center justify-start'>
      <div className='ml-2 w-1/5 rounded-xl h-4/6 flex items-center justify-center bg-[#D9D9D9]'>
        <img src={Icon} alt='icon' className='w-20 h-20' />
      </div>
      <div className='pl-6 w-4/5'>
        <div className='text-3xl w-full h-1/2 flex items-center justify-start'>{name} さん</div>
        <div className='w-full h-1/2 flex items-center justify-start'>{date.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default ListCard;
