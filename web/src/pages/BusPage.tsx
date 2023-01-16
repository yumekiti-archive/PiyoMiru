import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import BusTemplate from '../components/templates/BusTemplate';

import { useMe } from '../hooks/users';
import { useBusesFindOne, useBusesUpdate } from '../hooks/buses';

const BusPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery('bus', () => useBusesFindOne(id).then((res) => res.data));
  const { data: user } = useQuery('user', () => useMe().then((res) => res.data));
  const [bus, setBus] = useState(data);

  if (data && !bus) setBus(data);

  const Update = () => {
    const body = {
      data: {
        status: !data.data.attributes.status,
      },
    };

    useBusesUpdate(data.data.id, body).then((res) => {
      setBus(res.data);
    });
  };

  return data && user && <BusTemplate data={bus} user={user} onClickStart={Update} />;
};

export default BusPage;
