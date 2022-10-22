import { FC } from 'react';
import { Link } from 'react-router-dom';

import Back from '../assets/button/back.svg';
import NameLogo from '../assets/nameLogo.svg';
import Bear from '../assets/button/bear.svg';
import HeaderButton from '../components/atoms/HeaderButton';
import Frog from '../assets/button/frog.svg';

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <div className='flex w-full items-end justify-center h-24 bg-[#FBD579] pb-2 absolute top-0 left-0 z-10'>
      {title === '' ? (
        <>
          <img src={NameLogo} alt='nameLogo' className='px-4 w-1/2 h-4/6' />
          <div className='w-1/2 flex justify-end items-center space-x-2 mr-2'>
            <HeaderButton path='/usage' text='園児' img={Bear} />
            <HeaderButton path='/login' text='ログアウト' img={Frog} />
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
