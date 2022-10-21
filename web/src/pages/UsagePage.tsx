import { FC } from 'react';
import NameLogo from '../assets/nameLogo.svg';
import FormButton from '../components/atoms/FormButton';
import UsageButton from '../components/atoms/UsageButton';

const UsagePage: FC = () => {
  return (
    <div className='bg-[#FBD579] h-screen w-full'>
      <div className='h-2/6 w-full flex items-end justify-center'>
        <img src={NameLogo} alt='logo' className='w-72' />
      </div>
      <div className='h-3/6 w-full flex justify-evenly items-start'>
        <div className='w-4/12'>
          <UsageButton />
        </div>
        <div className='w-4/12'>
          <UsageButton />
        </div>
      </div>
      <div className='h-1/6 w-10/12 mx-auto'>
        <FormButton text='ログイン' />
      </div>
    </div>
  );
};

export default UsagePage;
