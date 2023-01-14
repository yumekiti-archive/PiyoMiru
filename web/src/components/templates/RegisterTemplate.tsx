import { FC } from 'react';

import Error from '../atoms/Error';
import FormText from '../atoms/FormText';
import Button from '../atoms/Button';
import Header from '../organisms/Header';

interface Props {
  username: string;
  displayname: string;
  email: string;
  password: string;
  passwordConfirmation: string;

  setUsername: (username: string) => void;
  setDisplayname: (displayname: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setPasswordConfirmation: (passwordConfirmation: string) => void;

  error: string;
  errorDetails: any;

  nextFlag: boolean;
  setNextFlag: (nextFlag: boolean) => void;

  onClickRegister : () => void;
}

const RegisterPage: FC<Props> = ({
  username, displayname, email, password, passwordConfirmation,
  setUsername, setDisplayname, setEmail, setPassword, setPasswordConfirmation,
  error, errorDetails,
  nextFlag, setNextFlag,
  onClickRegister
}) => {
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
              <Button text='つぎへ' onClick={() => setNextFlag(true)} />
            </div>
          </div>
        </>

      ) : (

        <>
          <div className='h-3/6 flex justify-start flex-col items-center space-y-4 pt-10'>
            <p className='text-2xl'>---&ensp;基本情報登録&ensp;---</p>
            <div className='w-10/12 flex-wrap flex justify-center'>
              <FormText icon={true} label='ユーザーID' value={username} onChange={(e) => setUsername(e.target.value)} />
              <Error error={error} errorDetails={errorDetails} />
            </div>
          </div>
          <div className='h-2/6 w-full flex items-center justify-center z-10'>
            <div className='w-4/12 mr-4'>
              <Button text='もどる' onClick={() => setNextFlag(false)} />
            </div>
            <div className='w-6/12'>
              <Button text='とうろく' onClick={onClickRegister} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RegisterPage;
