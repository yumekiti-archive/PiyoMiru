import { FC } from 'react';

interface Props {
  text: string;
  onClick?: () => void;
}

const FormButton: FC<Props> = ({ text, onClick }) => {
  return (
    <button className='w-full h-16 bg-[#FFFF88] rounded-2xl text-2xl' onClick={onClick}>
      {text}
    </button>
  );
};

export default FormButton;
