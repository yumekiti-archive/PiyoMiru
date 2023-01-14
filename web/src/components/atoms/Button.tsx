import { FC } from 'react';

interface Props {
  text: string;
  onClick?: () => void;
  bgColor?: string;
  color?: string;
  size?: string;
}

const Button: FC<Props> = ({ text, onClick, bgColor, color, size }) => {
  return (
    <button
      className={`
      ${color ? color : 'text-[#666666]'}
      ${bgColor ? bgColor : 'bg-[#FFFF88]'}
      ${size ? size : 'text-2xl'}
      w-full h-full rounded-2xl
    `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
