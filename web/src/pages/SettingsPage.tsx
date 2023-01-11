import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/organisms/Header';
import FormButton from '../components/atoms/FormButton';

const SettingsPage: FC = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/login');
  };

  return (
    <>
      <div className='h-screen bg-[#FBD579] w-full'>
        <div className='h-1/6'>
          <Header title='' />
        </div>
        <div className='h-4/6 flex justify-start flex-col items-center space-y-8 pt-10'>
          <p className='text-2xl'>---&ensp;設定&ensp;---</p>
          <div className='w-10/12 flex justify-center flex-wrap'>
            <FormButton text='プロフィール変更' onClick={onClickLogout} />
          </div>
          <div className='w-10/12 flex justify-center flex-wrap'>
            <FormButton text='通知' onClick={onClickLogout} />
          </div>
          <div className='w-10/12 flex justify-center flex-wrap'>
            <FormButton text='お問い合わせ' onClick={onClickLogout} />
          </div>
        </div>
        <div className='h-1/6 w-full flex items-center justify-center'>
          <div className='w-10/12'>
            <FormButton text='ログアウト' onClick={onClickLogout} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
