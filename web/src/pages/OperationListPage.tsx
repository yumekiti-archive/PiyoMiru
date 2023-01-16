import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import Header from '../components/organisms/Header';
import ListCard from '../components/atoms/ListCard';
import { usePassengersFind } from '../hooks/passengers';

const OperationListPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery('passengers', () => usePassengersFind(id).then((res) => res.data.data));
  const [passengers, setPassengers] = useState(data);

  if (data && !passengers) setPassengers(data);

  return (
    passengers && (
      <>
        <Header title='乗車中園児 一覧' />
        <div className='mt-32 w-full flex items-center justify-center pb-4 flex-col space-y-4'>
          {passengers.map((passenger: any) => (
            <ListCard
              key={passenger.attributes.users_permissions_user.data.id}
              name={passenger.attributes.users_permissions_user.data.attributes.displayname}
              createdAt={passenger.attributes.createdAt}
            />
          ))}
        </div>
      </>
    )
  );
};

export default OperationListPage;
