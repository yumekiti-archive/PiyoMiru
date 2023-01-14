import { FC } from 'react';
import { Link } from 'react-router-dom';

import Button from '../atoms/Button';
import FormText from '../atoms/FormText';
import Error from '../atoms/Error';
import Loading from '../organisms/Loading';

import NameLogo from '../../assets/nameLogo.svg';

interface Props {
  identifier: string;
  password: string;
  error: string;
  errorDetails: Array<any>;

  setIdentifier: (value: string) => void;
  setPassword: (value: string) => void;

  onClickLogin: () => void;
}

const LoginTemplate: FC<Props> = ({
  identifier, password, error, errorDetails, setIdentifier, setPassword, onClickLogin
}) => {
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
            <FormText
              label='ユーザーID&ensp;/&ensp;メールアドレス'
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </div>
          <div className='w-10/12 flex justify-center flex-wrap'>
            <FormText label='パスワード' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Error error={error} errorDetails={errorDetails} />
          </div>
        </div>

        <div className='h-2/6 w-full flex items-center justify-center'>
          <div className='w-10/12'>
            <Button text='ログイン' onClick={onClickLogin} />
            <p className='text-center text-sm mt-4'>
              アカウントをお持ちでない場合
              <Link to='/lp' className='underline'>
                登録はこちら
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginTemplate;
