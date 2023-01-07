import { FC, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import FormText from '../components/atoms/FormText';
import NameLogo from '../assets/nameLogo.svg';
import Header from '../components/Header';

import FormButton from '../components/atoms/FormButton';
import { register } from '../libs/auth';

const GroupPage: FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onClickRegister = () => {
    console.log('register');
  };

  return (
    <div className='h-screen bg-[#FBD579] w-full'>
      <div className='h-1/6'>
        <Header title='' />
      </div>
      <div className='h-3/6 flex justify-start flex-col items-center space-y-4 pt-10'>
        <p className='text-2xl'>---&ensp;所属情報登録&ensp;---</p>
        <div className='w-10/12 flex justify-center'>
          <FormText icon={true} label='所属' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='w-10/12 flex justify-center'>
          <FormText label='所属住所' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <div className='h-2/6 w-full flex items-center justify-center'>
        <div className='w-10/12'>
          <FormButton text='とうろく' onClick={onClickRegister} />
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
