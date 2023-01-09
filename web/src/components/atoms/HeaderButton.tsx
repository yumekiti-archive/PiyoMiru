import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  text: string;
  img: string;
  onClick: () => void;
}

const HeaderButton: FC<Props> = ({ text, img, onClick }) => {
  return (
    <button className='w-16 h-12 bg-[#FFFAE3] rounded-xl' onClick={onClick}>
      <div className='text-xs font-bold pt-2 w-full h-1/4 flex justify-center items-center whitespace-nowrap'>
        {text}
      </div>
      <div className='w-full h-3/4 flex justify-center items-center'>
        <img src={img} alt='bear' />
      </div>
    </button>
  );
};

export default HeaderButton;
