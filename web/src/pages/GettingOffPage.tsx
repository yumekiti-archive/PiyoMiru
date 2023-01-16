import { FC, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { usePassengersFindMyId, usePassengersUpdate } from '../hooks/passengers';

const GettingOffPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const [flag, setFlag] = useState(false);

  if (!flag) {
    usePassengersFindMyId(id).then((res) => {
      usePassengersUpdate(res.data.data[0].id, {
        data: {
          status: false,
        },
      }).then((res) => {
        console.log(res);
      });
    });
  }

  return <p>{id}</p>;
  // return <Navigate to='/' />;
};

export default GettingOffPage;
