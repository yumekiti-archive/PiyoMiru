import { FC, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import { useUsersFindOne } from '../hooks/users';
import { useOperationsFind } from '../hooks/operations';
import { usePassengersCreate } from '../hooks/passengers';

const RidePage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const [flag, setFlag] = useState(false);

  const busId = localStorage.getItem('busId');
  const { data: user } = useQuery('user', () => useUsersFindOne(id).then((res) => res.data));
  const { data: operations } = useQuery('operations', () => useOperationsFind(busId).then((res) => res.data));

  if (!user || !operations) return <p>loading...</p>;

  const body = {
    data: {
      operation: operations.data[0].id,
      users_permissions_user: id,
    },
  };

  if (!flag) {
    setFlag(true);
    usePassengersCreate(body).then((res) => {
      console.log(res);
    });
  }

  return <p>{id}</p>;
  // return <Navigate to='/' />;
};

export default RidePage;
