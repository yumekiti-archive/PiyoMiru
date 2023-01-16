import { FC, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import BusTemplate from '../components/templates/BusTemplate';

import { useMe } from '../hooks/users';
import { useBusesFindOne, useBusesUpdate } from '../hooks/buses';

const BusPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data } = useBusesFindOne(id);
  const { data: user } = useMe();

  const BusUpdate = () => {
    const body = {
      data: {
        status: !data.data.attributes.status,
      },
    };

    useBusesUpdate(data.data.id, body);
  };

  return data && user && <BusTemplate data={data} user={user} onClickStart={BusUpdate} />;
};

export default BusPage;
