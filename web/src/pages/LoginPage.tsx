import { FC } from 'react';
import NameLogo from '../assets/nameLogo.svg';

import FormText from '../components/atoms/FormText';

const Login: FC = () => {
  return (
    <div className="flex h-screen bg-[#FBD579] items-center justify-center fixed top-0 left-0 w-full flex-col">
      <div className="h-2/6 w-full flex items-end justify-center">
        <img src={NameLogo} alt="logo" className="w-72" />
      </div>
      <div className="h-3/6 w-10/12 flex justify-start flex-col items-center space-y-8 pt-10">
        <FormText label="ユーザーネーム" />
        <FormText label="パスワード" />
      </div>
      <div className="h-1/6 w-10/12 flex items-start justify-center">
        <button className="w-full h-16 bg-[#FFFF88] rounded-2xl text-2xl">ログイン</button>
      </div>
    </div>
  );
}

export default Login;