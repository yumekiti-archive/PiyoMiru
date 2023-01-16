import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Bus from '../../assets/bus.svg';
import BusRun from '../../assets/busRun.svg';
import TulipTag from '../../assets/button/tulipTag.svg';
import ChickTag from '../../assets/button/chickTag.svg';

import BusStatus from '../atoms/BusStatus';
import Header from '../organisms/Header';
import Background from '../organisms/Background';
import EmphasisButton from '../atoms/EmphasisButton';

interface Props {
  data: any;
  user: any;
  onClickStart: () => void;
  onClickList: () => void;
}

const BusTemplate: FC<Props> = ({ data, user, onClickStart, onClickList }) => {
  const navigate = useNavigate();

  return (
    <>
      <Header title='乗車中園児 一覧' />
      {data.attributes.status && <Background type='bus' />}
      <div className='bg-sora h-screen'>
        <div className='h-2/6 flex items-end justify-center'>
          <BusStatus name={data.attributes.name} status={data.attributes.status} />
        </div>
        <div className='h-2/6 flex items-center justify-center'>
          {data.attributes.status ? (
            <img src={BusRun} alt='bus' className='w-80' />
          ) : (
            <img src={Bus} alt='bus' className='w-80' />
          )}
        </div>
        <div className='h-2/6 flex items-center justify-center'>
          {user.driver ? (
            !data.attributes.status ? (
              <>
                <div className='w-8/12 h-16 flex items-center justify-center'>
                  <EmphasisButton
                    text='運転開始'
                    onClick={onClickStart}
                    mainBgColor='bg-[#ED6D47]'
                    subBgColor='bg-[#DC3C14]'
                    color='text-white'
                    size='text-4xl'
                    top='top-4'
                    chick={true}
                  />
                </div>
              </>
            ) : (
              <>
                <div className='w-4/12 h-24 flex items-center justify-center mr-10'>
                  <EmphasisButton
                    text='乗車中園児確認'
                    onClick={onClickList}
                    mainBgColor='bg-[#FBD579]'
                    subBgColor='bg-[#DAB357]'
                    color='text-[#666666]'
                    size='text-sm'
                    top='top-10'
                    bold={true}
                    col={true}
                    img={TulipTag}
                  />
                </div>
                <div className='w-4/12 h-24 flex items-center justify-center'>
                  <EmphasisButton
                    text='NFCスキャナー'
                    onClick={() => {
                      navigate('/list');
                    }}
                    mainBgColor='bg-[#FBD579]'
                    subBgColor='bg-[#DAB357]'
                    color='text-[#666666]'
                    size='text-sm'
                    top='top-10'
                    bold={true}
                    col={true}
                    img={ChickTag}
                  />
                </div>
              </>
            )
          ) : (
            <>
              <div className='w-11/12 h-16 flex items-center justify-center'>
                <EmphasisButton
                  text='乗車中園児確認'
                  onClick={() => {
                    navigate('/list');
                  }}
                  mainBgColor='bg-[#FBD579]'
                  subBgColor='bg-[#DAB357]'
                  color='text-[#666666]'
                  size='text-4xl'
                  top='top-4'
                  img={TulipTag}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BusTemplate;
