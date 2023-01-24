import { FC } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { usePassengersCreate } from '../hooks/passengers';
import { usePassengersFindMyId, usePassengersUpdate } from '../hooks/passengers';

import { useOperationsFindQuery, useUsersFindOneQuery } from '../hooks/queries';

const RidePage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const busID = localStorage.getItem('bus');
  if (busID === null) return <Navigate to='/' />;

  const { data: user } = useUsersFindOneQuery(id);
  const { data: operations } = useOperationsFindQuery(busID);

  if (user && operations) {
    usePassengersFindMyId(id, operations.data[0].id).then((res) => {
      // ない場合
      if (!(res.data.data.length > 0)) {
        usePassengersCreate({
          data: {
            operation: operations.data[0].id,
            users_permissions_user: id,
          },
        }).then((res) => {
          console.log('create', res);
        });
        // ある場合
      } else {
        if (res.data.data[0].attributes.status) {
          usePassengersUpdate(res.data.data[0].id, {
            data: {
              status: false,
            },
          }).then((res) => {
            console.log('update', res);
          });
        }
      }

      navigate(`/list/${operations.data[0].id}`);
    });
  }

  // return <></>;
  return <Navigate to='/' />;
};

export default RidePage;
