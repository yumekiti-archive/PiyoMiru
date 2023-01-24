import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import HeaderButton from '../atoms/HeaderButton';

import Back from '../../assets/button/back.svg';
import NameLogo from '../../assets/nameLogo.svg';
import Bear from '../../assets/button/bear.svg';
import Frog from '../../assets/button/frog.svg';

interface Props {
  title: string;
  driver?: boolean;
  id?: string;
}

const Header: FC<Props> = ({ title, driver, id }) => {
  const navigate = useNavigate();

  const home = () => {
    navigate('/');
  };

  const usage = () => {
    navigate('/list', { state: { id: id } });
  };

  const settings = () => {
    navigate('/settings');
  };

  return (
    <div className='flex w-full items-end justify-center h-24 bg-[#FBD579] pb-2 absolute top-0 left-0 z-10 border-b-2 border-[#FFFAE3]'>
      {title === '' ? (
        <>
          <img src={NameLogo} alt='nameLogo' className='px-4 w-1/2 h-4/6' onClick={home} />
          {window.location.pathname === '/' ? (
            <div className='w-1/2 flex justify-end items-center space-x-2 mr-2'>
              <HeaderButton text={driver ? `園児` : `家族`} img={Bear} onClick={usage} />
              <HeaderButton text='設定' img={Frog} onClick={settings} />
            </div>
          ) : (
            <div className='w-1/2 flex justify-end items-center space-x-2 mr-2' />
          )}
        </>
      ) : (
        <>
          <h1 className='text-2xl'>{title}</h1>
          <Link to='/' className='absolute left-4'>
            <img src={Back} alt='戻る' />
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
