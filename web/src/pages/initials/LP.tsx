import { FC } from 'react';

import FormButton from '../../components/atoms/FormButton';

const LP: FC = () => {
  return (
    <div className='h-screen bg-[#FBD579] w-full'>
      <div className='h-1/6' />
      <div className='h-3/6 w-full flex items-start justify-center'>
        this is landing page !!
      </div>
      <div className='h-2/6 w-full flex items-center justify-center'>
        <div className='w-10/12'>
          <FormButton text='ログイン' />
        </div>
      </div>
    </div>
  );
}

export default LP;