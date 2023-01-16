import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import BusTemplate from '../components/templates/BusTemplate';

import { useMe } from '../hooks/users';
import { useBusesFindOne, useBusesUpdate } from '../hooks/buses';
import { useOperationsCreate } from '../hooks/operations';

const BusPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery('bus', () => useBusesFindOne(id).then((res) => res.data));
  const { data: user } = useQuery('user', () => useMe().then((res) => res.data));
  const [bus, setBus] = useState(data);

  if (data && !bus) setBus(data);

  const Start = () => {
    const body = {
      data: {
        status: !bus.attributes.status,
      },
    };

    useBusesUpdate(bus.id, body).then((res) => {
      setBus(res.data.data);
    });

    const operation = {
      data: {
        start: new Date(),
        bus: bus.id,
      },
    };
    useOperationsCreate(operation);
  };

  return data && user && <BusTemplate data={bus} user={user} onClickStart={Start} />;
};

export default BusPage;
