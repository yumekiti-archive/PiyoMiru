import { FC, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import { useUsersFindOne } from '../hooks/users';
import { useOperationsFind } from '../hooks/operations';
import { usePassengersCreate } from '../hooks/passengers';
import { usePassengersFindMyId, usePassengersUpdate } from '../hooks/passengers';

const RidePage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [flag, setFlag] = useState(false);

  const busId = localStorage.getItem('busId');
  if (busId === null) return <Navigate to='/' />;

  const { data: user } = useQuery('user', () => useUsersFindOne(id).then((res) => res.data));
  const { data: operations } = useQuery('operations', () => useOperationsFind(busId).then((res) => res.data));
  
  if (!flag && user && operations) {
    setFlag(true);

    usePassengersFindMyId(id).then((res) => {
      if(res.data.data.length > 0 && res.data.data[0].attributes.status) {
        usePassengersUpdate(res.data.data[0].id, {
          data: {
            status: false,
          },
        }).then((res) => {
          console.log('update', res);
        });
      } else {
        usePassengersCreate({
          data: {
            operation: operations.data[0].id,
            users_permissions_user: id,
          },
        }).then((res) => {
          console.log('create', res);
        });
      }

      navigate(`/bus/${operations.data[0].attributes.bus.data.id}`)
    });
  }

  return <p>{id}</p>;
  // return <Navigate to='/' />;
};

export default RidePage;
