import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormText from '../components/atoms/FormText';
import NameLogo from '../assets/nameLogo.svg';
import Loading from '../components/Loading';

import { login } from '../libs/auth';

import FormButton from '../components/atoms/FormButton';

const LoginPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onClickLogin = () => {
    const data = {
      identifier: email,
      password: password,
    };

    login(data).then((res) => {
      localStorage.setItem('jwt', res.data.jwt);
      navigate('/');
    });
  };

  const register = () => {
    navigate('/lp');
  };

  return (
    <>
      <Loading />
      <div className='h-screen bg-[#FBD579] w-full'>
        <div className='h-1/6' />
        <div className='h-1/6 w-full flex items-center justify-center'>
          <img src={NameLogo} alt='logo' className='w-72' />
        </div>
        <div className='h-2/6 flex justify-start flex-col items-center space-y-8 pt-10'>
          <div className='w-10/12 flex justify-center'>
            <FormText label='メールアドレス' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='w-10/12 flex justify-center'>
            <FormText label='パスワード' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className='h-2/6 w-full flex items-center justify-center'>
          <div className='w-10/12'>
            <FormButton text='ログイン' onClick={onClickLogin} />
            <p className='text-center text-sm mt-4'>
              アカウントをお持ちでない場合
              <span className='underline' onClick={register}>
                登録はこちら
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
