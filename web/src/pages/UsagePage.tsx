import { FC } from 'react';
import NameLogo from '../assets/nameLogo.svg';
import FormButton from '../components/atoms/FormButton';
import UsageButton from '../components/atoms/UsageButton';

const UsagePage: FC = () => {
  return (
    <div className='h-screen bg-[#FBD579] w-full'>
      <div className='h-1/6' />
      <div className='h-1/6 w-full flex items-center justify-center'>
        <img src={NameLogo} alt='logo' className='w-72' />
      </div>
      <div className='h-2/6 w-full flex justify-evenly items-start'>
        <div className='w-4/12'>
          <UsageButton text='保護者様は' driver={false} />
        </div>
        <div className='w-4/12'>
          <UsageButton text='運転手の方は' driver={true} />
        </div>
      </div>
      <div className='h-2/6 w-full flex items-center justify-center'>
        <div className='w-10/12'>
          <FormButton text='決定' />
        </div>
      </div>
    </div>
  );
};

export default UsagePage;
