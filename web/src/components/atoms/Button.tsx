import { FC } from 'react';

interface Props {
  text: string;
  onClick?: () => void;
  bgColor?: string;
  color?: string;
}

const Button: FC<Props> = ({ text, onClick, bgColor, color }) => {
  return (
    <button
      className={`
      ${color ? `text-${color}` : 'text-[#666666]'}
      ${bgColor ? `bg-${bgColor}` : 'bg-[#FFFF88]'}
      w-full h-16 rounded-2xl text-2xl
    `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
