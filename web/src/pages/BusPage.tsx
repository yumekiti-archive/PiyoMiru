import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import BusTemplate from '../components/templates/BusTemplate';

import { useMe } from '../hooks/users';
import { useBusesFindOne, useBusesUpdate } from '../hooks/buses';

const BusPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useBusesFindOne(id);
  const { data: user } = useMe();
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
