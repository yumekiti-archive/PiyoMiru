import { FC } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import Header from '../components/organisms/Header';
import ListCard from '../components/atoms/ListCard';

import { usePassengersFindWithFilterGroupId } from '../hooks/passengers';

const GroupListPage: FC = () => {
  const location = useLocation();

  if (location.state === null) return <Navigate to='/' />;

  const { data } = useQuery('passengers', () =>
    usePassengersFindWithFilterGroupId(location.state.id).then((res) => res.data),
  );

  return (
    data && (
      <>
        <Header title='乗車中園児 一覧' />
        <div className='mt-32 w-full flex items-center justify-center pb-4 flex-col space-y-4'>
          {data.map(
            (user: any) => user && <ListCard key={user.id} name={user.displayname} createdAt={user.createdAt} />,
          )}
        </div>
      </>
    )
  );
};

export default GroupListPage;
