import { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';

import Header from '../components/organisms/Header';
import CheckModal from '../components/organisms/CheckModal';
import ListCard from '../components/atoms/ListCard';
import EmphasisButton from '../components/atoms/EmphasisButton';

import { ReactComponent as ThreePeople } from '../assets/threePeople.svg';
import { ReactComponent as Plus } from '../assets/plus.svg';

import { useBusesUpdate } from '../hooks/buses';
import { usePassengersFind } from '../hooks/passengers';
import { useOperationsFindOne, useOperationsUpdate } from '../hooks/operations';
import { useMe } from '../hooks/users';

const OperationListPage: FC = () => {
  const queryClient = useQueryClient();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);

  const { data: passengers } = useQuery('passengers', () => usePassengersFind(id).then((res) => res.data.data));
  const { data: operation } = useQuery('operation', () => useOperationsFindOne(id).then((res) => res.data.data));
  const { data: me } = useQuery('me', () => useMe().then((res) => res.data));

  const Stop = () => {
    const body = {
      data: {
        status: !operation.attributes.bus.data.attributes.status,
      },
    };
    useBusesUpdate(operation.attributes.bus.data.id, body);
    queryClient.invalidateQueries('bus');

    const operationBody = {
      data: {
        end: new Date(),
      },
    };
    useOperationsUpdate(operation.id, operationBody);
    queryClient.invalidateQueries('operation');

    navigate('/');
  };

  return (
    passengers &&
    me && (
      <>
        <div className='h-full w-full relative'>
          <div className='w-full flex items-center justify-center'>
            <Header title='乗車中園児 一覧' />
          </div>
          {passengers.length !== 0 ? (
            <div className='min-h-screen h-full w-full flex items-center justify-start flex-col space-y-4 mb-10 mt-28'>
              {passengers.map((passenger: any) => (
                <ListCard
                  status={passenger.attributes.status}
                  key={passenger.attributes.users_permissions_user.data.id}
                  name={passenger.attributes.users_permissions_user.data.attributes.displayname}
                  createdAt={passenger.attributes.createdAt}
                />
              ))}
              <button className='w-11/12 h-24 rounded-xl border-2 border-[#FBD579] flex items-center justify-center'>
                <Plus />
              </button>
            </div>
          ) : (
            <>
              <div className='h-screen w-full'>
                <div className='h-1/6 w-full' />
                <div className='h-2/6 w-full flex items-center justify-center'>現在、乗車中の園児はいません</div>
                <div className='h-1/6 w-full flex items-center justify-center'>
                  <ThreePeople />
                </div>
                <div className='h-2/6 w-full' />
              </div>
            </>
          )}
          {me.driver && (
            <div className='w-full flex items-end justify-center sticky bottom-10'>
              <div className='w-8/12 h-16 flex items-center justify-center z-10'>
                <EmphasisButton
                  text='運転終了'
                  onClick={() => setCheck(true)}
                  mainBgColor='bg-[#90D7EC]'
                  subBgColor='bg-[#6EC5CA]'
                  color='text-[#666666]'
                  size='text-4xl'
                  top='top-4'
                />
              </div>
            </div>
          )}
          <CheckModal
            text='本当に運転を終了しますか？'
            color='text-[#666666]'
            bgColor='bg-[#90D7EC]'
            buttonText='終了'
            view={check}
            setView={setCheck}
            onClick={Stop}
          />
        </div>
      </>
    )
  );
};

export default OperationListPage;
