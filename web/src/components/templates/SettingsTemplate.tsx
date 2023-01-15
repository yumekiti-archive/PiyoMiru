import { FC } from 'react';

import Button from '../atoms/Button';
import Header from '../organisms/Header';

interface Props {
  onClickLogout: () => void;
}

const SettingsTemplate: FC<Props> = ({ onClickLogout }) => {
  return (
    <>
      <div className='h-screen bg-[#FBD579] w-full'>
        <div className='h-1/6'>
          <Header title='' />
        </div>
        <div className='h-4/6 flex justify-start flex-col items-center space-y-8 pt-10'>
          <p className='text-2xl'>---&ensp;設定&ensp;---</p>
          <div className='w-10/12 h-16 flex justify-center flex-wrap'>
            <Button text='プロフィール変更' onClick={onClickLogout} />
          </div>
          <div className='w-10/12 h-16 flex justify-center flex-wrap'>
            <Button text='通知' onClick={onClickLogout} />
          </div>
          <div className='w-10/12 h-16 flex justify-center flex-wrap'>
            <Button text='お問い合わせ' onClick={onClickLogout} />
          </div>
        </div>
        <div className='h-1/6 w-full flex items-center justify-center'>
          <div className='w-10/12 h-16'>
            <Button
              text='ログアウト'
              bgColor='bg-[#ED6D47]'
              color='text-white'
              onClick={onClickLogout}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsTemplate;
