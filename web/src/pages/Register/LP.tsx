import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormButton from '../../components/atoms/FormButton';

import { ReactComponent as LandingPage1 } from '../../assets/lp/landingPage1.svg';
import { ReactComponent as LandingPage2 } from '../../assets/lp/landingPage2.svg';
import { ReactComponent as LandingPage3 } from '../../assets/lp/landingPage3.svg';
import { ReactComponent as Right } from '../../assets/lp/right.svg';
import { ReactComponent as Left } from '../../assets/lp/left.svg';

const LPPage: FC = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const nextPage = () => {
    page !== 3 && setPage(page + 1);
  };

  const prevPage = () => {
    page !== 1 && setPage(page - 1);
  };

  const usagePage = () => {
    navigate('/usage');
  };

  return (
    <div className='h-screen bg-[#FBD579] w-full'>
      <div className='h-1/6' />
      <div className='h-3/6 w-full flex items-start justify-center relative'>
        {page === 1 && <LandingPage1 className='animate-slide-in-fwd-center' style={{ height: '120%' }} />}
        {page === 2 && <LandingPage2 className='animate-slide-in-fwd-center' style={{ height: '120%' }} />}
        {page === 3 && <LandingPage3 className='animate-slide-in-fwd-center' style={{ height: '120%' }} />}

        {(page === 2 || page === 3) && (
          <div className='absolute top-48 left-6'>
            <Left style={{ height: '100%' }} onClick={prevPage} />
          </div>
        )}
        {(page === 1 || page === 2) && (
          <div className='absolute top-48 right-6'>
            <Right style={{ height: '100%' }} onClick={nextPage} />
          </div>
        )}
      </div>
      <div className='h-2/6 w-full flex items-center justify-center'>
        <div className='w-10/12'>{page === 3 && <FormButton text='はじめる' onClick={usagePage} />}</div>
      </div>
    </div>
  );
};

export default LPPage;
