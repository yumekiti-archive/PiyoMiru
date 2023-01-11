import { FC, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import FormText from '../components/atoms/FormText';
import NameLogo from '../assets/nameLogo.svg';
import Header from '../components/organisms/Header';

import FormButton from '../components/atoms/FormButton';
import { register } from '../libs/auth';

const RegisterPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [driver, setDriver] = useState(location.state.driver);
  const [username, setUsername] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [nextFlag, setNextFlag] = useState(false);
  const [errors, setErrors] = useState<any>([]);

  const onClickNext = () => {
    setNextFlag(true);
  };

  const onClickBack = () => {
    setNextFlag(false);
  };

  const onClickRegister = () => {
    if (displayname === '') {
      setErrors([{ message: 'ユーザーネームを入力してください' }]);
      return;
    }

    const data = {
      username: username,
      displayname: displayname,
      email: email,
      password: password,
      driver: driver,
    };

    register(data)
      .then((res) => {
        localStorage.setItem('jwt', res.data.jwt);
        navigate('/');
      })
      .catch((err) => {
        setErrors(err.response.data.error.details.errors);
      });
  };

  return (
    <div className='h-screen bg-[#FBD579] w-full'>
      <div className='h-1/6'>
        <Header title='' />
      </div>
      {!nextFlag ? (
        <>
          <div className='h-3/6 flex justify-start flex-col items-center space-y-4 pt-10'>
            <p className='text-2xl'>---&ensp;基本情報登録&ensp;---</p>
            <div className='w-10/12 flex justify-center'>
              <FormText
                icon={true}
                label='ユーザーネーム'
                value={displayname}
                onChange={(e) => setDisplayname(e.target.value)}
              />
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
          <div className='h-2/6 w-full flex items-center justify-center z-10'>
            <div className='w-10/12'>
              <FormButton text='つぎへ' onClick={onClickNext} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='h-3/6 flex justify-start flex-col items-center space-y-4 pt-10'>
            <p className='text-2xl'>---&ensp;基本情報登録&ensp;---</p>
            <div className='w-10/12 flex-wrap flex justify-center'>
              <FormText icon={true} label='ユーザーID' value={username} onChange={(e) => setUsername(e.target.value)} />
              {errors.map((err: any, index: any) => (
                <p key={index} className='text-red-500 text-sm'>
                  {err.message}
                </p>
              ))}
            </div>
          </div>
          <div className='h-2/6 w-full flex items-center justify-center z-10'>
            <div className='w-4/12 mr-4'>
              <FormButton text='もどる' onClick={onClickBack} />
            </div>
            <div className='w-6/12'>
              <FormButton text='とうろく' onClick={onClickRegister} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RegisterPage;
