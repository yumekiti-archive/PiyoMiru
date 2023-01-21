import { FC } from 'react';

import FormText from '../atoms/FormText';
import Button from '../atoms/Button';

interface Props {
  text: string;
  view: boolean;
  setView: (value: boolean) => void;
  name: string;
  setName: (value: string) => void;
  onClick: () => void;
}

const AddModal: FC<Props> = ({ text, view, setView, name, setName, onClick }) => {
  return (
    <>
      {view && (
        <div className='fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='w-5/6 h-2/6 bg-white rounded-xl flex justify-start items-center border-2 border-[#FBD579] flex-col'>
            <div className='h-2/6 flex justify-center items-center'>
              <p className='text-xl whitespace-pre-wrap'>{text}</p>
            </div>
            <div className='h-2/6 w-5/6 flex justify-center items-center'>
              <FormText value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='h-2/6 w-full flex justify-center items-center'>
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
              <div className='h-12 w-4/12 bg-[#ED6D47] rounded-xl'>
                <Button text='追加' size='text-xl' bgColor='bg-[#ED6D47]' color='text-white' onClick={onClick} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddModal;
