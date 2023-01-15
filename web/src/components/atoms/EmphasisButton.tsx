import { FC } from "react";

import ChickBeginner from '../../assets/button/chickBeginner.svg';

interface Props {
  text: string;
  mainBgColor?: string;
  subBgColor?: string;
  top?: string;
  color?: string;
  size?: string;
  img?: string;
  chick?: boolean;
  bold?: boolean;
  col?: boolean;
  onClick?: () => void;
}

const EmphasisButton: FC<Props> = ({ text, mainBgColor, subBgColor, top, color, size, img, chick, bold, col, onClick }) => {
  return (
    <button
      className={`
        ${color ? color : 'text-[#666666]'}
        ${mainBgColor ? mainBgColor : 'bg-[#FFFF88]'}
        ${bold ? 'font-bold' : ''}
        ${size ? size : 'text-2xl'}
        ${col ? 'flex-col' : ''}
        w-full h-full rounded-2xl flex items-center justify-center relative
      `}
      onClick={onClick}
    >
      {text}
      {img && <img src={img} alt='tulip' className='w-10 h-10 mt-2 ml-1' />}
      {chick && (
        <img
          src={ChickBeginner}
          alt='ChickBeginner'
          style={{ height: '60%' }}
          className='absolute -top-8 right-2'
        />
      )}
      <div className={`
        ${subBgColor ? subBgColor : 'bg-[#DAB357]'}
        ${top ? top : 'top-4'}
        w-full h-16 rounded-2xl -z-10 absolute left-0
      `} />
    </button>
  );
};

export default EmphasisButton;