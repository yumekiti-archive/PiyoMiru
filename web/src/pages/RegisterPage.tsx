import { FC, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import FormText from '../components/atoms/FormText';
import NameLogo from '../assets/nameLogo.svg';
import Header from '../components/Header';

import FormButton from '../components/atoms/FormButton';
import { register } from '../libs/auth';

const RegisterPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [driver, setDriver] = useState(location.state.driver);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const onClickRegister = () => {
    if (password !== passwordConfirmation) {
      alert('パスワードが一致しません');
      return;
    }

    const data = {
      username: name,
      email: email,
      password: password,
      driver: driver,
    };

    register(data).then((res) => {
      localStorage.setItem('jwt', res.data.jwt);
      navigate('/');
    });
  };

  return (
    <div className='h-screen bg-[#FBD579] w-full'>
      <div className='h-1/6'>
        <Header title='' />
      </div>
      <div className='h-3/6 flex justify-start flex-col items-center space-y-4 pt-10'>
        <p className='text-2xl'>---&ensp;基本情報登録&ensp;---</p>
        <div className='w-10/12 flex justify-center'>
          <FormText icon={true} label='ユーザーネーム' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='w-10/12 flex justify-center'>
          <FormText label='メールアドレス' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='w-10/12 flex justify-center'>
          <FormText label='パスワード' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='w-10/12 flex justify-center'>
          <FormText
            label='パスワード確認'
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
      </div>
      <div className='h-2/6 w-full flex items-center justify-center'>
        <div className='w-8/12'>
          <FormButton text='つぎへ' onClick={onClickRegister} />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
