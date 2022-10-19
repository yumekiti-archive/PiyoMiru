import { FC } from 'react';
import NameLogo from '../assets/nameLogo.svg';

import FormText from '../components/atoms/FormText';

const Login: FC = () => {
  return (
    <div className="flex h-screen bg-[#FBD579] items-center justify-center fixed top-0 left-0 w-full flex-col">
      <div className="w-full h-1/4 flex items-end justify-center">
        <img src={NameLogo} alt="logo" className="w-72" />
      </div>
      <div className="h-3/4 w-full flex justify-center">
        <FormText />
      </div>
    </div>
  );
}

export default Login;