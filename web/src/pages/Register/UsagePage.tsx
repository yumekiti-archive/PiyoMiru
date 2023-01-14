import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/atoms/Button';
import UsageButton from '../../components/atoms/UsageButton';

import NameLogo from '../../assets/nameLogo.svg';
import Parents from '../../assets/button/parents.svg';
import Driver from '../../assets/button/driver.svg';

const UsagePage: FC = () => {
  const navigate = useNavigate();
  const decision = () => {
    navigate('/register', { state: { driver } });
  };

  const [driver, setDriver] = useState(false);

  return (
    <div className='h-screen bg-[#FBD579] w-full'>
      <div className='h-1/6' />
      <div className='h-1/6 w-full flex items-center justify-center'>
        <img src={NameLogo} alt='logo' className='w-72' />
      </div>
      <div className='h-2/6 w-full flex justify-evenly items-start'>
        <div className='w-4/12'>
          <UsageButton toggle={!driver} text='保護者様は' img={Parents} onClick={() => setDriver(false)} />
        </div>
        <div className='w-4/12'>
          <UsageButton toggle={driver} text='運転手の方は' img={Driver} onClick={() => setDriver(true)} />
        </div>
      </div>
      <div className='h-2/6 w-full flex items-center justify-center'>
        <div className='w-10/12'>
          <Button text='決定' onClick={decision} />
        </div>
      </div>
    </div>
  );
};

export default UsagePage;
