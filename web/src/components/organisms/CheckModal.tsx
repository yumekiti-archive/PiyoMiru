import { FC } from "react";

import Button from "../atoms/Button";

interface Props {
  text: string;
  view: boolean;
  setView: (value: boolean) => void;
  bgColor: string;
  color: string;
  buttonText: string;
  onClick: () => void;
}

const CheckModal: FC<Props> = ({ text, view, setView, bgColor, color, buttonText, onClick }) => {
  return (
    <>
      {view && (
        <div className='fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='w-5/6 h-2/6 bg-white rounded-xl flex justify-start items-center border-2 border-[#FBD579] flex-col'>
            <div className='h-3/6 flex justify-center items-center'>
              <p className='text-xl whitespace-pre-wrap'>{text}</p>
            </div>
            <div className='h-3/6 w-full flex justify-center items-center'>
              <div className='h-12 w-4/12 bg-[#E3EEF9] rounded-xl mr-16'>
                <Button
                  text='キャンセル'
                  size='text-xl'
                  bgColor='bg-[#E3EEF9]'
                  onClick={() => {
                    setView(!view);
                  }}
                />
              </div>
              <div className={`h-12 w-4/12 rounded-xl ${bgColor}`}>
                <Button text={buttonText} size='text-xl' bgColor={bgColor} color={color} onClick={onClick} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
};

export default CheckModal;