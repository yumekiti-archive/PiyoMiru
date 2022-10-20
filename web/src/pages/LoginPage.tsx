import { FC, useState } from 'react';
import NameLogo from '../assets/nameLogo.svg';
import FormText from '../components/atoms/FormText';
import { useNavigate } from 'react-router-dom';
import FormButton from '../components/atoms/FormButton';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = () => {
    navigate('/home');
  };

  return (
    <div className='flex h-screen bg-[#FBD579] items-center justify-center fixed top-0 left-0 w-full flex-col'>
      <div className='h-2/6 w-full flex items-end justify-center'>
        <img src={NameLogo} alt='logo' className='w-72' />
      </div>
      <div className='h-3/6 w-10/12 flex justify-start flex-col items-center space-y-8 pt-10'>
        <FormText label='ユーザーネーム' value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormText label='パスワード' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className='h-1/6 w-10/12 flex items-start justify-center'>
        <FormButton text='ログイン' onClick={login} />
      </div>
    </div>
  );
};

export default Login;
