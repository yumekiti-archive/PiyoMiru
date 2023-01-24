import { FC } from 'react';
import { Link } from 'react-router-dom';

import Button from '../atoms/Button';

import { ReactComponent as LandingPage1 } from '../../assets/lp/landingPage1.svg';
import { ReactComponent as LandingPage2 } from '../../assets/lp/landingPage2.svg';
import { ReactComponent as LandingPage3 } from '../../assets/lp/landingPage3.svg';
import { ReactComponent as Right } from '../../assets/lp/right.svg';
import { ReactComponent as Left } from '../../assets/lp/left.svg';

interface Props {
  page: number;

  prevPage: () => void;
  nextPage: () => void;
}

const LPTemplate: FC<Props> = ({ page, prevPage, nextPage }) => {
  return (
    <div className='h-screen bg-[#FBD579] w-full'>
      <div className='h-1/6' />
      <div className='h-3/6 w-full flex items-start justify-center relative'>
        {page === 1 && <LandingPage1 className='animate-slide-in-fwd-center' style={{ height: '120%' }} />}
        {page === 2 && <LandingPage2 className='animate-slide-in-fwd-center' style={{ height: '120%' }} />}
        {page === 3 && <LandingPage3 className='animate-slide-in-fwd-center' style={{ height: '120%' }} />}

        {page !== 1 && (
          <div className='absolute mt-8 top-1/2 left-6'>
            <Left style={{ height: '100%' }} onClick={prevPage} />
          </div>
        )}
        {page !== 3 && (
          <div className='absolute mt-8 top-1/2 right-6'>
            <Right style={{ height: '100%' }} onClick={nextPage} />
          </div>
        )}
      </div>
      <div className='h-2/6 w-full flex items-center justify-center'>
        <Link to='/usage' className='w-10/12 h-16'>
          {page === 3 && <Button text='はじめる' />}
        </Link>
      </div>
    </div>
  );
};

export default LPTemplate;
