import { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';

import Header from '../components/organisms/Header';
import ListCard from '../components/atoms/ListCard';
import EmphasisButton from '../components/atoms/EmphasisButton';

import { useBusesUpdate } from '../hooks/buses';
import { usePassengersFind } from '../hooks/passengers';
import { useOperationsFindOne, useOperationsUpdate } from '../hooks/operations';

const OperationListPage: FC = () => {
  const queryClient = useQueryClient();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: passengers } = useQuery('passengers', () => usePassengersFind(id).then((res) => res.data.data));
  const { data: operation } = useQuery('operation', () => useOperationsFindOne(id).then((res) => res.data.data));

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
    passengers && (
      <>
        <Header title='乗車中園児 一覧' />
        <div className='mt-32 w-full h-screen flex items-center justify-start mb-40 flex-col space-y-4'>
          {passengers.map((passenger: any) => (
            <ListCard
              key={passenger.attributes.users_permissions_user.data.id}
              name={passenger.attributes.users_permissions_user.data.attributes.displayname}
              createdAt={passenger.attributes.createdAt}
            />
          ))}
        </div>
        <div className='w-full sticky bottom-10 flex items-center justify-center'>
          <div className='w-8/12 h-16 flex items-center justify-center'>
            <EmphasisButton
              text='運転終了'
              onClick={Stop}
              mainBgColor='bg-[#90D7EC]'
              subBgColor='bg-[#6EC5CA]'
              color='text-[#666666]'
              size='text-4xl'
              top='top-4'
            />
          </div>
        </div>
      </>
    )
  );
};

export default OperationListPage;
