import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/organisms/Header';
import ListCard from '../components/atoms/ListCard';

import { usePassengersFindWithFilterGroupId } from '../hooks/passengers';

const ListPage: FC = () => {
  const location = useLocation();
  const { data } = usePassengersFindWithFilterGroupId(location.state.id);

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

export default ListPage;
