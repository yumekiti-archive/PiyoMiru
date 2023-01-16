import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import HeaderButton from '../atoms/HeaderButton';

import Back from '../../assets/button/back.svg';
import NameLogo from '../../assets/nameLogo.svg';
import Bear from '../../assets/button/bear.svg';
import Frog from '../../assets/button/frog.svg';

import { useMe } from '../../hooks/users';

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  const navigate = useNavigate();
  const { data } = useMe();

  const home = () => {
    navigate('/');
  };

  const usage = () => {
    navigate('/list', { state: { id: data.group.id } });
  };

  const settings = () => {
    navigate('/settings');
  };

  return (
    <div className='flex w-full items-end justify-center h-24 bg-[#FBD579] pb-2 absolute top-0 left-0 z-10 border-b-2 border-[#FFFAE3]'>
      {title === '' ? (
        <>
          <img src={NameLogo} alt='nameLogo' className='px-4 w-1/2 h-4/6' onClick={home} />
          <div className='w-1/2 flex justify-end items-center space-x-2 mr-2'>
            {window.location.pathname === '/' && (
              <>
                <HeaderButton text='園児' img={Bear} onClick={usage} />
                <HeaderButton text='設定' img={Frog} onClick={settings} />
              </>
            )}
          </div>
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
